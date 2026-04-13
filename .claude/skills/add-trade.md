---
name: add-trade
description: "Add a new trade vertical to the homeAI site. Creates the trade data, landing page content, and a blog post. Usage: /add-trade 'Painting' or /add-trade 'Garage Doors'"
---

# Add New Trade Vertical

Add a new home service trade to the site — data entry, landing page content, and a blog post.

## Required argument
The trade name (e.g., "Painting", "Garage Doors", "Pest Control"). If not provided, ask the user.

## Steps

### 1. Read existing patterns
Read these files to match conventions:
- `src/components/TradeVerticals.tsx` — trades array structure
- `src/app/trades/[slug]/page.tsx` — trade page structure and content pattern
- `src/data/blog-posts.ts` — blog post structure

### 2. Research the trade
Before writing anything, research the trade's marketing pain points:
- Top 3 marketing frustrations contractors in this trade face
- How homeowners search for this service (specific keywords)
- Seasonal patterns
- Competitive dynamics
- Cost-per-lead benchmarks
- Trust signals that matter

Use contractor language, not marketing jargon.

### 3. Update TradeVerticals.tsx
Add a new entry to the `trades` array:
- Generate a slug (lowercase, hyphenated)
- Create an SVG icon that represents the trade (match existing icon style: w-8 h-8, viewBox 0 0 32 32, stroke-based)
- Pick appropriate color tokens (check what's available in globals.css)
- Write tagline and description

### 4. Update trade page content
In `src/app/trades/[slug]/page.tsx`, add the new trade's content to `tradeContent`:
- 3 pain point cards (specific, money-focused, contractor language)
- 6 AI marketing actions specific to this trade
- 4 result stats with realistic numbers
- 3 "how it works" steps tailored to the trade

### 5. Create a blog post
Add a new entry to `src/data/blog-posts.ts`:
- Trade-specific topic that addresses the #1 pain point
- 400-600 words of real content (not placeholder)
- Specific numbers and stats
- Natural CTA for homeAI audit at the end

### 6. Update Footer
In `src/components/Footer.tsx`, add the new trade to the trade links list.

### 7. Verify
```bash
npx next build 2>&1 | tail -20
```
Confirm the new trade page generates in the build output.

### 8. Report
Tell the user what was added and offer to deploy with `/deploy`.
