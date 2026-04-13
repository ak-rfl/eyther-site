/* ═══════════════════════════════════════════════════════════════════
   Agency Solution Page — All copy and data
   /solutions/agencies
   ═══════════════════════════════════════════════════════════════════ */

// ── Types ──────────────────────────────────────────────────────────

export interface AgencyHero {
  badge: string;
  headline: string;
  subheadline: string;
  cta: { text: string; href: string };
  stats: { value: string; label: string }[];
}

export interface ProblemCard {
  emoji: string;
  stat: string;
  title: string;
  description: string;
}

export interface AgentLoopSection {
  headline: string;
  subheadline: string;
  steps: { name: string; description: string }[];
  bullets: string[];
}

export interface ActionCard {
  title: string;
  description: string;
}

export interface MathStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface IntegrationItem {
  name: string;
  description: string;
}

export interface StackSection {
  headline: string;
  subheadline: string;
  integrations: IntegrationItem[];
}

export interface PartnershipSection {
  headline: string;
  subheadline: string;
  details: string[];
  cta: { text: string; href: string };
}

export interface TrustBadge {
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FinalCTA {
  headline: string;
  subheadline: string;
  cta: { text: string; href: string };
}

export interface AgencyPage {
  hero: AgencyHero;
  trustBadges: TrustBadge[];
  problems: { headline: string; subheadline: string; cards: ProblemCard[] };
  agentLoop: AgentLoopSection;
  actions: { headline: string; subheadline: string; cards: ActionCard[] };
  math: { headline: string; subheadline: string; stats: MathStat[] };
  stack: StackSection;
  partnership: PartnershipSection;
  faq: { headline: string; items: FAQItem[] };
  finalCta: FinalCTA;
}

// ── Data ───────────────────────────────────────────────────────────

export const agencyPage: AgencyPage = {
  /* ─── 1. Hero ─────────────────────────────────────────────────── */
  hero: {
    badge: "For Agencies",
    headline:
      "Your Best AM Quit. Half Your Client Knowledge Just Walked Out the Door.",
    subheadline:
      "homeAI gives every client account a persistent agent that remembers their business — past campaigns, tone, market position, seasonal patterns, everything. Any AM on your team can deliver expert-level service on any account, because the institutional memory lives in the agent, not in someone's head.",
    cta: { text: "See How It Works", href: "#how-it-works" },
    stats: [
      { value: "3x", label: "Client capacity per AM without sacrificing quality" },
      { value: "70%", label: "Faster new-AM ramp on existing accounts" },
      { value: "40%", label: "Lower churn from account transitions" },
    ],
  },

  /* ─── Trust Badges ────────────────────────────────────────────── */
  trustBadges: [
    { name: "Google Partner", description: "Certified Google Ads management" },
    { name: "Meta Business Partner", description: "Official Meta advertising partner" },
    { name: "ServiceTitan Certified", description: "Certified ServiceTitan integration partner" },
    { name: "BBB Accredited", description: "Better Business Bureau accredited" },
  ],

  /* ─── 2. The Agency Problem ───────────────────────────────────── */
  problems: {
    headline: "You Already Know These Problems",
    subheadline:
      "You've built something real. But every agency hits the same ceiling — and it's not about talent.",
    cards: [
      {
        emoji: "🧠",
        stat: "Ask yourself: if your best AM quit tomorrow, how much client knowledge walks out with them?",
        title: "Tribal Knowledge Is a Single Point of Failure",
        description:
          "Your senior AM knows that Mike's Plumbing hates exclamation points, ran a drain cleaning promo last October that tanked, and gets most of their emergency calls from ZIP 75248. When that AM goes on PTO — or leaves — none of that comes with a handoff doc. The new person starts from zero, the client notices immediately, and the churn clock starts ticking.",
      },
      {
        emoji: "📈",
        stat: "Revenue scales linearly. Headcount scales linearly. Margin doesn't.",
        title: "More Clients = More People = More Overhead",
        description:
          "You close 10 new accounts. Now you need 2 more AMs, another strategist, and someone to keep the reporting from falling apart. Your revenue goes up 40% but your margin barely moves because you hired 40% more people. Every agency owner has stared at this math at 2am and wondered if there's a way out.",
      },
      {
        emoji: "🚪",
        stat: "The top reason clients leave agencies isn't bad results — it's feeling like nobody knows their business.",
        title: "Generic Service Kills Retention",
        description:
          "You know the call. The client says \"I don't feel like you guys really know my business.\" They're not wrong. Your AM is juggling 15 accounts, half the campaign briefs are templated, and the client can tell. They leave for the next agency that promises personalized attention — until that agency does the same thing 6 months later.",
      },
    ],
  },

  /* ─── 3. How homeAI Changes This ─────────────────────────────── */
  agentLoop: {
    headline: "Every Client Gets a Brain. Your Team Gets Superpowers.",
    subheadline:
      "homeAI assigns a persistent agent to each client account — an always-on strategist with perfect memory. It understands the client's business, remembers every campaign and outcome, acts on that knowledge, and compounds its intelligence with every interaction.",
    steps: [
      {
        name: "Understand",
        description:
          "The agent ingests the client's business docs, past campaigns, review history, competitor landscape, service mix, and market context. It learns what this specific business does, where it operates, and how it talks.",
      },
      {
        name: "Remember",
        description:
          "Everything stays in persistent memory. The drain cleaning promo that flopped. The Facebook ad set that crushed it in July. The client's preference for straightforward copy over salesy language. Nothing gets lost when an AM switches accounts or leaves your team.",
      },
      {
        name: "Act",
        description:
          "The agent drafts campaigns, generates content in the client's voice, suggests seasonal strategy based on what worked last year, flags competitor moves, and surfaces opportunities your team would have missed at 15 accounts per AM.",
      },
      {
        name: "Learn",
        description:
          "Every result feeds back into memory. The agent gets sharper on each client over time — which offers convert in which ZIP codes, which review responses drive the most engagement, which ad copy this audience actually clicks. Your service quality compounds instead of resetting every quarter.",
      },
    ],
    bullets: [
      "New AMs ramp in hours, not weeks — the agent briefs them on everything about the account",
      "Campaign strategy is grounded in actual history, not whoever's gut feeling is loudest in the room",
      "Client voice stays consistent across every piece of content, even when three different people touch the account",
      "The agent catches things humans miss — a competitor launched a spring campaign early, review velocity dropped, a seasonal window is opening",
    ],
  },

  /* ─── 4. What the Agent Actually Does ─────────────────────────── */
  actions: {
    headline: "Not Automation. Understanding.",
    subheadline:
      "Workflow tools fire triggers. homeAI understands why this action matters for this specific client right now.",
    cards: [
      {
        title: "Onboards new clients in a day, not two weeks",
        description:
          "Feed the agent the client's website, past ad accounts, review profiles, and any docs they hand over. By tomorrow it can brief your AM on the client's market position, top competitors, seasonal patterns, content tone, and three quick-win opportunities — work that used to eat your strategist's first two weeks on an account.",
      },
      {
        title: "Remembers what worked (and what didn't) last season",
        description:
          "\"We ran a $99 AC tune-up offer in March for Comfort Air. Facebook CPA was $34, Google was $61, and we got 47 booked jobs. The year before, a $79 offer got a lower CPA but fewer high-ticket upsells.\" The agent holds this context across years, not just the last reporting period.",
      },
      {
        title: "Builds seasonal strategy from real history, not templates",
        description:
          "Instead of pulling out last year's generic \"spring campaign playbook,\" the agent builds a strategy based on what actually happened with this client in this market. It knows that the client's area saw hail damage in April, that their biggest competitor discounts heavily in March, and that the client's best-converting offer was a free inspection, not a percentage discount.",
      },
      {
        title: "Writes in each client's actual voice",
        description:
          "Client A sounds blue-collar and direct. Client B sounds polished and family-oriented. Client C hates exclamation points. The agent maintains distinct voice profiles for every account, so your content team doesn't accidentally make a gruff roofer sound like a lifestyle brand.",
      },
      {
        title: "Flags when a client's competitor changes strategy",
        description:
          "\"Heads up — your client's biggest competitor in Phoenix just launched a $49 drain cleaning offer and started running video ads on Facebook for the first time.\" Your AM gets this surfaced proactively instead of finding out when the client calls to ask why their leads dropped.",
      },
      {
        title: "Catches account drift before clients do",
        description:
          "Review velocity dropped 30% this month. The Google Business Profile hasn't been updated in 3 weeks. The last blog post was 45 days ago. The agent flags these patterns before they become the client's reason to leave — and suggests specific fixes based on what's worked for this account before.",
      },
    ],
  },

  /* ─── 5. The Math ─────────────────────────────────────────────── */
  math: {
    headline: "The Math Your CFO Will Like",
    subheadline:
      "Same team. More clients. Better retention. Higher revenue per head.",
    stats: [
      {
        value: 25,
        suffix: "+",
        label: "Clients per AM (vs 12-15 without homeAI)",
      },
      {
        value: 40,
        suffix: "%",
        label: "Reduction in client churn during AM transitions",
      },
      {
        value: 6,
        suffix: "hrs",
        label: "Saved per account per week on research, reporting, and first drafts",
      },
      {
        value: 2,
        suffix: "x",
        label: "Revenue per employee",
      },
    ],
  },

  /* ─── 6. Works With Your Stack ────────────────────────────────── */
  stack: {
    headline: "It Sits on Top of What You Already Use",
    subheadline:
      "homeAI doesn't replace your tools. It's the intelligence layer that makes them smarter. Keep your CRM, keep your ad platforms, keep your reporting stack. The agent works across all of them.",
    integrations: [
      {
        name: "GoHighLevel",
        description:
          "The agent reads pipeline data, triggers follow-ups with business context, and generates campaign assets directly inside GHL — without your team copy-pasting between tabs.",
      },
      {
        name: "CallRail",
        description:
          "Connects call tracking data to campaign performance so the agent knows which keywords, ads, and landing pages are actually generating phone calls — not just form fills your client never sees.",
      },
      {
        name: "ServiceTitan",
        description:
          "Pulls job history, revenue data, and customer records to ground marketing strategy in actual business performance — not guesswork about what services are selling.",
      },
      {
        name: "Housecall Pro",
        description:
          "Connects booking data to campaign performance. The agent knows which campaigns actually put butts in homes, not just which ones got clicks.",
      },
      {
        name: "Jobber",
        description:
          "Maps job completion rates, customer lifetime value, and service-area data so the agent can recommend where to spend and what to promote for each client.",
      },
      {
        name: "Google & Meta Ads",
        description:
          "The agent monitors ad performance across both platforms, remembers what creative and targeting worked historically, and surfaces optimization opportunities your team can act on in minutes.",
      },
    ],
  },

  /* ─── 7. Partnership ──────────────────────────────────────────── */
  partnership: {
    headline: "Built for Agencies, Priced for Growth",
    subheadline:
      "No enterprise sales calls. No 47-line feature matrix. One conversation about your agency, a per-client pricing model that scales with you, and volume discounts that reward growth.",
    details: [
      "White-label from day one — your clients see your brand, your dashboards, your reports. This looks like your proprietary technology.",
      "Per-client pricing that you bundle into your retainer — your margin, your packaging, your upsell",
      "Volume breaks at 10, 25, and 50+ clients that improve your margin as you grow",
      "Direct access to the founding team during launch — not a support queue, not a chatbot",
      "Month-to-month. No annual lock-in. You stay because it works, not because of a contract.",
    ],
    cta: { text: "Get Agency Pricing", href: "/solutions/agencies/contact" },
  },

  /* ─── 8. FAQ ──────────────────────────────────────────────────── */
  faq: {
    headline: "Questions We Get From Agency Owners",
    items: [
      {
        question: "Does homeAI replace my team?",
        answer:
          "No. homeAI makes your existing team dramatically more effective. Your AMs still own the client relationship. Your strategists still make the final calls. The agent handles the memory, research, and first-draft work that currently eats 60% of their week. Think of it as giving every AM a tireless research analyst who has perfect recall of every client's entire history.",
      },
      {
        question: "How does onboarding work for each client?",
        answer:
          "Fast. You feed the agent the client's website, any past campaign data, ad account access, review profiles, and whatever business docs the client provides. The agent builds an initial business profile in 24 hours — market position, competitor landscape, content tone, seasonal patterns, quick-win opportunities. Your AM reviews it, makes corrections, and the agent starts learning from there. Most agencies have a new client fully ramped in the agent within 2-3 days.",
      },
      {
        question: "Can I white-label this?",
        answer:
          "Yes. Your clients see your agency's branding, not homeAI. Reports, dashboards, communications — it all looks like your proprietary technology. Some of our best partners position the agent as their in-house AI capability, and their clients love it.",
      },
      {
        question: "What if a client leaves my agency?",
        answer:
          "The account memory belongs to your agency. If a client leaves, you retain the agent's knowledge for reference. If the same client comes back (and they often do), you can spin the agent back up with full historical context. You never start from scratch twice.",
      },
      {
        question: "How is this different from GoHighLevel's AI features?",
        answer:
          "GoHighLevel is a solid system of record and workflow automation. Its AI features generate copy and automate sequences — useful, but generic. homeAI is a different category entirely. It builds persistent, account-specific memory that compounds over time. GHL's AI doesn't remember that this particular roofing client's best-performing offer was a free storm damage inspection, not a percentage discount, and that their review velocity drops every November. homeAI does. It's the difference between a template and a teammate who knows the account inside out.",
      },
      {
        question: "What data does homeAI need from each client?",
        answer:
          "At minimum: the client's website and Google Business Profile. That alone gets you a useful agent. To unlock full capability, give it ad account access (Google Ads, Meta), review platform access, any past campaign performance data, and business documents like service menus, pricing sheets, or brand guidelines. The more context you feed it, the smarter it gets. And it never forgets what you've given it.",
      },
      {
        question: "Who owns the data?",
        answer:
          "You do. Your agency retains full ownership of all client data, agent memory, and generated assets. We never use your client data to train models or share it with other agencies. If you leave homeAI, you can export everything. We're a tool in your stack, not a landlord.",
      },
      {
        question: "How quickly do agencies see results?",
        answer:
          "Most agencies notice the difference within the first two weeks — faster onboarding for new clients, more consistent content output, and fewer things falling through cracks during AM handoffs. The compounding effect of the agent's memory means it gets noticeably better at month two, and significantly better by month three. The agencies that see the fastest ROI are the ones that feed the agent the most historical context upfront.",
      },
    ],
  },

  /* ─── 9. Final CTA ────────────────────────────────────────────── */
  finalCta: {
    headline: "Your Next 20 Clients Shouldn't Require 4 New Hires.",
    subheadline:
      "The agencies moving fastest right now are the ones giving every account a persistent brain instead of hiring another junior AM and hoping for the best. Start with 5 clients, no contract required.",
    cta: { text: "Talk to the Team", href: "/solutions/agencies/contact" },
  },
};
