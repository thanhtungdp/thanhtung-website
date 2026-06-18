# Project Rules for AI Agents

These rules apply to all work in this Astro website repository.

## UI implementation

- Always implement styling with Tailwind CSS utilities first. Do not add new scoped CSS blocks or plain CSS classes for layout/spacing/typography unless Tailwind cannot express the requirement cleanly.
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
