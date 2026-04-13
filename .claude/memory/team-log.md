# Team Activity Log

Running log of who did what on the homeAI project. Most recent first.

---

## 2026-04-13

### Session: Full Site Build + Trade Pages + Blog + Audit Form

**@Hitesh (Frontend)**
- Built 5 trade landing pages (`/trades/[slug]/page.tsx`) with 7 sections each
- Updated `page.tsx` to include TradeVerticals between Hero and Problems
- Updated Footer trade links to real `/trades/[slug]` routes
- Fixed ActivityFeed `useRef` for React 19 compatibility

**@Anand (Backend)**
- (Pending) Audit form currently console.logs — needs Vercel Postgres wiring

**@Arsheen (SEO)**
- Trade pages have `generateStaticParams` and `generateMetadata`
- Blog pages have per-post SEO metadata
- (Pending) No sitemap.ts, robots.ts, or structured data yet

**@Sharad (QA)**
- Code review: found 12 issues (forms broken, accessibility gaps, timeout bug)
- Security review: no critical vulns, needs security headers
- All critical issues fixed

**@Maaz (Copywriter)**
- Wrote all trade page copy with contractor-authentic language
- Created 10 blog posts (400-600 words each) in `src/data/blog-posts.ts`
- Trade pain points specific to each vertical

**Bug Fixes Applied:**
- AuditForm: added state, validation, error messages, success state
- FinalCTA: replaced broken input with scroll-to-audit anchor
- ActivityFeed: fixed timeout cleanup bug
- FAQ: added ARIA accessibility attributes
- Comparison: converted div grid to semantic `<table>`
- Problems: fixed heading hierarchy (h4 → h3)
- All decorative SVGs: added `aria-hidden="true"`

**New Features:**
- `/audit` — 5-step standalone intake form with regex validation, file uploads
- `/blog` — Blog index with category filtering
- `/blog/[slug]` — 10 blog post detail pages
- All CTAs updated site-wide to point to `/audit`
