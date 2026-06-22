# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is an Astro project. Use Node 22 from the local toolchain (the repo was built on this path):

```bash
PATH=/home/tungphan/.local/node22/bin:$PATH npm install
PATH=/home/tungphan/.local/node22/bin:$PATH npm run dev      # local dev server
PATH=/home/tungphan/.local/node22/bin:$PATH npm run build    # production build — MUST pass before reporting done
PATH=/home/tungphan/.local/node22/bin:$PATH npm run preview  # preview built site
```

There is no lint or test script. Verification = `npm run build` passes, plus visual inspection of desktop + mobile for rendered UI changes (check for unreadable text, broken animation, missing button text, overlapping layers, horizontal overflow).

If the local Node 22 path above isn't available (e.g. on macOS), use any Node `>=22.12.0` — the `engines` field in `package.json` enforces the minimum.

## Architecture

Astro 6 + Tailwind v4 (via `@tailwindcss/vite`) + React 19 islands. Content collections for the blog. Deployed to Vercel.

### Bilingual i18n (critical — do not break)

Two locales: `vi` (default) and `en`. Configured in `astro.config.mjs` and `src/i18n.ts`.

- Vietnamese lives at root paths: `/`, `/blog/`, `/blog/<slug>/`, `/about`, `/projects/<name>`
- English lives under `/en/...`: `/en/`, `/en/blog/`, `/en/blog/<slug>/`, `/en/about`, `/en/projects/<name>`
- `localizePath(path, locale)` from `src/i18n.ts` is the single source of truth for building locale-aware URLs. `vi` paths have no prefix; `en` paths are prefixed with `/en`.
- `getAlternateLinks(pathname)` produces the locale switcher links for any page.
- Do not change route slugs, locale folders, or bilingual URL structure without explicit approval.

### Blog content collection

Defined in `src/content.config.ts`. Files live under `src/content/blog/{vi,en}/<slug>.{md,mdx}`. The locale is encoded by the **first path segment of the entry `id`**, not by frontmatter.

`src/lib/blog.ts` provides the helpers that make this work — use them instead of re-deriving:
- `getBlogLocale(post)` — extracts locale from `post.id`
- `getBlogSlug(post)` — strips the locale prefix to get the bare slug
- `getBlogPath(post, locale?)` — full localized URL
- `getBlogPosts(locale)` — all posts for a locale, sorted by `pubDate` desc
- `getBlogStaticPaths(locale)` — feeds `getStaticPaths()` in `[...slug].astro` pages

The Vietnamese slug page is `src/pages/blog/[...slug].astro`; the English one is `src/pages/en/blog/[...slug].astro`. Both delegate to the shared `src/layouts/BlogPost.astro`.

Frontmatter schema: `title`, `description`, `pubDate` (coerced to Date), optional `updatedDate`, optional `heroImage` (Astro image() — processed by sharp).

### Page composition

Route files under `src/pages/` are thin wrappers that pull locale + props and hand them to shared page components under `src/components/pages/` (e.g. `HomePage.astro`, `BlogIndexPage.astro`, `AboutPage.astro`, `SimplamoProjectPage.astro`). When building a new route, add the shared page component under `src/components/pages/` and keep the `.astro` route file minimal — this is the existing pattern, not a place to inline page logic.

### Styling rules (enforced — see AGENTS.md / .cursor/rules/ui-development.mdc)

- **Tailwind utilities first.** Do not add scoped CSS blocks or one-off CSS classes for layout, spacing, typography, cards, badges, buttons, grids, or responsive behavior. If Tailwind can express it, use Tailwind.
- Avoid arbitrary values (`text-[clamp(...)]`, `w-[37px]`) unless there's a clear design need and no standard utility fits.
- Reusable primitives live in `src/components/ui/` (`ButtonLink`, `Card`, `Badge`, `ProofStatsStrip`). Add new shared patterns there rather than duplicating.
- Prioritize **shadcn/ui** component patterns, translated to Astro with semantic tokens. Add React islands (in `src/components/motion/` and `src/components/blog/`) only when client-side JS is genuinely required — e.g. `HomeMotion.tsx`, `AiAgentPlaygrounds.tsx`.
- For premium motion, prefer **Magic UI** patterns.
- shadcn-style semantic tokens are defined in `src/styles/global.css`: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--ring`, `--radius`, plus `--accent`, `--shadow-soft`, `--shadow-card`, `--container`. The brand accent is orange (`--primary: 234 88 12`). The body has a radial accent gradient + a fixed dot-grid overlay — preserve this when refactoring layouts.
- Every multi-column / visual layout must include explicit mobile behavior via Tailwind responsive variants. Verify mobile hero sections at 320px and 390px.
- Don't change fonts, global heading styles, or typography tokens as a side effect of a component task.

### Animation / layering

When refactoring components with hover, marquee, tilt, or animated-background behavior, verify the interaction still works afterward. Animated backgrounds must not be blocked by foreground wrappers — use `z-index`, `pointer-events`, and layering intentionally so hover effects still receive pointer movement. Motion should respect `prefers-reduced-motion`.

## Product context

Thanh Tung / David Tung's personal business website (see `PRODUCT.md`, `DESIGN.md`, `DESIGN.json`). Audience: Vietnamese CEOs/founders + people learning AI/product/engineering. Brand voice: modern, technological, clear — agency + executive coaching, not a personal blog or generic consultant site. Success = a qualified visitor quickly sees the expertise, trusts the proof, and sees the path to advisory/coaching/implementation work.

## Submodules

`.impeccable` is a git submodule (https://github.com/pbakaus/impeccable). Run `git submodule update --init` on fresh clones if needed.
