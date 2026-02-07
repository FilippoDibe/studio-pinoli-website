# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WordPress-to-Next.js migration for Studio Pinoli (Italian dental clinic). Content is extracted from studiopinoli.it WordPress REST API, stored as JSON files, and served through an Express backend to a Next.js frontend.

## Commands

### Frontend (Next.js) - run from `/frontend`
```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run start    # Production server
```

### Backend (Express) - run from `/backend`
```bash
node server.js           # Start API server (port 3001)
node export.js           # Export data from WordPress API
node download-images.js  # Download media files to frontend/public/images
```

## Architecture

**Data Flow:** WordPress API → `export.js` → JSON files → Express API → Next.js (SSG/ISR)

**Frontend (`/frontend`):**
- Next.js with Pages Router (not App Router)
- Static generation with ISR (60s revalidation)
- Path alias: `@/*` maps to `src/*`
- API calls go to `NEXT_PUBLIC_API_URL` (localhost:3001 in dev)

**Backend (`/backend`):**
- Express server serves JSON files from `/backend/data/`
- Endpoints: `/api/posts`, `/api/pages`, `/api/categories`, `/api/tags` (all support `/:slug`)
- Health check: `/api/health`

**Key Files:**
- `backend/routes/content.js` - All API endpoint definitions
- `frontend/src/pages/_app.js` - App wrapper with Header/Footer
- `frontend/src/styles/globals.css` - Design system (CSS variables for theming)

## Styling

CSS variables define the design system:
- Primary blue: `#1a5fb4`
- Accent orange: `#e6a020`
- Fonts: Montserrat (headings), Open Sans (body)

## Data Files

JSON exports in `/backend/data/`:
- `posts.json` - ~850+ blog articles
- `pages.json` - ~100+ WordPress pages
- `media.json` - Media metadata (~2000+ files)
- `categories.json`, `tags.json` - Taxonomies
