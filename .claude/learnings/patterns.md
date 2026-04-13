# Patterns & Learnings

What works and what doesn't. Agents should read this before starting work.

---

## PATTERN-001: Multi-agent parallel builds work well
- **Context**: Built trade pages, blog, and bug fixes simultaneously with 6 agents
- **What worked**: Clear file ownership prevented conflicts. Each agent had explicit list of files to modify and files NOT to modify.
- **Key**: Always declare file ownership before launching parallel agents
- **Anti-pattern**: Two agents modifying the same file = merge hell

## PATTERN-002: Contractor language is non-negotiable
- **Context**: User's core requirement — site must sound like it was written by someone in the trades
- **What works**: "You're losing emergency calls at 2am", "$86 per lead", "tire kickers"
- **What doesn't**: "Optimize your conversion funnel", "leverage AI-driven insights", "enhance your digital presence"
- **Rule**: If it sounds like a LinkedIn post, rewrite it

## PATTERN-003: Build check before every commit
- **Context**: TypeScript errors caught by `npx next build` that aren't visible in dev mode
- **What works**: Always run `npx next build 2>&1 | tail -20` before committing
- **Time cost**: ~5 seconds. Saves discovering errors after push.

## PATTERN-004: FadeIn with staggered delays for lists
- **Context**: All card grids, feature lists, timeline items
- **Pattern**: `<FadeIn delay={0.08 * index}>` for each item in a map
- **Why**: Creates a smooth cascade effect instead of everything popping in at once

## PATTERN-005: Server Component → Client Component children
- **Context**: Next.js 16 App Router pattern
- **Pattern**: Page is Server Component (exports metadata, generateStaticParams). Interactive parts are separate "use client" components imported as children.
- **Example**: `audit/page.tsx` (server) renders `<AuditPageClient />` (client)
- **Why**: Server components can export metadata; client components cannot

## PATTERN-006: User prefers YOLO mode
- **Context**: User explicitly asked for bypassPermissions mode
- **What works**: Launch agents with `mode: "bypassPermissions"` for speed
- **When to pause**: Only when doing destructive operations (force push, delete, etc.)

## PATTERN-007: Blog post structure that converts
- **Context**: 10 blog posts written, all following same structure
- **Pattern**: Scenario opener → specific pain point → stats/data → what AI does differently → CTA
- **Word count**: 400-600 words per post
- **Key**: End with natural audit CTA, not a hard sell

## PATTERN-008: Agent communication saves context
- **Context**: User explicitly requested "use agent teams to save context in one window"
- **What works**: Delegate heavy work to agents, keep main conversation for coordination
- **How**: Run agents in background, report summaries as they complete
- **Anti-pattern**: Doing research AND implementation in the main conversation = context overflow
