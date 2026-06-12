# Thanhtung Astro Website

Astro bilingual personal/business website for David Tung / Thanhtung content, projects, and blog articles.

## Tech stack

- Astro
- Markdown/MDX content collections
- Tailwind CSS v4 via `@tailwindcss/vite`
- shadcn-style semantic tokens and Astro UI primitives

## UI development rules

- **Always use Tailwind CSS utilities first** for layout, spacing, typography, color, responsive behavior, and visual polish.
- Avoid new scoped CSS blocks or one-off CSS classes when Tailwind utilities can express the same result.
- Repeated UI patterns should become reusable primitives under `src/components/ui/`.
- Prioritize official **shadcn/ui** component patterns and translate them into Astro-first components with semantic tokens when React is not required.
- Prioritize **Magic UI** patterns for premium motion/interaction. Add React islands only when client-side interaction is actually needed.
- Keep shadcn-style tokens in `src/styles/global.css`, including `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--ring`, `--radius`, and shadow variables.
- Every multi-column or visual layout must include explicit mobile behavior with Tailwind responsive variants.

These rules are also captured for AI/editor tooling in:

- `AGENTS.md`
- `.cursor/rules/ui-development.mdc`

## Project structure

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── content/
│   │   └── blog/
│   │       ├── vi/
│   │       └── en/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── AGENTS.md
├── README.md
├── package.json
└── tsconfig.json
```

## Routes

- Vietnamese home: `/`
- Vietnamese blog: `/blog/`
- Vietnamese article: `/blog/<slug>/`
- English home: `/en/`
- English blog: `/en/blog/`
- English article: `/en/blog/<slug>/`

Do not change route slugs, locale folders, or bilingual URL structure without explicit approval.

## Commands

Use Node 22 from the local toolchain when running this project:

```bash
PATH=/home/tungphan/.local/node22/bin:$PATH npm install
PATH=/home/tungphan/.local/node22/bin:$PATH npm run dev
PATH=/home/tungphan/.local/node22/bin:$PATH npm run build
PATH=/home/tungphan/.local/node22/bin:$PATH npm run preview
```

## Verification

Before reporting completion for code changes, run:

```bash
PATH=/home/tungphan/.local/node22/bin:$PATH npm run build
```

For visual/UI changes, also inspect desktop and mobile routes where relevant.
