---
name: deploy
description: "Commit all changes, push to GitHub, and verify Vercel deployment. Use /deploy to ship changes to production. Optionally pass a commit message: /deploy 'fix hero CTA styling'"
---

# Deploy to Production

Automated git commit + push + Vercel deployment verification for the homeAI site.

## Steps

### 1. Pre-flight check
```bash
cd "/Users/arifkhan/Documents/Claude/Projects/Acquisition Business/homeai-site"
npx next build 2>&1 | tail -20
```
If build fails, **STOP**. Fix the errors first, then retry.

### 2. Check what's changed
Run in parallel:
- `git status` (never use -uall flag)
- `git diff --stat`
- `git log --oneline -3`

If there are no changes, tell the user "Nothing to deploy — working tree is clean."

### 3. Stage files
Stage all modified and new files EXCEPT:
- `.env*` files
- `node_modules/`
- Any files with secrets or credentials

Prefer staging specific files by name over `git add -A`.

### 4. Commit
If the user passed a message as argument, use it. Otherwise, analyze the changes and write a concise commit message that focuses on the "why."

Always end with:
```
Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

Use HEREDOC format for the commit message.

### 5. Push
```bash
git push origin main
```
If rejected, tell the user — do NOT force push without explicit permission.

### 6. Verify deployment
```bash
gh api repos/ak-rfl/eyther-site/deployments --jq '.[0] | {sha: .sha[0:7], environment: .environment, created_at: .created_at}'
```
Then check status:
```bash
gh api repos/ak-rfl/eyther-site/deployments/{id}/statuses --jq '.[0] | {state: .state, description: .description}'
```

Report: commit SHA, deployment status, and the Vercel URL.

### 7. Summary
```
Deployed to production:
- Commit: {sha} — {message}
- Build: {pass/fail}
- Vercel: {status}
- URL: https://eyther-site.vercel.app
```
