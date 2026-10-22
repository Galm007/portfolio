# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site

There is no linter or test suite. `tsconfig.json` uses `astro/tsconfigs/strict`.

## Architecture

Single-page static portfolio built with Astro 5 and Tailwind CSS 4 (via the `@tailwindcss/vite` plugin, no `tailwind.config`).

- **All content lives in `src/data/site.ts`** (`site`, `about`, `skills`, `experience`, `projects`). It is sourced from `Resources/Jmar_Pineda_Resume.tex`; to change copy, edit this file rather than the components. Experience is grouped by organization with roles listed newest first.
- `src/pages/index.astro` is the only page. It composes `Header`, `Sidebar` (fixed on `lg`; content is offset with `lg:pl-80`), then `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Footer` in `src/components/`. Each component imports what it needs from `site.ts`.
- `src/layouts/Layout.astro` handles `<head>` (meta, Google Fonts: Inter, JetBrains Mono, Space Grotesk) and imports `src/styles/global.css`.
- **Design tokens** are defined in the `@theme` block of `src/styles/global.css` (`paper`, `ink`, `muted`, `line`, `accent-*`, font families). Shared classes (`.eyebrow`, `.section-title`, `.btn-primary`, `.btn-ghost`, `.chip`) are in `@layer components`; reuse them rather than repeating utilities.
- Static assets go in `public/` (`profile.png`, `resume.pdf`, `projects/*.jpg`), referenced by absolute paths such as `/projects/foo.jpg`. Project entries with an empty `images` array render a gradient placeholder.
- `Resources/` holds source material (resume .tex/.pdf, screenshots) and is not part of the build. `dist/` and `.astro/` are generated.
