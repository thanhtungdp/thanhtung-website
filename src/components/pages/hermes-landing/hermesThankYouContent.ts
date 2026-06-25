// Copy for the Hermes thank-you page (vi). Same convention as
// hermesLandingContent.ts — one place for all strings so the page stays thin.

export const nav = {
	brandName: 'HERMES',
	brandAccent: 'AGENT',
	orderLabel: 'Đơn #HM-2026-0427',
};

export const hero = {
	eyebrow: 'Thanh toán thành công',
	titleLead: 'Bạn vừa ra một',
	titleEm: 'quyết định quan trọng.',
	lede: 'Không phải mua thêm một khoá học. Đây là ngày bạn chọn bước qua ranh giới — từ người dùng AI thành người vận hành AI. Chào mừng bạn vào Hermes.',
	receipt: [
		{ k: 'Gói', v: 'Hermes Pro · Lifetime', ok: false },
		{ k: 'Đã thanh toán', v: '999.000₫', ok: true },
		{ k: 'Truy cập', v: 'Kích hoạt ngay', ok: false },
	],
};

export const journey = {
	eyebrow: 'Hành trình của bạn',
	title: 'Đây là nơi bạn đang đứng — và nơi bạn sẽ tới.',
	steps: [
		{
			n: '01',
			when: 'HÔM NAY',
			state: 'now',
			tag: 'Quyết định',
			title: 'Bạn đã kích hoạt Hermes.',
			body: 'Quyết định khó nhất đã xong. Hầu hết founder dừng lại ở "biết về AI" — bạn thì không. Bước tiếp theo bắt đầu trong hộp thư của bạn ngay bây giờ.',
		},
		{
			n: '02',
			when: '4–6 TUẦN',
			state: 'default',
			tag: 'Hoàn thành & ứng dụng',
			title: 'Bạn đi hết 6 module và ship agent đầu tiên.',
			body: 'Mỗi tuần 3–4 giờ. Bạn bóc tách quy trình lặp thành skill, kết nối Telegram – Gmail – Sheets, và để 1–2 agent chạy việc thật. Kết thúc: bạn đã là AI-operator.',
		},
		{
			n: '03',
			when: 'NẤC TIẾP',
			state: 'next',
			tag: 'Lên nấc — Coaching 1:1',
			title: 'Hoàn thiện cả hệ thống Hermès, cùng David.',
			body: 'Khi bạn đã chạy được agent đầu, nấc tiếp theo là một hệ thống hoàn chỉnh — 5 agent, 3 phòng ban, một dashboard. Đây là lúc coaching 1:1 rút ngắn nhiều tháng mày mò xuống còn 4 buổi.',
		},
	],
};

export const upsell = {
	eyebrow: 'Ưu đãi chỉ xuất hiện một lần',
	titleLead: 'Nâng cấp với',
	titleEm: 'coach 1:1 3 buổi',
	titleRest: 'cùng David.',
	body: 'Self-serve cho bạn phương pháp. Coaching 1:1 cho bạn một hệ thống Hermès production chạy đúng business của bạn — không phải tự mò.',
	list: [
		'Buổi 1 — Audit quy trình & bản đồ hoá agent cho business của bạn.',
		'Buổi 2 — Build agent đầu tiên phù hợp với quy trình thực tế.',
		'Buổi 3 — Fine-tune, test production & bàn giao hệ thống.',
	],
	specs: [
		{ n: '3', l: 'Buổi 1:1' },
		{ n: '90′', l: 'Mỗi buổi' },
		{ n: '1:1', l: 'Cùng David' },
	],
	priceWas: 'Giá gốc 8.000.000₫',
	priceNow: '2.000.000',
	priceUnit: '₫',
	save: 'Ưu đãi riêng cho người vừa kích hoạt · tiết kiệm 6 triệu',
	cta: { href: '#', label: 'Thêm Coaching 1:1 →' },
	decline: 'Cảm ơn, em tự đi với khoá trước đã',
	note: 'Giá này chỉ áp dụng tại trang này, không quay lại sau khi bạn rời đi.',
	courseCode: 'HERMES-COACH-MINI4',
	price: '2.000.000₫',
};

export const whatNow = {
	eyebrow: 'Bắt đầu ngay',
	title: '3 việc cần làm trong 10 phút tới.',
	cards: [
		{
			n: '01',
			title: 'Kiểm tra email',
			body: 'Link kích hoạt Hermes Pro + hoá đơn đã gửi tới hộp thư của bạn. Chưa thấy? Kiểm tra mục Spam/Promotions.',
		},
		{
			n: '02',
			title: 'Vào Telegram group',
			body: 'Đây là nơi bạn ra lệnh cho Hermes và hỏi đáp với cộng đồng. Link nằm trong email chào mừng.',
		},
		{
			n: '03',
			title: 'Mở Module 1',
			body: '15 phút để có agent đầu tiên trả lời bạn. Bắt đầu từ "Cài đặt & chạy Hermes lần đầu".',
		},
	],
};

export const footer = {
	left: 'HERMES AGENT v4.0',
	leftRest: ' — Cảm ơn bạn đã đồng hành',
	right: 'Phan Thanh Tùng · davidtung.net/hermes · 06/2026',
};
