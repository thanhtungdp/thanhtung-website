import { useMemo, useState } from 'react';

type AgentKey = 'sale' | 'pipeline' | 'content' | 'design' | 'briefing';

type AgentDemo = {
	id: AgentKey;
	name: string;
	label: string;
	status: string;
	summary: string;
	workflow: Array<{
		label: string;
		detail: string;
	}>;
	artifact: {
		title: string;
		detail: string;
		nextAction: string;
	};
};

const agents: AgentDemo[] = [
	{
		id: 'sale',
		name: 'Sale Agent',
		label: 'Báo giá',
		status: 'Semi-auto',
		summary: 'Nhận lead, đọc catalog, tạo báo giá và đẩy lên người duyệt nếu vượt ngưỡng risk.',
		workflow: [
			{ label: 'Trigger nhận việc', detail: 'Zalo lead hỏi báo giá 12 bộ cửa cuốn, giao Q.7 trong tuần này.' },
			{ label: 'Đọc ngữ cảnh', detail: 'Agent so catalog, chính sách chiết khấu, địa điểm giao và tồn kho.' },
			{ label: 'Risk gate', detail: 'Đơn 86.4M vượt ngưỡng, AI giữ quyền gửi cho CEO duyệt.' },
		],
		artifact: {
			title: 'Báo giá 3 cấu hình',
			detail: 'Bản nháp gồm giá, timeline giao hàng, điều kiện bảo hành và lời nhắn Zalo theo giọng thương hiệu.',
			nextAction: 'CEO duyệt chiết khấu 7% hoặc sửa chính sách trước khi gửi khách.',
		},
	},
	{
		id: 'pipeline',
		name: 'Pipeline Agent',
		label: 'Follow-up',
		status: 'Live',
		summary: 'Phân loại HOT / WARM / COLD và nhắc đúng người, đúng kênh, đúng thời điểm.',
		workflow: [
			{ label: 'Trigger nhận việc', detail: 'Lead mới đến từ webinar, inbox cũ và bảng Google Sheets.' },
			{ label: 'Lead được phân tầng', detail: 'Agent chấm HOT / WARM / COLD theo mức quan tâm, deadline và nguồn giới thiệu.' },
			{ label: 'Follow-up được hẹn', detail: 'Nội dung nhắc sale được viết sẵn và gắn thời điểm quay lại đúng kênh.' },
		],
		artifact: {
			title: 'Danh sách follow-up hôm nay',
			detail: '12 lead HOT, 24 lead WARM, 38 lead COLD kèm người phụ trách, kênh liên hệ và lý do ưu tiên.',
			nextAction: 'CEO chỉ xem nhóm HOT và phê duyệt lời nhắn cho deal nhạy cảm.',
		},
	},
	{
		id: 'content',
		name: 'Content Agent',
		label: 'Calendar',
		status: 'Auto',
		summary: 'Lập lịch 7 ngày nội dung theo brand voice, từ ý tưởng đến bản đăng.',
		workflow: [
			{ label: 'Trigger nhận việc', detail: 'CEO thả một chủ đề hoặc case study thô vào workspace.' },
			{ label: 'Biến thành lịch', detail: 'Agent tách thành giáo dục, proof, FAQ, founder story và offer.' },
			{ label: 'Giữ brand voice', detail: 'Mỗi post được kiểm tra lại theo giọng thẳng thắn, thực chiến, bán bằng proof.' },
		],
		artifact: {
			title: 'Calendar 7 ngày',
			detail: 'Một tuần nội dung gồm hook, outline, caption, CTA và trạng thái đã lên lịch.',
			nextAction: 'CEO duyệt bài Proof và Offer trước khi agent đưa vào hàng đăng.',
		},
	},
	{
		id: 'design',
		name: 'Design / Video Agent',
		label: 'Production',
		status: 'Queue',
		summary: 'Biến một ý tưởng thành poster, caption, script short video và checklist render.',
		workflow: [
			{ label: 'Trigger nhận việc', detail: 'Content Agent gửi brief đã duyệt sang hàng sản xuất visual.' },
			{ label: 'Tách asset', detail: 'Agent tạo poster, carousel, script video, caption và voice-over queue.' },
			{ label: 'Kiểm soát output', detail: 'Asset nhạy cảm giữ trạng thái Draft, asset an toàn chuyển Ready.' },
		],
		artifact: {
			title: 'Production queue',
			detail: '5 đầu việc được xếp hàng với trạng thái Ready / Draft để team hoặc CEO xử lý tiếp.',
			nextAction: 'CEO chỉ cần duyệt 2 asset đầu trước khi render và đăng.',
		},
	},
	{
		id: 'briefing',
		name: 'Briefing Agent',
		label: '7h sáng',
		status: 'Daily',
		summary: 'Đọc inbox, lead, việc cần duyệt và gửi bản tóm tắt ưu tiên mỗi sáng.',
		workflow: [
			{ label: 'Trigger nhận việc', detail: '7h sáng, agent đọc inbox, lead, báo giá và queue nội dung.' },
			{ label: 'Lọc ưu tiên', detail: 'Chỉ giữ việc cần CEO quyết định, bỏ noise vận hành thường ngày.' },
			{ label: 'Gửi digest', detail: 'Bản brief nêu 3 việc quan trọng, deadline và đề xuất hành động.' },
		],
		artifact: {
			title: 'Morning command digest',
			detail: 'Một bản 7h sáng gồm 2 báo giá cần duyệt, 1 lead nóng và 1 video đang chờ quyết định.',
			nextAction: 'CEO xử lý ba quyết định trong 15 phút trước khi vào ngày làm việc.',
		},
	},
];

const money = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
	maximumFractionDigits: 0,
});

function formatCompact(value: number) {
	if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1).replace('.0', '')} tỷ`;
	return `${Math.round(value / 1_000_000)} triệu`;
}

function SaleDemo() {
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<div className="rounded-2xl bg-white p-4">
				<div className="flex items-center justify-between gap-3 border-b border-neutral-200 pb-3">
					<div>
						<p className="m-0 text-sm font-black text-neutral-950">Zalo lead mới</p>
						<p className="m-0 text-xs font-bold text-neutral-500">Khách mới · 08:42</p>
					</div>
					<span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">Đang xử lý</span>
				</div>
				<div className="mt-4 grid gap-3 text-sm font-bold">
					<p className="m-0 max-w-xs rounded-2xl bg-neutral-100 p-3 text-neutral-700">
						Anh cần báo giá 12 bộ cửa cuốn khe thoáng, giao Q.7 trong tuần này.
					</p>
					<p className="m-0 ml-auto max-w-sm rounded-2xl bg-neutral-950 p-3 text-white">
						Em đã tìm được 3 cấu hình phù hợp. Đơn này trên ngưỡng 80tr nên em sẽ tạo báo giá và xin anh duyệt trước khi gửi.
					</p>
					<p className="m-0 max-w-xs rounded-2xl bg-orange-50 p-3 text-orange-950">
						File báo giá đã sẵn sàng · cần duyệt chiết khấu 7%.
					</p>
				</div>
			</div>
			<div className="rounded-2xl bg-neutral-950 p-4 text-white">
				<p className="m-0 text-xs font-black text-orange-300">Risk-Aware gate</p>
				<h4 className="mt-2 text-xl leading-tight !text-white">Human duyệt việc nhạy cảm, AI chạy phần còn lại.</h4>
				<div className="mt-5 grid gap-3 text-sm">
					<div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2">
						<span>Giá trị đơn hàng</span>
						<strong>{money.format(86_400_000)}</strong>
					</div>
					<div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2">
						<span>Thời gian tạo báo giá</span>
						<strong>32 giây</strong>
					</div>
					<div className="flex items-center justify-between rounded-xl bg-orange-500 px-3 py-2 text-black">
						<span className="font-black">Trạng thái</span>
						<strong>Chờ CEO duyệt</strong>
					</div>
				</div>
			</div>
		</div>
	);
}

function PipelineDemo() {
	const columns = [
		{ title: 'HOT', count: 12, color: 'bg-orange-700', leads: ['Minh Anh Door', 'Kien Gia', 'BNI referral'] },
		{ title: 'WARM', count: 24, color: 'bg-amber-500', leads: ['Nha thong minh HN', 'Tung Agency', 'F&B Import'] },
		{ title: 'COLD', count: 38, color: 'bg-neutral-400', leads: ['Lead webinar', 'LinkedIn inbox', 'Zalo OA'] },
	];

	return (
		<div className="grid gap-3 md:grid-cols-3">
			{columns.map((column) => (
				<div className="rounded-2xl bg-white p-4" key={column.title}>
					<div className="flex items-center justify-between">
						<span className="text-sm font-black text-neutral-950">{column.title}</span>
						<span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-black text-neutral-700">{column.count} lead</span>
					</div>
					<div className={`mt-3 h-1.5 rounded-full ${column.color}`} />
					<div className="mt-4 grid gap-2">
						{column.leads.map((lead, index) => (
							<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3" key={lead}>
								<p className="m-0 text-sm font-black text-neutral-900">{lead}</p>
								<p className="m-0 mt-1 text-xs font-bold text-neutral-500">Nhắc follow-up sau {index + 1} giờ</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function ContentDemo() {
	const posts = ['Case study', 'Founder story', 'Offer', 'Education', 'Proof', 'FAQ', 'Demo'];
	return (
		<div className="rounded-2xl bg-white p-4">
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
				{posts.map((post, index) => (
					<div className="min-h-24 rounded-xl bg-neutral-100 p-2" key={post}>
						<p className="m-0 text-xs font-black text-orange-700">D{index + 1}</p>
						<p className="m-0 mt-2 text-sm font-black leading-tight text-neutral-950">{post}</p>
						<p className="m-0 mt-2 text-xs font-bold text-neutral-500">Đã lên lịch</p>
					</div>
				))}
			</div>
			<div className="mt-4 rounded-2xl bg-neutral-950 p-4 text-white">
				<p className="m-0 text-sm font-bold text-neutral-300">Brand voice</p>
				<p className="m-0 mt-2 text-lg font-black leading-tight text-white">Thẳng thắn, thực chiến, bán bằng proof thay vì nói chung chung.</p>
			</div>
		</div>
	);
}

function DesignDemo() {
	const queue = ['Poster Facebook', 'LinkedIn carousel', 'Short video script', 'Voice-over', 'Caption'];
	return (
		<div className="grid gap-4 lg:grid-cols-2">
			<div className="rounded-2xl bg-neutral-950 p-4 text-white">
				<p className="m-0 text-sm font-black text-teal-300">Production queue</p>
				<div className="mt-4 grid gap-2">
					{queue.map((item, index) => (
						<div className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2" key={item}>
							<span className="text-sm font-bold">{item}</span>
							<span className="text-xs font-black text-orange-300">{index < 2 ? 'Ready' : 'Draft'}</span>
						</div>
					))}
				</div>
			</div>
			<div className="rounded-2xl bg-white p-4">
				<div className="aspect-video rounded-xl bg-neutral-100 p-4">
					<div className="grid h-full content-between rounded-lg border border-neutral-300 bg-white p-4">
						<p className="m-0 text-xs font-black text-orange-700">HERMES AGENT</p>
						<p className="m-0 max-w-sm text-2xl font-black leading-tight text-neutral-950">5 AI Agent đang làm việc trong công ty anh.</p>
						<div className="flex gap-2">
							<span className="h-2 flex-1 rounded-full bg-orange-700" />
							<span className="h-2 flex-1 rounded-full bg-teal-500" />
							<span className="h-2 flex-1 rounded-full bg-neutral-950" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function BriefingDemo() {
	return (
		<div className="rounded-2xl bg-white p-4">
			<div className="rounded-2xl bg-neutral-950 p-5 text-white">
				<div className="flex items-center justify-between gap-3">
					<p className="m-0 text-sm font-black text-orange-300">Briefing 07:00</p>
					<span className="rounded-full bg-teal-400 px-3 py-1 text-xs font-black text-black">Sent</span>
				</div>
				<h4 className="mt-4 text-2xl leading-tight !text-white">Hôm nay anh cần xử lý 3 việc.</h4>
				<div className="mt-5 grid gap-3">
					{[
						'2 báo giá trên 80tr cần duyệt trước 10h.',
						'Lead HOT từ webinar đã xem pricing 3 lần.',
						'Content Agent cần anh duyệt video case study Hermes.',
					].map((item) => (
						<div className="rounded-xl bg-white/10 p-3 text-sm font-bold text-neutral-100" key={item}>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function DemoPanel({ active }: { active: AgentKey }) {
	if (active === 'pipeline') return <PipelineDemo />;
	if (active === 'content') return <ContentDemo />;
	if (active === 'design') return <DesignDemo />;
	if (active === 'briefing') return <BriefingDemo />;
	return <SaleDemo />;
}

function AgentRunPanel({ agent }: { agent: AgentDemo }) {
	return (
		<div className="grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
			<div className="rounded-2xl bg-neutral-950 p-4 text-white">
				<div className="mb-4 flex items-center justify-between gap-3">
					<p className="m-0 text-sm font-black text-orange-300">Live run log</p>
					<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black text-neutral-100">
						<span className="h-2 w-2 rounded-full bg-teal-300 motion-safe:animate-pulse" />
						{agent.status}
					</span>
				</div>
				<div className="grid gap-3">
					{agent.workflow.map((step) => (
						<div className="grid gap-2 rounded-xl bg-white/10 p-3" key={step.label}>
							<p className="m-0 text-sm font-black text-teal-200">{step.label}</p>
							<p className="m-0 text-sm font-bold leading-6 text-neutral-100">{step.detail}</p>
						</div>
					))}
				</div>
			</div>
			<div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
				<p className="m-0 text-sm font-black text-orange-700">Artifact sẵn sàng</p>
				<h3 className="mt-2 text-2xl leading-tight text-neutral-950">{agent.artifact.title}</h3>
				<p className="m-0 mt-3 text-base font-bold leading-7 text-neutral-700">{agent.artifact.detail}</p>
				<div className="mt-4 rounded-xl bg-white p-3">
					<p className="m-0 text-xs font-black text-neutral-500">Việc CEO cần làm</p>
					<p className="m-0 mt-1 text-sm font-black leading-6 text-neutral-950">{agent.artifact.nextAction}</p>
				</div>
			</div>
		</div>
	);
}

export default function HermesInteractiveLab() {
	const [staffCount, setStaffCount] = useState(2);
	const [repeatHours, setRepeatHours] = useState(3);
	const [active, setActive] = useState<AgentKey>('sale');

	const totals = useMemo(() => {
		const staffSavings = staffCount * 12_000_000 * 12 * 1.3;
		const ceoTimeValue = repeatHours * 250 * 500_000;
		const annualSavings = staffSavings + ceoTimeValue;
		const monthlySavings = annualSavings / 12;
		const paybackWeeks = monthlySavings > 0 ? (12_900_000 / monthlySavings) * 4.35 : 0;
		return { staffSavings, ceoTimeValue, annualSavings, paybackWeeks };
	}, [staffCount, repeatHours]);

	const activeAgent = agents.find((agent) => agent.id === active) ?? agents[0];

	return (
		<div className="grid min-w-0 gap-5 xl:grid-cols-2">
			<section className="min-w-0 rounded-2xl bg-neutral-950 p-5 text-white sm:p-6" aria-labelledby="roi-heading">
				<p className="m-0 text-sm font-black text-orange-300">ROI simulator</p>
				<h2 id="roi-heading" className="mt-2 text-3xl leading-tight !text-white sm:text-4xl">
					Quy đổi Hermes thành tiền tiết kiệm mỗi năm.
				</h2>
				<p className="m-0 mt-3 text-base leading-7 text-neutral-300">
					Nhập hai con số để thấy quy mô chi phí lặp lại mà CEO đang gánh mỗi năm.
				</p>

				<div className="mt-6 grid gap-5">
					<label className="grid gap-3">
						<span className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-neutral-200">
							Nhân sự admin/sales đang hỗ trợ
							<strong className="shrink-0 text-xl text-white">{staffCount}</strong>
						</span>
						<input
							aria-label="Số nhân sự admin sales"
							type="range"
							min="0"
							max="12"
							value={staffCount}
							onChange={(event) => setStaffCount(Number(event.target.value))}
							className="w-full min-w-0 accent-orange-600"
						/>
					</label>
					<label className="grid gap-3">
						<span className="flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-neutral-200">
							Giờ CEO tự làm việc lặp lại mỗi ngày
							<strong className="shrink-0 text-xl text-white">{repeatHours}h</strong>
						</span>
						<input
							aria-label="Giờ CEO tự làm việc lặp lại mỗi ngày"
							type="range"
							min="0"
							max="8"
							value={repeatHours}
							onChange={(event) => setRepeatHours(Number(event.target.value))}
							className="w-full min-w-0 accent-orange-600"
						/>
					</label>
				</div>

				<div className="mt-6 rounded-2xl bg-white p-4 text-neutral-950">
					<p className="m-0 text-sm font-black text-neutral-500">Tổng tiết kiệm tiềm năng / năm</p>
					<p className="m-0 mt-2 text-4xl font-black leading-none text-orange-700 sm:text-5xl">
						{formatCompact(totals.annualSavings)}
					</p>
					<div className="mt-5 grid gap-2 text-sm font-bold text-neutral-700">
						<div className="flex items-center justify-between gap-3">
							<span>Chi phí nhân sự có thể giảm</span>
							<strong>{formatCompact(totals.staffSavings)}</strong>
						</div>
						<div className="flex items-center justify-between gap-3">
							<span>Giá trị thời gian CEO</span>
							<strong>{formatCompact(totals.ceoTimeValue)}</strong>
						</div>
						<div className="flex items-center justify-between gap-3 border-t border-neutral-200 pt-2">
							<span>Hoàn vốn Tier 2 ước tính</span>
							<strong>{Math.max(1, Math.round(totals.paybackWeeks))} tuần</strong>
						</div>
					</div>
				</div>
			</section>

			<section className="min-w-0 rounded-2xl border border-neutral-200 bg-neutral-100 p-3 sm:p-4" aria-labelledby="simulator-heading">
				<div className="min-w-0 rounded-2xl bg-white p-4">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<p className="m-0 text-sm font-black text-orange-700">Simulator như thật</p>
							<h2 id="simulator-heading" className="mt-1 text-3xl leading-tight sm:text-4xl">
								{activeAgent.name} đang làm việc.
							</h2>
							<p className="m-0 mt-2 max-w-2xl text-base leading-7 text-neutral-600">{activeAgent.summary}</p>
						</div>
						<span className="w-fit rounded-full bg-teal-50 px-3 py-1.5 text-sm font-black text-teal-700">{activeAgent.status}</span>
					</div>

					<div className="mt-5 flex min-w-0 gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Hermes agent simulator">
						{agents.map((agent) => (
							<button
								key={agent.id}
								type="button"
								role="tab"
								aria-selected={active === agent.id}
								aria-controls={`hermes-panel-${agent.id}`}
								id={`hermes-tab-${agent.id}`}
								onClick={() => setActive(agent.id)}
								className={[
									'min-h-11 shrink-0 rounded-full px-4 text-sm font-black transition',
									active === agent.id
										? 'bg-neutral-950 text-white'
										: 'border border-neutral-200 bg-white text-neutral-800 hover:border-orange-200 hover:text-orange-900',
								].join(' ')}
							>
								{agent.label}
							</button>
						))}
					</div>
				</div>
				<div
					className="mt-3 grid gap-3"
					id={`hermes-panel-${activeAgent.id}`}
					role="tabpanel"
					aria-labelledby={`hermes-tab-${activeAgent.id}`}
				>
					<AgentRunPanel agent={activeAgent} />
					<DemoPanel active={active} />
				</div>
			</section>
		</div>
	);
}
