# Project Rules for AI Agents

These rules apply to all work in this Astro website repository.

## Repository architecture

- This is an Astro-first website using Astro pages, Astro components, Tailwind CSS v4, MD/MDX content collections, and React only for interactive islands.
- `src/pages/` owns routing. Route files should stay thin: import the right page component, pass `locale`, and avoid holding large UI or content blocks.
- The default locale is Vietnamese at root routes such as `/`, `/blog`, and `/projects/simplamo`. English routes live under `/en`, such as `/en`, `/en/blog`, and `/en/projects/simplamo`.
- Locale utilities live in `src/i18n.ts`. Use `defaultLocale`, `localizePath`, `getTranslations`, and locale types instead of hardcoding bilingual paths or labels.
- Full page implementations live under `src/components/pages/`. Shared page sections should be grouped by page/domain, for example `src/components/pages/home/`, `src/components/pages/hermes/`, and `src/components/pages/project-detail/`.
- Reusable UI primitives live under `src/components/ui/`. Prefer these before creating page-specific components.
- Site-level shell components live under `src/components/`, including `BaseHead`, `Header`, `Footer`, analytics, dates, and common navigation helpers.
- Blog content lives in `src/content/blog/{vi,en}/` and is typed by `src/content.config.ts`. Blog listing and filtering logic belongs in `src/lib/blog.ts`, not inside route files.
- Visual assets live in `src/assets/`, with project assets under `src/assets/projects/` and blog assets under `src/assets/blog/`. Import assets through Astro/Vite when components need optimized image metadata.
- Global styles and design tokens live in `src/styles/global.css`. Keep global CSS focused on tokens, base element behavior, and truly shared effects.

## New page workflow

Before writing a new page, think in this order and keep the implementation shaped the same way:

1. Reuse what already exists.
   - Search for similar routes, page components, section components, UI primitives, content helpers, and asset patterns before creating anything new.
   - Prefer `src/components/ui/` primitives and existing page-section patterns over new bespoke markup.

2. Package reusable pieces first.
   - If a section, card, stat row, hero pattern, gallery, CTA, content block, or motion pattern could appear again, extract it into a named component.
   - Put domain-specific sections beside the page that owns them, for example `src/components/pages/<page-name>/<SectionName>.astro`.
   - Put truly shared primitives in `src/components/ui/` only when they are generic enough for multiple pages.

3. Compose sections into a page component.
   - Build the real page in `src/components/pages/<PageName>.astro`.
   - Keep data preparation, localized copy, and section ordering in the page component or a nearby helper such as `<page-name>Content.ts`.
   - Keep the page component readable as a composition of named sections, not a long file of repeated markup.

4. Add the route last.
   - Add or update files in `src/pages/` only after the reusable pieces and page component exist.
   - Route files should normally do only this: import the page component, resolve/pass locale, and render the component.
   - For bilingual pages, create both the default route and `/en` route unless the user explicitly asks for one locale only.

5. Verify the integration.
   - Check navigation paths with `localizePath`.
   - Check metadata through `BaseHead`.
   - Check that content, imagery, and CTAs work in both locales when the page is bilingual.

## UI implementation

- Always implement styling with Tailwind CSS utilities first. Do not add new scoped CSS blocks or plain CSS classes for layout, spacing, or typography unless Tailwind cannot express the requirement cleanly.
- Use Tailwind's standard scale by default. Avoid arbitrary values such as `text-[clamp(...)]`, `w-[37px]`, or custom one-off spacing unless there is a clear design requirement and no standard utility fits.
- Prefer shared UI primitives under `src/components/ui/` for repeated patterns such as `Button`, `Card`, `Badge`, `Input`, `Tabs`, `Accordion`, and `Dialog`.
- Break large page components into smaller reusable Astro components when a section, visual pattern, content block, or interaction is likely to be reused.
- Prioritize component patterns from the official shadcn/ui docs. This project is Astro-first, so translate shadcn patterns into Astro components with semantic tokens when a React island is not required.
- For premium visual/motion components, prioritize Magic UI patterns. Add React islands only when the interaction/animation needs client-side JavaScript.
- Use shadcn-style CSS variables and semantic tokens in `src/styles/global.css`: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--ring`, `--radius`, and shadows.
- Keep mobile responsiveness explicit with Tailwind responsive variants. Avoid desktop-only layouts.
- When global element styles such as `h1` override Tailwind utilities, prefer a scoped fix on the affected component. Use important Tailwind utilities only when needed to overcome existing global CSS, and keep that usage narrow.

## Layout and motion

- Preserve existing working interactions and animations when refactoring. If a component has hover, marquee, tilt, or animated-background behavior, verify that it still works after extracting or reorganizing components.
- Interactive animated backgrounds must not be blocked by foreground text or layout wrappers. Use z-index, pointer-events, and layering intentionally so hover effects still receive pointer movement.
- For mobile hero sections, make headings, buttons, cards, and animated elements fit within the viewport without horizontal overflow. If a heading is required to stay on one line, verify it at narrow mobile widths such as 320px and 390px.
- Do not add visible instructional copy inside the UI to explain effects or controls unless the product design explicitly calls for it.

## Avoid

- Avoid new one-off CSS selectors like `.article-shell`, `.hero-card`, or `.custom-section` when Tailwind utilities or reusable UI primitives can do the job.
- Avoid generic AI-purple gradients and unrelated UI kits.
- Avoid custom CSS blocks for sizes, spacing, typography, and responsive behavior when Tailwind utilities can express the same result.
- Avoid changing fonts, global heading styles, or typography tokens as a side effect of a component task unless explicitly requested.
- Do not change route slugs, locale folders, or bilingual URL structure without explicit approval.

## Verification

Use the repo-compatible Node path when building:

```bash
PATH=/home/tungphan/.local/node22/bin:$PATH npm run build
```

Before reporting completion, run the build and confirm it passes.

For rendered UI changes, also verify the affected page in a browser at desktop and mobile widths. Check for unreadable text, broken animation, missing button text, overlapping layers, and horizontal overflow before reporting completion.
