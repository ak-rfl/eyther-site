import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AuditForm() {
  return (
    <section
      className="bg-gradient-to-br from-secondary-50 to-primary-50 py-20 md:py-24"
      id="audit"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              Free Marketing Audit
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight mb-3">
              See What Your AI Marketing Team Would Do &mdash; Free
            </h2>
            <p className="text-lg text-concrete-600 max-w-[560px] mx-auto mb-10">
              Get a personalized strategy report &mdash; how your AI team would
              position your business, where your competitors are vulnerable, and
              what campaigns it would launch first.
            </p>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-concrete-100 max-w-[560px] mx-auto">
              <h3 className="font-heading text-xl font-bold text-concrete-900 mb-6">
                Your audit includes:
              </h3>

              <ul className="space-y-4 text-left mb-8">
                {[
                  "Custom marketing strategy for your trade & market",
                  "Competitor gap analysis with real data",
                  "Google Ads opportunity report",
                  "Local SEO scorecard & review strategy",
                  "AI-readiness assessment & campaign recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-concrete-700"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/audit"
                className="w-full bg-[#F5C518] text-concrete-900 font-bold text-[17px] py-4 rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Get My Free Marketing Audit
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-[13px] text-concrete-400">
                <svg
                  className="w-3.5 h-3.5 text-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Free. No credit card. Results in 24 hours.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
