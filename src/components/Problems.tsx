import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const cards = [
  {
    icon: "💸",
    stat: "$3,200",
    prefix: "$",
    number: 3200,
    suffix: "",
    color: "text-warning",
    title: "Wasted on Agencies Monthly",
    text: "Your agency runs the same playbook for every client. No one is studying YOUR business, YOUR market, YOUR competitors. You're paying for cookie-cutter, not strategy.",
  },
  {
    icon: "🧠",
    stat: "Zero",
    prefix: "",
    number: 0,
    suffix: "",
    color: "text-primary-300",
    title: "Hours Spent on Marketing Strategy",
    text: "You're a great operator. But when's the last time someone designed a marketing campaign around what makes YOUR business different? That's what a marketing team does.",
  },
  {
    icon: "📱",
    stat: "47%",
    prefix: "",
    number: 47,
    suffix: "%",
    color: "text-error",
    title: "Of Your Leads Go to Whoever Shows Up First",
    text: "Right now someone in your zip code is searching for what you do. If your competitor's name comes up first, you lost that job — not because they're better, because they're more visible.",
  },
];

export default function Problems() {
  return (
    <section className="bg-primary-900 py-20 md:py-24" id="problems">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-primary-300 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-primary-300 rounded" />
            The problem
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white leading-tight tracking-tight mb-3">
            You&apos;re the Best Contractor in Your Town.
            <br />
            But Google Doesn&apos;t Know That.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-primary-300 max-w-[600px] leading-relaxed mb-14">
            Big companies have a full marketing team. You have whatever you can
            squeeze in between jobs. That gap is costing you more than you think.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 * i}>
              <div className="bg-white/5 border border-white/8 rounded-xl p-8 hover:bg-white/8 transition-all hover:-translate-y-0.5">
                <div className="text-2xl mb-5">{card.icon}</div>
                <div
                  className={`font-heading text-[44px] font-extrabold tracking-tight leading-none mb-2 ${card.color}`}
                >
                  {card.stat === "Zero" ? (
                    "Zero"
                  ) : (
                    <CountUp
                      end={card.number}
                      prefix={card.prefix}
                      suffix={card.suffix}
                      separator={card.number > 999 ? "," : ""}
                    />
                  )}
                </div>
                <h3 className="text-white text-lg font-semibold font-heading mb-2">
                  {card.title}
                </h3>
                <p className="text-primary-300 text-[15px] leading-relaxed">
                  {card.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
