# Morocco Private Drivers — Next.js site

Next.js 16 (App Router) + TypeScript. Black & white design modelled on Storey Architecture.

## Run it
1. Install Node.js 20 or newer (nodejs.org).
2. In this folder: `npm install`
3. Copy `.env.example` to `.env.local` and put your WhatsApp number in it.
4. `npm run dev` → open http://localhost:3000

`npm run build` then `npm start` for production. Deploys as-is to Vercel or any Node host.

## Where things are
- `app/` — one folder per page (`app/fleet/page.tsx` = /fleet). `app/layout.tsx` wraps every page.
- `app/blog/[slug]` + `content/blog/*.tsx` — blog posts. Add a post: create a file in `content/blog/` and register it in `app/blog/[slug]/page.tsx`.
- `app/cities/[slug]` + `content/cities/*.tsx` — city pages.
- `components/` — Header, Footer, Calculator, WhatsApp button, cookie banner, `SiteScripts` (FAQ, tabs, filters, forms).
- `lib/pricing.ts` — calculator distances and per-km rates.
- `lib/site.ts` — site name, URL, WhatsApp number fallback.
- `public/img/` — all photos.
- `app/globals.css` — the whole design system.

Old `.html` URLs redirect to the new routes (see `next.config.ts`). The previous static version is kept in `old-static-site/`.
