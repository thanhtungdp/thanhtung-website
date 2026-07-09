import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Reusable checkout modal for direct-sale + upsell flows.
 *
 * A trigger (form/button) dispatches a `hermes:checkout` window event carrying
 * { phone, email, fullname, courseCode }. The modal then:
 *   1. POSTs to the create-transaction webhook → { Id, QRPayment, ... }.
 *   2. Renders the QR with a 5-minute countdown and polls the check webhook
 *      every 3s (plus a manual "I've paid" button).
 *   3. On { status: 'Success' } → redirects to the thank-you page.
 *
 * Pending state is mirrored to localStorage, so an accidental close or reload
 * resumes the payment (minimised pill) instead of losing it.
 */

export type CheckoutPayload = {
	phone: string;
	email: string;
	fullname: string;
	courseCode: string;
	coupon?: string;
	price?: string;
	qty?: number;
};

type Phase = 'creating' | 'pending' | 'success' | 'expired' | 'error';

type ActiveTx = {
	id: number;
	qr: string;
	expiresAt: number;
	payload: CheckoutPayload;
	price?: number;
	qty?: number;
};

type Props = {
	price?: string;
	createUrl?: string;
	checkUrl?: string;
	thankYouUrl?: string;
	windowMs?: number;
	pollMs?: number;
	storageKey?: string;
	eventName?: string;
};

const CREATE_URL = 'https://n8n.simplamo.com/webhook/david-create-transaction';
const CHECK_URL = 'https://n8n.simplamo.com/webhook/david-check-transaction';

const unwrap = <T,>(raw: unknown): T => (Array.isArray(raw) ? raw[0] : raw) as T;

const fmt = (ms: number) => {
	const s = Math.max(0, Math.ceil(ms / 1000));
	return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
export default function CheckOutModal({
	price,
	createUrl = CREATE_URL,
	checkUrl = CHECK_URL,
	thankYouUrl = '/hermes-landing-thanksyou',
	windowMs = 5 * 60 * 1000,
	pollMs = 3000,
	storageKey = 'hermes-checkout-tx',
	eventName = 'hermes:checkout',
}: Props) {
	const [open, setOpen] = useState(false);
	const [phase, setPhase] = useState<Phase>('creating');
	const [tx, setTx] = useState<ActiveTx | null>(null);
	const [remaining, setRemaining] = useState(windowMs);
	const [checking, setChecking] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');

	const lastPayload = useRef<CheckoutPayload | null>(null);
	const busy = useRef(false);

	const persist = useCallback(
		(next: ActiveTx | null) => {
			try {
				if (next) localStorage.setItem(storageKey, JSON.stringify(next));
				else localStorage.removeItem(storageKey);
			} catch {
				/* storage unavailable — non-fatal */
			}
		},
		[storageKey],
	);

	const succeed = useCallback(() => {
		setPhase('success');
		persist(null);
		setTimeout(() => {
			window.location.href = thankYouUrl;
		}, 1400);
	}, [persist, thankYouUrl]);

	// Create a transaction and switch into the pending/QR state.
	const create = useCallback(
		async (payload: CheckoutPayload) => {
			if (busy.current) return;
			busy.current = true;
			lastPayload.current = payload;
			setErrorMsg('');
			setPhase('creating');
			setOpen(true);
			try {
				const res = await fetch(createUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				});
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const data = unwrap<{ Id: number; QRPayment: string; Price?: number; Qty?: number }>(await res.json());
				if (!data?.Id || !data?.QRPayment) throw new Error('Phản hồi không hợp lệ');
				const active: ActiveTx = {
					id: data.Id,
					qr: data.QRPayment,
					expiresAt: Date.now() + windowMs,
					payload,
					price: data.Price,
					qty: data.Qty,
				};
				setTx(active);
				setRemaining(windowMs);
				setPhase('pending');
				persist(active);
			} catch (err) {
				setErrorMsg(err instanceof Error ? err.message : 'Không tạo được mã thanh toán');
				setPhase('error');
			} finally {
				busy.current = false;
			}
		},
		[createUrl, persist, windowMs],
	);

	// Check a transaction's status. `silent` for background polls.
	const check = useCallback(
		async (id: number, silent = false) => {
			if (!silent) setChecking(true);
			try {
				const res = await fetch(checkUrl, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ Id: id }),
				});
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				const data = unwrap<{ status?: string }>(await res.json());
				if (data?.status === 'Success') {
					succeed();
				} else if (!silent) {
					// Manual check but payment not received yet
					alert('Chưa nhận được chuyển khoản. Vui lòng kiểm tra lại sau vài giây.');
				}
			} catch {
				if (!silent) {
					alert('Không thể kiểm tra giao dịch. Vui lòng thử lại.');
				}
			} finally {
				if (!silent) setChecking(false);
			}
		},
		[checkUrl, succeed],
	);
	// Restore a still-valid pending transaction on mount (resume after close/reload).
	useEffect(() => {
		try {
			const raw = localStorage.getItem(storageKey);
			if (!raw) return;
			const saved = JSON.parse(raw) as ActiveTx;
			if (saved?.id && saved?.expiresAt > Date.now()) {
				setTx(saved);
				setRemaining(saved.expiresAt - Date.now());
				setPhase('pending');
				lastPayload.current = saved.payload;
			} else {
				persist(null);
			}
		} catch {
			persist(null);
		}
	}, [persist, storageKey]);

	// Listen for checkout triggers from anywhere on the page.
	useEffect(() => {
		const onTrigger = (e: Event) => {
			const detail = (e as CustomEvent<CheckoutPayload>).detail;
			if (detail?.courseCode) create(detail);
		};
		window.addEventListener(eventName, onTrigger as EventListener);
		return () => window.removeEventListener(eventName, onTrigger as EventListener);
	}, [create, eventName]);

	// Countdown + background polling while a transaction is pending.
	useEffect(() => {
		if (phase !== 'pending' || !tx) return;

		const tick = () => {
			const left = tx.expiresAt - Date.now();
			setRemaining(left);
			if (left <= 0) {
				setPhase('expired');
				persist(null);
			}
		};
		tick();
		const timer = window.setInterval(tick, 1000);
		const poller = window.setInterval(() => check(tx.id, true), pollMs);
		return () => {
			window.clearInterval(timer);
			window.clearInterval(poller);
		};
	}, [phase, tx, check, persist, pollMs]);

	// Lock body scroll + ESC-to-close while the modal is open.
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const hasPending = phase === 'pending' && !!tx;
	const retry = () => lastPayload.current && create(lastPayload.current);

	return (
		<>
			{/* Minimised pill — shown when a payment is still pending but the modal is closed. */}
			{!open && hasPending && (
				<button
					type="button"
					onClick={() => setOpen(true)}
					className="hermes-press fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 border-2 border-hermes-ink bg-hermes-orange px-4 py-3 font-hermes-mono text-xs font-bold text-white shadow-[4px_4px_0_var(--color-hermes-ink)]"
				>
					<span className="hermes-live-dot h-2 w-2 rounded-full bg-white" />
					Tiếp tục thanh toán · {fmt(remaining)}
				</button>
			)}

			{open && (
				<div
					className="fixed inset-0 z-[70] flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-label="Thanh toán"
				>
					<div
						className="absolute inset-0 bg-hermes-ink/70 backdrop-blur-sm"
						onClick={() => setOpen(false)}
					/>
					<div className="relative z-10 w-full max-w-[420px] border-2 border-hermes-ink bg-hermes-card shadow-[8px_8px_0_var(--color-hermes-ink)]">
						{/* Title bar */}
						<div className="flex items-center gap-2.5 border-b-2 border-hermes-ink bg-hermes-ink px-4 py-3 font-hermes-mono text-xs text-hermes-paper">
							<span className="grid h-[22px] w-[22px] place-items-center bg-hermes-orange font-hermes-sans font-bold text-white">
								H
							</span>
							<span className="uppercase tracking-[0.08em]">Thanh toán qua QR</span>
							<button
								type="button"
								onClick={() => setOpen(false)}
								aria-label="Đóng"
								className="ml-auto text-lg leading-none text-hermes-paper/70 hover:text-white"
							>
								✕
							</button>
						</div>

						<div className="p-6">{renderBody()}</div>
					</div>
				</div>
			)}
		</>
	);

	function renderBody() {
		if (phase === 'creating') {
			return (
				<div className="flex flex-col items-center gap-4 py-10 text-center">
					<div className="flex gap-1.5">
						<span className="hermes-typing-dot h-2 w-2 rounded-full bg-hermes-orange" />
						<span className="hermes-typing-dot h-2 w-2 rounded-full bg-hermes-orange [animation-delay:0.2s]" />
						<span className="hermes-typing-dot h-2 w-2 rounded-full bg-hermes-orange [animation-delay:0.4s]" />
					</div>
					<p className="font-hermes-mono text-[13px] text-hermes-muted">Đang tạo mã thanh toán…</p>
				</div>
			);
		}

		if (phase === 'success') {
			return (
				<div className="flex flex-col items-center gap-3 py-10 text-center">
					<div className="grid h-14 w-14 place-items-center border-2 border-hermes-orange bg-hermes-orange text-2xl text-white">
						✓
					</div>
					<p className="font-hermes-mono text-xs font-bold uppercase tracking-[0.1em] text-hermes-orange">
						Thanh toán thành công
					</p>
					<p className="text-sm text-hermes-muted">Đang chuyển sang trang xác nhận…</p>
				</div>
			);
		}

		if (phase === 'error') {
			return (
				<div className="flex flex-col items-center gap-4 py-8 text-center">
					<p className="text-sm text-hermes-muted">
						Không tạo được mã thanh toán.
						{errorMsg && <span className="mt-1 block font-hermes-mono text-xs">{errorMsg}</span>}
					</p>
					<button
						type="button"
						onClick={retry}
						className="hermes-press border-2 border-hermes-orange bg-hermes-orange px-5 py-2.5 text-sm font-bold text-white"
					>
						Thử lại
					</button>
				</div>
			);
		}

		if (phase === 'expired') {
			return (
				<div className="flex flex-col items-center gap-4 py-8 text-center">
					<p className="font-hermes-mono text-xs font-bold uppercase tracking-[0.1em] text-hermes-muted">
						Mã đã hết hạn
					</p>
					<p className="text-sm text-hermes-muted">Mã QR chỉ có hiệu lực trong 5 phút. Tạo mã mới để tiếp tục.</p>
					<button
						type="button"
						onClick={retry}
						className="hermes-press border-2 border-hermes-orange bg-hermes-orange px-5 py-2.5 text-sm font-bold text-white"
					>
						Tạo mã mới
					</button>
				</div>
			);
		}

		// pending
		return (
			<div className="flex flex-col items-center gap-4 text-center">
				{tx?.price && (
					<div className="w-full border-2 border-hermes-ink bg-hermes-card px-5 py-4">
						<div className="font-hermes-mono text-[11px] uppercase tracking-[0.1em] text-hermes-muted">
							Số tiền thanh toán
						</div>
						<div className="mt-1 text-3xl font-bold tracking-[-0.02em] text-hermes-orange">
							{new Intl.NumberFormat('vi-VN').format(tx.price)}₫
						</div>
						{tx.qty && tx.qty > 1 && (
							<div className="mt-2 font-hermes-mono text-[11px] text-hermes-muted">
								Số lượng: {tx.qty}
							</div>
						)}
					</div>
				)}
				<p className="text-sm text-hermes-muted">
					Quét mã bằng app ngân hàng để thanh toán. Hệ thống tự xác nhận ngay khi nhận được.
				</p>
				<div className="border-2 border-hermes-ink bg-white p-3">
					<img src={tx?.qr} alt="Mã QR thanh toán" className="h-[230px] w-[230px] object-contain" />
				</div>
				<div className="flex items-center gap-2 font-hermes-mono text-sm">
					<span className="hermes-live-dot h-2 w-2 rounded-full bg-hermes-orange" />
					Còn lại <b className="text-hermes-orange">{fmt(remaining)}</b>
				</div>
				<button
					type="button"
					disabled={checking}
					onClick={() => tx && check(tx.id)}
					className="hermes-press w-full border-2 border-hermes-ink bg-hermes-card px-5 py-3 text-sm font-bold text-hermes-ink hover:bg-hermes-ink hover:text-hermes-paper disabled:opacity-60"
				>
					{checking ? 'Đang kiểm tra…' : 'Tôi đã thanh toán — kiểm tra'}
				</button>
				<p className="font-hermes-mono text-[11px] text-hermes-muted">
					Mã giao dịch #{tx?.id} · tự kiểm tra mỗi {Math.round(pollMs / 1000)}s
				</p>
			</div>
		);
	}
}

