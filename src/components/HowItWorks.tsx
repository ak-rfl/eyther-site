import FadeIn from "./FadeIn";

const steps = [
  {
    num: "1",
    title: "Get Your Free Audit",
    text: "Tell us your business name and ZIP code. In 24 hours, you'll see exactly where your marketing stands and what your competitors are doing better.",
  },
  {
    num: "2",
    title: "Your AI Team Gets to Work",
    text: "Pick a plan. Your AI marketing team starts learning your business immediately — analyzing your market, designing campaigns, optimizing your presence.",
  },
  {
    num: "3",
    title: "Check Your Morning Briefing",
    text: "Every morning, your team briefs you — campaigns launched, rankings improved, competitor moves spotted. Strategic clarity in 60 seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-24" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              How it works
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight mb-3">
              Three Steps. That&apos;s It.
            </h2>
            <p className="text-lg text-concrete-600">
              No discovery calls. No onboarding meetings. No 6-week setup.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-concrete-200" />

          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={0.12 * i}>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary-50 border-[3px] border-primary-500 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl font-extrabold text-primary-500">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-concrete-600 leading-relaxed max-w-[280px] mx-auto">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
