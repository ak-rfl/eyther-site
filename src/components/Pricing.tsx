import FadeIn from "./FadeIn";

const tiers = [
  {
    tier: "Starter",
    name: "Solo Operator",
    desc: "For 1-5 employee shops getting started",
    price: "497",
    vs: "You're probably spending $1,200+/mo on scattered tools with no strategy",
    features: [
      "AI marketing team — learns your business",
      "Google Ads campaign design & management",
      "Google Business Profile SEO",
      "Review management & growth",
      "Morning Briefing dashboard",
      "Monthly marketing strategy report",
    ],
    featured: false,
  },
  {
    tier: "Growth",
    name: "Growing Team",
    desc: "For 5-20 employee companies scaling up",
    price: "997",
    vs: "vs. $3,500+ for an agency doing less",
    features: [
      "Everything in Starter",
      "Custom campaign design (seasonal, event-driven)",
      "Social media content & scheduling",
      "SEO blog content (4/month)",
      "Competitor tracking & gap analysis",
      "AI business recommendations",
    ],
    featured: true,
  },
  {
    tier: "Scale",
    name: "Multi-Location",
    desc: "For 20+ employee, multi-truck operations",
    price: "1,997",
    vs: "vs. $5,000+ for an agency doing less",
    features: [
      "Everything in Growth",
      "Multi-location campaign strategy",
      "Email & re-engagement campaigns",
      "Dedicated strategy advisor",
      "Custom integrations & reporting",
      "Priority support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-secondary-50 py-20 md:py-24" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-4">
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              Pricing
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight mb-3">
              Your AI Marketing Team. One Monthly Price.
            </h2>
            <p className="text-lg text-concrete-600">
              Every plan includes the full AI team. No contracts. Cancel anytime.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <p className="text-center text-[15px] text-concrete-600 mb-12">
            A fractional CMO costs <strong className="text-concrete-900">$5,000-$15,000/mo</strong>.
            An agency charges <strong className="text-concrete-900">$2,800-$4,500/mo</strong> for less.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-[420px] md:max-w-none mx-auto">
          {tiers.map((t, i) => (
            <FadeIn key={t.tier} delay={0.1 * i}>
              <div
                className={`bg-white rounded-xl p-8 flex flex-col relative transition-all hover:-translate-y-1 ${
                  t.featured
                    ? "border-2 border-accent-500 shadow-[0_8px_32px_rgba(232,86,15,0.12)]"
                    : "border-2 border-concrete-100 shadow-sm"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-sm font-bold text-primary-500 uppercase tracking-wider mb-1">
                  {t.tier}
                </div>
                <div className="font-heading text-2xl font-bold mb-1">
                  {t.name}
                </div>
                <div className="text-sm text-concrete-400 mb-5">{t.desc}</div>
                <div className="font-heading text-5xl font-extrabold tracking-tight leading-none">
                  ${t.price}
                  <span className="text-base font-medium text-concrete-400 tracking-normal">
                    /mo
                  </span>
                </div>
                <div className="text-[13px] text-concrete-400 mt-1 mb-6">
                  {t.vs}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-concrete-700 border-b border-concrete-100 pb-3 last:border-0"
                    >
                      <span className="text-success mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/audit"
                  className={`w-full text-center font-medium py-3.5 rounded-[10px] transition-colors ${
                    t.featured
                      ? "bg-accent-500 text-white hover:bg-accent-600 shadow-[0_2px_8px_rgba(232,86,15,0.25)]"
                      : "border-2 border-primary-500 text-primary-500 hover:bg-primary-50"
                  }`}
                >
                  Start Free Audit
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
