/* ═══════════════════════════════════════════════
   Enterprise Solution Page — All Copy
   /solutions/enterprise
   ═══════════════════════════════════════════════ */

// ---------- Types ----------

export interface EnterpriseStat {
  value: number | string;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface EnterpriseCard {
  emoji: string;
  stat: string;
  title: string;
  description: string;
}

export interface ActionCard {
  title: string;
  description: string;
}

export interface IntegrationItem {
  name: string;
  description: string;
}

export interface TrustBadge {
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EnterprisePage {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: { text: string; href: string };
    stats: { num: string; label: string }[];
  };
  trustBadges: TrustBadge[];
  problems: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: EnterpriseCard[];
  };
  howItChanges: {
    headline: string;
    subheadline: string;
    bullets: { title: string; description: string }[];
  };
  agentActions: {
    headline: string;
    subheadline: string;
    cards: ActionCard[];
  };
  scaleStats: {
    headline: string;
    subheadline: string;
    stats: EnterpriseStat[];
  };
  integrationSecurity: {
    headline: string;
    subheadline: string;
    items: IntegrationItem[];
  };
  pricing: {
    headline: string;
    subheadline: string;
    detail: string;
    cta: { text: string; href: string };
  };
  faq: {
    headline: string;
    items: FAQItem[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    cta: { text: string; href: string };
  };
}

// ---------- Data ----------

export const enterprisePage: EnterprisePage = {
  /* ─── 1. Hero ─── */
  hero: {
    badge: "For Enterprise",
    headline: "One Brain. Fifty Locations. Zero Reinvented Wheels.",
    subheadline:
      "Every location gets a persistent agent that understands its market. What works in Phoenix teaches Dallas. Automatically.",
    cta: {
      text: "Talk to Our Team",
      href: "/solutions/enterprise/contact",
    },
    stats: [
      { num: "1:50", label: "Locations per marketing lead" },
      { num: "48hrs", label: "New location to first campaign" },
      { num: "92%", label: "Brand consistency score" },
    ],
  },

  /* ─── Trust Badges ─── */
  trustBadges: [
    { name: "Google Partner", description: "Certified Google Ads management" },
    { name: "Meta Business Partner", description: "Official Meta advertising partner" },
    { name: "ServiceTitan Certified", description: "Certified ServiceTitan integration partner" },
    { name: "SOC 2 Type II", description: "Enterprise-grade security compliance" },
    { name: "BBB Accredited", description: "Better Business Bureau accredited" },
  ],

  /* ─── 2. The Enterprise Problem ─── */
  problems: {
    sectionTitle: "Multi-Location Marketing Is Broken. You Already Know Why.",
    sectionSubtitle:
      "50 locations. 50 independent experiments. Zero shared learnings.",
    cards: [
      {
        emoji: "🔀",
        stat: "What works in one market never systematically reaches the others",
        title: "Insights stay siloed",
        description:
          "Charlotte figured out furnace ads convert 3x when run before the first frost. Austin and Denver have no idea. Multiply that across 50 locations.",
      },
      {
        emoji: "🕳️",
        stat: "4-5 disconnected marketing tools per network",
        title: "HQ sees the scoreboard, not the game",
        description:
          "You know who's hitting numbers. You don't know why Tampa is underperforming — tougher market, late campaigns, or a competitor price drop.",
      },
      {
        emoji: "🔄",
        stat: "6+ months to ramp a new location",
        title: "Every new location starts from zero",
        description:
          "Your network already knows what works for this service mix. That knowledge just isn't accessible. Location #51 launches like it's your first.",
      },
    ],
  },

  /* ─── 3. How homeAI Changes This ─── */
  howItChanges: {
    headline: "Local Agent. Shared Brain.",
    subheadline:
      "Each location gets its own agent. Every agent shares learnings across the network. The whole system gets smarter with every booked job.",
    bullets: [
      {
        title: "Location-level understanding",
        description:
          "Each agent knows the local competitors, seasonal curves, and ZIP-code search patterns for its market.",
      },
      {
        title: "Cross-network learning",
        description:
          "A winning tactic in Phoenix auto-propagates to similar markets. No meetings. No memos.",
      },
      {
        title: "Central visibility, no bottlenecks",
        description:
          "HQ sees what's working where and why — in real time, not a monthly PDF.",
      },
      {
        title: "On-brand, locally relevant",
        description:
          "Brand guidelines enforced automatically. Jacksonville references hurricanes. Minneapolis talks frozen pipes.",
      },
    ],
  },

  /* ─── 4. What the Agent Actually Does ─── */
  agentActions: {
    headline: "What Your Network Agent Does",
    subheadline:
      "A persistent operator at every location that remembers, learns, and acts.",
    cards: [
      {
        title: "Propagates winning strategies",
        description:
          "Memphis booked 34 water heater jobs in 3 weeks. The agent adapts that playbook for every applicable market.",
      },
      {
        title: "Detects underperformers early",
        description:
          "Cost per job jumped 40% in San Antonio? The agent cross-references competitors, seasonality, and campaign changes to tell you why.",
      },
      {
        title: "Localizes national campaigns",
        description:
          "HQ launches a spring AC promo. Florida starts in February. Minnesota waits until May. Automatically.",
      },
      {
        title: "Onboards with network knowledge",
        description:
          "New Raleigh location doesn't start from zero — it inherits what works from similar markets. Market-ready in 48 hours.",
      },
    ],
  },

  /* ─── 5. The Scale Story ─── */
  scaleStats: {
    headline: "Scale Without Scaling Your Team",
    subheadline:
      "What network-wide intelligence looks like.",
    stats: [
      {
        value: 34,
        suffix: "%",
        label: "Lower cost per booked job",
      },
      {
        value: 24,
        suffix: "hrs",
        label: "Winning tactic to all locations",
      },
      {
        value: 60,
        suffix: "%",
        label: "Less coordination overhead",
      },
      {
        value: 90,
        suffix: "-day",
        label: "Typical payback period",
      },
    ],
  },

  /* ─── 6. Integration & Security ─── */
  integrationSecurity: {
    headline: "Built for Your Stack. Secured for Your Scale.",
    subheadline:
      "No rip-and-replace. Connects to your systems of record and adds the intelligence layer.",
    items: [
      { name: "SSO (SAML/OIDC)", description: "Okta, Azure AD, Google Workspace" },
      { name: "Role-Based Access", description: "HQ, regional, location-level permissions" },
      { name: "API Integrations", description: "ServiceTitan, Housecall Pro, Jobber, Salesforce, HubSpot" },
      { name: "Data Isolation", description: "Per-location memory isolation, configurable residency" },
      { name: "Audit Logs", description: "Full traceability on every agent action" },
      { name: "SOC 2 Type II", description: "AES-256, TLS 1.3, third-party pen testing" },
    ],
  },

  /* ─── 7. Pricing ─── */
  pricing: {
    headline: "Pricing That Scales With You",
    subheadline:
      "Based on locations, services, and integrations. No per-seat gotchas.",
    detail:
      "Custom pricing per location count. Most networks are live within 2 weeks.",
    cta: {
      text: "Schedule a Consultation",
      href: "/solutions/enterprise/contact",
    },
  },

  /* ─── 8. FAQ ─── */
  faq: {
    headline: "Questions From Enterprise Teams",
    items: [
      {
        question: "How does data stay separate between locations?",
        answer:
          "Each location has logically isolated memory. Location A can't see Location B's data. HQ and regional roles have configurable cross-location access.",
      },
      {
        question: "Can we control brand guidelines centrally?",
        answer:
          "Yes. Brand standards set at the network level, local agents adapt within those constraints. HQ can review before publish or set auto-publish thresholds.",
      },
      {
        question: "What's the onboarding timeline for 50+ locations?",
        answer:
          "2-4 weeks typical. Start with a 5-10 location pilot, validate, then roll out in waves. Each new location inherits network intelligence from day one.",
      },
      {
        question: "Are you SOC 2 compliant?",
        answer:
          "SOC 2 Type II certified. GDPR-compliant data handling. Configurable data residency. Regular third-party pen testing. Security review available under NDA.",
      },
      {
        question: "Can we export our data if we leave?",
        answer:
          "Full data portability. All memory, history, and assets exportable in standard formats. No lock-in.",
      },
    ],
  },

  /* ─── 9. Final CTA ─── */
  finalCta: {
    headline: "Your Network Already Knows What Works. Let Every Location Use It.",
    subheadline:
      "Start with a free 5-location pilot. No contract required.",
    cta: {
      text: "Start a 5-Location Pilot",
      href: "/solutions/enterprise/contact",
    },
  },
};
