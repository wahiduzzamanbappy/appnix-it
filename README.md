# Appnix IT website

Next.js (App Router) · TypeScript (strict) · Tailwind CSS · Framer Motion · Lucide

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in what you need
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build
```

## Before launch (required)

1. **Logo.** The company logo is `public/brand/Appnix IT logo.png`. Keep the file path and real `width` / `height` aligned in `src/config/site.ts`.
2. **Favicon / touch icon / social image.** `src/app/icon.svg` and `src/app/apple-icon.tsx` use the brand mark. The Open Graph image (`src/lib/og.tsx`) remains text-first and can be updated with the logo when a richer social card is needed.
3. **Contact details and social URLs** in `src/config/site.ts`. Empty values are hidden everywhere (footer, contact page, schema).
4. **Statistics** in `src/data/company.ts` are placeholders (`verified: false`). They show only in development. Set real numbers and `verified: true` to publish.
5. **Draft articles** in `src/data/insights.ts` are sample layout content (`isDevelopmentContent: true`), hidden in production and set to `noindex`. Replace them with real articles (or connect MDX / a CMS by swapping the array for a loader).
6. **Legal pages** (`src/data/legal.ts`) are placeholders. Have the final text reviewed by a legal professional.
7. **Contact delivery.** Set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` + `CONTACT_FROM_EMAIL`, or `CONTACT_WEBHOOK_URL`. Without one of these, the form returns a friendly "temporarily unavailable" error in production (it logs to the console in development).
8. **Product, case-study and solution copy** is initial placeholder wording. Edit the files in `src/data/`; pages update automatically.

## Where things live

```
src/config/site.ts      company, contact, social, SEO, logo
src/data/*              services, products, industries, case studies, insights, nav, legal, stats, process
src/components/ui       Button, Container, SectionHeading, Reveal, Counter, FAQ, Breadcrumb, States, Logo, Icon
src/components/layout   Navbar, MobileMenu, MobileCTA, Footer, Analytics
src/components/home     homepage sections (also reused on inner pages)
src/components/pages    SolutionPage, ProductPage, CaseStudyPage, ArticlePage, LegalPage
src/components/visuals  HeroVisual, TechVisual, ProductMockup (abstract SVG/CSS, no stock photos)
src/lib                 SEO, schema.org, validation (shared client/server), rate limit, analytics, OG
src/app/api/contact     validated, rate-limited, honeypot + timing + optional Turnstile
```

## Behaviour notes

- Routes: `/`, `/about`, `/solutions[/slug]`, `/products[/slug]`, `/industries`, `/success-stories[/slug]`, `/insights[/slug]`, `/contact`, legal pages, `/thank-you`, 404 and error states. `/solutions/ai-solutions` redirects to `/solutions/artificial-intelligence`.
- Analytics: set `NEXT_PUBLIC_GA_ID`. Events: `cta_click`, `contact_form_submit`, `insight_read`.
- Reduced motion is honoured (Framer Motion + CSS).
- Security headers and a CSP are set in `next.config.mjs`. The CSP allows `'unsafe-inline'` scripts because Next.js injects inline bootstrap code; move to nonce-based CSP via middleware for a stricter policy.
- The rate limiter is in-memory (per instance). Use a shared store (e.g. Upstash Redis) on serverless/multi-instance hosting.
- Bot protection: honeypot + minimum fill time + optional Cloudflare Turnstile verification (set `TURNSTILE_SECRET_KEY` and send a `captchaToken` from a client widget).


## GitHub & Vercel deployment

This repository is prepared for Vercel with Node.js 24 and Next.js 15.5.18. See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the exact GitHub push, Vercel setup, and environment-variable steps.
