"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import InlineCTA from "@/components/InlineCTA";
import { agencyPage } from "@/data/solutions-agency";

/* ═══════════════════════════════════════════════
   Agency Solution Page
   /solutions/agencies
   ═══════════════════════════════════════════════ */

const { hero, trustBadges, problems, agentLoop, actions, math, stack, partnership, faq, finalCta } =
  agencyPage;

export default function AgencySolutionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
              <span className="text-concrete-700 font-medium">Agencies</span>
            </nav>
          </FadeIn>

          <div className="max-w-[800px]">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
              <p className="text-lg md:text-xl text-concrete-600 leading-relaxed mb-8 max-w-[640px]">
                {hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
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
              </a>
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
                    {stat.value}
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

      {/* ─── 2. The Agency Problem (Dark) ─── */}
      <section className="bg-concrete-900 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-accent-400 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent-400 rounded" />
                The Ceiling
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-white mb-3">
                {problems.headline}
              </h2>
              <p className="text-lg text-concrete-400 max-w-[600px] mx-auto">
                {problems.subheadline}
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

      {/* ─── 3. InlineCTA ─── */}
      <InlineCTA
        text="Sound familiar? Here's what changes."
        buttonText="See How It Works"
        href="#how-it-works"
        dark
      />

      {/* ─── 4. Agent Loop (Understand / Remember / Act / Learn) ─── */}
      <section id="how-it-works" className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                The Agent Loop
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {agentLoop.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[640px] mx-auto">
                {agentLoop.subheadline}
              </p>
            </div>
          </FadeIn>

          {/* 4-step loop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {agentLoop.steps.map((step, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="relative bg-primary-50 border-2 border-primary-100 rounded-xl p-6 h-full hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-primary-500 text-white font-heading font-bold text-sm flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-concrete-900 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-concrete-600 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                  {/* Arrow connector on desktop */}
                  {i < agentLoop.steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <svg
                        className="w-6 h-6 text-primary-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bullets */}
          <FadeIn delay={0.4}>
            <div className="max-w-[720px] mx-auto bg-concrete-50 rounded-xl border border-concrete-100 p-6 md:p-8">
              <ul className="space-y-4">
                {agentLoop.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-concrete-600 text-[15px] leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 5. What the Agent Actually Does (Actions) ─── */}
      <section className="bg-concrete-50 py-20 md:py-24 border-y border-concrete-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Agent Capabilities
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {actions.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[600px] mx-auto">
                {actions.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {actions.cards.map((card, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-xl border border-concrete-100 p-6 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-[15px] font-bold text-concrete-900 mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-sm text-concrete-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. InlineCTA ─── */}
      <InlineCTA
        text="See what homeAI would learn about your top client."
        buttonText="Get Agency Pricing"
        href="/solutions/agencies/contact"
      />

      {/* ─── 7. The Math (CountUp Stats) ─── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-success text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-success rounded" />
                The Numbers
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {math.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                {math.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {math.stats.map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-concrete-50 rounded-xl border border-concrete-100 p-6 text-center hover:border-primary-300 transition-colors">
                  <div className="font-heading text-3xl md:text-[42px] font-extrabold text-primary-700 mb-2">
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                    />
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

      {/* ─── 8. Works With Your Stack ─── */}
      <section className="bg-primary-50 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Integrations
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {stack.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[640px] mx-auto">
                {stack.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stack.integrations.map((integration, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-xl border-2 border-concrete-100 p-6 h-full hover:-translate-y-1 hover:shadow-lg transition-all">
                  <h3 className="font-heading text-[17px] font-bold text-concrete-900 mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-concrete-600 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. Partnership / Pricing ─── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="text-accent-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent-500 rounded" />
                Partnership
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                {partnership.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[600px] mx-auto">
                {partnership.subheadline}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-concrete-50 rounded-xl border border-concrete-100 p-6 md:p-8 mb-10">
              <ul className="space-y-4">
                {partnership.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent-500/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-accent-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-concrete-600 text-[15px] leading-relaxed">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <a
                href={partnership.cta.href}
                className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-[17px] px-8 py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.3)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.4)]"
              >
                {partnership.cta.text}
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
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 10. FAQ (Accordion) ─── */}
      <section className="bg-concrete-50 py-20 md:py-24" id="faq">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900">
                {faq.headline}
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-[720px] mx-auto">
            {faq.items.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="border-b border-concrete-200">
                  <button
                    className="w-full py-6 flex items-center justify-between gap-4 text-left"
                    onClick={() =>
                      setOpenFAQ(openFAQ === i ? null : i)
                    }
                    aria-expanded={openFAQ === i}
                    aria-controls={`agency-faq-answer-${i}`}
                  >
                    <span className="font-heading text-[17px] font-semibold text-concrete-900 hover:text-primary-500 transition-colors">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 shrink-0 text-concrete-400 transition-transform duration-300 ${
                        openFAQ === i
                          ? "rotate-180 text-primary-500"
                          : ""
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
                    id={`agency-faq-answer-${i}`}
                    role="region"
                    aria-hidden={openFAQ !== i}
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === i
                        ? "max-h-[500px] pb-6"
                        : "max-h-0"
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
        </div>
      </section>

      {/* ─── 11. Final CTA (Dark) ─── */}
      <section className="bg-concrete-900 py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[44px] md:leading-[1.15] font-extrabold tracking-tight text-white mb-5">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-white/50 mb-8 max-w-[560px] mx-auto">
              {finalCta.subheadline}
            </p>
            <a
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
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
