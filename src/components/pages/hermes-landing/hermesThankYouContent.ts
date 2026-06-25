// Copy for the Hermes thank-you page (vi). Same convention as
// hermesLandingContent.ts — one place for all strings so the page stays thin.

export const nav = {
	brandName: 'HERMES',
	brandAccent: 'AGENT',
	orderLabel: 'Đơn #HM-2026-0427',
};

export const hero = {
	eyebrow: 'Thanh toán thành công',
	titleLead: 'Anh vừa ra một',
	titleEm: 'quyết định quan trọng.',
	lede: 'Không phải mua thêm một khoá học. Đây là ngày anh chọn bước qua ranh giới — từ người dùng AI thành người vận hành AI. Chào mừng anh vào Hermes.',
	receipt: [
		{ k: 'Gói', v: 'Hermes Pro · Lifetime', ok: false },
		{ k: 'Đã thanh toán', v: '999.000₫', ok: true },
		{ k: 'Truy cập', v: 'Kích hoạt ngay', ok: false },
	],
};

export const journey = {
	eyebrow: 'Hành trình của anh',
	title: 'Đây là nơi anh đang đứng — và nơi anh sẽ tới.',
	steps: [
		{
			n: '01',
			when: 'HÔM NAY',
			state: 'now',
			tag: 'Quyết định',
			title: 'Anh đã kích hoạt Hermes.',
			body: 'Quyết định khó nhất đã xong. Hầu hết founder dừng lại ở "biết về AI" — anh thì không. Bước tiếp theo bắt đầu trong hộp thư của anh ngay bây giờ.',
		},
		{
			n: '02',
			when: '4–6 TUẦN',
			state: 'default',
			tag: 'Hoàn thành & ứng dụng',
			title: 'Anh đi hết 6 module và ship agent đầu tiên.',
			body: 'Mỗi tuần 3–4 giờ. Anh bóc tách quy trình lặp thành skill, kết nối Telegram – Gmail – Sheets, và để 1–2 agent chạy việc thật. Kết thúc: anh đã là AI-operator.',
		},
		{
			n: '03',
			when: 'NẤC TIẾP',
			state: 'next',
			tag: 'Lên nấc — Coaching 1:1',
			title: 'Hoàn thiện cả hệ thống Hermès, cùng David.',
			body: 'Khi anh đã chạy được agent đầu, nấc tiếp theo là một hệ thống hoàn chỉnh — 5 agent, 3 phòng ban, một dashboard. Đây là lúc coaching 1:1 rút ngắn nhiều tháng mày mò xuống còn 4 buổi.',
		},
	],
};

export const upsell = {
	eyebrow: 'Ưu đãi chỉ xuất hiện một lần',
	titleLead: 'Hoàn thiện cả hệ thống với',
	titleEm: '4 buổi 1:1',
	titleRest: 'cùng David.',
	body: 'Self-serve cho anh phương pháp. Coaching 1:1 cho anh một hệ thống Hermès production chạy đúng business của anh — không phải tự mò.',
	list: [
		'Buổi 1 — Audit quy trình & bản đồ hoá 5 agent cho business của anh.',
		'Buổi 2 — Build Hermès Sales + Funnel (back-office báo giá, pipeline).',
		'Buổi 3 — Build Hermès Voice + Visual (content & sản xuất).',
		'Buổi 4 — Orchestration: ghép 5 agent vào 1 dashboard + bàn giao.',
	],
	specs: [
		{ n: '4', l: 'Buổi 1:1' },
		{ n: '90′', l: 'Mỗi buổi' },
		{ n: '1:1', l: 'Cùng David' },
	],
	priceWas: 'Giá gốc 20.000.000₫',
	priceNow: '4.000.000',
	priceUnit: '₫',
	save: 'Ưu đãi riêng cho người vừa kích hoạt · tiết kiệm 16 triệu',
	cta: { href: '#', label: 'Thêm Coaching 1:1 →' },
	decline: 'Cảm ơn, em tự đi với khoá trước đã',
	note: 'Giá này chỉ áp dụng tại trang này, không quay lại sau khi anh rời đi.',
};

export const whatNow = {
	eyebrow: 'Bắt đầu ngay',
	title: '3 việc cần làm trong 10 phút tới.',
	cards: [
		{
			n: '01',
			title: 'Kiểm tra email',
			body: 'Link kích hoạt Hermes Pro + hoá đơn đã gửi tới hộp thư của anh. Chưa thấy? Kiểm tra mục Spam/Promotions.',
		},
		{
			n: '02',
			title: 'Vào Telegram group',
			body: 'Đây là nơi anh ra lệnh cho Hermes và hỏi đáp với cộng đồng. Link nằm trong email chào mừng.',
		},
		{
			n: '03',
			title: 'Mở Module 1',
			body: '15 phút để có agent đầu tiên trả lời anh. Bắt đầu từ "Cài đặt & chạy Hermes lần đầu".',
		},
	],
};

export const footer = {
	left: 'HERMES AGENT v4.0',
	leftRest: ' — Cảm ơn anh đã đồng hành',
	right: 'Phan Thanh Tùng · davidtung.net/hermes · 06/2026',
};
