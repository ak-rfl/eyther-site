import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-cta py-20 md:py-28 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-[40px] font-extrabold text-concrete-900 tracking-tight mb-10 max-w-[800px] mx-auto leading-tight">
            If you&apos;re still reading this, your competitor already signed up.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <a
            href="/audit"
            className="inline-block bg-concrete-900 text-white rounded-full px-10 py-4 text-lg font-bold hover:bg-black transition-colors"
          >
            Meet Your AI Team
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
