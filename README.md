# Oslo

A minimalist personal portfolio and blog, built with Next.js. Designed to be clean, fast, and easy to maintain.

## Overview

Oslo is a text-first, editorial site that showcases selected work and long-form writing. The visual system is documented in `docs/design/`.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router) — React framework
- [Tailwind CSS](https://tailwindcss.com/) v4 — Styling
- [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) via `next/font/google` — body type
- [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) via Fontshare — display type

UI primitives are hand-built from Tailwind against the design tokens in `app/globals.css`. If additional primitives are needed later, prefer [shadcn/ui](https://ui.shadcn.com/) (open source, built on Radix).

## Getting Started

```bash
./run.sh
```

Or manually:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Routes:

- `/` — Home (hero, selected work, latest writing, about teaser)
- `/work` — Curated project archive
- `/blog` — Writing index
- `/about` — About page

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (nav + footer)
│   ├── page.tsx            # Home
│   ├── globals.css         # Design tokens + Tailwind
│   ├── work/page.tsx       # Work index
│   ├── blog/page.tsx       # Writing index
│   └── about/page.tsx      # About
├── components/             # Shared UI (nav, footer, project row, etc.)
├── content/                # Project and post data
├── docs/design/            # Design system specs
└── public/                 # Static assets
```

## Design System

See `docs/design/README.md` for the full system. Key documents:

- `color-palette.md` — semantic color tokens
- `typography.md` — type scale and font pairing
- `layout-and-spacing.md` — containers and rhythm
- `components.md` — component inventory
- `page-blueprints.md` — per-page structure
- `voice-and-content.md` — editorial voice and CTA labels

## Scripts

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint
```

## License

MIT
