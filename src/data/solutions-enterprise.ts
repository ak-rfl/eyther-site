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
      "Every location gets a persistent agent that understands its market, competitors, seasonality, and history. What works in Phoenix teaches Dallas. Automatically. Central intelligence, local execution — without scaling your marketing department linearly with your locations.",
    cta: {
      text: "Talk to Our Team",
      href: "/solutions/enterprise/contact",
    },
    stats: [
      { num: "1:50", label: "Locations per marketing lead (execution managed by homeAI)" },
      { num: "48hrs", label: "New location: first live campaign" },
      { num: "92%", label: "Brand consistency (homeAI cross-location content audit)" },
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
    sectionTitle: "You've Tried to Solve Multi-Location Marketing. Here's Why It Hasn't Worked.",
    sectionSubtitle:
      "You have the brand. You have the locations. But your marketing is 50 independent experiments running in 50 different directions.",
    cards: [
      {
        emoji: "🔀",
        stat: "In most multi-location networks, what works in one market never systematically reaches the others",
        title: "What works in one market never reaches the others",
        description:
          "Your Charlotte location figured out that furnace tune-up ads convert 3x better when they run two weeks before the first frost -- not after. Your Austin and Denver locations have no idea. That insight is sitting in one account manager's head, or buried in a spreadsheet nobody checks. Multiply that across 50 locations and you're leaving six figures on the table every quarter.",
      },
      {
        emoji: "🕳️",
        stat: "The average network we talk to is running 4-5 disconnected marketing tools",
        title: "HQ can see the scoreboard but not the game",
        description:
          "You know which locations are hitting their numbers and which aren't. What you don't know is why. Is the Tampa location underperforming because the market is tougher, because they launched campaigns late, or because their local competitor just dropped prices 20%? By the time HQ diagnoses the problem, you've lost a season.",
      },
      {
        emoji: "🔄",
        stat: "6+ months average ramp time for new location marketing",
        title: "Every new location starts from scratch",
        description:
          "You open a new location in Raleigh. The marketing team spends 4-6 months learning the local market, building campaigns, testing what works. Meanwhile, your network already knows what works for this exact service mix in similar-sized markets. That knowledge just isn't accessible. Your 51st location launches like it's your first.",
      },
    ],
  },

  /* ─── 3. How homeAI Changes This ─── */
  howItChanges: {
    headline: "A Local Agent at Every Location. A Shared Brain Across the Network.",
    subheadline:
      "Each location gets its own persistent agent that understands that specific market -- local competitors, seasonal patterns, customer behavior, review landscape. But unlike a siloed agency or in-house hire, every agent shares learnings across the network. The whole system gets smarter with every booked job, every campaign, every market shift.",
    bullets: [
      {
        title: "Location-level understanding",
        description:
          "Each agent knows the local competitor landscape, seasonal demand curves, zip-code-level search patterns, and what campaigns have been run before at that location. It's not running a generic playbook -- it's running your playbook for that specific market.",
      },
      {
        title: "Cross-network learning",
        description:
          "When your Phoenix location discovers that drain cleaning campaigns perform 40% better with urgency-based copy in August, every location in a similar climate gets that insight applied to their next campaign. Automatically. No meeting. No memo. No six-week rollout.",
      },
      {
        title: "Central visibility without central bottlenecks",
        description:
          "HQ sees what's working where, why locations are over or underperforming, and which strategies are propagating across the network. Real-time, not in a monthly PDF that's outdated by the time it hits your inbox.",
      },
      {
        title: "Local execution that stays on brand",
        description:
          "Brand guidelines, approved messaging, visual standards -- enforced automatically at every location. But with enough local flexibility that your Jacksonville agent references hurricane season prep while your Minneapolis agent talks about frozen pipe prevention. Same brand, different context.",
      },
    ],
  },

  /* ─── 4. What the Agent Actually Does ─── */
  agentActions: {
    headline: "What Your Network Agent Actually Does",
    subheadline:
      "Not just a dashboard. Not just a reporting layer. A persistent operator at every location that remembers, learns, and acts.",
    cards: [
      {
        title: "Propagates winning strategies across locations",
        description:
          "Your Memphis location ran a water heater replacement campaign that booked 34 jobs in 3 weeks. The agent identifies what made it work -- the copy angle, the timing, the audience targeting -- and adapts it for your other locations. Not a copy-paste. A market-adjusted rollout that accounts for local competition, pricing, and demand.",
      },
      {
        title: "Detects underperforming locations before you do",
        description:
          "The agent notices your San Antonio location's cost per booked job jumped 40% in two weeks. It cross-references with competitor activity, seasonal benchmarks, and campaign changes to surface the likely cause. You get an alert with context, not just a red number on a dashboard.",
      },
      {
        title: "Adapts national campaigns to local markets",
        description:
          "HQ launches a spring AC tune-up promotion. The agent adjusts messaging, timing, and spend allocation for each location based on local climate data, competitive density, and that location's historical performance on similar offers. Your Florida locations start in February. Minnesota waits until May.",
      },
      {
        title: "Onboards new locations with network knowledge",
        description:
          "Your new Raleigh location doesn't start from zero. The agent builds its initial strategy from what's worked across your network in similar-sized markets with similar service mixes. Competitor analysis, keyword strategy, campaign templates, review generation playbook -- market-ready in 48 hours, not 6 months.",
      },
      {
        title: "Maintains brand consistency with local relevance",
        description:
          "Every location's ads, social posts, review responses, and landing pages follow brand guidelines. But the agent adapts tone and content to local context -- referencing local landmarks, weather events, community concerns. Your brand sounds like one company that actually knows each neighborhood.",
      },
      {
        title: "Tracks competitor moves in every market",
        description:
          "When the biggest HVAC company in your Dallas market launches a $49 tune-up special, the agent flags it, shows you how it compares to your pricing, and recommends a response strategy based on what's worked in other markets when competitors undercut on price. You're not reacting blind.",
      },
    ],
  },

  /* ─── 5. The Scale Story ─── */
  scaleStats: {
    headline: "Marketing at Scale Without Scaling Your Team",
    subheadline:
      "What this looks like at scale.",
    stats: [
      {
        value: 34,
        suffix: "%",
        label: "Lower cost per booked job across the network",
      },
      {
        value: 24,
        suffix: "hrs",
        label: "For a winning tactic to reach all applicable locations",
      },
      {
        value: 60,
        suffix: "%",
        label: "Less time spent on cross-location marketing coordination",
      },
      {
        value: 90,
        suffix: "-day",
        label: "Typical payback period for enterprise networks",
      },
    ],
  },

  /* ─── 6. Integration & Security ─── */
  integrationSecurity: {
    headline: "Built for Your Stack. Secured for Your Scale.",
    subheadline:
      "homeAI sits on top of the tools you already use. No rip-and-replace. No 18-month migration. Connects to your systems of record and adds the intelligence layer they're missing.",
    items: [
      {
        name: "Single Sign-On (SSO)",
        description:
          "SAML 2.0 and OIDC support. Your team logs in with existing credentials. Okta, Azure AD, Google Workspace -- we connect to what you already run.",
      },
      {
        name: "Role-Based Access Control",
        description:
          "HQ admins see the full network. Regional managers see their territory. Location managers see their own data. Franchisees see what you want them to see. Permissions are granular down to the individual location.",
      },
      {
        name: "API Integrations",
        description:
          "Native integrations with ServiceTitan, Housecall Pro, Jobber, Salesforce, HubSpot, and Google Business Profile. REST API for custom connections to your proprietary systems.",
      },
      {
        name: "Data Residency & Isolation",
        description:
          "Location data is logically isolated. Each location's business memory is separate and access-controlled. Choose US, EU, or regional data residency to meet compliance requirements.",
      },
      {
        name: "Audit Logs",
        description:
          "Every agent action, every campaign change, every strategy propagation is logged with timestamps, user attribution, and decision reasoning. Full traceability for compliance and internal governance.",
      },
      {
        name: "Data Encryption & AI Governance",
        description:
          "AES-256 encryption at rest, TLS 1.3 in transit. Your business data is never used to train models. Per-account data isolation with configurable retention policies. Full transparency on data processing.",
      },
      {
        name: "Compliance & Certifications",
        description:
          "SOC 2 Type II. CCPA/CPRA compliant. TCPA-aware communication handling. Regular third-party penetration testing. 99.9% uptime SLA with status page. Security architecture review available under NDA.",
      },
    ],
  },

  /* ─── 7. Pricing ─── */
  pricing: {
    headline: "Pricing That Scales With You",
    subheadline:
      "Enterprise pricing is based on your number of locations, service verticals, and integration requirements. No per-seat gotchas. No surprise overages.",
    detail:
      "Custom pricing based on number of locations, services, and integration requirements. Most multi-location networks are live within 2 weeks of signing.",
    cta: {
      text: "Schedule a Consultation",
      href: "/solutions/enterprise/contact",
    },
  },

  /* ─── 8. FAQ ─── */
  faq: {
    headline: "Common Questions from Multi-Location Teams",
    items: [
      {
        question: "How does data stay separate between locations?",
        answer:
          "Each location has its own persistent agent with logically isolated memory. Location A cannot see location B's customer data, campaign performance, or business specifics. HQ and regional roles have configurable access across locations through role-based permissions. Think of it as separate brains that share general learnings -- not private data.",
      },
      {
        question:
          "Can we control brand guidelines centrally while allowing local adaptation?",
        answer:
          "Yes. You define brand standards at the network level -- approved messaging, visual guidelines, tone parameters, offer guardrails. Each location's agent works within those constraints while adapting content to local context. Your Jacksonville location references hurricane prep. Your Denver location talks about frozen pipes. Same brand voice, locally relevant execution. HQ can review and approve local adaptations before they go live, or set confidence thresholds for auto-publishing.",
      },
      {
        question:
          "What's the onboarding timeline for 50+ locations?",
        answer:
          "Typical rollout for a 50-location network is 2-4 weeks. We start with a pilot group of 5-10 locations, validate performance against your benchmarks, then roll out in waves. Each new location inherits network intelligence from day one, so there's no 6-month ramp. Most locations have live campaigns within 48 hours of onboarding. We've onboarded networks of 150+ locations in under 6 weeks.",
      },
      {
        question: "Are you SOC 2 compliant?",
        answer:
          "SOC 2 Type II certified, with annual re-certification. We also support GDPR-compliant data handling for international operations, offer configurable data residency (US, EU, regional), and conduct regular third-party penetration testing. Happy to do a full security review with your infosec team before signing -- most enterprise clients do, and we expect it.",
      },
      {
        question:
          "Can different locations have different service mixes?",
        answer:
          "Absolutely. Your Phoenix location might focus on AC repair and pool heater installs while your Chicago location emphasizes furnace replacements and snow-melt systems. Each agent builds its strategy around that specific location's service mix, local demand patterns, and competitive landscape. Add or remove services per location at any time -- the agent adjusts its campaigns accordingly.",
      },
      {
        question:
          "How does this work with our existing ServiceTitan or Housecall Pro setup?",
        answer:
          "homeAI connects to ServiceTitan, Housecall Pro, Jobber, and other field service platforms through native integrations. It reads job data, customer history, and scheduling to inform campaign decisions — but it doesn't replace your system of record. If your Memphis location just completed 30 water heater installs, the agent knows that and can build a campaign around your track record in that service. Your dispatch workflow stays exactly the same.",
      },
      {
        question: "Can we export our data if we leave?",
        answer:
          "Yes. Full data portability. All agent memory, campaign history, generated assets, and performance data can be exported in standard formats. No lock-in. We want you to stay because the product works, not because your data is trapped.",
      },
      {
        question: "How much control do we have over what the agent does?",
        answer:
          "Full control. Every action has configurable approval workflows — you can require human review before campaigns go live, set confidence thresholds for auto-publishing, or run in full-auto mode per location. HQ can set network-wide guardrails while giving regional managers local override capability. Nothing goes out that you haven't approved at the level of control you choose.",
      },
      {
        question: "How do we measure ROI across the network?",
        answer:
          "We benchmark against your current per-location marketing cost, lead volume, and campaign velocity before onboarding. Most networks see measurable improvement within the first 60 days — faster campaign launches, lower cost per location, and fewer hours spent on cross-location coordination. We build a custom ROI dashboard for every enterprise client so you can track the delta in real time.",
      },
    ],
  },

  /* ─── 9. Final CTA ─── */
  finalCta: {
    headline: "Your Network Already Knows What Works. Let Every Location Use It.",
    subheadline:
      "Stop running 50 independent experiments. We'll show you what network-wide intelligence looks like for your locations — starting with a free 5-location pilot.",
    cta: {
      text: "Start a 5-Location Pilot",
      href: "/solutions/enterprise/contact",
    },
  },
};
