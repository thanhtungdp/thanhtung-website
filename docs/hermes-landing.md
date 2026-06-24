# Hermes Agent Sales Page — Simple Version v2

**Mục đích:** Phiên bản viết lại đơn giản, dễ hiểu, ngôn ngữ thực chiến — không "cao siêu". Pricing thấp (699k–1.999k) để rộng cửa hơn cho founder solo / chủ DN 1 người.

**Định vị mới:** Hermes = **Execution Agent**, không phải Q&A chatbot. Từ "chat hàng giờ → 0 việc hoàn thành" sang "Job to be done".

**File này thay thế:** `13_Hermes_Sales_Page_Spec.md` (bản cũ giá cao + tông editorial). Khi build, ưu tiên file này.

**Phiên bản:** v2.0 · Tháng 6/2026

---

## 0. Stack & Setup

- Astro 6 + React 19 + Tailwind v4
- Route: `/hermes` (`src/pages/hermes.astro`)
- Components: `src/components/hermes/`
- Brand tokens lấy từ Brand Guideline (cam `#F26C2C`, navy `#1A2B4A`, navy deep `#0E1621` cho terminal)

**Font:**
- Body: Inter
- Display: Fraunces
- **Mono: JetBrains Mono** (dùng nhiều ở demo terminal — đây là điểm khác biệt visual chính)

**Tone tổng thể:** Như terminal/IDE của developer — không phải landing page marketing. Sạch, sắc, có vết build.

---

## 1. HERO — Câu hỏi nhói tim

**Layout:** Grid 12 col. Cột 1–7 text, cột 8–12 demo terminal/devices.

**Eyebrow** (cam uppercase letter-spacing):
```
HERMES AGENT · EXECUTION FOR SOLO CEO
```

**H1 (Fraunces 56px desktop / 36px mobile, navy):**
```
Bạn đang chat với AI hàng giờ —
mà vẫn tự làm hết mọi việc?
```

**Subline (Inter 19px gray-700, max-width 600px):**
```
300 câu hỏi với ChatGPT. 0 công việc hoàn thành.

Hermes là trợ lý thực thi: nhận việc → dùng tool → tạo output → kiểm tra → đóng gói skill.

Không bán công cụ — trao giá trị cách sử dụng.
```

**Hai dòng filter (margin-top 28px):**
- ✓ **Dành cho:** CEO / chủ DN 1 người — đã thử ChatGPT, thấy nhanh hơn nhưng vẫn tự làm hết.
- ✗ **Không dành cho:** người muốn AI làm chủ — bạn vẫn là người ra quyết định.

**CTA row (margin-top 36px, gap 16px):**
- Primary: `[Nhận trọn bộ — từ 699k →]` link tới `#pricing`
- Secondary: `[Xem đang chạy ▸]` link tới `#demo`

**Trust line (margin-top 24px, gray-500 font 13px):**
```
🛡️ 30 ngày hoàn tiền — không cần lý do
```

**Channel badges (margin-top 20px, gray-600 font 13px):**
```
💬 Telegram · 📱 WhatsApp · 🖥️ Terminal · 📧 Email
```

### 1.1 HERO DEMO PANEL (cột 8–12)

**Mini Telegram chat mock-up** — TĨNH (chỉ cursor blink, không animation phức tạp). Demo động đầy đủ ở Section 4.

**Khung:**
- Background: `#0E1621` (Telegram dark mode)
- Border-radius 16px, shadow lớn cam mờ outer
- Aspect 9:16 desktop / 4:5 mobile

**Telegram header** (bg `#17212B`, padding 12px 16px):
- Left arrow `←` (white/60)
- Avatar tròn 36px bg cam, icon 🪶 (hoặc Hermes logo SVG)
- Tên: `Hermes Bot` (white bold 14px)
- Sub: `● online` (emerald-400 11px)

**Body chat** (bg navy-deep, padding 16px):

Hiển thị 2 bubble + 1 typing — TĨNH:

```
[User bubble — align right, bg cam, text white]
"Tạo báo giá cho Cty Thép Bình Minh
 - 100 cây thép hộp 50×50"
                                          08:42

         [Hermes bubble — align left, bg navy-soft]
🪶  Đang tra cứu KH-042 + bảng giá hôm nay...
    ● ● ● (3 dots pulse animation chậm)
```

**Footer thin** (bg `#17212B`):
- Left: badges nhỏ `💬 Telegram · 📱 WhatsApp · 📧 Email` (white/40, font 11px)
- Right: `● Live · 12 tác vụ · 4 skill` (emerald-400 + white/60)

**Component:** `src/components/hermes/HeroChatPreview.astro`

---

## 2. JOB TO BE DONE — Từ Q&A đến hoàn thành

**Background:** white (hoặc gray-50)
**Container:** max-width 1100px

**Eyebrow:** `✦ JOB TO BE DONE`

**H2:**
```
Từ Q&A đến việc hoàn thành
```

**Sub (gray-600):**
```
Hầu hết doanh nghiệp đang dùng AI ở cấp "hỏi — đáp". Hermes đưa bạn lên cấp "hoàn thành công việc".
```

**Comparison 2 cột (red ✗ vs green ✓):**

**Cột trái — Q&A (thường thấy):**
- ❌ Header navy đậm, sub: "Viết vài ý tưởng → Soạn nội dung → Hỏi lỗi → Tóm tắt cuộc họp..."
- Italic dưới: *"rồi tự làm tiếp."*
- Style: text gray-600

**Cột phải — Job to be done (Hermes):**
- ✅ Header cam, body navy bold:
  - Tạo script, voice, visual, render, caption
  - DOCX, PDF, QR, gửi file
  - Đọc log, fix lỗi, viết checklist
  - Chốt quyết định, phân việc, follow-up
- Style: card bg navy nhẹ, border cam, có sense of "execution"

**Pull quote (sau 2 cột):**
```
"Tôi mất 2 năm để xây quy trình báo giá thủ công.
Hermes làm trong 30 giây. Và nhớ mãi."
```
*— Chủ doanh nghiệp thép, sau tuần 2 sử dụng Hermes*

**Bottom strip (3 mini-stats):**
- ⏱ Tiết kiệm 4 giờ/tuần
- 📄 1 skill = 1 quy trình tự động
- 📱 Qua Telegram

**Component:** `src/components/hermes/JobToBeDone.astro`

---

## 3. THREE PROMISES — Bạn nói, Hermes làm

**Layout:** Grid 3 col, mỗi card có icon + heading + body ngắn

**H2 section:**
```
Bạn nói — Hermes làm
```

**Card 1:**
- Icon: 💬 (hoặc SVG bubble)
- **"Bạn nói — Hermes làm"**
- Body: *"Tạo báo giá cho khách A, gửi email và nhắc hẹn tuần sau" — một câu, không chat vòng vo.*

**Card 2:**
- Icon: 🔁 (skill loop)
- **"Tự tiến hóa qua skill"**
- Body: *Mỗi lần làm đúng → đóng gói thành skill → lần sau chạy lại. Giống đào tạo nhân viên mới — nhưng nhanh hơn.*

**Card 3:**
- Icon: 📲
- **"Ra lệnh qua Telegram & WhatsApp"**
- Body: *Hermes trực trên server. Bạn gửi tin nhắn từ điện thoại — nó làm việc, gửi kết quả lại. Không cần mở máy.*

**Component:** `src/components/hermes/ThreePromises.astro`

---

## 4. LIVE DEMO — Telegram chat animation

**Đây là phần "wow" chính của trang. Phải build kỹ.**

**Background:** Navy deep `#0E1621` full width
**Padding:** 96px top/bottom
**Container:** max-width 1000px center

**Eyebrow (cam):** `⚡ LIVE DEMO`

**H2 (white):**
```
Một câu nói trên Telegram —
toàn bộ quy trình tự chạy.
```

**Sub (white/60):**
```
Bạn nhắn — Hermes làm việc — gửi kết quả lại. Không cần mở máy, không cần học code.
```

### 4.1 Telegram Chat Simulator (auto-play)

**Khung Telegram** (giống Hero nhưng to và đầy đủ hơn):
- Width: max 480px center
- Height: ~620px
- Bg `#0E1621`
- Border-radius 20px
- Shadow xl cam mờ outer
- Border subtle 1px white/5

**Telegram header** (bg `#17212B`, padding 14px 18px):
- ← back arrow (white/60)
- Avatar 40px tròn bg cam → icon 🪶 trắng (hoặc Hermes logo SVG)
- Right of avatar:
  - `Hermes Bot` (white bold 15px)
  - `● online` (emerald-400, 11px, dot blink)
- Far right: 3 dots menu icon (white/40)

**Body chat** (background pattern subtle dots, scrollable):
- Padding 14px
- Space-y-3
- Auto scroll to bottom khi có message mới

### 4.2 Kịch bản chat — Auto-play với typing indicators

| T (giây) | Hiện gì |
|---|---|
| 0 | **User bubble** (cam, align right): *"Tạo báo giá cho Cty Thép Bình Minh — 100 cây thép hộp 50×50"* + timestamp 08:42 |
| 1.5 | **Typing indicator** Hermes (3 dots cam pulse trong bubble navy-soft) |
| 3 | **Hermes bubble** (navy-soft, align left, có avatar 🪶): *"Đang tra cứu KH-042 + bảng giá thép hộp hôm nay..."* |
| 4.5 | **Typing** lần 2 |
| 6 | **Hermes bubble** multi-line: <br>*"✓ Tìm thấy KH-042 — Cty Thép Bình Minh*<br>*✓ Bảng giá hôm nay: 1.865.000₫/cây"* |
| 7.5 | **Hermes bubble**: *"💰 Tính: 100 × 1.865.000 = 186.500.000₫*<br>*Áp CK 3% (khách VIP) → **180.905.000₫**"* |
| 9 | **Typing** lần 3 |
| 10.5 | **Hermes bubble** với file attachment card: *"📄 BG-20260624.docx — Báo giá đã sẵn sàng. Anh duyệt em gửi email?"* |
| 12 | **User bubble** (cam): *"OK gửi"* |
| 13 | **Typing** ngắn |
| 14 | **Hermes bubble** với success state: *"✅ Email gửi tới khient@binhminhsteel.vn*<br>*🗓 Đặt lịch nhắc: gọi lại 30/06*<br>*📌 Đã lưu skill 'Báo giá thép' — lần sau chạy nhanh hơn."* |
| 16 | **Footer caption** fade-in dưới khung: *"⏱ Từ lệnh đến hoàn thành: 16 giây — anh không động ngón tay"* |
| 21 | Pause 5s rồi clear → restart loop |

**Style chi tiết các bubble:**

- **User bubble:**
  - bg `#F26C2C`
  - text white 14px
  - rounded-2xl, rounded-br-md (đuôi nhỏ phía dưới phải)
  - max-width 78%
  - padding 10px 14px
  - timestamp white/50 11px dưới text, align right

- **Hermes bubble:**
  - bg `#2A3D5F`
  - text white 14px
  - rounded-2xl, rounded-bl-md (đuôi nhỏ phía dưới trái)
  - Avatar 🪶 26px tròn cam đứng cạnh bên trái
  - max-width 78%
  - padding 10px 14px

- **File attachment card** (trong Hermes bubble):
  - Inner box bg white/8, border white/15, rounded-lg
  - Icon 📄 cam + tên file mono white + size gray
  - Tap state hover hiển thị "Tap to preview"

- **Success bubble (cuối):**
  - Background gradient nhẹ navy → green tinge
  - Icons ✅ 🗓 📌 đứng đầu mỗi dòng

- **Typing indicator:**
  - 3 dots cam (`#F26C2C`), 6px diameter
  - Pulse animation 1.4s scale 0.7 → 1.2
  - Stagger delay 0.2s mỗi dot
  - Trong bubble navy-soft nhỏ, max-width 70px

### 4.3 Input footer (cosmetic, không function)

Bg `#17212B`, padding 12px 16px:
- Left icon 📎 (attachment, white/40)
- Placeholder text white/30: `Message Hermes...`
- Right: button mic 🎤 hoặc send ➤ (bg cam, 32px tròn)

### 4.4 Bottom caption (dưới khung Telegram)

```
Output thật từ Hermes Agent — một lệnh, toàn bộ quy trình tự hoàn tất qua Telegram.
```
Style: italic gray-400, font 14px, text-center, max-width 600px

**Component:** `src/components/hermes/LiveDemoChat.tsx` (React + setTimeout queue)

**Animation logic chi tiết:**
- Dùng `setTimeout` chuỗi với `Promise` await
- IntersectionObserver: chỉ bắt đầu khi scroll vào viewport (threshold 0.3)
- `prefers-reduced-motion`: hiện full chat ngay không animate
- Sau loop cuối: clear DOM rồi restart sau 5s
- Auto-scroll to bottom mỗi message mới (smooth)

---

## 5. STORY — 2 sai lầm

**Background:** white
**Container:** max-width 800px (narrower for readability)

**Eyebrow:** `📖 BẰNG CHỨNG`

**H2:**
```
2 sai lầm trước khi tôi tìm ra Hermes
```

**Sub:**
```
Tôi từng nghĩ 10X là làm gấp đôi. Rồi tôi nghĩ AI sẽ giải phóng mình. Cả hai đều sai.
```

### 5.1 Sai lầm 1 · 10X

**Card layout (border-l-4 cam, padding 24px, bg gray-50):**

**Heading:** `Sai lầm 1 · 10X`

**Body:**
> *"Muốn lớn 10 lần, đừng tối ưu cái cũ."*
>
> Thêm KPI, thêm cuộc họp — tôi chỉ làm nhanh hơn guồng quay, không thoát khỏi nó.

**Link đáy card (cam underline):**
`→ Đọc bài "10X: Đừng tối ưu cái cũ"` → link tới blog post

### 5.2 Sai lầm 2 · AI Trap

**Card layout giống Card 1:**

**Heading:** `Sai lầm 2 · AI Trap`

**Body:**
> AI không giải phóng tôi — nó biến tôi thành nô lệ nhanh hơn.
>
> Dùng AI cho mọi thứ, năng suất tăng vọt, nhưng kiệt sức sau 6 tháng.
>
> Thứ tôi cần không phải chatbot — mà một agent **biết làm**.

**Link đáy:**
`→ Đọc bài "AI biến bạn thành nô lệ nhanh hơn"` → link tới blog post

**Component:** `src/components/hermes/TwoMistakes.astro`

---

## 6. SO SÁNH — 3 cấp độ AI

**Background:** gray-50
**Container:** max-width 1200px

**Eyebrow:** `SO SÁNH`

**H2:**
```
Ba cấp độ AI trong doanh nghiệp
```

**Sub:**
```
Hầu hết doanh nghiệp đang ở cấp 1 hoặc 2. Hermes đưa bạn lên cấp 3.
```

**Grid 3 cột (mỗi cột là 1 card, cao bằng nhau):**

### Card 1 — Cấp 1: Chatbot Q&A

**Visual cue:** gray, opacity nhẹ, ✗ icons
- **Heading:** `Chatbot Q&A`
- **Sub:** *Trả lời — bạn tự làm tiếp*
- Bullets (✗ red):
  - Trả lời câu hỏi
  - Không nhớ doanh nghiệp bạn
  - Không tạo file, không gửi email

### Card 2 — Cấp 2: Co-working Assistant

**Visual cue:** medium tone, mix
- **Heading:** `Co-working Assistant`
- **Sub:** *Code cùng — cần bạn mở máy*
- Bullets (~ gray):
  - Code, script, terminal
  - Chạy trên máy bạn — tắt là mất
  - Không nhớ quy trình, không skill

### Card 3 — Cấp 3: Execution Agent (HIGHLIGHTED)

**Visual cue:** card bg navy, border cam, glow nhẹ, badge "★ HERMES AGENT" góc trên
- **Heading:** `Execution Agent`
- **Sub:** *Thực thi — nhớ — tiến hóa*
- Bullets (✓ cam):
  - Hoàn thành việc từ đầu đến cuối
  - 24/7 — ra lệnh qua Telegram/WhatsApp
  - Nhớ quy trình — skill tự học
  - Tạo file, gửi email, CRM

**Component:** `src/components/hermes/ThreeLevels.astro`

---

## 7. CHƯƠNG TRÌNH HỌC — 6 module

**Background:** white
**Container:** max-width 1100px

**Eyebrow:** `CHƯƠNG TRÌNH HỌC`

**H2:**
```
6 module — 1 tháng — từ 0 đến tự động hoá
```

**Sub:**
```
Không lý thuyết suông. Mỗi module kết thúc bằng một output có thể dùng ngay.
```

**Timeline visual 6 step (grid 3x2 desktop, stack mobile):**

**Module 1**
- **Số:** 1 (cam Fraunces 48px)
- **Title:** Cài đặt và chạy Hermes lần đầu
- **Body:** *Không cần code. Chạy được ngay trong 15 phút.*

**Module 2**
- **Số:** 2
- **Title:** Ra lệnh tự nhiên — hiểu Hermes trả lời gì
- **Body:** *Prompt engineering cho CEO: tư duy hệ thống, không cần kỹ thuật.*

**Module 3**
- **Số:** 3
- **Title:** Tạo skill đầu tiên: báo giá, blog, email
- **Body:** *Dạy Hermes một quy trình — nó nhớ mãi.*

**Module 4**
- **Số:** 4
- **Title:** Kết nối công cụ: CRM, Telegram, file server
- **Body:** *Hermes dùng được terminal và API — không chỉ chat.*

**Module 5**
- **Số:** 5
- **Title:** Tự động hoá quy trình lặp
- **Body:** *Viết báo giá hàng ngày. Kiểm tra server mỗi sáng. Gửi báo cáo tuần.*

**Module 6**
- **Số:** 6
- **Title:** Xây hệ thống cho doanh nghiệp 1 người
- **Body:** *Áp dụng bài học từ 10X + AI trap: hệ thống trước, AI sau.*

**Card style:**
- Border 1px gray-200
- Padding 24px
- Hover: lift 4px + shadow + border cam

**Component:** `src/components/hermes/CurriculumGrid.astro`

---

## 8. PRICING — 3 gói

**Background:** gray-50
**Container:** max-width 1200px

**Eyebrow:** `CHỌN GÓI`

**H2:**
```
3 cách để sở hữu Hermes
```

**Sub:**
```
Từ dùng thử đến full hệ thống — chọn gói phù hợp với bạn.
```

**Grid 3 col (Pricing cards):**

### Card 1 — STARTER

- Style: bg white, border gray-200, padding 32px
- **Price:** 699.000₫ (Fraunces 48px navy)
- **Sub price:** *Một lần*
- **Bullets ✓:**
  - Hermes Agent — giữ mãi
  - 3 module học cơ bản
  - Skill pack: báo giá + blog
  - Telegram group hỗ trợ
- **Footnote (gray-500 13px):** *Sau đăng ký: email hướng dẫn trong 5 phút. Cài Hermes xong trong 15 phút.*
- **CTA:** `[Chọn gói Starter →]` (button outline)

### Card 2 — PRO (HIGHLIGHTED — "🔥 Best Value")

- Style: bg navy `#1A2B4A`, text white, scale 1.04, shadow lớn
- Badge top: `🔥 Best Value` (orange pill)
- **Price:** 999.000₫ (Fraunces 56px cam)
- **Sub price:** *Một lần — phổ biến nhất*
- **Bonus box (cam-soft trên nền navy):**
  ```
  🎁 Bonus hôm nay: Skill pack "Email tự động cho CEO" — trị giá 499k
  ```
- **Bullets ✓:**
  - Hermes Agent — giữ mãi
  - 6 module đầy đủ + tài liệu
  - Skill pack: báo giá, blog, email, server check
  - Skill pack bonus: Email tự động
  - Telegram group + 1:1 David Tùng
  - Cập nhật trọn đời
  - 🛡️ 30 ngày hoàn tiền
- **Footnote:** *Sau đăng ký: email hướng dẫn + Telegram group trong 5 phút.*
- **CTA:** `[Chọn gói Pro →]` (button cam đầy đủ, lớn)

### Card 3 — ENTERPRISE

- Style: bg white, border purple-300, padding 32px
- Badge top: `FULL SYSTEM` (purple pill)
- **Price:** 1.999.000₫ (Fraunces 48px purple)
- **Sub price:** *Một lần — full system*
- **Bullets ✓:**
  - Mọi thứ trong gói Pro
  - Server Hermes 24/7 (setup sẵn)
  - Tích hợp CRM + email doanh nghiệp
  - Skill tùy chỉnh theo quy trình riêng
  - Hỗ trợ 1:1 priority — David Tùng
  - 🛡️ 30 ngày hoàn tiền
- **Footnote:** *Sau đăng ký: tôi liên hệ bạn trong vòng 24h để setup server.*
- **CTA:** `[Chọn gói Enterprise →]` (button purple)

**Compare hint dưới 3 card:**
`Không chắc chọn gói nào? [Trò chuyện với David 15 phút →]`

**Component:** `src/components/hermes/PricingCards.astro`

---

## 9. FAQ + GUARANTEE (gọn lại)

**Background:** white
**Container:** max-width 720px

**H2:**
```
Câu hỏi thường gặp
```

**8 câu (accordion):**

1. **"Tôi không biết code — học được không?"**
   Hoàn toàn được. Hermes dạy cách giao tiếp bằng tiếng Việt tự nhiên qua Telegram. Module 1 cài đặt xong trong 15 phút.

2. **"Tôi đã dùng ChatGPT — khóa này khác gì?"**
   ChatGPT trả lời. Hermes làm. Đây là khác biệt giữa "AI-user" và "AI-operator".

3. **"Có hoàn tiền không?"**
   Có. 30 ngày hoàn 100%, không cần lý do.

4. **"Sau khóa tôi nhận được gì cụ thể?"**
   Hermes Agent giữ mãi + 6 module video + 4 skill pack đã setup sẵn + Telegram group.

5. **"Chi phí AI hàng tháng sau khóa khoảng bao nhiêu?"**
   Khoảng 200k–500k/tháng cho 1 Solo CEO chạy 3–5 skill. Module 1 dạy bạn cách tối ưu.

6. **"Tôi có thể chạy Hermes trên máy mình không?"**
   Có (gói Starter + Pro) hoặc trên server riêng (gói Enterprise — David setup sẵn).

7. **"Tôi không có CRM — vẫn dùng được không?"**
   Được. Hermes dùng Google Sheets + Email cũng đủ cho hầu hết quy trình.

8. **"Tôi có thể nâng cấp gói sau không?"**
   Được. Pay chênh lệch — không trừ trợ giá.

**Guarantee box (cuối FAQ):**

```
🛡️ Cam kết của tôi

✓ Hoàn 100% trong 30 ngày — không cần lý do.
✓ Không setup được Hermes trong tuần 1 → tôi tự hỗ trợ 1:1 đến khi chạy.
```

---

## 10. FINAL CTA

**Background:** Navy
**Padding:** 96px
**Center align**

**H2 (white):**
```
Bạn đang chat với AI hàng giờ.
Hermes làm việc thay bạn.
```

**Sub (white/70):**
```
Cài đặt trong 15 phút. Hoàn tiền trong 30 ngày. Không lý do.
```

**Pricing recap (3 mini cards trong navy):**
- 699k Starter
- 999k Pro ★
- 1.999k Enterprise

**CTA primary (lớn):** `[Bắt đầu với gói Pro — 999k →]`

**Underneath:** `Chưa sẵn sàng? [Trò chuyện với David 15 phút miễn phí →]`

---

## 11. FOOTER (minimal)

3 col: Brand · Hermes links · Legal — giữ như spec cũ.

---

## 12. ANIMATION GUIDELINES (đơn giản hóa)

- Scroll-trigger fade-up nhẹ (default 0.6s)
- **Live Demo (Section 4):** Telegram chat auto-play với typing indicator, loop sau 5s nghỉ — trigger khi vào viewport
- **Hero chat (Section 1.1):** static — chỉ typing dots cuối cùng pulse chậm, không animate gì khác
- 3 Promises cards: stagger fade khi vào viewport
- Pricing card hover lift 4px
- Bỏ tất cả: org chart phức tạp, multi-panel simulator, hexagon glow phức tạp

**Lý do bỏ:** giảm visual noise, tập trung copy + 1 demo Telegram chính. Trang phải LOAD NHANH và đọc dễ.

---

## 13. CHANGES SO VỚI v1.0 (file 13)

| Khoản | v1.0 (cũ) | v2.0 (mới) |
|---|---|---|
| **Giá** | 4.9M – 49M | 699k – 1.999k |
| **Tông** | Editorial, contrarian | Trực diện, đơn giản |
| **H1 Hero** | "Đây không phải khóa AI..." | "Bạn đang chat với AI hàng giờ — mà vẫn tự làm hết?" |
| **Số module** | 8 tuần (cohort) | 6 module (self-paced) |
| **Demo** | 2 chat simulators + org chart | 1 Telegram chat simulator duy nhất (giữ phong cách Telegram nhưng kịch bản đơn giản hơn) |
| **Filter section** | "Ai KHÔNG nên đọc" dài | Inline 2 dòng ở Hero |
| **Story** | 800 chữ editorial | 2 sai lầm ngắn + link blog |
| **Cohort/format** | Cohort 8 tuần, 30 chỗ Founding | Self-paced, mua xong dùng ngay |
| **Top tier** | "David build agent" 49M | "Server setup + integrations" 1.999k |

---

## 14. ANTI-PATTERN — KHÔNG LÀM

- ❌ Tông editorial dài dòng kiểu blog cao cấp
- ❌ Hexagon glow animation
- ❌ Org chart 5-agent phức tạp (bỏ ở v2)
- ❌ Multi-panel chat simulator (giữ 1 terminal là đủ)
- ❌ Countdown timer giả
- ❌ Popup exit-intent
- ❌ Stock photo
- ❌ Hứa "X10" mơ hồ — chỉ hứa "tiết kiệm 4 giờ/tuần" + "30 giây xong báo giá"

---

## 15. DEFINITION OF DONE

- [ ] `npm run build` không lỗi
- [ ] Mobile 375px không tràn
- [ ] Hero chat mock-up Telegram hiển thị đúng dark mode (bubble cam-navy)
- [ ] Live Demo Telegram chat auto-play đúng 21s timeline, loop sau 5s nghỉ
- [ ] Typing indicator 3 dots pulse đúng nhịp 1.4s
- [ ] Avatar 🪶 hoặc Hermes SVG logo hiển thị đúng cạnh Hermes bubble
- [ ] 3 pricing cards căn đều chiều cao
- [ ] FAQ accordion keyboard navigable
- [ ] OG image cập nhật theo positioning mới
- [ ] Reading time tag: 5 phút đọc (giảm từ 12 phút bản cũ — vì đã đơn giản hóa)

---

**Hết spec.** Phiên bản này nhẹ hơn, dễ hiểu hơn, giá thấp hơn — mở rộng được audience từ founder solo siêu nhỏ đến chủ doanh nghiệp tầm trung. Build từ Section 0 → 11 theo thứ tự, demo terminal là phần wow chính.