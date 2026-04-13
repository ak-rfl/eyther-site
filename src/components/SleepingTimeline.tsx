import FadeIn from "./FadeIn";

const items = [
  {
    time: "10:30 PM",
    agent: "Market Analysis",
    agentColor: "text-primary-500",
    dotColor: "bg-primary-500",
    text: "Detected 10-day heat wave forecast for Columbus. Redesigned ad campaign: shifted budget from \"furnace repair\" to \"AC tune-up\" and \"emergency cooling\" — 3 new ad variations written for your brand voice.",
    metric: "Campaign live before competitors react",
  },
  {
    time: "2:00 AM",
    agent: "Reputation Building",
    agentColor: "text-secondary-500",
    dotColor: "bg-secondary-500",
    text: "Identified your top competitor just hit 200 reviews. Triggered review request campaign to your last 30 customers — 4 new 5-star reviews by morning.",
    metric: "Closing the review gap — 14 away",
  },
  {
    time: "6:30 AM",
    agent: "Morning Briefing Ready",
    agentColor: "text-success",
    dotColor: "bg-success",
    text: "New campaign live, 4 new reviews, content published, ad spend optimized. Your personalized briefing is ready. All while you slept.",
    metric: null,
  },
];

export default function SleepingTimeline() {
  return (
    <section className="bg-secondary-50 py-20 md:py-24" id="sleeping">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight mb-3">
              Your AI Marketing Team Never Clocks Out
            </h2>
            <p className="text-lg text-concrete-600 max-w-[640px] mx-auto">
              Here&apos;s what homeAI did for a real HVAC company overnight — while
              the owner slept.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-lg">
              ❄️
            </div>
            <div>
              <div className="font-bold text-[15px]">Callahan Heating &amp; Air</div>
              <div className="text-[13px] text-concrete-400">
                Columbus, OH · 12 employees
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="relative max-w-[700px] mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-concrete-200" />

          {items.map((item, i) => (
            <FadeIn key={item.time} delay={0.15 * i}>
              <div className="flex gap-5 mb-6 relative">
                <div
                  className={`w-3 h-3 rounded-full shrink-0 mt-1.5 ml-[19px] relative z-10 ${item.dotColor} shadow-[0_0_0_4px_rgba(0,0,0,0.05)]`}
                />
                <div className="bg-white border border-concrete-100 rounded-xl p-5 flex-1 shadow-sm">
                  <div className="font-mono text-xs text-concrete-400 font-medium mb-1">
                    {item.time}
                  </div>
                  <div className={`text-[13px] font-bold mb-1 ${item.agentColor}`}>
                    {item.agent}
                  </div>
                  <p className="text-[15px] text-concrete-600 leading-snug">
                    {item.text}
                  </p>
                  {item.metric && (
                    <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-md bg-success/8 text-success text-[13px] font-semibold">
                      ↑ {item.metric}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
