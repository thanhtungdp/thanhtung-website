import { useEffect, useRef, useState } from 'react';
import { coachingChatScript } from './hermesCoachingContent';

type Bubble = {
	key: number;
	who: 'me' | 'bot';
	name: string;
	text: string;
	stamp: string;
	typing?: boolean;
};

// Coaching version of LiveChat — same UX, different script for CEO level cao.
// Scenario: buổi sáng thức dậy — duyệt ý tưởng, follow khách, đối tác quan trọng.
export default function CoachingLiveChat() {
	const [bubbles, setBubbles] = useState<Bubble[]>([]);
	const bodyRef = useRef<HTMLDivElement>(null);
	const startedRef = useRef(false);
	const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
	const keyRef = useRef(0);

	useEffect(() => {
		const after = (ms: number, fn: () => void) => {
			const t = setTimeout(fn, ms);
			timers.current.push(t);
		};

		let i = 0;
		const step = () => {
			if (i >= coachingChatScript.length) {
				after(4000, () => {
					setBubbles([]);
					i = 0;
					step();
				});
				return;
			}
			const m = coachingChatScript[i];
			const stamp = `7:${String(i % 60).padStart(2, '0')}`;
			if (m.who === 'bot') {
				const typingKey = keyRef.current++;
				setBubbles((prev) => [
					...prev,
					{ key: typingKey, who: 'bot', name: m.name, text: '', stamp, typing: true },
				]);
				after(900, () => {
					setBubbles((prev) =>
						prev
							.filter((b) => b.key !== typingKey)
							.concat({ key: keyRef.current++, who: 'bot', name: m.name, text: m.text, stamp }),
					);
					i++;
					after(1100, step);
				});
			} else {
				setBubbles((prev) => [
					...prev,
					{ key: keyRef.current++, who: 'me', name: m.name, text: m.text, stamp },
				]);
				i++;
				after(850, step);
			}
		};

		const start = () => {
			if (startedRef.current) return;
			startedRef.current = true;
			step();
		};

		let io: IntersectionObserver | undefined;
		if (typeof IntersectionObserver !== 'undefined' && bodyRef.current) {
			io = new IntersectionObserver(
				(entries) => entries.forEach((e) => e.isIntersecting && start()),
				{ threshold: 0.15 },
			);
			io.observe(bodyRef.current);
		}
		const fallback = setTimeout(start, 600);
		timers.current.push(fallback);

		return () => {
			io?.disconnect();
			timers.current.forEach(clearTimeout);
			timers.current = [];
		};
	}, []);

	useEffect(() => {
		const el = bodyRef.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [bubbles]);

	return (
		<div
			ref={bodyRef}
			className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto bg-[#1c1812] px-3.5 py-4 [scrollbar-width:thin]"
		>
			{bubbles.map((b) =>
				b.typing ? (
					<div
						key={b.key}
						className="flex max-w-[86%] gap-1 self-start bg-[#2c271f] px-3 py-3"
					>
						<span className="hermes-typing-dot h-1.5 w-1.5 rounded-full bg-hermes-paper" />
						<span className="hermes-typing-dot h-1.5 w-1.5 rounded-full bg-hermes-paper [animation-delay:0.2s]" />
						<span className="hermes-typing-dot h-1.5 w-1.5 rounded-full bg-hermes-paper [animation-delay:0.4s]" />
					</div>
				) : (
					<div
						key={b.key}
						className={[
							'max-w-[86%] px-3.5 py-2.5 text-[13.5px] leading-[1.45]',
							b.who === 'me'
								? 'self-end bg-hermes-orange text-white'
								: 'self-start bg-[#2c271f] text-hermes-paper',
						].join(' ')}
					>
						{b.text}
						<small className="mt-1.5 block font-hermes-mono text-[9px] tracking-[0.04em] opacity-55">
							{b.name} · {b.stamp}
						</small>
					</div>
				),
			)}
		</div>
	);
}