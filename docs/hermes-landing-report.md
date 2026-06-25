# Review & Đề xuất chỉnh sửa — Landing Page Hermes Agent
**Trang review:** davidtung.net/hermes-landing
**Mục tiêu đối chiếu:** (1) CEO vận hành như có 1 trợ lý chạy liên tục, hiệu quả · (2) hướng tới doanh nghiệp tinh gọn · (3) agent chạy thật, không phải chatbot · (4) học hỏi từ skill — đúng tư duy nguyên bản của Hermes (tự học, tự đúc skill, tự cải thiện). Trang được viết lại theo hướng **sale page chuyển đổi**, hạn chế từ kỹ thuật.

---

## 1. Tóm tắt nhanh — 3 việc nên sửa trước

1. **Thông điệp "tự học skill" đang bị pha loãng.** Phần mở đầu nói đúng tinh thần Hermes (agent tự đúc kinh nghiệm thành skill), nhưng xuống phần Đội ngũ và Lộ trình lại đổi giọng thành "anh đóng gói quy trình tay" — giống một tool automation (n8n/Zapier) hơn là một agent biết tự học. Đây là điểm khác biệt hoá lớn nhất, cần nói thống nhất xuyên suốt trang.
2. **Phần "Bối cảnh: Hermes Agent là gì?" đọc như bài PR công nghệ / deck gọi vốn**, không phải sale page. GitHub star, vốn đầu tư, định giá — là ngôn ngữ cho dev/nhà đầu tư, đặt ngay sau Hero làm chậm nhịp đọc và kéo người đọc ra khỏi câu chuyện của chính họ.
3. **Vài chỗ tự nhận là "không có thật"** (label "dữ liệu minh hoạ" ở biểu đồ Trước/Sau, label "KỊCH BẢN" ở phần demo) — vô tình làm giảm độ tin của chính phần bằng chứng mạnh nhất của trang.

---

## 2. Đối chiếu 4 trụ định vị mong muốn với hiện trạng

| Trụ định vị | Hiện trạng trên trang | Đánh giá |
|---|---|---|
| CEO có 1 trợ lý chạy liên tục | "Hermès Daily" briefing 7h sáng là ví dụ tốt nhất cho "chạy liên tục" nhưng đang nằm lẫn trong list 5 agent, không được nhấn | Có chất liệu, chưa được đẩy lên đúng tầm |
| Doanh nghiệp tinh gọn | Có nói "Solo CEO", "người không còn là nút thắt" nhưng chưa gọi tên khái niệm "tinh gọn" | Đang nói gần đúng, thiếu 1 câu chốt khái niệm |
| Agent chạy thật, không phải chatbot | Phần "Output thật" (ảnh Telegram/Gmail/Sheet) làm rất tốt | Giữ nguyên, nên đẩy lên sớm hơn trong trang |
| Học skill theo tư duy nguyên bản Hermes | Đúng ở đoạn mở đầu, sai lệch ở phần Đội ngũ + Module | Cần viết lại nhất quán (xem mục 3.1) |

---

## 3. Vấn đề chi tiết & đề xuất viết lại

### 3.1 Thông điệp "tự học skill" — điểm cần sửa quan trọng nhất

Đúng tinh thần Hermes (đã có sẵn ở phần Bối cảnh): agent **tự** ghi nhận kinh nghiệm thành skill sau khi làm xong một việc, không cần ai "đóng gói" tay. Nhưng các phần sau lại mô tả ngược lại — biến việc tạo skill thành công việc thủ công của CEO.

**Đội ngũ Hermès — hiện tại:**
> Đóng gói quy trình lặp lại thành skill. Làm một lần, chạy mãi — người không còn là nút thắt.

**Gợi ý viết lại:**
> Mỗi lần xử lý xong một việc, agent tự ghi lại cách làm. Lần sau gặp việc tương tự, nó tự nhớ — không cần anh dạy lại lần hai.

**Module 3 — hiện tại:**
> Tạo skill đầu tiên — Báo giá, blog, email — bóc tách quy trình lặp thành skill rõ ràng.

**Gợi ý viết lại:**
> Dạy agent việc đầu tiên — Làm cùng agent một lần: báo giá, blog, hay email. Nó tự ghi nhớ cách làm, từ lần hai tự chạy.

**Module 5 — hiện tại:**
> Phân loại Risk-Free / Risk-Aware để chọn đúng mức tự động.

**Gợi ý viết lại:**
> Chọn việc nào agent tự quyết, việc nào cần anh duyệt trước khi gửi đi.

> Lý do nên sửa: nếu để như hiện tại, khách dễ so sánh giá ngay với n8n/Zapier — vì không thấy rõ "con này khác gì 1 workflow tự động". Thông điệp "tự học, tự nhớ, không cần dạy lại" mới là lý do khiến Hermes đáng giá hơn một tool kéo-thả thông thường.

### 3.2 Phần "Bối cảnh: Hermes Agent là gì?" — rút gọn, bỏ ngôn ngữ gọi vốn

Hiện tại phần này có heading riêng, kèm 3 ô số liệu (GitHub star, số model kết nối, vốn đầu tư + định giá) — đúng với một bài giới thiệu dự án cho dev/nhà đầu tư, nhưng lạc giọng với một CEO đang đau đầu vì 30 tin báo giá mỗi sáng.

**Đề xuất:**
- Bỏ heading section riêng, gộp thành 1–2 câu trust-badge nhỏ, đặt cuối trang hoặc trong footer:
  > "Xây trên Hermes Agent — dự án mã nguồn mở, được các quỹ công nghệ lớn hậu thuẫn, không phải dự án làm cho vui rồi bỏ ngang."
- Bỏ hẳn các số liệu GitHub star / vốn đầu tư / định giá ra khỏi phần nội dung chính — chúng không giúp một CEO solo quyết định mua khoá học, chỉ làm chậm nhịp đọc.
- Giữ lại đúng 1 thông tin có giá trị thực dụng: agent tự học + chạy được trên máy chủ giá rẻ. Đây là 2 lý do CEO thực sự cần biết.

> Lưu ý xác minh số liệu (để anh quyết định, không phải lỗi nội dung): mức "định giá 1 tỷ đô" là **token valuation** qua vòng Series A do Paradigm dẫn dắt (4/2025), không phải định giá vốn cổ phần thông thường, và không gắn trực tiếp với thời điểm Hermes Agent ra mắt (2/2026). Hợp tác NVIDIA–Stripe là một cuộc hackathon ("Hermes Agent Accelerated Business Hackathon"), không phải một tính năng "agent tự giao dịch" có sẵn trong sản phẩm. Nếu giữ các chi tiết này trong bản rút gọn, nên diễn đạt mơ hồ hơn ("được quỹ đầu tư lớn hậu thuẫn") để tránh bị hỏi ngược về token hay tính năng giao dịch tự động.

### 3.3 Phần "Trước & Sau" — bỏ biểu đồ tự nhận là không có thật

Ghi chú "dữ liệu minh hoạ" dưới biểu đồ là trung thực, nhưng đặt cạnh một biểu đồ trông như số liệu thật thì vô tình nói với khách: "cái này không có thật". Trên sale page, nên tránh đặt cạnh nhau hai thứ mâu thuẫn vậy.

**Đề xuất:** Bỏ biểu đồ radar 6 trục. Nội dung "trước/sau" đã được kể rất tốt ở phần "Hai trạng thái" (AI-aware vs AI-operator) ngay phía trên — gộp hai phần lại, khỏi lặp ý, khỏi cần số liệu minh hoạ.

### 3.4 Vài nhãn chữ làm lạc giọng "ảnh chụp thật"

Phần "Output thật" đã tuyên bố rõ "không phải mockup", nhưng label phía trên lại ghi:
> HERMES ĐANG CHẠY KỊCH BẢN…

"Kịch bản" nghe như demo dàn dựng, ngược với tinh thần "ảnh chụp thật" ngay bên dưới.

**Gợi ý viết lại:** "HERMES ĐANG LÀM VIỆC…"

---

## 4. Bảng từ kỹ thuật → ngôn ngữ thường (giảm jargon cho sale page)

| Từ hiện tại | Vị trí | Thay bằng |
|---|---|---|
| Orchestrator | Badge "CORE · Orchestrator" | Bỏ chữ tiếng Anh, chỉ giữ tên "Hermes Core" |
| Production agent | "Kết thúc là 1–2 agent production đang chạy việc thật" | "1–2 agent đang làm việc thật mỗi ngày, không phải demo" |
| Risk-Free / Risk-Aware | Module 5 | "Việc nào agent tự quyết, việc nào cần anh duyệt" |
| Back-office | FAQ — "Hermès Sales là back-office" | "Hermès Sales làm phần hậu trường — anh là người duyệt và bấm gửi" |
| Kịch bản (label demo) | Phần Output thật | "Hermes đang làm việc…" |
| Dữ liệu minh hoạ | Biểu đồ Trước/Sau | Bỏ hẳn biểu đồ này (xem mục 3.3) |
| Skill (giữ, nhưng cần giải nghĩa lần đầu) | Nhiều nơi | Thêm 1 câu giải nghĩa ngay lần xuất hiện đầu: "skill — hiểu đơn giản là một 'bài học' agent tự ghi nhớ sau khi làm xong một việc" |

---

## 5. Gợi ý làm đậm thêm 2 trụ định vị còn mờ

**Doanh nghiệp tinh gọn:** Thêm 1 câu chốt khái niệm ngay trong Hero hoặc phần "Vì sao CEO nên quan tâm", ví dụ:
> "Không cần tuyển thêm người — Hermes giúp anh vận hành như một đội ngũ đầy đủ phòng ban, trong một doanh nghiệp một người."

**Trợ lý chạy liên tục:** "Hermès Daily" (briefing 7h sáng + báo cáo tuần) là ví dụ tốt nhất cho việc agent chạy không cần anh bật, nhưng hiện đang nằm lẫn trong danh sách 5 agent ngang hàng. Nên kéo ví dụ này lên sớm hơn — có thể đặt làm bằng chứng mở đầu cho phần "Output thật", vì nó minh họa rõ nhất khái niệm "trợ lý chạy liên tục" mà không cần giải thích thêm.

---

## 6. Đề xuất sắp xếp lại thứ tự trang

Thứ tự hiện tại đặt phần giới thiệu kỹ thuật về Hermes Agent ngay sau Hero — nên đẩy phần này xuống cuối hoặc rút thành 1 dòng. Thứ tự đề xuất, ưu tiên cảm xúc + bằng chứng trước, giải thích sau:

1. Hero
2. Câu chuyện (founder quán cà phê Q7) — đẩy lên sớm, đây là phần kết nối cảm xúc mạnh nhất của trang
3. Hai trạng thái (trước/sau) — gộp luôn phần "Trước & Sau", bỏ biểu đồ minh hoạ
4. Đội ngũ 5 agent (đã sửa lại ngôn ngữ "tự học")
5. Output thật (ảnh chụp Telegram/Gmail/Sheet) — kéo ví dụ "Hermès Daily" lên đầu mục này
6. Lộ trình 4 tuần (đã sửa Module 3 & 5)
7. Giá
8. FAQ
9. CTA Founding 50

---

## 7. Nếu chỉ có thời gian sửa 3 việc

1. Viết lại nhất quán thông điệp "agent tự nhớ, tự học" ở phần Đội ngũ + Module 3/5 (mục 3.1).
2. Rút phần "Bối cảnh" xuống 1–2 câu trust-badge, bỏ số liệu gọi vốn khỏi nội dung chính (mục 3.2).
3. Bỏ biểu đồ "dữ liệu minh hoạ" và đổi label "KỊCH BẢN" → "ĐANG LÀM VIỆC" (mục 3.3, 3.4).