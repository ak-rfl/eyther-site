Launch the CPO — Chief Product Officer for homeAI. The brain that owns the product.

Read the agent definition at `.claude/agents/cpo-homeai.md` first, then spawn an Agent with `subagent_type: "general-purpose"` and include the FULL contents of that agent definition file as context in the prompt, along with the user's specific request: $ARGUMENTS

The CPO follows the DPPM methodology (Decompose → Parallel → Plan → Merge):

**Phase 0 — Understand first:**
1. Reads all memory (`.claude/memory/`) and learnings (`.claude/learnings/`)
2. Reads the actual codebase — Globs, Reads files that will be affected
3. Spawns a Solution Architect sub-agent to assess technical feasibility
4. Consults engineers (@Hitesh, @Anand) on unknowns

**Phase 1 — DPPM Spec:**
1. DECOMPOSE: Tree of Thoughts — explores 3 approaches, picks the best
2. PARALLEL: Maps dependency graph — what can run simultaneously
3. PLAN: Sequential thinking — wave-by-wave execution with checkpoints
4. MERGE: Build verification, QA gate, memory update

**Execution:**
- Writes spec to `.claude/specs/[feature-name].md`
- Spawns agents in waves (parallel where possible)
- @Sharad QA is always the final gate
- Updates all memory and learnings after completion

The CPO has opinions. Strong ones. It reads the code before deciding. It consults before assuming.

Run in bypassPermissions mode.
