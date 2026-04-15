import FadeIn from "./FadeIn";

const bubbles = [
  {
    text: "You start your day with 40+ missed calls and no idea which are real leads",
    // Desktop positioning
    className: "md:absolute md:top-[8%] md:left-[4%] md:-rotate-2",
  },
  {
    text: "Your Google Ads spent $800 last week... on clicks from people 50 miles away",
    className: "md:absolute md:top-[6%] md:right-[4%] md:rotate-1",
  },
  {
    text: "Your competitor has 200 reviews. You have 23.",
    className: "md:absolute md:bottom-[12%] md:left-[6%] md:rotate-2",
  },
  {
    text: "Your agency hasn't changed your ad copy in 6 months",
    className: "md:absolute md:bottom-[10%] md:right-[5%] md:-rotate-1",
  },
];

export default function ContractorPain() {
  return (
    <section className="bg-white py-20 md:py-28" id="problems">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-center leading-tight text-concrete-900 mb-12 md:mb-16">
            You want to grow your business, but&hellip;
          </h2>
        </FadeIn>

        {/* Visual card with speech bubbles */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl shadow-lg overflow-hidden">
            {/* Light gradient scene — relative container for bubble positioning */}
            <div className="relative bg-gradient-to-br from-primary-50 to-concrete-50 aspect-[4/3] md:aspect-[16/9]">
              {/* Subtle grid texture overlay */}
              <div className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center icon — stressed contractor silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-50 select-none">
                  <div className="text-[72px] md:text-[96px] leading-none">🤯</div>
                  <p className="text-concrete-400 text-xs md:text-sm font-medium tracking-widest uppercase mt-3">
                    Every. Single. Day.
                  </p>
                </div>
              </div>

              {/* Speech bubbles — absolute on desktop, hidden on mobile */}
              {bubbles.map((bubble, i) => (
                <FadeIn key={i} delay={0.25 + i * 0.12}>
                  <div
                    className={`hidden md:block ${bubble.className}`}
                    style={{ maxWidth: "280px" }}
                  >
                    <div className="bg-cta rounded-lg px-4 py-2.5 shadow-md">
                      <p className="text-black text-sm font-bold leading-snug">
                        &ldquo;{bubble.text}&rdquo;
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Mobile stacked list — visible only on mobile */}
            <div className="md:hidden bg-concrete-50 px-4 pb-5 -mt-1 flex flex-col gap-3">
              {bubbles.map((bubble, i) => (
                <FadeIn key={`m-${i}`} delay={0.2 + i * 0.1}>
                  <div
                    className={`bg-cta rounded-lg px-4 py-2.5 shadow-md ${
                      i % 2 === 0 ? "rotate-1" : "-rotate-1"
                    }`}
                  >
                    <p className="text-black text-sm font-bold leading-snug">
                      &ldquo;{bubble.text}&rdquo;
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.5}>
          <p className="text-xl md:text-2xl font-bold text-center max-w-[700px] mx-auto mt-10 text-concrete-900 leading-snug">
            You&apos;re wearing too many hats: contractor, marketer, bookkeeper, receptionist&hellip;
          </p>
        </FadeIn>

        {/* Yellow divider */}
        <FadeIn delay={0.6}>
          <div className="h-1 w-24 mx-auto bg-cta rounded-full mt-8" />
        </FadeIn>
      </div>
    </section>
  );
}
