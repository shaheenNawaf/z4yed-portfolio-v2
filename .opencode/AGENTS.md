# Project: z4yed-portfolio

Personal portfolio/resume site for Shaheen Al Adwani — dual-track professional (Software Engineering + Growth Marketing).

## Tech Stack
- **Framework:** Astro 6.3+ (SSG, static output)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Language:** TypeScript (strict mode, `astro/tsconfigs/strict`)
- **Runtime:** Node >=22.12.0
- **Package Manager:** npm
- **Build Tool:** Vite 7 (overridden in package.json)
- **Font:** Self-hosted Satoshi (Fontshare woff2, in `public/fonts/`)
- **Formatter:** Prettier + `prettier-plugin-astro`

## Commands
- `npm run dev` — dev server at localhost:4321
- `npm run build` — production static build to `dist/`
- `npm run preview` — preview production build

No lint, test, or typecheck scripts configured. No CI/CD.

## Architecture: Dual-Track Biome
Three routes, each setting `data-track` on `<html>` to drive CSS custom properties:
- `/` (index.astro) — Hub/home, shows both tracks
- `/software` — Blue accent (#3b82f6), sharp radii (1rem), grid motif
- `/marketing` — Orange accent (#f97316), rounded radii (1.5rem), radial gradient motif

All content lives in `src/data/resume.ts` — single source of truth for projects, experiences, contact, skills, stats, config. Pure Astro components, no framework components.

## Key Directories
- `src/data/resume.ts` — All content (Project, Experience types, featured IDs, stats, contact)
- `src/layouts/layout.astro` — Global HTML shell, SEO meta, theme init
- `src/components/` — 18 Astro components (no React/Vue/Svelte)
- `src/scripts/` — 4 client-side scripts
- `src/styles/global.css` — 430-line CSS with design tokens, semantic utilities, animations
- `public/` — Static assets (images per project, fonts, logos, favicons)

## CSS Design System (`global.css`)
- Dark mode default; light mode via `html.light` class
- Dual-track accent: `--sw` (software blue), `--mkt` (marketing orange)
- Dynamic `--accent` changes per `data-track`
- Semantic classes: `.surface`, `.surface-2`, `.panel`, `.track-btn`, `.accent-marketing`, `.accent-software`
- `.floating-glass` for nav/trust bar (backdrop-filter blur)
- `.zone-surface`, `.zone-heading`, `.zone-motif` for route-specific styling
- Body has fixed dot grid + radial vignette via `::before` / `::after`
- Respects `prefers-reduced-motion`

## Client Scripts
1. `theme-init.ts` — Runs in `<head>` to prevent FOUC (localStorage or system pref)
2. `main.ts` — Modals (dialog elements), sticky bar (IntersectionObserver), theme toggle, image protection (right-click/drag disabled on images)
3. `index-page.ts` — Scroll reveals, count-up animation, scroll spy for nav
4. `portal.ts` — Portal/GLaDOS easter egg (click heart in footer)

Pattern: all scripts use `DOMContentLoaded` + `astro:after-swap` for SPA-like re-init.

## Content Model (`resume.ts`)
- `Category = 'software' | 'marketing'`
- `Project`: id, category, title, results, deliverables, media, liveUrl, repoUrl, problem/solution/impact, tags, gallery
- `Experience`: id, category, company, title, date, details, gallery, video, tech
- Featured IDs per route in `featuredProjectIds` (hardcoded)
- Resume PDFs delivered via Google Docs Export API URLs
- `hubStats` — 5 proof metrics for homepage hero
- `skillGroups` — categorized skills for homepage (ATS-friendly)

## Branching
- `main` and `master` branches exist, currently identical
- No CI/CD, no test framework, no linting beyond Prettier
- Single contributor (solo project)

## Gotchas
- No AGENTS.md, CONTRIBUTING.md, or CLAUDE.md existed before this
- CSP header restricts frame-src to self + facebook.com (video embeds)
- Sitemap linked in layout head (`/sitemap-index.xml`)
- Image protection is cosmetic only (JS-based right-click/drag prevention)
- Watermark component exists (`watermark.astro`) for overlaying ownership text
