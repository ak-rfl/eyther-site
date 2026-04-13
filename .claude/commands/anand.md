Launch Anand — the homeAI backend specialist — for database, API, and server-side work.

Read the agent definition at `.claude/agents/anand-homeai.md` first, then spawn an Agent with `subagent_type: "fullstack-developer"` and include the FULL contents of that agent definition file as context in the prompt, along with the user's specific request: $ARGUMENTS

The agent must:
1. Read the agent definition for the database schema, Server Action patterns, and security requirements
2. Check if `.env.local` exists with Vercel credentials before doing database work
3. Follow the data flow: Client form → Server Action → Vercel Blob (files) → Vercel Postgres (data)
4. Mirror client-side validation on the server
5. Use parameterized queries (never string interpolation for SQL)

Run in bypassPermissions mode for speed.
