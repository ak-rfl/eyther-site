import Link from "next/link";
import FadeIn from "./FadeIn";

export const trades = [
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 6v6a4 4 0 004 4h4a4 4 0 004-4V6" />
        <path d="M8 6h16" />
        <path d="M16 16v4" />
        <path d="M12 24h8" />
        <path d="M12 20v4a2 2 0 002 2h4a2 2 0 002-2v-4" />
      </svg>
    ),
    color: "text-primary-500",
    bg: "bg-primary-50",
    borderHover: "hover:border-primary-300",
    tagline: "Emergency calls, drain cleaning, installs",
    description: "Get found when pipes burst at 2am. homeAI runs emergency plumber campaigns, builds your review count, and makes sure you're #1 when homeowners search.",
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="24" height="16" rx="3" />
        <path d="M10 14h2M14 14h2M18 14h2" />
        <path d="M10 18h12" />
        <path d="M12 4v4M20 4v4" />
      </svg>
    ),
    color: "text-secondary-700",
    bg: "bg-secondary-50",
    borderHover: "hover:border-secondary-500",
    tagline: "Seasonal campaigns, maintenance plans",
    description: "Your AI team knows when the heat wave hits before you do. Seasonal campaign shifts, maintenance plan upsells, and year-round visibility.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4L10 18h6l-2 10 10-14h-6l2-10z" />
      </svg>
    ),
    color: "text-accent-500",
    bg: "bg-[#FFF3EB]",
    borderHover: "hover:border-accent-400",
    tagline: "Panel upgrades, smart home, EV chargers",
    description: "EV charger installs are booming. homeAI identifies trending services in your area and builds campaigns before your competitors catch on.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16L16 6l12 10" />
        <path d="M8 14v10h16V14" />
        <rect x="13" y="18" width="6" height="6" />
      </svg>
    ),
    color: "text-concrete-700",
    bg: "bg-concrete-50",
    borderHover: "hover:border-concrete-400",
    tagline: "Storm response, inspections, replacements",
    description: "When hail hits, homeAI launches storm damage campaigns instantly — before homeowners call your competitor. Speed wins roofing jobs.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28V16" />
        <path d="M16 16c-4-6-10-4-10-4s2 8 10 4z" />
        <path d="M16 16c4-6 10-4 10-4s-2 8-10 4z" />
        <path d="M16 20c-3-4-8-3-8-3s1.5 6 8 3z" />
        <path d="M16 20c3-4 8-3 8-3s-1.5 6-8 3z" />
      </svg>
    ),
    color: "text-success",
    bg: "bg-[#EDFAF2]",
    borderHover: "hover:border-success",
    tagline: "Hardscaping, irrigation, seasonal care",
    description: "Spring cleanups, fall leaf removal, hardscaping projects — homeAI runs seasonal campaigns timed perfectly to when homeowners start searching.",
  },
];

export default function TradeVerticals() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-concrete-100" id="trades">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight mb-3">
              Built for Your Trade
            </h2>
            <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
              Not generic &ldquo;small business&rdquo; software. Marketing strategy designed
              around how YOUR customers search and buy.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {trades.map((trade, i) => (
            <FadeIn key={trade.slug} delay={0.08 * i}>
              <Link
                href={`/trades/${trade.slug}`}
                className={`group block rounded-xl border-2 border-concrete-100 ${trade.borderHover} transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden bg-white`}
              >
                {/* Icon area */}
                <div className={`${trade.bg} h-[120px] flex items-center justify-center transition-colors`}>
                  <div className={`${trade.color} transition-transform group-hover:scale-110`}>
                    {trade.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold mb-1 group-hover:text-primary-500 transition-colors">
                    {trade.name}
                  </h3>
                  <p className="text-sm text-concrete-400 mb-3">
                    {trade.tagline}
                  </p>
                  <span className="text-sm font-medium text-primary-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                    See how it works
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
