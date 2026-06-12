# Project Rules for AI Agents

These rules apply to all work in this Astro website repository.

## UI implementation

- Always implement styling with Tailwind CSS utilities first. Do not add new scoped CSS blocks or plain CSS classes for layout/spacing/typography unless Tailwind cannot express the requirement cleanly.
- Prefer shared UI primitives under `src/components/ui/` for repeated patterns such as `Button`, `Card`, `Badge`, `Input`, `Tabs`, `Accordion`, and `Dialog`.
- Prioritize component patterns from the official shadcn/ui docs. This project is Astro-first, so translate shadcn patterns into Astro components with semantic tokens when a React island is not required.
- For premium visual/motion components, prioritize Magic UI patterns. Add React islands only when the interaction/animation needs client-side JavaScript.
- Use shadcn-style CSS variables and semantic tokens in `src/styles/global.css`: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--ring`, `--radius`, and shadows.
- Keep mobile responsiveness explicit with Tailwind responsive variants. Avoid desktop-only layouts.

## Avoid

- Avoid new one-off CSS selectors like `.article-shell`, `.hero-card`, or `.custom-section` when Tailwind utilities or reusable UI primitives can do the job.
- Avoid generic AI-purple gradients and unrelated UI kits.
- Do not change route slugs, locale folders, or bilingual URL structure without explicit approval.

## Verification

Use the repo-compatible Node path when building:

```bash
PATH=/home/tungphan/.local/node22/bin:$PATH npm run build
```

Before reporting completion, run the build and confirm it passes.
