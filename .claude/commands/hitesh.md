Launch Hitesh — the homeAI frontend specialist — to handle UI work on this project.

Read the agent definition at `.claude/agents/hitesh-homeai.md` first, then spawn an Agent with `subagent_type: "fullstack-developer"` and include the FULL contents of that agent definition file as context in the prompt, along with the user's specific request: $ARGUMENTS

The agent must:
1. Read the agent definition file to understand the design system, component patterns, and conventions
2. Follow all rules in the agent definition (Tailwind v4 tokens, FadeIn patterns, Server vs Client components, contractor language)
3. Read relevant existing files before making changes
4. Verify the build compiles after changes

Run in bypassPermissions mode for speed.
