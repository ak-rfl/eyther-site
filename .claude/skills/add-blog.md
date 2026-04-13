---
name: add-blog
description: "Add a new blog post to the homeAI site. Usage: /add-blog 'topic description' or /add-blog to get topic suggestions based on existing gaps"
---

# Add Blog Post

Add a new blog post to the homeAI marketing site.

## Steps

### 1. Read existing content
```
src/data/blog-posts.ts
```
Understand the BlogPost interface, existing topics, and categories used.

### 2. Determine topic
If the user provided a topic as argument, use it.
If not, analyze existing posts and suggest 3-5 topics that would fill gaps:
- Check which trades have fewer posts
- Check which categories are underrepresented
- Suggest topics that address real contractor pain points
- Let the user pick

### 3. Write the post
Create a full blog post entry with:
- `slug`: URL-safe, descriptive (e.g., "hvac-maintenance-agreement-marketing")
- `title`: Specific, benefit-driven, contractor-focused (not clickbait)
- `excerpt`: 2-3 sentences that make a contractor want to read more
- `content`: 400-600 words as HTML string
  - Use contractor language ("booked jobs", "truck rolls", "the phone's not ringing")
  - Include specific numbers and stats
  - Reference real scenarios they'd recognize
  - End with a natural CTA for homeAI's free audit
- `category`: Match to existing categories (plumbing, hvac, electrical, roofing, landscaping, marketing, industry)
- `author`: "homeAI Team"
- `publishDate`: Today's date in ISO format
- `readTime`: Calculate based on word count (~200 words/min)
- `featured`: false (unless user specifies)

### 4. Add to blog-posts.ts
Append the new post to the `blogPosts` array in `src/data/blog-posts.ts`.

### 5. Verify
```bash
npx next build 2>&1 | tail -20
```
Confirm the new blog post slug appears in the build output.

### 6. Report
Show the user the title, slug, and offer to preview at `localhost:3001/blog/{slug}` or deploy with `/deploy`.
