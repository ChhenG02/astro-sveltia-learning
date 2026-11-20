# PATech Website v2 (Astro + Sveltia CMS)

Modern, high-trust static website and content management system (CMS) for **PATech (Pisnuk AutoTech Co., Ltd.)**, duplicated and upgraded from `astro-sveltia-learning`.

## Design System & Highlights

- **Palette**: White (`#FFFFFF`) & off-white (`#FAFAFA`) canvas, near-black (`#0A0A0A`) ink & primary pill buttons, amber yellow (`#FDB827`) accents, soft cream (`#FAF6EE`) & light gray (`#F2F3F5`) cards, electric-blue gradient (`#0A3CFF` → `#0B1F5C`) CTA banner, and deep navy (`#0B1220`) footer.
- **Signature Visual Details**:
  - `24px` rounded photo and card frames with a **top-right notched corner** housing a yellow circular diagonal-arrow button (`↗`) that rotates on hover.
  - Tilted sticker tags (`Professional work`, `First workmanship`, `24/7 emergency calls`) in sky blue, soft pink, and lime.
  - Frosted-glass (glassmorphism) hero badge with `8+ Yrs`, 5 overlapping PATech leadership avatars, and `Professional Licensed · 1,000+ Projects Delivered`.
  - Asymmetric **About Story** collage (`Engineers first. Salespeople never.`) with `80px` stats (`100%` and `4.9/5`).
  - Staggered 3-card **Services** showcase (`Factory Automation`, `Building Automation`, `Electrical Power Panels`) with the middle card offset upward.
  - Diagonal cascade of 4 soft-cream **Why Choose Us** cards (`Safety first`, `Skilled Experts`, `24/7 Support`, `Transparent Pricing`) paired with a cut-corner switchboard photo at the bottom left.
  - **Testimonials** carousel with 5 yellow stars and overlapping bottom name chips (with the middle chip highlighted in amber yellow).
  - **Final CTA Banner** overlapping the top of the deep-navy footer with a giant faded `PATECH` watermark bleeding across both sections.

## Sveltia CMS (Projects, News & Media, Services, Testimonials)

All dynamic collections are managed via **Sveltia CMS** at `/admin/`:

- **Config**: `public/admin/config.yml` & `public/admin/index.html`
- **Schema Validation**: `src/content.config.ts`
- **Collections**:
  1. **Projects** (`src/content/projects/*.md`) — Displayed on the home page, `/projects/`, and `/projects/[slug]/` with category filters, challenge/solution cards, results checklist, and gallery.
  2. **News & Media** (`src/content/news/*.md`) — Displayed on the home page, `/news-media/`, and `/news-media/[slug]/` with search, `All / Articles / Videos` tabs, topic filter chips, and embedded YouTube/Facebook video support.
  3. **Services** (`src/content/services/*.md`) — Displayed on the home page and `/services/`.
  4. **Testimonials** (`src/content/testimonials/*.md`) — Displayed in the home page testimonials carousel.

## Commands

```bash
cd /Users/macbookair/Documents/PAtech/patech-website-v2
pnpm run dev      # Start local dev server (http://localhost:4321 & http://localhost:4321/admin/)
pnpm run build    # Build static site to dist/
pnpm run preview  # Preview production build
```
