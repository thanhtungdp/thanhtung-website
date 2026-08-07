import { useState } from 'react';

interface PlaybookLeadFormProps {
	locale: 'vi' | 'en';
	pdfUrl: string;
	playbookTitle: string;
	apiEndpoint?: string;
}

const t = {
	vi: {
		title: 'Nhận playbook đầy đủ (PDF)',
		subtitle: 'Để lại email — chúng tôi gửi file PDF đầy đủ.',
		nameLabel: 'Họ và tên',
		namePlaceholder: 'Nguyễn Văn An',
		emailLabel: 'Email',
		emailPlaceholder: 'an@congty.vn',
		companyLabel: 'Công ty (tùy chọn)',
		companyPlaceholder: 'Công ty TNHH ABC',
		submit: 'Gửi & tải PDF',
		submitting: 'Đang gửi...',
		success: 'Cảm ơn! Tải PDF bên dưới.',
		download: 'Tải PDF ngay',
		error: 'Có lỗi xảy ra. Vui lòng thử lại.',
		nameRequired: 'Vui lòng nhập họ tên',
		emailRequired: 'Vui lòng nhập email',
		emailInvalid: 'Email không hợp lệ',
	},
	en: {
		title: 'Get the full playbook (PDF)',
		subtitle: 'Leave your email — we\'ll send the full PDF.',
		nameLabel: 'Full name',
		namePlaceholder: 'John Smith',
		emailLabel: 'Email',
		emailPlaceholder: 'john@company.com',
		companyLabel: 'Company (optional)',
		companyPlaceholder: 'Acme Inc.',
		submit: 'Submit & download PDF',
		submitting: 'Sending...',
		success: 'Thank you! Download the PDF below.',
		download: 'Download PDF now',
		error: 'Something went wrong. Please try again.',
		nameRequired: 'Please enter your name',
		emailRequired: 'Please enter your email',
		emailInvalid: 'Invalid email',
	},
};

export default function PlaybookLeadForm({
	locale,
	pdfUrl,
	playbookTitle,
	apiEndpoint,
}: PlaybookLeadFormProps) {
	const labels = t[locale];
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validate = (data: FormData) => {
		const e: Record<string, string> = {};
		const name = (data.get('name') as string)?.trim() || '';
		const email = (data.get('email') as string)?.trim() || '';

		if (!name) e.name = labels.nameRequired;
		if (!email) e.email = labels.emailRequired;
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = labels.emailInvalid;

		return e;
	};

	const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		const formData = new FormData(ev.currentTarget);
		const validationErrors = validate(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});
		setStatus('submitting');

		try {
			if (apiEndpoint) {
				const payload = {
					name: formData.get('name'),
					email: formData.get('email'),
					company: formData.get('company') || '',
					playbook: playbookTitle,
					locale,
					submittedAt: new Date().toISOString(),
				};
				await fetch(apiEndpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload),
				});
			}
			setStatus('success');
		} catch {
			setStatus('error');
		}
	};

	if (status === 'success') {
		window.location.href = pdfUrl;
		return null;
	}

	return (
		<div className="rounded-2xl border border-[rgb(var(--border)/0.66)] bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-8">
			<div className="mb-5">
				<h3 className="mb-1 text-xl font-extrabold text-neutral-950 sm:text-2xl">{labels.title}</h3>
				<p className="text-sm text-neutral-600">{labels.subtitle}</p>
			</div>
			<form onSubmit={handleSubmit} className="space-y-4" noValidate>
				<div>
					<label className="mb-1.5 block text-sm font-bold text-neutral-700">{labels.nameLabel}</label>
					<input
						type="text"
						name="name"
						placeholder={labels.namePlaceholder}
						className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
					/>
					{errors.name && <p className="mt-1 text-xs font-semibold text-red-500">{errors.name}</p>}
				</div>
				<div>
					<label className="mb-1.5 block text-sm font-bold text-neutral-700">{labels.emailLabel}</label>
					<input
						type="email"
						name="email"
						placeholder={labels.emailPlaceholder}
						className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
					/>
					{errors.email && <p className="mt-1 text-xs font-semibold text-red-500">{errors.email}</p>}
				</div>
				<div>
					<label className="mb-1.5 block text-sm font-bold text-neutral-700">{labels.companyLabel}</label>
					<input
						type="text"
						name="company"
						placeholder={labels.companyPlaceholder}
						className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
					/>
				</div>
				{status === 'error' && (
					<p className="text-sm font-semibold text-red-500">{labels.error}</p>
				)}
				<button
					type="submit"
					disabled={status === 'submitting'}
					className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-px hover:bg-cyan-950 active:translate-y-px active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{status === 'submitting' ? labels.submitting : labels.submit}
				</button>
			</form>
		</div>
	);
}