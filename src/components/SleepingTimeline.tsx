import FadeIn from "./FadeIn";

const cards = [
  {
    time: "10:30 PM",
    agent: "Ad Strategist",
    agentColor: "#2185B5",
    text: "Detected 10-day heat wave forecast. Shifted your ad budget from \u2018furnace repair\u2019 to \u2018AC tune-up\u2019 \u2014 3 new ads written in your brand voice.",
  },
  {
    time: "2:00 AM",
    agent: "Review Manager",
    agentColor: "#1B9E5C",
    text: "Your competitor just hit 200 reviews. Triggered review requests to your last 30 customers \u2014 4 new 5-star reviews by morning.",
  },
  {
    time: "6:30 AM",
    agent: "Morning Briefing",
    agentColor: "#16a34a",
    text: "New campaigns live. 4 fresh reviews. Content published. Ad spend optimized. Your morning briefing is ready \u2014 all while you slept.",
  },
];

export default function SleepingTimeline() {
  return (
    <section className="bg-white py-20 md:py-28" id="sleeping">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight leading-tight">
              Welcome to Your New Life
            </h2>
          </div>
          <p className="text-lg text-concrete-600 text-center max-w-[640px] mx-auto mb-12">
            Here&apos;s what your AI team does while you sleep, eat, and
            actually live your life.
          </p>
        </FadeIn>

        <FadeIn>
          <p className="text-center text-sm text-concrete-500 mb-10">
            <span className="font-semibold text-concrete-700">
              Callahan Heating &amp; Air
            </span>{" "}
            &mdash; Columbus, OH &middot; 12 employees
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.time} delay={0.15 * i}>
              <div className="rounded-xl border border-concrete-100 shadow-md overflow-hidden h-full">
                {/* Dark header with time */}
                <div className="bg-concrete-900 p-6 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-concrete-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                    />
                  </svg>
                  <span className="text-2xl font-bold font-mono text-white">
                    {card.time}
                  </span>
                </div>

                {/* White body */}
                <div className="p-6 bg-white">
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: card.agentColor }}
                  >
                    {card.agent}
                  </span>
                  <p className="text-[15px] text-concrete-600 leading-relaxed mt-3">
                    {card.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
