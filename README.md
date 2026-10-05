# Elgyboat Enterprise: website concept v1

Next.js 14 (App Router) · TypeScript · Tailwind CSS. No backend, database or auth.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in the confirmed values
npm run dev
```
Deploy: push to GitHub, import in Vercel, add the same variables from `.env.example`.

## 1. What is implemented
Home, About, Services, Building Materials, Projects, Why Elgyboat, Request a Quote, Contact, 404.
Sticky header, mobile menu, mobile bottom action bar (Call / WhatsApp / Request a Quote),
quote form that builds a WhatsApp message, reviews panel, Google Maps section, SEO and structured data.

## 2. Structure
```
src/app          pages, sitemap.ts, robots.ts, icon.png (favicon from the logo)
src/components   Header, Footer, Cards, QuoteForm, SmartImage, MapSection, ReviewsPanel, ...
src/data         business.ts, services.ts, materials.ts, projects.ts, reviews.ts, images.ts, seo.ts, about.ts
src/lib          contact.ts (links), quote.ts (message builder), jsonld.ts (schema.org)
public/logo.png  logo with transparent background (made from the supplied image)
```

## 3. Temporary content
All photos in `src/data/images.ts` are public Unsplash demo images, flagged `demo: true`. They are not Elgyboat's work.
I could not load them while building, so a few may not match their alt text or may fail to load.
A failed image shows a branded placeholder. Project cards are categories only; no fake projects, names or places.
Reviews, rating, prices and stock are intentionally empty.

## 4. To confirm with Elgyboat
Phone and WhatsApp number, email, street address and exact Google Maps listing, opening hours, domain,
social accounts, Google rating/review count/link, exact materials and services offered, real photos and projects.
Also confirm how "Nyame Nsa" (shown on the logo) should be used in copy.
Unconfirmed values are empty strings in `src/data/business.ts`; the UI hides or adapts them.

## 5. Replacing images
Put the photo in `public/images/`, then in `src/data/images.ts` change `src` to `"/images/file.jpg"` and `demo` to `false`.

## 6. Updating contact details
Edit `src/data/business.ts` or set `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, with country code), `NEXT_PUBLIC_PHONE`,
`NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_SITE_URL`. Phone, WhatsApp, footer, schema and the mobile bar all update together.
`googleMapsUrl` is the client's Google Business link; replace `googleMapsEmbedUrl` with the profile's "Embed a map" URL.

## 7. Quote to WhatsApp flow
`QuoteForm` collects name, phone, location and need (required) plus optional details, `lib/quote.ts` builds the message,
and `wa.me/<number>?text=...` opens WhatsApp. Without a configured number, the form shows the message with a Copy button.
Cards link to `/quote?item=<name>` to pre-select the category.

## 8. SEO
Per-page titles, descriptions and canonicals, Open Graph/Twitter metadata, sitemap.xml, robots.txt, semantic headings,
breadcrumbs, JSON-LD (HomeAndConstructionBusiness, WebSite, Service, BreadcrumbList). Only confirmed fields are emitted;
`aggregateRating` appears only once rating and count are set.

## 9. Later, with a backend
Product database and stock, quotation management and enquiry tracking, admin dashboard/CMS, email and WhatsApp automation,
analytics, CRM. The data files map directly to future tables; `lib/quote.ts` is the place to add an API call.
