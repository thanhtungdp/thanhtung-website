// All copy for the Hermes Coaching landing page (vi).
// Single source of truth — edit text here, not in the .astro file.

export const nav = {
	brandName: 'HERMES',
	brandAccent: 'COACHING',
	links: [
		{ href: '#benefits', label: 'Lợi ích' },
		{ href: '#curriculum', label: 'Lộ trình' },
		{ href: '#pricing', label: 'Giá' },
		{ href: '#faq', label: 'FAQ' },
	],
	cta: { href: '#signup-sec', label: 'Đặt lịch →' },
};

export const hero = {
	eyebrow: 'Coaching 1:1 — Cùng David Tùng',
	titleLead: '',
	titleEm: 'Huấn luyện 1:1.',
	titleMid: 'Đến khi agent',
	titleOperator: 'tự chạy.',
	titleTail: '',
	lede: 'Trong 4–12 tuần, David cầm tay chỉ việc cùng bạn — từ xây AI Roadmap đạt ROI đến khi agent tự chạy việc thật mỗi ngày. Tiết kiệm 3–6 tháng tự mò, 30–50 triệu tiền thử sai, và 200 triệu chi phí cơ hội.',
	primaryCta: { href: '#pricing', label: 'Chọn gói coaching →' },
	secondaryCta: { href: '#demo', label: 'Xem demo live' },
	chatBarLabel: 'Hermes · Telegram CEO',
	chatLiveLabel: 'LIVE DEMO',
};

// Live Telegram demo script for coaching hero — CEO level cao.
// Buổi sáng thức dậy: duyệt ý tưởng, follow khách hàng, đối tác quan trọng.
export const coachingChatScript: Array<{ who: 'me' | 'bot'; name: string; text: string }> = [
	{ who: 'bot', name: 'Hermès Daily', text: 'Chào buổi sáng sếp. 3 việc cần ưu tiên hôm nay:' },
	{ who: 'bot', name: 'Hermès Daily', text: '① Duyệt 2 ý tưởng content đã viết đêm qua ② Follow anh Minh — chốt deal 32tr ③ Chuẩn bị tài liệu họp đối tác 14h.' },
	{ who: 'me', name: 'CEO', text: 'Ý tưởng nào nổi nhất?' },
	{ who: 'bot', name: 'Hermès Voice', text: 'Ý tưởng #1: "5 sai lầm CEO khi tự build agent" — viral potential cao. Ý #2: case study khách Austdoor. Em chọn #1?' },
	{ who: 'me', name: 'CEO', text: 'Chốt #1. Lên lịch 19h' },
	{ who: 'bot', name: 'Hermès Voice', text: '✓ Đã lên lịch 19h. Hermès Visual đang sinh banner.' },
	{ who: 'me', name: 'CEO', text: 'Anh Minh phản hồi gì chưa?' },
	{ who: 'bot', name: 'Hermès Funnel', text: 'Anh Minh đã xem email 2 lần chưa reply. Gợi ý: gọi điện 10h — em đã nhắc trong lịch.' },
	{ who: 'me', name: 'CEO', text: 'OK. Tài liệu họp 14h với đối tác?' },
	{ who: 'bot', name: 'Hermès Sales', text: 'Đã soạn slide 5 trang: tổng quan, ROI, lộ trình, giá, next steps. Sếp duyệt format?' },
	{ who: 'me', name: 'CEO', text: 'Gửi xem' },
	{ who: 'bot', name: 'Hermès Sales', text: '✓ Đã gửi PDF vào Telegram. 5 phút trước họp em nhắc lại.' },
];

export const promises = [
	{
		n: '01',
		title: 'Xây AI Roadmap đạt ROI',
		body: 'Buổi đầu: David cùng bạn bóc tách business, vẽ AI Roadmap — tìm ra việc lặp nào agent làm thay được, đo ROI bao lâu thu hồi vốn.',
	},
	{
		n: '02',
		title: 'Cầm tay, chỉ việc — bạn tự build',
		body: 'Done-with-you: David hướng dẫn bạn tự build agent đúng quy trình thực tế — báo giá, email, content, hay bất kỳ việc lặp nào. Bạn tự tay, bạn hiểu tận gốc.',
	},
	{
		n: '03',
		title: 'Production-ready khi kết thúc',
		body: 'Kết thúc coaching: agent đang chạy việc thật mỗi ngày, không phải demo. Bạn tự quản lý, tự mở rộng — vì bạn đã tự build từ đầu.',
	},
];

export const painStats = {
	eyebrow: 'Tự mò mất gì?',
	title: 'Solo CEO tự build agent — mất gì?',
	stats: [
		{ k: 'Thời gian', big: '3–6 tháng', lab: 'tự học, thử, sai, build lại — chưa chắc thành công.' },
		{ k: 'Chi phí cơ hội', big: 'Mất thị trường', lab: 'trong lúc bạn tự mò, đối thủ đã chạy agent và chốt khách nhanh hơn.' },
		{ k: 'Tỉ lệ bỏ', big: '80%', lab: 'solo founder bỏ giữa chừng vì không có người đi cùng.' },
	],
};

export const team = {
	eyebrow: 'Đội ngũ Hermès',
	title: '5 agent. Ít mà sâu.',
	lede: 'Khi bạn đi gói 12 buổi, David hướng dẫn bạn tự build cả đội — 5 agent, 3 phòng ban. Mỗi agent là một năng lực thật. Đủ để một mình vẫn có cảm giác như đang dẫn cả một team.',
	agents: [
		{
			num: '01',
			dept: 'Phòng Sales',
			name: 'Hermès Sales',
			role: 'Trợ lý Báo giá & Email',
			body: 'Tạo báo giá, sinh email, đồng bộ CRM/Excel, làm hợp đồng.',
			core: false,
		},
		{
			num: '02',
			dept: 'Phòng Sales',
			name: 'Hermès Funnel',
			role: 'Quản lý Lead & Nhắc hẹn',
			body: 'Phân loại lead, lên kịch bản follow-up email tự động, tìm hiểu về leads.',
			core: false,
		},
		{
			num: 'CORE',
			dept: 'Hermes Core',
			name: 'Hermes Core',
			role: 'Điều phối trung tâm',
			body: 'Bạn ra lệnh 1 nơi — Core điều phối cả 3 phòng ban tự động.',
			core: true,
		},
		{
			num: '03',
			dept: 'Marketing',
			name: 'Hermès Voice',
			role: 'Tác giả Content',
			body: 'Viết bài viral, post, blog theo brand voice.',
			core: false,
		},
		{
			num: '04',
			dept: 'Marketing',
			name: 'Hermès Visual',
			role: 'Designer & Producer',
			body: 'Làm banner, poster, video ngắn.',
			core: false,
		},
		{
			num: '05',
			dept: 'Điều hành',
			name: 'Hermès Daily',
			role: 'Chánh Văn phòng',
			body: 'Briefing 7h sáng + báo cáo tuần, cập nhật tin tức quan trọng.',
			core: false,
		},
	],
};

export const connect = {
	eyebrow: 'Kết nối',
	title: 'Một Hermes — nối mọi công cụ, tự động hóa.',
	lede: 'Bạn vẫn dùng những tool quen thuộc. Hermes chỉ đứng giữa, nối chúng lại — và mỗi ngày, kết quả tự rơi ra mà bạn không phải động tay.',
	toolsLabel: 'Kết nối tools',
	outcomeLabel: 'Outcome cụ thể',
	tools: ['Telegram', 'Gmail', 'Google Sheets', 'Facebook', 'Canva', 'CRM / Zalo'],
	outcomes: [
		'Bài viết đa nền tảng',
		'Sản xuất video ngắn',
		'Đề xuất proposal',
		'Báo giá khách hàng',
		'Briefing hằng ngày',
		'Lịch đăng content',
	],
};

export const curriculum = {
	eyebrow: 'Lộ trình coaching',
	title: '2 gói — cùng phương pháp, khác độ sâu.',
	lede: 'Cả hai gói đều bắt đầu bằng AI Roadmap đạt ROI. Gói Mini: bạn tự build 1 agent đầu tiên. Gói 12: bạn tự build cả đội 5 agent vận hành.',
	columns: [
		{
			code: 'HERMES-MINI-COACH-4',
			name: 'Mini · 4 buổi',
			price: '20.000.000₫',
			tag: 'Bắt đầu nhanh',
			weeks: '4 buổi · 90 phút/buổi',
			ctaLabel: 'Chọn Mini · 20tr →',
			ctaHref: '#signup-sec',
			modules: [
				{ n: '01', title: 'AI Roadmap đạt ROI', body: 'Cùng David bóc tách business, vẽ AI Roadmap — tìm 2–3 việc lặp agent làm thay được, đo thời gian thu hồi vốn.' },
				{ n: '02', title: 'Bạn tự build agent đầu tiên', body: 'David cầm tay chỉ việc — bạn tự build agent đúng quy trình thực tế, chạy thử trên data thật.' },
				{ n: '03', title: 'Fine-tune & test', body: 'Cùng chỉnh prompt, skill, kết nối tool. Test production trước khi bàn giao.' },
				{ n: '04', title: 'Bàn giao & vận hành', body: 'Agent chạy thật mỗi ngày. Bạn tự quản lý, tự mở rộng — vì bạn đã tự build từ đầu.' },
			],
		},
		{
			code: 'HERMES-MINI-COACH-12',
			name: '12 buổi',
			price: '60.000.000₫',
			tag: 'Full hệ thống',
			weeks: '12 buổi · 90 phút/buổi',
			ctaLabel: 'Chọn 12 buổi · 60tr →',
			ctaHref: '#signup-sec',
			modules: [
				{ n: '01', title: 'AI Roadmap toàn diện', body: 'Cùng David bóc tách Sales, Marketing, Điều hành — vẽ bản đồ 5 agent cho business bạn, đo ROI từng phòng ban.' },
				{ n: '02', title: 'Bạn tự build đội agent', body: 'David hướng dẫn bạn tự build từng agent — Sales, Funnel, Voice, Visual, Daily. Bạn tự tay, bạn hiểu tận gốc.' },
				{ n: '03', title: 'Kết nối hệ thống', body: 'Cùng kết nối Telegram, Gmail, Sheets, CRM — agent hành động thật, không chỉ chat.' },
				{ n: '04', title: 'Tự động hoá quy trình', body: 'Chọn việc agent tự quyết, việc cần duyệt. Pipeline tự chạy, CEO chỉ ra lệnh.' },
				{ n: '05', title: 'Dashboard & vận hành', body: 'Cùng xây dashboard quản lý đội agent. Briefing sáng, báo cáo tuần tự động.' },
				{ n: '06', title: 'Bàn giao & mở rộng', body: 'Hệ thống production chạy 24/7. Bạn tự thêm agent, bảo trì, scale — vì bạn đã tự build từ đầu.' },
			],
		},
	],
};

export const pricing = {
	eyebrow: 'Chọn gói coaching',
	title: 'Cùng phương pháp. Khác độ sâu.',
	lede: 'Gói Mini: bạn tự build 1 agent đầu tiên. Gói 12: bạn tự build cả đội — 5 agent, 3 phòng ban, một dashboard. David cầm tay chỉ việc, bạn tự tay.',
	tiers: [
		{
			name: 'Mini',
			tag: '4 BUỔI · PHỔ BIẾN',
			price: '20.000.000',
			priceUnit: '₫',
			priceNote: 'Phù hợp: CEO muốn build agent đầu tiên, tự vận hành',
			feat: true,
			features: [
				'4 buổi 1:1 · 90 phút/buổi',
				'Xây AI Roadmap đạt ROI',
				'Tự build 1 agent production-ready',
				'Kết nối 2–3 tool (Telegram, Gmail, Sheets)',
				'Telegram group hỗ trợ 30 ngày',
				'Tài liệu vận hành & bảo trì',
			],
			cta: { href: '#signup-sec', label: 'Chọn Mini →' },
			courseCode: 'HERMES-MINI-COACH-4',
		},
		{
			name: '12 buổi',
			tag: 'FULL HỆ THỐNG',
			price: '60.000.000',
			priceUnit: '₫',
			priceNote: 'Phù hợp: CEO muốn tự build cả đội agent',
			feat: false,
			features: [
				'12 buổi 1:1 · 90 phút/buổi',
				'AI Roadmap toàn diện Sales + Marketing + Điều hành',
				'Tự build 5 agent (Sales, Funnel, Voice, Visual, Daily)',
				'Kết nối đầy đủ tool + CRM',
				'Dashboard vận hành + briefing tự động',
				'Telegram group hỗ trợ 90 ngày',
				'Tài liệu vận hành, bảo trì, mở rộng',
			],
			cta: { href: '#signup-sec', label: 'Chọn 12 buổi →' },
			courseCode: 'HERMES-MINI-COACH-12',
		},
	],
};

export const faq = {
	eyebrow: 'Câu hỏi thường gặp',
	title: 'Trước khi đăng ký.',
	items: [
		{
			q: 'Tôi chưa học Self-serve, có đi coaching được không?',
			a: 'Được. Coaching 1:1 đi từ con số 0 — David cùng bạn xây AI Roadmap, hướng dẫn bạn tự build agent từ đầu. Bạn không cần biết code hay đã học Self-serve.',
		},
		{
			q: 'Coaching là done-for-you hay done-with-you?',
			a: 'Done-with-you. David cầm tay chỉ việc — bạn tự build, tự hiểu, tự vận hành. Mục tiêu là sau coaching bạn tự quản lý và mở rộng được, không phụ thuộc ai.',
		},
		{
			q: 'Mini và 12 buổi khác nhau thế nào?',
			a: 'Mini (4 buổi): bạn tự build 1 agent đầu tiên chạy thật. 12 buổi: bạn tự build cả đội 5 agent, dashboard vận hành, tự động hoá toàn bộ quy trình lặp.',
		},
		{
			q: 'Agent chạy trên đâu? Tôi cần máy gì không?',
			a: 'Agent chạy trên server cloud — bạn chỉ cần Telegram để ra lệnh. David hướng dẫn setup server trong buổi đầu. Không cần máy cấu hình cao.',
		},
		{
			q: 'Sau coaching, agent có tự chạy được không?',
			a: 'Có. Vì bạn tự build từ đầu, bạn hiểu cách vận hành, bảo trì và mở rộng. Mục tiêu kết thúc coaching là agent đang chạy việc thật mỗi ngày, không phải demo.',
		},
		{
			q: 'Nếu tôi chưa hài lòng?',
			a: 'Sau buổi đầu, nếu bạn thấy không phù hợp, hoàn tiền 100% — không cần lý do. Buổi đầu là AI Roadmap + bản đồ, bạn thấy rõ lộ trình rồi quyết định tiếp.',
		},
	],
};

export const cta = {
	eyebrow: 'Đặt lịch coaching · Hoàn tiền 100% sau buổi đầu',
	title: 'Ngừng tự mò.',
	titleEm: 'Bắt đầu build.',
	body: 'Đặt lịch coaching hôm nay. Buổi đầu David cùng bạn xây AI Roadmap — nếu không phù hợp, hoàn tiền 100%.',
	formTitle: 'Đăng ký coaching 1:1',
	formSub: 'Chọn gói và điền thông tin. David sẽ liên hệ trong 24h để xếp lịch.',
	fields: {
		name: { label: 'Họ tên', placeholder: 'Phan Thanh Tùng' },
		email: { label: 'Email', placeholder: 'ceo@company.vn' },
		phone: { label: 'Số điện thoại', placeholder: '0987 654 321' },
		plan: { label: 'Gói coaching', options: ['Mini — 20.000.000₫ (4 buổi)', '12 buổi — 60.000.000₫ (full hệ thống)'] },
	},
	submit: 'Đặt lịch & thanh toán →',
	courseCode: 'HERMES-MINI-COACH-4',
	price: '20.000.000₫',
};

export const footer = {
	left: 'HERMES COACHING',
	leftRest: ' — 1:1 cùng David Tùng',
	right: 'Phan Thanh Tùng · davidtung.net/hermes · 07/2026',
};