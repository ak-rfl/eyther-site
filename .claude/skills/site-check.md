---
name: site-check
description: "Run a full health check on the homeAI site: build, page count, deployment status, TypeScript, and accessibility scan. Use /site-check anytime before or after changes."
---

# Site Health Check

Run a comprehensive check on the homeAI site status.

## Steps (run in parallel where possible)

### 1. Build check
```bash
cd "/Users/arifkhan/Documents/Claude/Projects/Acquisition Business/homeai-site"
npx next build 2>&1 | tail -30
```
Report: pass/fail, page count, any warnings.

### 2. Git status
```bash
git status
git log --oneline -5
```
Report: clean/dirty, uncommitted changes, last 5 commits.

### 3. Deployment status
```bash
gh api repos/ak-rfl/eyther-site/deployments --jq '.[0] | {sha: .sha[0:7], environment: .environment, created_at: .created_at}'
```
Then check latest deployment status. Report if production is up-to-date with local.

### 4. Page inventory
From the build output, list all generated pages:
- Static pages (count)
- SSG pages with generateStaticParams (count + paths)
- Flag any missing trade pages or blog posts

### 5. Dependency check
```bash
npm outdated 2>/dev/null | head -20
```
Flag any major version bumps available.

### 6. Report card
Present a clean summary:
```
Site Health Check — homeAI
==========================
Build:        PASS / FAIL
Pages:        XX total (X static, X SSG)
TypeScript:   PASS / FAIL
Git:          clean / X uncommitted changes
Deployed:     {sha} — {status}
Local vs Prod: in sync / X commits ahead
Dependencies: up to date / X outdated
```

If anything is failing, suggest the fix.
