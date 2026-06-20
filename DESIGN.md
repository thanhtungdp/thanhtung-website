---
name: Thanh Tung Personal Website
description: A modern operator-led brand system for executive AI, strategy, and product coaching.
colors:
  signal-orange: "#ea580c"
  signal-orange-soft: "#ffedd5"
  deep-operator-ink: "#0a0a0a"
  dark-signal-hover: "#083344"
  field-white: "#ffffff"
  quiet-canvas: "#fafafa"
  muted-panel: "#f5f5f5"
  disciplined-border: "#e5e5e5"
  executive-gray: "#525252"
  technical-teal: "#14b8a6"
  soft-teal-field: "#ccfbf1"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0"
rounded:
  sm: "8px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.dark-signal-hover}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.deep-operator-ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
  card-surface:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.deep-operator-ink}"
    rounded: "{rounded.lg}"
    padding: "20px"
  badge:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.signal-orange}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: Thanh Tung Personal Website

## 1. Overview

**Creative North Star: "Operator Intelligence Field"**

This system should feel like a field of executive signals: personal enough to carry Thanh Tung's point of view, but structured like a modern agency that can advise, coach, and build. The interface combines quiet white surfaces, sharp black ink, orange signal accents, and technical grid motion to make strategy, AI, product, and operating rhythm feel connected.

The brand is not a pure personal blog. It should present writing, projects, services, and proof as parts of one operator-led practice. The visual language can be monochrome and restrained at the base, but it needs enough optical pattern, motion, and saturated orange to feel technologically alive.

**Key Characteristics:**
- Executive clarity with fast-scannable hierarchy.
- Personal voice wrapped in agency-grade structure.
- White and black as the field, orange as the signal.
- Optical grid and hover motion as proof of technical fluency.
- Real project imagery and metrics before abstract claims.

## 2. Colors

The palette is a restrained monochrome field with a committed orange signal and occasional teal technical energy.

### Primary

- **Signal Orange**: The main action, proof, and emphasis color. Use it for primary CTAs, active language toggles, badges, project metadata, and short navigational affordances.
- **Signal Orange Soft**: The supporting tint for proof panels, subtle marks, hover fields, and visual rhythm behind orange text. It should feel like signal glow, not a beige background.

### Secondary

- **Technical Teal**: A secondary motion and interaction accent used sparingly in animated border beams, hover grids, and AI/product moments. It should add technical energy without becoming a second brand color.
- **Dark Signal Hover**: The deep cyan-black hover state for primary CTAs and links. Use it when an interaction needs to feel more decisive than simply darkening orange.

### Neutral

- **Deep Operator Ink**: The primary text and dark-card surface. Use it for executive confidence, profile cards, and high-contrast headings.
- **Field White**: The dominant surface. It keeps the system clear, commercial, and bright.
- **Quiet Canvas**: The page background and low-pressure canvas. It should remain nearly white.
- **Muted Panel**: Secondary panels, code backgrounds, and quiet dividers.
- **Disciplined Border**: Hairline structure for cards, nav pills, badges, and separators.
- **Executive Gray**: Secondary copy, metadata, and subdued labels. Check contrast before using it on tinted fields.

### Named Rules

**The Orange Signal Rule.** Orange is the brand signal, not a wash. Use it for decisions, proof, and motion cues; do not flood entire pages with orange unless the section is intentionally campaign-like.

**The White Field Rule.** The site stays bright and precise. Do not drift into cream, sand, parchment, or warm blog-paper backgrounds.

## 3. Typography

**Display Font:** System sans stack with Segoe UI / platform fallbacks  
**Body Font:** System sans stack with Segoe UI / platform fallbacks  
**Label/Mono Font:** No separate mono system is established.

**Character:** The type system is direct, operator-like, and fast to scan. It uses weight, scale, and spacing rather than decorative font pairing to communicate authority.

### Hierarchy

- **Display** (700, 3rem to 3.75rem, line-height 1): Hero-scale messaging and major page promises. Keep tracking at 0 and avoid cramped display letter spacing.
- **Headline** (700, 2.25rem to 3rem, line-height 1.2-1.25): Section-level arguments such as projects, services, and latest writing.
- **Title** (700, 1.5rem, line-height 1.25): Card titles, article titles, and compact content groups.
- **Body** (400, 1.125rem, line-height 1.65): Long reading surfaces and page descriptions. Cap prose around 65-75ch.
- **Label** (800, 0.75rem to 0.95rem, line-height 1): Badges, metadata, language links, and project tags.

### Named Rules

**The No Blog Serif Rule.** Do not introduce an editorial serif or magazine typography just because the site has writing. The writing is part of an operator brand, not the whole brand.

**The One-Line Hero Caution.** Hero headings may stay compact, but narrow mobile widths must be tested so text never overflows the viewport.

## 4. Elevation

This system uses a hybrid of tonal layering, hairline borders, and ambient shadows. Surfaces should feel crisp and digital, with lift used for important cards and interactions rather than blanket decoration.

### Shadow Vocabulary

- **Soft Ambient** (`0 18px 60px rgb(15 23 42 / 0.08)`): Large soft context around cards and glass-like panels.
- **Card Lift** (`0 1px 2px rgb(15 23 42 / 0.06), 0 14px 44px rgb(15 23 42 / 0.08)`): Default card elevation for repeated surfaces.
- **Signal Button Glow** (`0 14px 34px rgb(234 88 12 / 0.22)`): Primary CTA emphasis only.
- **Dark Profile Depth** (`shadow-2xl shadow-neutral-950/20`): The dark executive card and high-emphasis surfaces.

### Named Rules

**The Border-Or-Shadow Discipline.** Avoid decorative border plus large soft shadow on every element. Use hairline borders for structure, shadows for priority and state.

**The Motion Carries Depth Rule.** Animated grid cells, tilt, reveal, count-up, and hover translation can create depth. Do not solve every hierarchy problem by adding another card shadow.

## 5. Components

### Buttons

- **Shape:** Full pill for CTAs and compact actions (999px radius).
- **Primary:** Signal Orange background, white text, bold label, 48px minimum height, compact horizontal padding.
- **Hover / Focus:** Primary buttons shift to Dark Signal Hover and move up 1px. Focus uses the ring token as a soft orange outline.
- **Secondary:** White translucent surface with neutral border and Deep Operator Ink text. It should feel like a serious alternative, not a disabled action.

### Chips

- **Style:** Pill-shaped, bold labels with white or soft-orange fields and hairline neutral borders.
- **State:** Chips are informational signals for domains, roles, services, and focus areas. Do not make them large decorative icons.

### Cards / Containers

- **Corner Style:** Soft but not cartoonish. Most cards sit between 16px and 24px radius.
- **Background:** White or near-white translucent surfaces over the field. Dark cards are reserved for executive profile or high-emphasis identity moments.
- **Shadow Strategy:** Use Card Lift for repeated project cards and Soft Ambient for important surface cards.
- **Border:** Hairline neutral borders provide the base structure.
- **Internal Padding:** Compact cards use 16-20px; larger profile or hero cards can use 32px on desktop.

### Inputs / Fields

- **Style:** No dedicated input system is established yet. Future fields should use a white field, neutral hairline border, 16px radius, and high-contrast placeholder text.
- **Focus:** Use the orange ring token with enough outline offset to remain visible against white surfaces.
- **Error / Disabled:** Not established. Add explicit states before shipping form-heavy surfaces.

### Navigation

- **Style:** Sticky, translucent white header with blur, hairline bottom border, logo on the left, pill navigation in the center, and language selector on the right.
- **Typography:** Bold compact labels, no uppercase tracking beyond short language codes.
- **Default / Hover / Active:** Default links are Executive Gray; hover adds Muted Panel; active state uses Field White with a small structural shadow. Language active state uses Signal Orange.
- **Mobile:** Navigation wraps into two rows, preserving logo and language selector above full-width page links.

### Signature Component: Interactive Operator Field

The home hero grid is a technical signature. It is a white optical field with pointer-reactive cells, orange/teal/yellow/blue glows, and slow drift motion. It should remain behind content, preserve pointer movement, and respect reduced-motion preferences.

### Signature Component: Tilt Profile Card

The dark profile card carries personal authority. It uses Deep Operator Ink, white text, orange status accents, responsive pointer tilt, a radial glow, and animated orange-to-teal border beams. Treat it as a signature identity surface, not a generic card.

## 6. Do's and Don'ts

### Do:

- **Do** lead with real systems, project imagery, metrics, and operating proof before abstract positioning.
- **Do** keep pages bright, structured, and high-contrast so busy CEOs can scan them quickly.
- **Do** use monochrome pattern, grid motion, and orange signal accents to make the brand feel modern, technological, and clear.
- **Do** preserve bilingual Vietnamese and English routes, language switching, and mobile behavior.
- **Do** use Tailwind utilities and shared Astro UI primitives when implementing new UI in this project.
- **Do** test animated backgrounds so foreground wrappers do not block pointer movement.

### Don't:

- **Don't** make this look like a pure personal blog. Writing is a proof channel, not the whole product.
- **Don't** turn the brand into a generic corporate consultant site or a soft SaaS landing page filled with template cards and vague claims.
- **Don't** drift into an only-editorial, only-minimal, or only-content-first design.
- **Don't** use repeated tiny uppercase section eyebrows as automatic scaffolding. Badges are allowed when they behave like brand signals, not template grammar.
- **Don't** add cream, sand, parchment, or beige blog-paper backgrounds.
- **Don't** use gradient text as a default emphasis pattern. The current X10 mark is a legacy exception to audit, not a general rule to copy.
- **Don't** hide real work behind decorative cards. If a section has projects, services, or coaching value, make the structure and proof visible.
