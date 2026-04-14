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
      "homeAI gives every client a persistent agent that remembers everything — campaigns, tone, competitors, seasonal patterns. The memory lives in the agent, not in someone's head.",
    cta: { text: "See How It Works", href: "#how-it-works" },
    stats: [
      { value: "3x", label: "Client capacity per AM" },
      { value: "70%", label: "Faster AM ramp time" },
      { value: "40%", label: "Lower transition churn" },
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
      "Every agency hits the same ceiling — and it's not about talent.",
    cards: [
      {
        emoji: "🧠",
        stat: "If your best AM quit tomorrow, how much client knowledge walks out?",
        title: "Tribal Knowledge Is a Single Point of Failure",
        description:
          "When an AM leaves, their client context leaves with them. The new person starts from zero, the client notices, and the churn clock starts ticking.",
      },
      {
        emoji: "📈",
        stat: "Revenue scales linearly. So does headcount. Margin doesn't.",
        title: "More Clients = More People = Flat Margins",
        description:
          "Close 10 new accounts, hire 2 more AMs and a strategist. Revenue up 40%, margin barely moves. You've seen this math at 2am.",
      },
      {
        emoji: "🚪",
        stat: "Clients don't leave over bad results. They leave when nobody knows their business.",
        title: "Generic Service Kills Retention",
        description:
          "Your AM is juggling 15 accounts, half the briefs are templated, and the client can tell. They leave for the next agency that promises personalized attention.",
      },
    ],
  },

  /* ─── 3. How homeAI Changes This ─────────────────────────────── */
  agentLoop: {
    headline: "Every Client Gets a Brain. Your Team Gets Superpowers.",
    subheadline:
      "A persistent agent for each account — it understands, remembers, acts, and learns.",
    steps: [
      {
        name: "Understand",
        description:
          "Ingests business docs, past campaigns, reviews, competitors, and market context.",
      },
      {
        name: "Remember",
        description:
          "Perfect memory across AM transitions. Nothing gets lost when people change.",
      },
      {
        name: "Act",
        description:
          "Drafts campaigns, generates content in the client's voice, flags competitor moves.",
      },
      {
        name: "Learn",
        description:
          "Every result feeds back. The agent gets sharper on each client over time.",
      },
    ],
    bullets: [],
  },

  /* ─── 4. What the Agent Actually Does ─────────────────────────── */
  actions: {
    headline: "Not Automation. Understanding.",
    subheadline:
      "homeAI understands why this action matters for this client right now.",
    cards: [
      {
        title: "Onboards new clients in a day",
        description:
          "Feed it the client's website and ad accounts. By tomorrow your AM has a full market brief with quick-win opportunities.",
      },
      {
        title: "Remembers what worked last season",
        description:
          "Which offer converted, at what CPA, on which platform. Context across years, not just the last reporting period.",
      },
      {
        title: "Writes in each client's voice",
        description:
          "Maintains distinct voice profiles per account. Your roofer won't accidentally sound like a lifestyle brand.",
      },
      {
        title: "Catches drift before clients do",
        description:
          "Review velocity dropped? GBP stale? Blog overdue? The agent flags it before the client calls to complain.",
      },
    ],
  },

  /* ─── 5. The Math ─────────────────────────────────────────────── */
  math: {
    headline: "The Math Your CFO Will Like",
    subheadline:
      "Same team. More clients. Better retention.",
    stats: [
      {
        value: 25,
        suffix: "+",
        label: "Clients per AM",
      },
      {
        value: 40,
        suffix: "%",
        label: "Less churn during transitions",
      },
      {
        value: 6,
        suffix: "hrs",
        label: "Saved per account per week",
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
    headline: "Sits on Top of What You Already Use",
    subheadline:
      "No rip-and-replace. The agent works across your existing tools.",
    integrations: [
      { name: "GoHighLevel", description: "CRM & pipeline" },
      { name: "CallRail", description: "Call tracking" },
      { name: "ServiceTitan", description: "Field service" },
      { name: "Housecall Pro", description: "Booking & dispatch" },
      { name: "Jobber", description: "Job management" },
      { name: "Google & Meta Ads", description: "Ad platforms" },
    ],
  },

  /* ─── 7. Partnership ──────────────────────────────────────────── */
  partnership: {
    headline: "Built for Agencies, Priced for Growth",
    subheadline:
      "Per-client pricing. White-label from day one. Volume discounts at 10, 25, and 50+ clients.",
    details: [
      "White-label — your clients see your brand, not ours",
      "Per-client pricing you bundle into your retainer",
      "Volume breaks that improve your margin as you grow",
      "Month-to-month. No annual lock-in.",
    ],
    cta: { text: "Get Agency Pricing", href: "/solutions/agencies/contact" },
  },

  /* ─── 8. FAQ ──────────────────────────────────────────────────── */
  faq: {
    headline: "Questions From Agency Owners",
    items: [
      {
        question: "Does homeAI replace my team?",
        answer:
          "No. Your AMs still own relationships. The agent handles memory, research, and first drafts — the 60% of the week that doesn't require human judgment.",
      },
      {
        question: "Can I white-label this?",
        answer:
          "Yes. Reports, dashboards, everything — your branding. Many partners position it as their proprietary AI capability.",
      },
      {
        question: "How is this different from GoHighLevel's AI?",
        answer:
          "GHL automates workflows. homeAI builds persistent, account-specific memory that compounds over time. It's the difference between a template and a teammate who knows the account.",
      },
      {
        question: "Who owns the data?",
        answer:
          "You do. Full ownership of all client data, agent memory, and generated assets. Export everything if you leave.",
      },
      {
        question: "How fast do agencies see results?",
        answer:
          "Most notice the difference in two weeks — faster onboarding, more consistent output, fewer dropped balls during handoffs.",
      },
    ],
  },

  /* ─── 9. Final CTA ────────────────────────────────────────────── */
  finalCta: {
    headline: "Your Next 20 Clients Shouldn't Require 4 New Hires.",
    subheadline:
      "Start with 5 clients. No contract required.",
    cta: { text: "Talk to the Team", href: "/solutions/agencies/contact" },
  },
};
