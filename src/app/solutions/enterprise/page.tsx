"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import InlineCTA from "@/components/InlineCTA";
import { enterprisePage } from "@/data/solutions-enterprise";

/* ═══════════════════════════════════════════════
   Enterprise Solution Page
   /solutions/enterprise
   ═══════════════════════════════════════════════ */

const {
  hero,
  trustBadges,
  problems,
  howItChanges,
  agentActions,
  scaleStats,
  integrationSecurity,
  pricing,
  faq,
  finalCta,
} = enterprisePage;

/* ─── FAQ Accordion (inline client component) ─── */

function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[720px] mx-auto">
      {items.map((item, i) => (
        <FadeIn key={i} delay={0.05 * i}>
          <div className="border-b border-concrete-200">
            <button
              className="w-full py-6 flex items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`enterprise-faq-answer-${i}`}
            >
              <span className="font-heading text-[17px] font-semibold text-concrete-900 hover:text-primary-500 transition-colors">
                {item.question}
              </span>
              <svg
                className={`w-6 h-6 shrink-0 text-concrete-400 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-primary-500" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`enterprise-faq-answer-${i}`}
              role="region"
              aria-hidden={openIndex !== i}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-[600px] pb-6" : "max-h-0"
              }`}
            >
              <p className="text-base text-concrete-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */

export default function EnterprisePage() {
  return (
    <>
      <Nav />

      {/* ─── 1. Hero ─── */}
      <section className="bg-secondary-50 pt-[120px] pb-16 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-concrete-400 mb-8">
              <Link
                href="/"
                className="hover:text-concrete-700 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-concrete-700 font-medium">Enterprise</span>
            </nav>
          </FadeIn>

          <div className="max-w-[900px]">
            <FadeIn delay={0.05}>
              <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                {hero.badge}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-[52px] md:leading-[1.1] font-extrabold tracking-tight text-concrete-900 mb-5">
                {hero.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-concrete-600 leading-relaxed mb-8 max-w-[720px]">
                {hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link
                href={hero.cta.href}
                className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-[17px] px-7 py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.3)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.4)]"
              >
                {hero.cta.text}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Hero Stats */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
              {hero.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-concrete-100 p-6 text-center"
                >
                  <div className="font-heading text-3xl md:text-[40px] font-extrabold text-primary-700 mb-1">
                    {stat.num}
                  </div>
                  <p className="text-sm text-concrete-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <FadeIn>
        <div className="bg-white border-b border-concrete-100 py-6">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-concrete-400"
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs font-medium tracking-wide uppercase">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ─── 2. The Enterprise Problem (Dark) ─── */}
      <section className="bg-concrete-900 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <div className="text-accent-400 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent-400 rounded" />
                The Ceiling
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-white mb-3 max-w-[800px]">
                {problems.sectionTitle}
              </h2>
              <p className="text-lg text-concrete-400 max-w-[660px]">
                {problems.sectionSubtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.cards.map((card, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-concrete-700/30 border border-concrete-700 rounded-xl p-7 h-full hover:border-accent-400/50 transition-all">
                  <div className="text-3xl mb-4">{card.emoji}</div>
                  <p className="text-accent-400 text-sm font-medium mb-4 leading-relaxed italic">
                    {card.stat}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-concrete-400 leading-relaxed text-[15px]">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. InlineCTA — Bridge ─── */}
      <InlineCTA
        text="Sound familiar? Here's what changes."
        buttonText="Talk to Our Team"
        href="/solutions/enterprise/contact"
        dark
      />

      {/* ─── 4. How homeAI Changes This ─── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                The Shift
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3 max-w-[800px]">
                {howItChanges.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[720px]">
                {howItChanges.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItChanges.bullets.map((bullet, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mt-1">
                    <svg
                      className="w-5 h-5 text-primary-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-concrete-900 mb-2">
                      {bullet.title}
                    </h3>
                    <p className="text-concrete-600 leading-relaxed text-[15px]">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. What the Agent Actually Does ─── */}
      <section className="bg-concrete-50 py-20 md:py-24 border-y border-concrete-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Agent Capabilities
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {agentActions.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[660px] mx-auto">
                {agentActions.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agentActions.cards.map((card, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-xl border-2 border-concrete-100 p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                    <span className="text-primary-500 font-heading font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-[17px] font-bold text-concrete-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-concrete-600 text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Mid-page InlineCTA ─── */}
      <InlineCTA
        text="See what network intelligence looks like for your locations."
        buttonText="Schedule a Consultation"
        href="/solutions/enterprise/contact"
      />

      {/* ─── 7. The Scale Story ─── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-success text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-success rounded" />
                The Numbers
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {scaleStats.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                {scaleStats.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {scaleStats.stats.map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-concrete-50 rounded-xl border border-concrete-100 p-6 text-center hover:border-primary-300 transition-colors">
                  <div className="font-heading text-3xl md:text-[42px] font-extrabold text-primary-700 mb-2">
                    {typeof stat.value === "number" ? (
                      <CountUp
                        end={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    ) : (
                      <>
                        {stat.prefix}
                        {stat.value}
                        {stat.suffix}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-concrete-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Integration & Security ─── */}
      <section className="bg-primary-50 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Integrations
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {integrationSecurity.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[720px] mx-auto">
                {integrationSecurity.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrationSecurity.items.map((item, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-xl border-2 border-concrete-100 p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-success"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-concrete-900">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-concrete-600 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Pricing ─── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="text-accent-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent-500 rounded" />
                Pricing
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {pricing.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[600px] mx-auto">
                {pricing.subheadline}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-concrete-400 text-[15px] leading-relaxed text-center mb-10">
              {pricing.detail}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <Link
                href={pricing.cta.href}
                className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-[17px] px-8 py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.3)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.4)]"
              >
                {pricing.cta.text}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 10. FAQ ─── */}
      <section className="bg-concrete-50 py-20 md:py-24" id="faq">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900">
                {faq.headline}
              </h2>
            </div>
          </FadeIn>
          <FAQAccordion items={faq.items} />
        </div>
      </section>

      {/* ─── 11. Final CTA (Dark) ─── */}
      <section className="bg-concrete-900 py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[44px] md:leading-[1.15] font-extrabold tracking-tight text-white mb-5">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-white/50 mb-8 max-w-[600px] mx-auto">
              {finalCta.subheadline}
            </p>
            <Link
              href={finalCta.cta.href}
              className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-lg px-8 py-4.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.35)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.5)]"
            >
              {finalCta.cta.text}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
