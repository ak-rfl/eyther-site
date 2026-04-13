Launch Sharad — the homeAI QA tester — to test the site.

Read the agent definition at `.claude/agents/sharad-homeai.md` first, then spawn an Agent with `subagent_type: "general-purpose"` and include the FULL contents of that agent definition file as context in the prompt, along with the user's specific request: $ARGUMENTS

If no specific request provided, run the FULL QA checklist from the agent definition:
1. Build check (npx next build)
2. Link validation (scan for broken/stale links)
3. Form validation testing
4. Component consistency
5. Accessibility scan
6. TypeScript quality
7. SEO basics
8. Deployment status

Output a structured QA Report card. Use sonnet model for speed.
