// All copy for the Hermes landing page. Kept in one place so the section
// components stay thin and an /en variant can be layered on later by adding a
// parallel object keyed by locale. For now this is the default (vi) content.

export const nav = {
	brandName: 'HERMES',
	brandAccent: 'AGENT',
	links: [
		{ href: '#aware', label: 'Phương pháp' },
		{ href: '#team', label: 'Đội ngũ' },
		{ href: '#results', label: 'Kết quả' },
		{ href: '#curriculum', label: 'Lộ trình' },
		{ href: '#pricing', label: 'Giá' },
	],
	cta: { href: '#pricing', label: 'BẮT ĐẦU →' },
};

export const hero = {
	eyebrow: 'Đội ngũ AI tự chủ cho Solo CEO',
	titleLead: 'Từ',
	titleAware: 'AI-aware',
	titleMid: 'đến',
	titleOperator: 'AI-operator.',
	lede: '90% founder đã dùng ChatGPT mỗi sáng — nhưng vẫn copy-paste. Khoảng cách không phải tool, mà là một phương pháp. Hermes coach anh xây đội AI tự chạy việc lặp lại.',
	primaryCta: { href: '#pricing', label: 'Bắt đầu với Hermes →' },
	secondaryCta: { href: '#demo', label: 'Xem demo live' },
	chatBarLabel: 'Hermes Core · Telegram',
	chatLiveLabel: 'LIVE DEMO',
};

// Live Telegram demo script for the hero chat island.
export const chatScript: Array<{ who: 'me' | 'bot'; name: string; text: string }> = [
	{ who: 'me', name: 'CEO', text: 'Báo giá gói Pro cho anh Minh, hợp đồng 12 tháng' },
	{
		who: 'bot',
		name: 'Hermès Sales',
		text: 'Đã tạo báo giá #BG-204 — 32.400.000₫. Soạn email gửi anh Minh xong. Anh duyệt gửi?',
	},
	{ who: 'me', name: 'CEO', text: 'Gửi luôn' },
	{ who: 'bot', name: 'Hermès Sales', text: '✓ Đã gửi email cho minh@acme.vn.' },
	{
		who: 'bot',
		name: 'Hermès Funnel',
		text: 'Đã log vào pipeline (cột "Đã báo giá") + đặt nhắc follow-up sau 3 ngày.',
	},
	{ who: 'me', name: 'CEO', text: 'Viết luôn 1 post Facebook giới thiệu gói Pro' },
	{
		who: 'bot',
		name: 'Hermès Voice',
		text: 'Đã viết caption theo brand voice + Hermès Visual sinh banner. Lên lịch 19h hôm nay?',
	},
];

export const promises = [
	{
		n: '01',
		title: 'Ra lệnh, không thao tác',
		body: 'Một câu qua Telegram. Agent tự tạo báo giá, gửi email, lên content — không cần anh mở 10 tab.',
	},
	{
		n: '02',
		title: 'Việc lặp tự chạy',
		body: 'Đóng gói quy trình lặp lại thành skill. Làm một lần, chạy mãi — người không còn là nút thắt.',
	},
	{
		n: '03',
		title: '4 tuần, có agent thật',
		body: 'Không phải khoá học xem cho biết. Kết thúc là 1–2 agent production đang chạy việc thật của anh.',
	},
];

export const whatIs = {
	eyebrow: 'Bối cảnh',
	title: 'Hermes Agent là gì?',
	body: 'Hermes Agent là AI agent mã nguồn mở do Nous Research phát triển, ra mắt đầu 2026. Điểm khác biệt: Hermes tự học — sau mỗi nhiệm vụ, nó tự đúc kết kinh nghiệm thành "kỹ năng" để lần sau làm nhanh, chính xác hơn, và có bộ nhớ bền vững xuyên suốt các phiên làm việc, không bị quên như chatbot thông thường. Hermes chạy được trên VPS giá rẻ, kết nối hơn 200 model AI, hoạt động qua Telegram, Slack, email, terminal hay desktop app.',
	body2: 'Dự án đã đạt gần 150.000 star GitHub chỉ trong vài tháng, và được rót khoảng 65 triệu đô vốn đầu tư — vòng lớn nhất do quỹ Paradigm dẫn dắt với định giá 1 tỷ đô, cho thấy mức độ tin tưởng lớn từ giới đầu tư công nghệ.',
	stats: [
		{ big: '≈150k', lab: 'GitHub star chỉ trong vài tháng' },
		{ big: '200+', lab: 'model AI có thể kết nối' },
		{ big: '$65M', lab: 'vốn đầu tư · định giá $1 tỷ (Paradigm dẫn dắt)' },
	],
	whyTitle: 'Vì sao CEO nên quan tâm?',
	whyItems: [
		'Nhân sự số biết học hỏi, không chỉ trả lời theo kịch bản — càng dùng càng giỏi.',
		'Chi phí vận hành thấp, chạy được trên VPS giá rẻ — không phải dự án "làm cho vui" rồi bỏ ngang.',
		'Xu hướng "agent kinh tế" đang tới: Nous đã hợp tác NVIDIA và Stripe để agent tự giao dịch, tự vận hành như một đơn vị kinh doanh.',
	],
	whyClosing:
		'CEO không cần biết code, nhưng cần hiểu nguyên lý để biết hỏi đúng: nên cho agent học gì, nhớ gì, tự động hóa phần nào trong vận hành.',
};

export const aware = {
	eyebrow: 'Positioning v4.0',
	title: 'Hai trạng thái. Một khoảng cách tên là phương pháp.',
	titleEm: 'phương pháp.',
	left: {
		heading: 'AI-aware · 90% founder hiện tại',
		items: [
			'Copy-paste vào ChatGPT mỗi sáng',
			'Viết nhanh hơn — vẫn là người làm',
			'Mua thêm tool khi gặp việc khó',
			'6 tháng sau vẫn ở cùng vị trí',
		],
	},
	right: {
		heading: 'AI-operator · sau Hermes',
		items: [
			'Ra lệnh 1 câu, agent tự chạy',
			'Việc lặp tự chạy — người không làm',
			'Đóng gói skill khi gặp việc mới',
			'6 tháng sau có 5+ agent tự chạy',
		],
	},
};

export const gallery = {
	eyebrow: 'Tương tác thật',
	title: 'Tôi làm việc với Hermes mỗi ngày.',
	lede: 'Ảnh chụp thật từ Telegram, Gmail, dashboard — không phải mockup.',
	slots: [
		{ id: 'gal-1', wide: true, placeholder: 'Ảnh tương tác 01 — Telegram' },
		{ id: 'gal-2', wide: false, placeholder: 'Ảnh 02' },
		{ id: 'gal-3', wide: false, placeholder: 'Ảnh 03' },
		{ id: 'gal-4', wide: false, placeholder: 'Ảnh 04' },
		{ id: 'gal-5', wide: false, placeholder: 'Ảnh 05' },
		{ id: 'gal-6', wide: true, placeholder: 'Ảnh 06 — Dashboard' },
	],
};

export const painStats = {
	eyebrow: 'Cái giá của tự làm hết',
	title: 'Solo CEO mất gì khi ôm cả Sales, Marketing và Vận hành?',
	stats: [
		{ k: 'Năng suất', big: '↓45%', lab: 'năng suất CEO khi tự ngồi làm content.' },
		{ k: 'Thời gian', big: '8h', lab: 'mỗi ngày cho việc admin lặp đi lặp lại.' },
		{ k: 'Tồn đọng', big: '30+', lab: 'tin báo giá lặp lại cần trả mỗi ngày.' },
	],
};

export const team = {
	eyebrow: 'Đội ngũ Hermès',
	title: '5 agent. 3 phòng ban. Ít mà sâu.',
	lede: 'Mỗi agent là một năng lực thật — không phải feature creep. Số tối thiểu để vẫn có cảm giác "team".',
	agents: [
		{
			num: '01',
			dept: 'Phòng Sales',
			name: 'Hermès Sales',
			role: 'Trợ lý Báo giá & Email',
			body: 'Tạo báo giá → sinh email → log lại.',
			core: false,
		},
		{
			num: '02',
			dept: 'Phòng Sales',
			name: 'Hermès Funnel',
			role: 'Quản lý Lead & Nhắc hẹn',
			body: 'Phân loại lead, follow-up đúng giờ.',
			core: false,
		},
		{
			num: 'CORE',
			dept: 'Orchestrator',
			name: 'Hermes Core',
			role: 'Điều phối trung tâm',
			body: 'Anh ra lệnh 1 nơi — Core điều phối cả 3 phòng ban tự động.',
			core: true,
		},
		{
			num: '03',
			dept: 'Marketing',
			name: 'Hermès Voice',
			role: 'Tác giả Content',
			body: 'Viết caption, post, blog theo brand voice.',
			core: false,
		},
		{
			num: '04',
			dept: 'Marketing',
			name: 'Hermès Visual',
			role: 'Designer & Producer',
			body: 'Sinh banner, poster, video ngắn.',
			core: false,
		},
		{
			num: '05',
			dept: 'Điều hành',
			name: 'Hermès Daily',
			role: 'Chánh Văn phòng',
			body: 'Briefing 7h sáng + báo cáo tuần.',
			core: false,
		},
	],
};

export const connect = {
	eyebrow: 'Kết nối',
	title: 'Một Hermes — nối mọi tool, ra mọi outcome.',
	lede: 'Bên trái: các tool anh đang dùng. Ở giữa: Hermes điều phối. Bên phải: kết quả cụ thể rơi ra mỗi ngày.',
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

export const radar = {
	eyebrow: 'Trước & Sau',
	title: 'Cùng một CEO. Khác nhau ở phương pháp.',
	axes: ['Doanh thu', 'Thời gian', 'Content', 'Phản hồi', 'Chất lượng', 'Năng suất'],
	before: [3, 2, 3, 3, 4, 3],
	after: [6, 8, 7, 8, 7, 8],
	legend: [
		{
			title: 'Trước Hermes',
			body: 'AI-aware: dùng ChatGPT để viết nhanh hơn, nhưng vẫn tự tay làm mọi việc lặp lại.',
		},
		{
			title: 'Sau Hermes',
			body: 'AI-operator: 5 agent tự chạy Sales, Marketing, Điều hành. CEO chỉ ra lệnh và duyệt.',
		},
	],
	note: '6 trục · thang điểm 0–10 · dữ liệu minh hoạ',
};

export const story = {
	eyebrow: 'Câu chuyện',
	title: 'Tôi gặp một founder ở quán cà phê Q7.',
	paragraphs: [
		'Anh ấy chạy startup được 18 tháng. 8 nhân viên. Doanh thu 200 triệu/tháng. Vẫn tự làm hết — sale, marketing, vận hành, sản phẩm.',
		'"Em đã dùng ChatGPT từ ngày nó ra mắt. Em trả Claude Pro 20 đô/tháng. Em test n8n, Make, Zapier… Vậy mà em vẫn không thoát được."',
		'Anh mở laptop, chỉ vào màn hình đầy tab Zalo, Messenger, Gmail: "Mỗi sáng em vẫn copy-paste 30 tin báo giá vào ChatGPT. ChatGPT giúp em viết NHANH hơn — không phải làm THAY em."',
	],
	pull: '"ChatGPT làm anh viết nhanh hơn. Nhưng anh vẫn là người làm."',
	closing:
		'Anh đang ở trạng thái AI-aware nhưng không phải AI-operator. Khoảng cách giữa hai trạng thái này không phải vài prompt — mà là một phương pháp. Đây là khoảng cách Hermes lấp đầy. Sau khoá, những việc lặp lại không cần anh nữa.',
};

export const curriculum = {
	eyebrow: 'Hermes Self-serve · 4 tuần',
	title: '6 module — một phương pháp.',
	lede: 'Mỗi tuần 3–4 giờ. Video pre-recorded + workbook + AI Helper. Kết thúc là agent đầu tiên đã chạy.',
	modules: [
		{
			n: '01',
			title: 'Cài đặt & chạy Hermes lần đầu',
			body: 'Từ con số 0 đến agent đầu tiên trả lời anh — trong 15 phút.',
		},
		{
			n: '02',
			title: 'Ra lệnh tự nhiên — prompt kiểu CEO',
			body: 'Hiểu Hermes trả lời gì, vì sao, và cách nói để nó làm đúng.',
		},
		{
			n: '03',
			title: 'Tạo skill đầu tiên',
			body: 'Báo giá, blog, email — bóc tách quy trình lặp thành skill rõ ràng.',
		},
		{
			n: '04',
			title: 'Kết nối tool',
			body: 'Telegram, Gmail, Google Sheets — để agent hành động thật.',
		},
		{
			n: '05',
			title: 'Tự động hoá quy trình lặp',
			body: 'Phân loại Risk-Free / Risk-Aware để chọn đúng mức tự động.',
		},
		{
			n: '06',
			title: 'Xây hệ thống Hermès cho business 1 người',
			body: 'Ghép các agent thành đội — quản lý từ một dashboard.',
		},
	],
};

export const pricing = {
	eyebrow: 'Hermes Self-serve',
	title: 'Mua xong dùng ngay.',
	lede: 'Entry point cho founder mới chạm AI. Sẵn sàng hơn? Nâng cấp lên Cohort coaching (4.9M–49M).',
	tiers: [
		{
			name: 'Starter',
			tag: '',
			price: '699k',
			unit: '/lifetime',
			feat: false,
			features: ['3 module nền tảng', '2 skill pack mẫu của David', 'Discord community + AI Helper'],
			cta: { href: '#signup-sec', label: 'Chọn Starter' },
		},
		{
			name: 'Pro',
			tag: 'CHÍNH',
			price: '999k',
			unit: '/lifetime',
			feat: true,
			features: [
				'6 module đầy đủ',
				'4 skill pack + workbook PDF',
				'Telegram group + 1:1 David',
				'3 năm updates · lifetime archive',
			],
			cta: { href: '#signup-sec', label: 'Chọn Pro →' },
		},
		{
			name: 'Enterprise',
			tag: '',
			price: '1.999k',
			unit: '/lifetime',
			feat: false,
			features: ['Mọi thứ trong Pro', 'Server Hermes 24/7', 'CRM integration + 1:1 priority'],
			cta: { href: '#signup-sec', label: 'Chọn Enterprise' },
		},
	],
};

export const testimonials = {
	eyebrow: 'Học viên nói gì',
	title: 'Họ đã từ AI-aware thành operator.',
	lede: 'Phản hồi thật từ những founder đã đi qua Hermes.',
	ledeNote: '[ nội dung sẽ chèn sau ]',
	items: [
		{ id: 'rev-1', name: 'Tên học viên 01', role: 'Founder · Ngành' },
		{ id: 'rev-2', name: 'Tên học viên 02', role: 'Solo CEO · Ngành' },
		{ id: 'rev-3', name: 'Tên học viên 03', role: 'Business Owner · Ngành' },
		{ id: 'rev-4', name: 'Tên học viên 04', role: 'Key Manager · Ngành' },
		{ id: 'rev-5', name: 'Tên học viên 05', role: 'Founder · Ngành' },
		{ id: 'rev-6', name: 'Tên học viên 06', role: 'Solo CEO · Ngành' },
	],
	placeholder: 'Placeholder — câu trích phản hồi của học viên sẽ được chèn vào đây sau.',
};

export const faq = {
	eyebrow: 'Câu hỏi thường gặp',
	title: 'Vẫn còn băn khoăn?',
	items: [
		{
			q: 'Tôi không biết code, có dùng được không?',
			a: 'Được. Toàn bộ tương tác qua Telegram bằng tiếng Việt tự nhiên. Module 1 đưa anh từ con số 0 đến agent chạy trong 15 phút — không một dòng code.',
		},
		{
			q: 'Hermes có tự nhắn cho khách của tôi không?',
			a: 'Không thay anh giao tiếp. Hermès Sales là back-office: soạn báo giá, email, log pipeline — anh duyệt trước khi gửi. Anh giữ toàn quyền kiểm soát.',
		},
		{
			q: 'Khác gì so với mua một khoá prompt?',
			a: 'Khoá prompt dạy anh viết nhanh hơn — vẫn là người làm. Hermes dạy phương pháp đóng gói việc lặp thành skill để agent tự chạy. Khác nhau ở chỗ: sau khoá, việc lặp không cần anh nữa.',
		},
		{
			q: 'Tôi cần bao lâu mỗi tuần?',
			a: 'Self-serve: 3–4 giờ/tuần trong 4 tuần, theo nhịp của anh. Video pre-recorded nên anh học lúc nào cũng được, xem lại vĩnh viễn.',
		},
	],
};

export const cta = {
	eyebrow: 'Founding 50 · Bảo hành 30 ngày',
	title: 'Việc lặp lại không cần anh nữa.',
	titleEm: 'không cần anh',
	body: 'Trong 4 tuần, em coach anh từ AI-aware → AI-operator. Bonus thực ~2.5 triệu cho 30 người đầu — nói thẳng, không phóng đại.',
	seats: '30 chỗ Founding · còn 27',
	seatsAccent: 'còn 27',
	formTitle: 'Giữ chỗ Founding',
	formSub: 'Nhận link kích hoạt Hermes Pro qua email.',
	fields: {
		name: { label: 'Họ tên', placeholder: 'Phan Thanh Tùng' },
		email: { label: 'Email', placeholder: 'ceo@company.vn' },
		plan: { label: 'Gói', options: ['Pro — 999k (chính)', 'Starter — 699k', 'Enterprise — 1.999k'] },
	},
	submit: 'Giữ chỗ & thanh toán →',
	done: {
		badge: '✓ ĐÃ NHẬN',
		body: 'Cảm ơn anh. Hermes sẽ gửi link kích hoạt qua email trong ít phút.',
	},
};

export const footer = {
	left: 'HERMES AGENT v4.0',
	leftRest: ' — AI-aware → AI-operator',
	right: 'Phan Thanh Tùng · davidtung.net/hermes · 06/2026',
};
