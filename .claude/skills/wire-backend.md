---
name: wire-backend
description: "Wire up the audit form backend: Vercel Postgres for leads, Vercel Blob for file uploads, Next.js Server Actions. Use /wire-backend when ready to connect the audit form to a real database."
---

# Wire Up Audit Form Backend

Connect the `/audit` form to Vercel Postgres + Vercel Blob for real lead capture.

## Pre-requisites
Before running this skill, the user must:
1. Create a Postgres database in Vercel dashboard (Storage → Create → Postgres)
2. Pull env vars: `vercel env pull .env.local`

Check if `.env.local` exists and has `POSTGRES_URL`:
```bash
test -f .env.local && grep -q "POSTGRES_URL" .env.local && echo "READY" || echo "NOT READY — need Vercel Postgres env vars"
```

If not ready, guide the user through setup and stop.

## Steps

### 1. Install dependencies
```bash
npm install @vercel/postgres @vercel/blob
```

### 2. Create database schema
Create `src/lib/db.ts` with:
- Lead table schema (all audit form fields)
- `saveLead()` function using `@vercel/postgres`
- Include: business_name, trade, years_in_business, employee_count, cities, state, zip_codes, service_radius, website_url, google_business_url, facebook_url, instagram_handle, yelp_url, tiktok_handle, nextdoor, monthly_spend, current_channels (JSON), biggest_frustration, contact_name, email, phone, logo_url, collateral_urls (JSON array), created_at

### 3. Create file upload handler
Create `src/lib/upload.ts` with:
- `uploadFile()` function using `@vercel/blob`
- Accept File, return URL
- Max file size validation (10MB)
- Allowed types: images (jpg, png, svg, webp), PDFs, documents

### 4. Create Server Action
Create `src/app/audit/actions.ts` with:
- `"use server"` directive
- `submitAudit()` function that:
  1. Validates all fields server-side (same regex as client)
  2. Uploads files to Vercel Blob
  3. Saves lead to Vercel Postgres
  4. Returns success/error

### 5. Create the leads table
Create `src/app/api/setup/route.ts` — one-time setup endpoint:
```sql
CREATE TABLE IF NOT EXISTS leads (...)
```

### 6. Update AuditPageClient.tsx
- Import the server action
- Replace `console.log` with actual server action call
- Handle success/error responses
- Show real loading state during submission

### 7. Verify
- Run `npx next build` to check for errors
- Test locally with dev server
- Verify table creation works

### 8. Report
Tell the user:
- Backend is wired up
- How to run the setup endpoint once to create the table
- Offer to deploy with `/deploy`
