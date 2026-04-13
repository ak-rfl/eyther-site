# homeAI Project State

Last updated: 2026-04-13

## Live Pages (21 total)
- `/` — Homepage (9 sections + TradeVerticals)
- `/audit` — 5-step intake form (console.log only, no backend)
- `/trades/plumbing` — Plumbing landing page
- `/trades/hvac` — HVAC landing page
- `/trades/electrical` — Electrical landing page
- `/trades/roofing` — Roofing landing page
- `/trades/landscaping` — Landscaping landing page
- `/blog` — Blog index with category filter
- 10x `/blog/[slug]` — Individual blog posts

## Deployment
- **Repo**: ak-rfl/eyther-site (GitHub)
- **Host**: Vercel (auto-deploys from main)
- **Last deploy**: 2026-04-13, commit b11f29b (audit page)
- **Build**: PASS, 21 pages

## Tech Stack
- Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion
- No backend yet (no DB, no API routes, no server actions)

## What's Working
- All 21 pages render correctly
- Forms validate client-side (email, phone, ZIP, URLs)
- Blog category filtering works
- Trade pages have deep, trade-specific content
- Nav works from all pages (blog links back to homepage sections)
- Mobile responsive with sticky CTA bar
- Accessibility: ARIA attributes, semantic HTML, heading hierarchy

## What's NOT Working / Pending
1. **Audit form backend** — Form console.logs data, doesn't save anywhere
   - Plan: Vercel Postgres + Vercel Blob + Server Actions
   - Blocker: User needs to create Postgres DB in Vercel dashboard first
2. **Security headers** — `next.config.ts` is empty, no CSP/HSTS/X-Frame-Options
3. **SEO gaps** — No sitemap.ts, robots.ts, or JSON-LD structured data
4. **Placeholder phone** — (800) 555-1234 needs real number
5. **Email notifications** — No notification when lead submits form
6. **Rate limiting** — No CAPTCHA or rate limiting on forms
7. **Images** — All gradient placeholders, no real photos

## File Ownership (for conflict prevention)
- Components: `src/components/` — @Hitesh
- Blog data: `src/data/blog-posts.ts` — @Maaz
- Trade content: embedded in `src/app/trades/[slug]/page.tsx` — @Maaz (copy) + @Hitesh (layout)
- Backend (when created): `src/lib/`, `src/app/*/actions.ts` — @Anand
- SEO files: `src/app/sitemap.ts`, `src/app/robots.ts` — @Arsheen
- Test/QA: @Sharad (read-only unless fixing simple issues)
