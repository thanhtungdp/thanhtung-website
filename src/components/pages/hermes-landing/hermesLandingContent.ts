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
	titleLead: 'Biến',
	titleAware: 'việc lặp lại',
	titleMid: 'thành',
	titleOperator: 'agent tự chạy',
	titleTail: 'trong 4 tuần.',
	lede: 'AI giúp bạn viết nhanh hơn. Nhưng vẫn là bạn ngồi làm. Hermes giúp bạn xây một đội AI tự chạy việc lặp lại, tự học mỗi ngày — để bạn vận hành như có cả một phòng ban.',
	primaryCta: { href: '#pricing', label: 'Bắt đầu với Hermes →' },
	secondaryCta: { href: '#demo', label: 'Xem demo live' },
	chatBarLabel: 'Hermes Core · Telegram',
	chatLiveLabel: 'LIVE DEMO',
};

// Live Telegram demo script for the hero chat island.
export const chatScript: Array<{ who: 'me' | 'bot'; name: string; text: string }> = [
	{ who: 'me', name: 'CEO', text: 'Báo giá gói Pro cho bạn Minh, hợp đồng 12 tháng' },
	{
		who: 'bot',
		name: 'Hermès Sales',
		text: 'Đã tạo báo giá #BG-204 — 32.400.000₫. Soạn email gửi bạn Minh xong. Bạn duyệt gửi?',
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
		body: 'Một câu qua Telegram. Agent tự tạo báo giá, gửi email, lên content — không cần bạn mở 10 tab.',
	},
	{
		n: '02',
		title: 'Việc lặp tự chạy',
		body: 'Mỗi lần xử lý xong một việc, agent tự ghi lại cách làm. Lần sau gặp việc tương tự, nó tự nhớ — không cần bạn dạy lại lần hai.',
	},
	{
		n: '03',
		title: '4 tuần, có agent 24/24',
		body: 'Không phải khoá học xem cho biết. Kết thúc là 1–2 agent đang làm việc thật mỗi ngày, không phải demo.',
	},
];

export const whatIs = {
	eyebrow: 'Nền tảng',
	body: 'Xây trên Hermes Agent — dự án mã nguồn mở, được các quỹ công nghệ lớn hậu thuẫn, không phải dự án làm cho vui rồi bỏ ngang.',
	body2: 'Giá trị thực dụng cho CEO: agent tự học sau mỗi việc và chạy được trên máy chủ giá rẻ.',
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
			'Agent tự nhớ cách làm khi gặp việc mới',
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
	title: '5 agent. Ít mà sâu.',
	lede: 'Mỗi agent là một năng lực thật — không thêm cho có. Đủ để một mình vẫn có cảm giác như đang dẫn cả một team.',
	agents: [
		{
			num: '01',
			dept: 'Phòng Sales',
			name: 'Hermès Sales',
			role: 'Trợ lý Báo giá & Email',
			body: 'Tạo báo giá , nhiều báo giá → sinh email → đồng bộ CRM - Excel, làm hợp đồng',
			core: false,
		},
		{
			num: '02',
			dept: 'Phòng Sales',
			name: 'Hermès Funnel',
			role: 'Quản lý Lead & Nhắc hẹn',
			body: 'Phân loại lead, lên kịch bản follow up email tự động, tìm hiểu về leads',
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
			body: 'Viết bài viết viral, post, blog theo thương hiệu.',
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
			body: 'Briefing 7h sáng + báo cáo tuần, cập nhật tin tức quan trọng',
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

export const videoShowcase = {
	eyebrow: 'Output thật · Tự động hoàn toàn',
	title: 'Hermes tự sản xuất — không chỉnh tay.',
	lede: 'Từ lên kịch bản 90s đến video hoàn chỉnh. Đây là những gì Hermes làm tự động mỗi ngày trong lúc tôi tập gym',
	videos: [
		{
			id: 'top10ceo',
			src: '/videos/top10ceo.mp4',
			title: 'Top 10 CEO',
			thumbnail: '/videos/top10ceo.mp4#t=1',
		},
		{
			id: 'langchain',
			src: '/videos/langchain.mp4',
			title: 'LangChain Tutorial',
			thumbnail: '/videos/langchain.mp4#t=2',
		},
		{
			id: 'dify',
			src: '/videos/dify.mp4',
			title: 'Dify Platform',
			thumbnail: '/videos/dify.mp4#t=2',
		},
		{
			id: '5ways',
			src: '/videos/5waysvideo.mp4',
			title: '5 Ways Video',
			thumbnail: '/videos/5waysvideo.mp4#t=2',
		},
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
		'Bạn ấy chạy startup được 18 tháng. 8 nhân viên. Doanh thu 200 triệu/tháng. Vẫn tự làm hết — sale, marketing, vận hành, sản phẩm.',
		'"Em đã dùng ChatGPT từ ngày nó ra mắt. Em trả Claude Pro 20 đô/tháng. Em test n8n, Make, Zapier… Vậy mà em vẫn không thoát được."',
		'Bạn mở laptop, chỉ vào màn hình đầy tab Zalo, Messenger, Gmail: "Mỗi sáng em vẫn copy-paste 30 tin báo giá vào ChatGPT. ChatGPT giúp em viết NHANH hơn — không phải làm THAY em."',
	],
	pull: '"ChatGPT làm bạn viết nhanh hơn. Nhưng bạn vẫn là người làm."',
	closing:
		'Bạn đang ở trạng thái AI-aware nhưng không phải AI-operator. Khoảng cách giữa hai trạng thái này không phải vài prompt — mà là một phương pháp. Đây là khoảng cách Hermes lấp đầy. Sau khoá, những việc lặp lại không cần bạn nữa.',
};

export const curriculum = {
	eyebrow: 'Hermes Self-serve · 4 tuần',
	title: '6 module — một phương pháp.',
	lede: 'Mỗi tuần 3–4 giờ. Video pre-recorded + workbook + AI Helper. Kết thúc là agent đầu tiên đã chạy.',
	modules: [
		{
			n: '01',
			title: 'Cài đặt & chạy Hermes lần đầu',
			body: 'Từ con số 0 đến agent đầu tiên trả lời bạn — trong 15 phút.',
		},
		{
			n: '02',
			title: 'Ra lệnh tự nhiên — prompt kiểu CEO',
			body: 'Hiểu Hermes trả lời gì, vì sao, và cách nói để nó làm đúng.',
		},
		{
			n: '03',
			title: 'Dạy agent việc đầu tiên',
			body: 'Làm cùng agent một lần: báo giá, blog, hay email. Nó tự ghi nhớ cách làm, từ lần hai tự chạy.',
		},
		{
			n: '04',
			title: 'Kết nối tool',
			body: 'Telegram, Gmail, Google Sheets — để agent hành động thật.',
		},
		{
			n: '05',
			title: 'Tự động hoá quy trình lặp',
			body: 'Chọn việc nào agent tự quyết, việc nào cần bạn duyệt trước khi gửi đi.',
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
	title: 'Ra mắt 05/07 — đặt trước ngay.',
	lede: 'Khóa học chính thức mở bán 05/07/2026. Đặt trước hôm nay để được giá ưu đãi sớm nhất.',
	tiers: [
		{
			name: 'Pro',
			tag: 'ĐANG MỞ',
			price: '999k',
			priceNote: 'Giá mở bán: 1.999k',
			unit: '/lifetime',
			feat: true,
			features: [
				'6 module đầy đủ',
				'4 skill pack + workbook PDF',
				'Telegram group + 1:1 David',
				'3 năm updates · lifetime archive',
			],
			cta: { href: '#signup-sec', label: 'Đặt trước Pro →' },
		},
		{
			name: 'Enterprise',
			tag: 'CHƯA MỞ BÁN',
			price: '4.999k',
			priceNote: '',
			unit: '/lifetime',
			feat: false,
			features: ['Mọi thứ trong Pro', 'Server Hermes 24/7', 'CRM integration + 1:1 priority'],
			cta: { href: '#signup-sec', label: 'Sắp ra mắt', disabled: true },
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
			a: 'Được. Toàn bộ tương tác qua Telegram bằng tiếng Việt tự nhiên. Module 1 đưa bạn từ con số 0 đến agent chạy trong 15 phút — không một dòng code.',
		},
		{
			q: 'Hermes có tự nhắn cho khách của tôi không?',
			a: 'Không thay bạn giao tiếp. Hermès Sales làm phần hậu trường — bạn là người duyệt và bấm gửi. Bạn giữ toàn quyền kiểm soát.',
		},
		{
			q: 'Khác gì so với mua một khoá prompt?',
			a: 'Khoá prompt dạy bạn viết nhanh hơn — vẫn là người làm. Hermes dạy phương pháp đóng gói việc lặp thành skill để agent tự chạy. Khác nhau ở chỗ: sau khoá, việc lặp không cần bạn nữa.',
		},
		{
			q: 'Tôi cần bao lâu mỗi tuần?',
			a: 'Self-serve: 3–4 giờ/tuần trong 4 tuần, theo nhịp của bạn. Video pre-recorded nên bạn học lúc nào cũng được, xem lại vĩnh viễn.',
		},
	],
};

export const cta = {
	eyebrow: 'Ra mắt 05/07 · Bảo hành 30 ngày',
	title: 'Việc lặp lại không cần bạn nữa.',
	titleEm: 'không cần bạn',
	body: 'Trong 4 tuần, em coach bạn từ AI-aware → AI-operator. Đặt trước hôm nay để được giá ưu đãi 999k (giá mở bán: 1.999k).',
	seats: '50 chỗ đặt trước · còn 42',
	seatsAccent: 'còn 42',
	formTitle: 'Đặt trước Hermes Pro',
	formSub: 'Khóa học ra mắt 05/07. Đặt trước để nhận giá sớm.',
	fields: {
		name: { label: 'Họ tên', placeholder: 'Phan Thanh Tùng' },
		email: { label: 'Email', placeholder: 'ceo@company.vn' },
		phone: { label: 'Số điện thoại', placeholder: '0987 654 321' },
		plan: { label: 'Gói', options: ['Pro — 999k (giá mở bán: 1.999k)'] },
	},
	submit: 'Đặt trước & thanh toán 999k →',
	courseCode: 'HERMES-999',
	price: '999.000₫',
	done: {
		badge: '✓ ĐÃ NHẬN',
		body: 'Cảm ơn bạn. Hermes sẽ gửi link kích hoạt qua email trong ít phút.',
	},
};

export const footer = {
	left: 'HERMES AGENT v4.0',
	leftRest: ' — AI-aware → AI-operator',
	right: 'Phan Thanh Tùng · davidtung.net/hermes · 06/2026',
};
