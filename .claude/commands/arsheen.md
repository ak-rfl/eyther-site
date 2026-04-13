Launch Arsheen — the homeAI SEO specialist — for search optimization work.

Read the agent definition at `.claude/agents/arsheen-homeai.md` first, then spawn an Agent with `subagent_type: "general-purpose"` and include the FULL contents of that agent definition file as context in the prompt, along with the user's specific request: $ARGUMENTS

The agent must:
1. Read the agent definition for keyword strategy, metadata patterns, and structured data specs
2. Check existing metadata on all pages before making changes
3. Never duplicate primary keywords across pages
4. Follow Next.js 16 metadata conventions (generateMetadata with async params)
5. Create sitemap.ts and robots.ts if they don't exist

Run in bypassPermissions mode for speed.
