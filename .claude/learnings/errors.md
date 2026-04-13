# Error Log

Errors encountered and how they were resolved. Search this before debugging.

---

## ERR-001: useRef requires initial value in React 19
- **Date**: 2026-04-13
- **File**: `src/components/ActivityFeed.tsx:53`
- **Error**: `Expected 1 arguments, but got 0` on `useRef<ReturnType<typeof setTimeout>>()`
- **Cause**: React 19 (used by Next.js 16) requires explicit initial value for `useRef`
- **Fix**: Change `useRef<T>()` to `useRef<T>(undefined)`
- **Rule**: Always use `useRef<T>(undefined)` not `useRef<T>()` in this project

## ERR-002: Next.js 16 params is a Promise
- **Date**: 2026-04-13
- **File**: `src/app/trades/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx`
- **Error**: Type error on `params.slug` access
- **Cause**: Next.js 16 changed `params` to be `Promise<{ slug: string }>` — must be awaited
- **Fix**: `const { slug } = await params;` in both page component and `generateMetadata`
- **Rule**: Always type params as `Promise<>` and await in Next.js 16

## ERR-003: Port 3000 in use
- **Date**: 2026-04-13
- **Error**: Dev server can't start on port 3000
- **Cause**: Another process using port 3000
- **Fix**: Next.js auto-switches to 3001 or 3002. Not a real error.
- **Rule**: Dev server runs on localhost:3001 in this project

## ERR-004: ActivityFeed timeout cleanup leak
- **Date**: 2026-04-13
- **File**: `src/components/ActivityFeed.tsx`
- **Error**: State update on unmounted component (no visible error, but React warning possible)
- **Cause**: `typingTimer` created inside nested closure, not reachable by effect cleanup
- **Fix**: Hoist `typingTimer` to `let` at top of `useEffect`, clear it in cleanup return
- **Rule**: ALL setTimeout/setInterval refs must be clearable from the effect's cleanup function

## ERR-005: Tailwind v4 — no tailwind.config.ts
- **Date**: 2026-04-13
- **Error**: Custom colors not working if added to nonexistent tailwind.config.ts
- **Cause**: This project uses Tailwind CSS v4 with `@theme inline` in globals.css
- **Fix**: All design tokens defined as CSS custom properties in `src/app/globals.css`
- **Rule**: NEVER create tailwind.config.ts. All customization goes in globals.css `@theme inline`

## ERR-006: git push rejected (remote has different history)
- **Date**: 2026-04-13
- **Error**: `Updates were rejected because the remote contains work that you do not have locally`
- **Cause**: Remote repo had existing commits, local repo started fresh
- **Fix**: `git push --force` (only with explicit user permission)
- **Rule**: Never force push without asking. Use `git pull --rebase` first if possible.
