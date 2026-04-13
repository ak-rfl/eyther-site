# homeAI Agentic Thesis Website Refactor Plan

> For Claude Code: read this entire file before changing positioning, copy, structure, or component logic. This is the product thesis, messaging doctrine, and implementation plan for the current website.

Goal: Refactor the current homeAI website so it stops reading like a generic AI marketing agency site and starts reading like what homeAI actually is: a memory-native, agentic operating layer for home-services businesses and the agencies that serve them.

Architecture: Keep the current Next.js 16 / TypeScript / Tailwind v4 site structure, but rewrite the homepage around a stronger category story. Do not build a CRM clone. Do not build a generic SaaS site. Build a contractor-first, agency-aware site that explains the difference between workflow tools and a business-specific agent that understands, remembers, and acts.

Tech stack: Next.js 16 app router, TypeScript, Tailwind CSS v4, Framer Motion.

---

## 0. The single most important thing to understand

homeAI is not just another marketing platform.

It is not:
- another CRM
- another pipeline board
- another workflow builder
- another white-label agency dashboard
- another GoHighLevel clone with AI copy pasted on top

It is:
- a persistent business-specific agent
- with memory
- with business context
- with knowledge of prior campaigns, offers, reviews, tone, geography, service mix, seasonality, trade-specific constraints, and account history
- that can reason over all of that context
- and then act across real channels and tools

The key idea is this:
Most software stores records.
Some software automates workflows.
homeAI should be presented as the system that understands the business and operates on its behalf.

That distinction must shape the homepage.

---

## 1. Category framing: what we are building

Use this framing internally and in the site architecture:

### System of record
Stores facts:
- contacts
- jobs
- invoices
- stages
- forms
- call logs

Examples:
- ServiceTitan
- Housecall Pro
- Jobber
- GoHighLevel

### System of workflow
Automates triggers:
- reminders
- sequences
- routing rules
- generic follow-up logic

### System of understanding and action
Knows:
- what this business does
- what has worked before
- what voice it uses
- what market it serves
- what offers convert
- what the founder knows
- what the agency knows
- what should happen next

Acts:
- drafts posts and campaigns
- generates strategies
- follows up with leads
- monitors KPIs overnight
- identifies gaps
- proposes or executes changes
- gets smarter as business memory grows

This third category is the actual homeAI category.

Do not reduce homeAI to “AI marketing automation.” That undersells the product.

---

## 2. Product thesis in plain English

The website should make the following argument:

1. Today, business knowledge is scattered.
It lives in:
- the founder’s head
- the agency account manager’s head
- past ad accounts
- random docs
- old emails
- Slack or WhatsApp threads
- campaign history nobody revisits
- review responses
- prior posts and offers

2. Existing tools do not really understand the business.
They store records or automate rules, but they do not deeply understand:
- why this plumbing company wins
- what this HVAC shop has already tried
- which tone this roofer uses
- what offers worked in July vs December
- how this agency speaks for this exact client

3. homeAI centralizes that business memory.
Each account gets a persistent agent that:
- ingests business documents and history
- remembers prior work
- understands the business over time
- collaborates with the founder and/or agency
- acts like a tireless marketing brain, intake brain, and lifecycle brain

4. That is why homeAI can outperform both agencies and incumbent software.
Not because incumbents are stupid.
Because they were built as systems of record and workflow, and retrofitting deep agentic memory into those systems is hard.

---

## 3. Audience model

The homepage has to work for two overlapping buyers:

### Buyer A: Home-services founder / owner-operator
They care about:
- more booked jobs
- fewer missed calls
- not repeating themselves
- clear reporting
- someone or something that actually knows their business

They do not care about:
- jargon
- generic “AI platform” language
- dashboards for the sake of dashboards

### Buyer B: Agency owner serving home-services clients
They care about:
- serving more clients without linear headcount growth
- reducing account-manager dependence on tribal memory
- standardizing quality
- not losing accounts because their service feels generic or slow
- having an AI layer that learns each client deeply

The site does not need to split into two separate products right now, but it must stop sounding like generic direct-to-contractor software only.

---

## 4. Non-negotiable messaging doctrine

### Say this
- homeAI understands your business
- every account gets a persistent agent
- the agent remembers what has been done before
- it learns your market, service mix, tone, and goals
- it works overnight
- it connects strategy, intake, and follow-up
- it turns scattered business knowledge into an always-on operating brain

### Do not say this
- omnichannel growth engine
- AI-native CRM
- end-to-end business orchestration platform
- unified martech stack
- intelligent workflow automation solution
- generic “powered by AI” filler

### Strong positioning sentence
Use a version of this repeatedly:

homeAI gives every business or agency account a persistent AI operator that learns the business, remembers its history, and works across marketing, intake, and follow-up 24/7.

### Strong contrast sentence
Use a version of this too:

Most software stores records. homeAI understands the business behind those records and acts on that understanding.

---

## 5. Product rollout story the site should tell

Do not present six disconnected agents.
Do not present a kitchen sink.

Present one persistent account brain expanding across the revenue journey.

### Phase 1: AI CMO
This is the first wedge.

Meaning:
- understands the business and market
- knows what campaigns and content have already run
- generates strategy, content, SEO, review, and ad recommendations
- watches KPIs overnight

### Phase 2: AI Receptionist
This is not “just a bot.”

Meaning:
- the same business memory now powers intake
- it knows urgency, service language, context, and prior patterns
- it captures and routes calls/messages in business-specific ways

### Phase 3: Customer Lifecycle Intelligence
Do not call this simple CLM or CRM on the homepage.

Meaning:
- the same persistent business brain now follows the lead across the whole lifecycle
- from inquiry to appointment to quote to closed job to repeat customer
- it knows what follow-up happened before and what should happen next

### Phase 4: Finance Ops
Lower homepage emphasis.
Mention as later expansion once revenue engine is proven.

---

## 6. Strategic contrast with incumbents

Do this carefully.
Do not make childish “they suck” claims.

The argument is:
- incumbent systems are useful systems of record
- they are good at storing stages, forms, jobs, and transactions
- they are not built around persistent, account-specific business memory and reasoning
- homeAI can sit on top of existing systems first, then deepen over time

This is important.
Do NOT imply that homeAI must replace ServiceTitan, Housecall Pro, Jobber, or GoHighLevel on day one.
That makes the story less credible.

Instead:
- position homeAI as the business-intelligence and action layer above fragmented tools and human memory
- later, if justified, it can absorb more workflow territory

---

## 7. What is wrong with the current site

The current site is good-looking but conceptually too shallow.

Current issue summary:
- it still reads like an AI marketing agency
- it does not clearly explain memory or business-specific understanding
- it does not clearly differentiate homeAI from workflow tools or agency software
- it talks about outcomes, but not enough about why the product can uniquely deliver those outcomes
- “AI marketing team” is directionally useful but still too generic

Specific gaps:
- Hero is strong visually but undersells the memory-native agent thesis
- Activity feed shows work happening, but not enough business understanding happening
- Audit copy talks about strategy report, but not about building or demonstrating account memory
- Comparison likely risks collapsing into “agency vs us” without the deeper “workflow tool vs business brain” distinction
- The site needs one section that explicitly explains the difference between systems of record and systems of understanding

---

## 8. Build principles for Claude Code

1. Keep the site contractor-readable.
This cannot become an abstract AI think-piece.

2. Show intelligence through concrete examples.
Examples are better than claims.
Good example:
- “Knows you already ran a drain-cleaning offer in February, saw weak conversion on Facebook, and found that review velocity dropped after-hours in March.”
Bad example:
- “Persistent memory architecture for lifecycle optimization.”

3. Use memory as the center of the story.
The whole site should implicitly answer:
Why is this better than tools I already have?
Answer:
Because this system actually knows the business and keeps learning it.

4. Do not build this as a redesign only.
This is a conceptual repositioning, not just copy polish.

5. Keep the current light, contractor-first visual language.
Do not swing into dark cyberpunk agent aesthetics.
The agentic story should feel practical, not sci-fi.

---

## 9. Required homepage changes

### Task 1: Rewrite the hero around “persistent business understanding”

Objective: Make the hero communicate that homeAI is an always-on business-specific brain, not just an AI marketing service.

Files:
- Modify: `src/components/Hero.tsx`

Requirements:
- keep the current two-column layout
- keep CTA to `/audit`
- rewrite headline/subhead to emphasize understanding + memory + 24/7 action
- tighten the three stat callouts so at least one reflects memory or business-specific learning
- update badge copy if needed

Recommended message direction:
Headline direction examples:
- “The AI operator that learns your business and runs your growth.”
- “Your business finally has a memory that works.”
- “An AI CMO that actually knows your business.”

Subhead direction:
- explain that homeAI does not just generate content or automate tasks
- explain that it remembers the business, past campaigns, customer patterns, and market context
- explain that it acts on that memory overnight

Activity feed changes:
- show examples that prove continuity and memory
- not just “posted ad” or “sent review request”
- include lines like:
  - “Noticed your spring tune-up campaign underperformed last year in ZIP 75248 — shifted spend toward emergency AC intent as temperatures rose.”
  - “Used the tone from your best-performing review response set when replying to a new 5-star customer review.”
  - “Followed up on quote #284 because this customer profile historically converts on the second touch within 48 hours.”

### Task 2: Add a dedicated “Why this is different” section

Objective: Explicitly explain the difference between workflow tools and a persistent business-specific agent.

Files:
- Create: `src/components/WhyHomeAIDifferent.tsx`
- Modify: `src/app/page.tsx`

Placement:
- place this section after `Problems` and before or after `SleepingTimeline`
- pick whichever ordering reads best, but it must appear high on the page

Content requirements:
- explain three layers:
  - systems of record
  - systems of workflow
  - homeAI as system of understanding and action
- use plain language
- use cards or columns, not long dense paragraphs
- include one “tribal knowledge becomes shared memory” example

### Task 3: Refactor “While You Were Sleeping” into “What the agent actually knows”

Objective: Show that the overnight work is informed by memory, not random automation.

Files:
- Modify: `src/components/SleepingTimeline.tsx`

Requirements:
- keep the section’s overnight / always-on feel
- change examples so they show reasoning from stored context
- each event should answer: what did the agent know that made this action smart?

### Task 4: Reframe “How It Works” around one agentic loop

Objective: Show the loop as:
understand -> remember -> act -> learn

Files:
- Modify: `src/components/HowItWorks.tsx`

Requirements:
- do not present unrelated feature blocks
- show one compounding loop
- mention ingesting docs/history, building memory, taking action, updating knowledge

### Task 5: Rework comparison section away from “agency vs software” only

Objective: Compare homeAI against both agencies and workflow tools.

Files:
- Modify: `src/components/Comparison.tsx`

Requirements:
- add a three-way mental model if design allows:
  - human agency service
  - workflow / CRM tools
  - homeAI
- if three-way layout is too busy, compare against “generic tools and generic agencies” together
- highlight:
  - memory of prior work
  - business-specific understanding
  - 24/7 continuity
  - less dependence on one account manager’s brain

### Task 6: Rewrite audit offer around “build your business brain”

Objective: Make the audit feel like the first step in constructing the account memory and strategy layer.

Files:
- Modify: `src/components/AuditForm.tsx`
- Modify if needed: `src/components/AuditPageClient.tsx`

Requirements:
- audit should not just sound like a PDF strategy report
- it should sound like the beginning of business understanding
- explain that the audit maps market, competitors, offers, and initial business memory

Possible audit framing:
- “We show you what your AI operator would learn first about your business.”
- “See what your account brain would notice in your market, your reviews, and your lead flow.”

### Task 7: Add one trust section about memory, not surveillance

Objective: Handle the natural objection:
“How can an AI know my business without becoming creepy or fake?”

Files:
- Modify: `src/components/FAQ.tsx`

Add or rewrite FAQs around:
- What does homeAI actually remember?
- Does it replace my team or agency?
- Does it work with the tools I already use?
- How is this different from CRM automation or a chatbot?

### Task 8: Adjust pricing language so it matches the thesis

Objective: Pricing should feel like paying for an always-on operator, not a pile of features.

Files:
- Modify: `src/components/Pricing.tsx`

Requirements:
- keep it simple
- do not explode into agent soup
- show progression from marketing understanding to intake to lifecycle intelligence

---

## 10. Copy guardrails

Use this tone:
- direct
- practical
- confident
- slightly sharp
- zero enterprise sludge

Avoid:
- “revolutionary”
- “transforming your business through AI-native workflows”
- “omnichannel orchestration”
- “leverage” as a verb

Good copy sounds like:
- “It remembers what your agency forgot.”
- “It knows what you ran last season, what converted, and what should happen next.”
- “This is not another dashboard. It is the account brain your business never had.”

---

## 11. Acceptance criteria

The refactor is successful if a smart visitor can understand all of this within one scroll:

1. homeAI is not just another marketing agency
2. homeAI is not just another CRM/workflow tool
3. the key differentiator is persistent business-specific memory + action
4. AI CMO is the first wedge
5. AI Receptionist and lifecycle intelligence expand the same account brain
6. the product feels credible, not sci-fi

If the homepage still reads like “AI marketing agency but prettier,” the refactor failed.

---

## 12. Nice-to-have follow-up work after homepage refactor

After the homepage is correct, next expansions can include:
- audit page rewrite to deepen the account-memory story
- one dedicated page on “How homeAI works with your existing stack”
- one dedicated page for agencies
- one dedicated page on Customer Lifecycle Intelligence
- blog posts contrasting homeAI with generic workflow tools

Do not do all of these first. Get the homepage thesis right.

---

## 13. Final instruction to Claude Code

Do not approach this as a normal copy refresh.
Approach it as category clarification.

The website must teach one core idea:

Existing tools store records.
Existing agencies hold knowledge in people.
homeAI turns that scattered human knowledge into a persistent agent that understands the business and works on it continuously.

That is the site you are building.