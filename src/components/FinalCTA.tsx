import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section className="bg-primary-900 py-20 md:py-24 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-[40px] font-bold text-white tracking-tight mb-3">
            Hire Your AI Marketing Team Today.
            <br />
            See Strategy By Tomorrow.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-primary-300 max-w-[500px] mx-auto mb-8">
            Get your free marketing audit. See exactly what an AI marketing team
            would do for YOUR specific business.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto justify-center mb-6">
            <a
              href="/audit"
              className="bg-accent-500 text-white font-medium px-7 py-3.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_8px_rgba(232,86,15,0.25)] whitespace-nowrap inline-flex items-center justify-center gap-2"
            >
              Get My Free Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors text-base font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Or call us: (800) 555-1234
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
