import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const stats = [
  { num: 3.2, suffix: "x", label: "Return on marketing spend", decimals: 1 },
  { num: 38, suffix: "", prefix: "$", label: "Avg cost per lead", decimals: 0 },
  { num: 41, suffix: "", label: "Avg new reviews in 90 days", decimals: 0 },
  { num: 1, suffix: "", prefix: "#", label: "Local Google ranking (avg)", decimals: 0 },
];

const testimonials = [
  {
    text: "So I was paying my agency like three grand a month and they were running the same ads since — I don't know, 2022? homeAI comes in, and within the first week it's telling me things about my market my agency never mentioned. Like, it figured out I should be pushing maintenance plans hard in October. By April I had 41 new reviews. Forty-one.",
    name: "Derek Callahan",
    role: "HVAC · Columbus, OH",
    initials: "DC",
    color: "bg-secondary-500",
  },
  {
    text: "For the first time my business has a real marketing strategy — not just 'run some ads and hope.' homeAI identified that my competitors weren't targeting tankless installs in my area. Built a whole campaign around it. Now that's 40% of my revenue.",
    name: "Tony Morales",
    role: "Plumbing · Phoenix, AZ",
    initials: "TM",
    color: "bg-primary-500",
  },
  {
    text: "homeAI saw a hail storm coming before I did. It launched a storm damage campaign, updated our Google ads, and had us ranking for 'hail damage roofer' the same day. We booked 22 storm assessments that week. That's the kind of thinking I was paying an agency for and never got.",
    name: "Jessie Pruitt",
    role: "Roofing · Kansas City, MO",
    initials: "JP",
    color: "bg-concrete-700",
  },
];

export default function Results() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-concrete-100" id="results">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              Results
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight mb-3">
              What Happens When You Actually Have a Marketing Team
            </h2>
            <p className="text-lg text-concrete-600">
              Actual results from contractors whose AI team is running their
              marketing around the clock.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.08 * i}>
              <div className="text-center p-7 bg-primary-50 rounded-xl">
                <div className="font-heading text-[44px] font-extrabold text-primary-500 tracking-tight leading-none">
                  <CountUp
                    end={s.num}
                    prefix={s.prefix || ""}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </div>
                <div className="text-sm text-concrete-600 mt-2 font-medium">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 * i}>
              <div className="bg-white border border-concrete-100 rounded-xl p-7 shadow-sm flex flex-col">
                <div className="text-secondary-500 text-lg mb-4 tracking-wider">
                  ★★★★★
                </div>
                <p className="text-base text-concrete-700 leading-relaxed mb-5 flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[15px]">{t.name}</div>
                    <div className="text-[13px] text-concrete-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
