# Hermes v2.0 Sales Page — Design Spec

**Date:** 2026-06-23
**Route:** `/hermes-v2` (new). Old `/hermes` (v1.0) remains untouched.
**Source spec:** `docs/hermes-landing.md` (v2.0 — "Simple Version v2")

## Goal

Build the Hermes v2.0 sales page from `docs/hermes-landing.md`: an Execution Agent (not chatbot) positioning, low pricing (699k–1.999k), with a Telegram chat as the hero visual and an animated live demo as the centerpiece. Mobile + desktop responsive. Motion and gradients are central to communicating the product.

## Locked decisions

| Decision | Choice |
|---|---|
| Route | New `/hermes-v2`. Old `/hermes` untouched. |
| Locale | Vietnamese only (no `/en` route). |
| Live demo | Full 21s scripted React timeline (IntersectionObserver, typing dots, auto-scroll, loop, reduced-motion fallback). |
| Fonts | Inter (body) + Fraunces (display) + JetBrains Mono (terminal) loaded via `<link>` in this page's head only. Global site fonts untouched. |
| CTAs | `href="#"` placeholders everywhere. No payment integration. |
| Anti-patterns | Follow spec §14: no editorial bloat, no hexagon glow, no countdown, no exit-intent, no stock photos, no vague "10X" promises. |

## Architecture

Follows AGENTS.md "New page workflow" (reuse → package sections → compose → route last). Page implementation lives under `src/components/pages/hermes-v2/`; route file stays thin.

```
src/pages/hermes-v2.astro                        # thin route → HermesV2Page
src/components/pages/hermes-v2/
  HermesV2Page.astro                             # page composition + inline content data
  HeroSection.astro                              # §1 hero
  HeroChatPreview.astro                          # §1.1 static Telegram mockup
  JobToBeDone.astro                              # §2 comparison + pull quote + stats
  ThreePromises.astro                            # §3 three cards
  LiveDemoSection.astro                          # §4 wrapper (navy bg, copy)
  LiveDemoChat.tsx                               # §4.1–4.4 React island — the "wow"
  TwoMistakes.astro                              # §5 story cards + blog links
  ThreeLevels.astro                              # §6 three-tier comparison
  CurriculumGrid.astro                           # §7 six modules
  PricingCards.astro                             # §8 three pricing tiers
  FaqGuarantee.astro                             # §9 accordion + guarantee box
  FinalCta.astro                                 # §10 navy final CTA
  RevealOnScroll.astro                           # shared scroll fade-up wrapper
```

Footer (§11): reuse the existing site `Footer.astro` rather than a bespoke one, to keep the page consistent with the rest of the site. The spec says "minimal, 3 col" — the site footer already satisfies this.

## Styling approach

- **Tailwind utilities first** (CLAUDE.md/AGENTS.md hard rule). No scoped CSS blocks except keyframes for the existing SVG flow-line pattern, which we are not reusing here. All layout/spacing/typography via Tailwind.
- **Spec brand colors** mapped to Tailwind:
  - Orange `#F26C2C` → reuse existing `--primary` token (`orange-600` family) where it fits; arbitrary `bg-[#F26C2C]` only where exact value matters (user bubble).
  - Navy `#1A2B4A` → `slate-900`/arbitrary `bg-[#1A2B4A]` for Pro card.
  - Navy-deep `#0E1621` → arbitrary `bg-[#0E1621]` for Telegram body + Live Demo + Final CTA sections.
  - Navy-soft `#2A3D5F` → arbitrary `bg-[#2A3D5F]` for Hermes bubbles.
  - Telegram header `#17212B` → arbitrary `bg-[#17212B]`.
  - Arbitrary values are justified here: these are brand-specific hex values from the spec with no standard Tailwind equivalent.
- **Fonts** (scoped per-element, not global):
  - Display headings: `font-['Fraunces']`.
  - Body: `font-['Inter']` (set on page root).
  - Terminal/file names: `font-['JetBrains_Mono']`.
- **Gradients:**
  - Hero: radial orange glow (mirror existing home-page pattern) over white.
  - Live Demo + Final CTA: solid navy-deep `#0E1621` full-width sections.
  - Success bubble (final demo message): `bg-gradient-to-br` navy → green tinge.
  - Pro pricing card: navy `#1A2B4A` with orange glow shadow.
- **Responsive:** every multi-column layout stacks via `lg:grid-cols-*` → single column on mobile. Hero verified at 320px/390px. Telegram mockup: 9:16 desktop, 4:5 mobile.

## LiveDemoChat.tsx — the centerpiece

React 19 island, directive `client:visible` (hydrates only when scrolled to → fast initial load per spec §12).

**Scripted timeline** (spec §4.2):

| T (s) | Event |
|---|---|
| 0 | User bubble (orange, right): "Tạo báo giá cho Cty Thép Bình Minh — 100 cây thép hộp 50×50" + 08:42 |
| 1.5 | Typing indicator (3 orange dots, 1.4s pulse, 0.2s stagger) |
| 3 | Hermes bubble: "Đang tra cứu KH-042 + bảng giá thép hộp hôm nay..." |
| 4.5 | Typing |
| 6 | Hermes bubble (multi-line): "✓ Tìm thấy KH-042... ✓ Bảng giá hôm nay: 1.865.000₫/cây" |
| 7.5 | Hermes bubble: "💰 Tính: 100 × 1.865.000 = 186.500.000₫ ... → 180.905.000₫" |
| 9 | Typing |
| 10.5 | Hermes bubble + file attachment card: "📄 BG-20260624.docx..." |
| 12 | User bubble: "OK gửi" |
| 13 | Typing (short) |
| 14 | Hermes success bubble (navy→green gradient): "✅ Email gửi... 🗓 Đặt lịch... 📌 Đã lưu skill..." |
| 16 | Footer caption fade-in: "⏱ Từ lệnh đến hoàn thành: 16 giây..." |
| 21 | 5s pause → clear → restart loop |

**Mechanics:**
- `setTimeout`/Promise queue drives the sequence.
- `IntersectionObserver` (threshold 0.3) starts playback only when the section enters viewport.
- Auto-scroll to bottom (smooth) on each new message.
- `prefers-reduced-motion`: render full final chat state immediately, no animation, no loop.
- Telegram chrome: header (← arrow, avatar 🪶, "Hermes Bot", online dot blink, 3-dot menu), scrollable dotted-background body, cosmetic input footer (📎, placeholder "Message Hermes...", send ➤).
- Bubble variants: user (orange `#F26C2C`, right, `rounded-br-md`), Hermes (navy-soft `#2A3D5F`, left, `rounded-bl-md`, avatar), file attachment card (inner `bg-white/8 border-white/15`), success bubble (navy→green gradient).

## Motion (beyond the demo)

- **RevealOnScroll.astro:** shared wrapper using IntersectionObserver + a small inline `<script>` that toggles Tailwind `opacity-0 translate-y-4` → `opacity-100 translate-y-0`. Default 0.6s. Respects `prefers-reduced-motion` (shows immediately). No new CSS classes.
- **Three Promises cards:** staggered fade via incremental transition-delay.
- **Pricing cards:** hover lift 4px (`hover:-translate-y-1 hover:shadow-xl`).
- **Hero chat:** static except typing-dots pulse.

## Section-by-section (mirrors spec §1–§11)

1. **Hero** — grid 12-col (text 1–7 / demo 8–12 on desktop). Eyebrow, H1 (Fraunces 56/36), subline, two filter lines (✓/✗), CTA row, trust line, channel badges. Right column = `HeroChatPreview` static Telegram mockup.
2. **Job To Be Done** — eyebrow, H2, sub, 2-col comparison (red ✗ Q&A vs green ✓ execution), pull quote, 3 mini-stats strip.
3. **Three Promises** — 3 cards (💬 bạn nói-Hermes làm / 🔁 tự tiến hóa / 📲 ra lệnh qua Telegram).
4. **Live Demo** — navy-deep full-width. `LiveDemoChat.tsx` + bottom caption.
5. **Two Mistakes** — 2 cards (10X / AI Trap), each with blog link.
6. **Three Levels** — 3-col comparison; Cấp 3 (Execution Agent) highlighted (navy bg, orange border, glow, "★ HERMES AGENT" badge).
7. **Curriculum** — 6 modules in 3×2 grid (stack mobile), big Fraunces numerals, hover lift.
8. **Pricing** — 3 cards (Starter 699k / Pro 999k highlighted / Enterprise 1.999k). Pro = navy bg, "🔥 Best Value" badge, bonus box. Equal height.
9. **FAQ + Guarantee** — 8-question accordion (native `<details>` for keyboard nav), guarantee box.
10. **Final CTA** — navy section, H2, sub, 3 mini pricing recap, primary CTA, secondary "talk to David" link.
11. **Footer** — reuse site `Footer.astro`.

## Verification plan

- `npm run build` passes (repo Node path: `PATH=/home/tungphan/.local/node22/bin:$PATH npm run build`; on macOS, any Node ≥22.12).
- Browser check desktop + mobile (375px/390px): hero fits, no horizontal overflow, Telegram bubbles render in dark mode (orange/navy), typing dots pulse at 1.4s, pricing cards equal height, FAQ accordion keyboard-navigable, Live Demo auto-plays the 21s timeline and loops.

## Out of scope (YAGNI)

- No bilingual `/en/hermes-v2` route.
- No payment/checkout integration (CTAs are `href="#"`).
- No custom OG image (BaseHead default remains).
- No changes to global fonts, tokens, or other pages.
- No reuse of the old `HermesInteractiveLab.tsx` or org-chart pattern (spec §14 explicitly drops these).
