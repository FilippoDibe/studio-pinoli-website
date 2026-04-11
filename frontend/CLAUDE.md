# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev                    # Dev server on port 3000 (uses Turbopack)
npm run build                  # Production build
npm run start                  # Serve production build
npm run import:studio-media    # Import studio photos via scripts/importStudioMedia.mjs
```

No test runner is configured.

## Architecture

**Pages Router** (not App Router). All routes are in `src/pages/`.

**Data loading pattern:** Pages import JSON directly rather than fetching from the Express backend at build time. For example, `index.js` does `import postsData from "./api/posts.json"` and serves it via `getStaticProps`. This is pure static generation — no ISR revalidation is wired up in any page currently.

**API routes** (`src/pages/api/`): `contact.js` sends email via nodemailer (and auto-replies to the sender). `posts/index.js`, `posts/[slug].js`, `pages/index.js`, `pages/[slug].js` are thin handlers that re-export the `.json` data files — they exist so the Express backend pattern works at runtime, but pages import the `.json` files directly at build time.

**Path alias:** `@/*` → `src/*`

## Page Structure

- `/` — Home: hero video/image, animated stat counters (IntersectionObserver), service mosaic, CTA, contact/map
- `/i-nostri-servizi` — Services overview
- `/servizi/[service]` — Individual service pages: `odontoiatria`, `bionutrizione`, `medicina-estetica`, `osteopatia`, `art-terapia`. Each has its own CSS module in `src/styles/`.
- `/blog`, `/blog/[slug]` — Blog listing and post detail
- `/page/[slug]` — Generic WordPress page fallback
- `/prima-visita`, `/chi-siamo`, `/contatti` — Static content pages

## Styling System

All global design tokens live in `src/styles/globals.css` (`:root` CSS variables). Key tokens:

- Primary blue: `--primary: #0a5a8c`
- Accent gold: `--accent: #c9975c`
- Per-service colors: `--color-dental`, `--color-nutrition`, `--color-aesthetic`, `--color-integrative`, `--color-osteopatia`, `--color-art`
- Fonts: Montserrat (`--font-heading`), Open Sans (`--font-body`)

Global utility classes (`.container`, `.section`, `.btn`, `.btn-primary`, `.mosaic-card`, `.service-hero`, `.cta-section`, etc.) are defined in `globals.css` and used directly in JSX — no Tailwind. Page-specific styles use CSS Modules (e.g., `StudioHome.module.css`, `odontoiatria.module.css`).

**Service theming:** `ServiceCard` and service hero sections accept a `theme` prop (`dental`, `nutrition`, `aesthetic`, `osteopatia`, `art`) which maps to CSS classes that pull in the per-service color variables.

## Key Constants

- Booking URL (alfadocs): `https://prenota.alfadocs.com/p/milano-studio-pinoli-31191` — hardcoded in `Header.js` and each service page. Not an env var.
- Studio phone: `+39 3316713904`; email: `info@studiopinoli.it`; address: Via Domenico Cimarosa, 4 — 20144 Milano — hardcoded in contact page and email templates.
- `NEXT_PUBLIC_API_URL` — env var for the Express backend (localhost:3001 in dev), used only if pages fetch at runtime rather than importing JSON.

## Environment Variables

Required for the contact form (`src/pages/api/contact.js`):
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- `CONTACT_EMAIL` — destination address for form submissions
