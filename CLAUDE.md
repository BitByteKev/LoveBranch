# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A Next.js 15 (App Router) marketing site for **Love Branch** — a family-run San Diego tree and yard care service (CSLB #1146955, (619) 330-0801). The site exists to fix concrete SEO problems with the prior single-page site:

- Live site's service buttons all pointed to `/new-page` (no tracking, no SEO value)
- No proper H1, no image alt text
- No service-specific landing pages for long-tail local queries (e.g. "tree removal Chula Vista")
- 150+ five-star reviews without schema markup, so no rich-result stars in Google
- Live title tag omitted "San Diego"

The Next.js rebuild addresses each: one H1 per page, per-service routes at `/services/<slug>`, alt text on every `next/image`, JSON-LD `LocalBusiness` + `Service` + `AggregateRating` schema, and "San Diego" in the title template.

`lovebranch-rebuild.html` at the repo root is the original single-file prototype kept for reference — **do not edit it**; the Next.js app under `/app` is the source of truth.

## Commands

```bash
npm install          # first time, after pulling
npm run dev          # local dev server on http://localhost:3000
npm run build        # production build (run before deploy)
npm start            # serve the built app
npm run lint         # Next.js lint
```

Deployment target is Vercel (zero-config — push to a connected repo and it deploys).

## Architecture

### Routing (App Router)

```
app/
├── layout.tsx                     # root layout: nav, footer, schema, fonts
├── page.tsx                       # homepage — full long-form landing
├── globals.css                    # all CSS (no Tailwind, no CSS modules)
├── sitemap.ts                     # generates /sitemap.xml
├── robots.ts                      # generates /robots.txt
├── components/                    # shared UI (TrustBar, Nav, Footer, CTASection, ScrollReveal, FloatingCall, LocalBusinessSchema)
├── areas-we-serve/page.tsx        # SD County cities list — long-tail SEO
└── services/
    ├── ServiceTemplate.tsx        # shared layout for all 9 service pages
    ├── tree-removal/page.tsx
    ├── hedge-palm-care/page.tsx
    ├── hillside-fire-clearing/page.tsx
    ├── weed-abatement/page.tsx
    ├── lawn-care/page.tsx
    ├── hardscaping/page.tsx
    ├── turf-sod-installation/page.tsx
    ├── fence-installation/page.tsx
    └── junk-hauling/page.tsx
```

Every service page is its own route for SEO — Google indexes them individually so each can rank for its own query ("tree removal Chula Vista", "weed abatement Poway", etc.). The pages share `ServiceTemplate.tsx` to avoid duplicating layout; each `page.tsx` passes content as props.

### Metadata pattern

Each route exports a `metadata` object — Next.js generates `<title>`, `<meta description>`, canonical link, and Open Graph tags from it. The root layout sets a `title.template` of `%s | Love Branch San Diego` so child pages only specify their unique title. The home page overrides `title.default`.

### SEO schema

`app/components/LocalBusinessSchema.tsx` injects a single `LocalBusiness` JSON-LD blob into every page via the root layout. It includes `aggregateRating` (5.0 / 150 reviews) and three `Review` objects matching the testimonials visible on the homepage — required for Google to consider showing stars in SERPs.

Each service page additionally injects a `Service` JSON-LD entity via `buildServiceSchema()` from `ServiceTemplate.tsx`. The service schema references the LocalBusiness via `@id`.

### Styling

- All CSS lives in `app/globals.css` — single file, hand-written, no preprocessor or utility framework.
- Brand palette in `:root` CSS variables (`--moss`, `--sun`, `--cream`, etc.) — change colors there, not in individual rules.
- Headings use `Fraunces` serif, body uses `Inter` — both loaded once from Google Fonts in `layout.tsx`.
- Mobile breakpoints: `880px` (desktop → tablet), `720px` (tablet → mobile), `600px` and `580px` (small-mobile tweaks).
- `prefers-reduced-motion` is respected — all animations collapse to ~0ms.

### Animations

Scroll-reveal is driven by `app/components/ScrollReveal.tsx`, a client component that uses `IntersectionObserver` to add an `.in` class to every `.reveal` element as it enters view. Apply with:

```tsx
<h2 className="reveal">…</h2>
<p className="reveal delay-1">…</p>      // staggered by 0.08s
<div className="reveal delay-2">…</div>  // ...0.16s, delay-3 = 0.24s, delay-4 = 0.32s
```

Other reusable classes: `.float-anim` for floating elements (hero visual), `.hero-eyebrow` for fade-in-down on first paint, `.skeleton` for shimmer placeholders.

When adding new sections, default to wrapping non-trivial blocks in `.reveal` so they animate on scroll like the rest of the site.

### Images

Photos live in `/public/images/` — referenced from components as `/images/<file>.jpg`. See `public/images/README.md` for the exact list of expected files and their dimensions.

Use `next/image` (`<Image src="/images/foo.jpg" alt="..." width={...} height={...} />`) — it generates WebP/AVIF, sizes responsively, and lazy-loads. Always supply meaningful `alt` text with location and subject ("San Diego hillside cleared for defensible space" beats "hillside").

The hero image uses `priority` to preload above-the-fold. Service page heroes also use `priority`. Other images lazy-load by default.

### Conventions worth preserving

- **One H1 per page** — handled by giving each route's `page.tsx` exactly one `<h1>`. Don't add a second.
- **Service CTAs** link to `#contact` (the in-page CTA section). If a real quote form is wired up, change `CTASection.tsx` once and every page picks it up.
- Phone `(619) 330-0801` and license `#1146955` appear in `TrustBar`, `Nav`, hero, footer, schema, and meta description. If either changes, grep across `app/` and update all occurrences (including the schema component).
- The `<em>` inside headings is styled as an accent — don't replace with `<i>` or a span.
- `metadataBase` and canonical URLs hard-code `https://lovebranchsd.com`. Update that constant in `layout.tsx`, `sitemap.ts`, `robots.ts`, `LocalBusinessSchema.tsx`, and `ServiceTemplate.tsx` if the domain changes.
