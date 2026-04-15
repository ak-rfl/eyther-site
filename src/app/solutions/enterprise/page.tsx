"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import { enterprisePage } from "@/data/solutions-enterprise";

/* ═══════════════════════════════════════════════
   Enterprise Solution Page — Redesigned
   /solutions/enterprise
   Split-layout hero + phone mockups
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

/* ─── Agent card icon colors ─── */
const agentIconColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-teal-500",
];

/* ─── SVG icons for agent action cards ─── */
function AgentIcon({ index }: { index: number }) {
  const icons = [
    // Propagate — share/broadcast
    <svg key="0" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>,
    // Detect — radar/alert
    <svg key="1" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>,
    // Localize — map pin
    <svg key="2" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>,
    // Onboard — rocket
    <svg key="3" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
    </svg>,
  ];
  return icons[index % icons.length];
}

/* ─── FAQ Accordion (inline client component) ─── */

function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[780px] mx-auto">
      {items.map((item, i) => (
        <FadeIn key={i} delay={0.04 * i}>
          <div
            className={`border-b border-concrete-200 transition-all duration-300 ${
              openIndex === i
                ? "border-l-4 border-l-primary-500 pl-5 bg-primary-50"
                : "border-l-4 border-l-transparent pl-5"
            }`}
          >
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
                className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                  openIndex === i
                    ? "rotate-180 text-primary-500"
                    : "text-concrete-400"
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
   Phone Mockup Shell
   ═══════════════════════════════════════════════ */

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-concrete-900 rounded-[40px] p-3 shadow-[0_20px_60px_rgba(26,30,36,0.35)]">
      <div className="bg-phone-dark rounded-[32px] overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1 bg-phone-dark">
          <div className="w-[100px] h-[28px] bg-concrete-900 rounded-full" />
        </div>
        {/* Screen content */}
        {children}
        {/* Home indicator */}
        <div className="pb-4 pt-2 flex justify-center bg-phone-dark">
          <div className="w-[100px] h-1 rounded-full bg-white/20" />
        </div>
      </div>
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

      {/* ─── 1. HERO — white bg, split layout ─── */}
      <section className="bg-white pt-[140px] pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div className="max-w-[560px]">
              <FadeIn delay={0.05}>
                <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-concrete-900 mb-6">
                  {hero.headline}
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-lg text-concrete-600 leading-relaxed mb-8">
                  {hero.subheadline}
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <Link
                  href={hero.cta.href}
                  className="inline-flex items-center gap-2 bg-cta text-concrete-900 font-bold rounded-full px-10 py-4 text-lg hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-all"
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

              {/* Stat badges */}
              <FadeIn delay={0.25}>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {hero.stats.map((stat, i) => (
                    <div key={i} className="text-left">
                      <div className="text-3xl md:text-[40px] font-extrabold text-concrete-900 mb-2">
                        {stat.num}
                      </div>
                      <div className="w-10 h-1 bg-primary-500 rounded-full mb-3" />
                      <p className="text-sm text-concrete-500 leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — phone mockup: Network Dashboard */}
            <FadeIn delay={0.3}>
              <div className="max-w-[380px] mx-auto lg:ml-auto">
                <PhoneMockup>
                  <div className="px-5 pt-3 pb-4">
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">Network Dashboard</p>
                        <p className="text-white font-bold text-lg">homeAI</p>
                      </div>
                      <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 py-1">
                        <span className="text-emerald-400 text-[11px] font-semibold">47 locations active</span>
                      </div>
                    </div>

                    {/* Location cards row */}
                    <div className="space-y-2 mb-4">
                      {[
                        { city: "Phoenix", campaigns: 12 },
                        { city: "Dallas", campaigns: 8 },
                        { city: "Charlotte", campaigns: 6 },
                      ].map((loc, i) => (
                        <div key={i} className="bg-white/[0.06] rounded-lg px-4 py-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-white text-[13px] font-medium">{loc.city}</span>
                          </div>
                          <span className="text-white/50 text-[11px]">{loc.campaigns} campaigns live</span>
                        </div>
                      ))}
                    </div>

                    {/* Insight card */}
                    <div className="bg-cta/15 border border-cta/25 rounded-lg p-4 mb-4">
                      <p className="text-cta text-[10px] uppercase tracking-wider font-semibold mb-1.5">Network Alert</p>
                      <p className="text-white text-[12px] leading-relaxed">
                        Phoenix drain cleaning tactic outperforming by 40%. Auto-propagating to 12 similar markets.
                      </p>
                    </div>

                    {/* Progress bars — network health */}
                    <div className="space-y-3">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">Network Health</p>
                      {[
                        { label: "Budget utilization", pct: 87, color: "bg-emerald-400" },
                        { label: "Lead quality score", pct: 92, color: "bg-cta" },
                        { label: "Brand compliance", pct: 96, color: "bg-blue-400" },
                      ].map((bar, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/60 text-[11px]">{bar.label}</span>
                            <span className="text-white/80 text-[11px] font-bold">{bar.pct}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUST BADGES — light gray ─── */}
      <FadeIn>
        <div className="bg-concrete-50 py-8 border-y border-concrete-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold tracking-[1.5px] uppercase text-concrete-400"
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ─── 3. PROBLEMS — light section ─── */}
      <section className="bg-concrete-50 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              The Problem
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4 max-w-[900px]">
              {problems.sectionTitle}
            </h2>
            <p className="text-lg text-concrete-600 max-w-[660px] mb-14">
              {problems.sectionSubtitle}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.cards.map((card, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-white border-l-4 border-l-primary-500 border border-concrete-200 shadow-sm rounded-xl p-7 h-full hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-4">{card.emoji}</div>
                  <p className="text-primary-500 text-sm font-bold mb-3 leading-relaxed">
                    {card.stat}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-concrete-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-concrete-600 leading-relaxed text-[15px]">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. HOW IT CHANGES — yellow section, split layout ─── */}
      <section className="bg-cta py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text + bullet cards */}
            <div>
              <FadeIn>
                <div className="text-concrete-900/60 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
                  <span className="w-8 h-0.5 bg-concrete-900/40 rounded" />
                  The Solution
                </div>
                <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
                  {howItChanges.headline}
                </h2>
                <p className="text-lg text-concrete-900/60 max-w-[520px] mb-10">
                  {howItChanges.subheadline}
                </p>
              </FadeIn>

              <div className="space-y-4">
                {howItChanges.bullets.map((bullet, i) => (
                  <FadeIn key={i} delay={0.1 * i}>
                    <div className="bg-concrete-900 rounded-xl p-5 hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-9 h-9 rounded-full bg-cta flex items-center justify-center">
                          <span className="font-heading font-extrabold text-concrete-900 text-xs">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-heading text-[16px] font-bold text-white mb-1.5">
                            {bullet.title}
                          </h3>
                          <p className="text-concrete-400 leading-relaxed text-[14px]">
                            {bullet.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right — phone mockup: Location Intelligence */}
            <FadeIn delay={0.3}>
              <div className="max-w-[380px] mx-auto lg:ml-auto">
                <PhoneMockup>
                  <div className="px-5 pt-3 pb-4">
                    {/* Location header */}
                    <div className="mb-5">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Location Intelligence</p>
                      <p className="text-white font-bold text-lg flex items-center gap-2">
                        <svg className="w-4 h-4 text-cta" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                        </svg>
                        Phoenix, AZ
                      </p>
                    </div>

                    {/* Competitor alert */}
                    <div className="bg-rose-500/15 border border-rose-500/25 rounded-lg p-4 mb-3">
                      <p className="text-rose-400 text-[10px] uppercase tracking-wider font-semibold mb-1.5">Competitor Alert</p>
                      <p className="text-white text-[12px] leading-relaxed">
                        Main competitor launched $49 drain deal. Recommend countering with free inspection offer.
                      </p>
                    </div>

                    {/* Seasonal insight */}
                    <div className="bg-blue-500/15 border border-blue-500/25 rounded-lg p-4 mb-3">
                      <p className="text-blue-400 text-[10px] uppercase tracking-wider font-semibold mb-1.5">Seasonal Insight</p>
                      <p className="text-white text-[12px] leading-relaxed">
                        AC demand peaks in 3 weeks. Suggest ramping spend by 25% now.
                      </p>
                    </div>

                    {/* Cross-network */}
                    <div className="bg-emerald-500/15 border border-emerald-500/25 rounded-lg p-4 mb-3">
                      <p className="text-emerald-400 text-[10px] uppercase tracking-wider font-semibold mb-1.5">Cross-Network</p>
                      <p className="text-white text-[12px] leading-relaxed">
                        Dallas success pattern applied — projected +28% conversion lift.
                      </p>
                    </div>

                    {/* Confidence meter */}
                    <div className="bg-white/[0.06] rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white/50 text-[11px]">Agent confidence</span>
                        <span className="text-cta text-[11px] font-bold">94%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[94%] h-full bg-cta rounded-full" />
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 5. AGENT ACTIONS — white bg, 2x2 grid ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Your Network Agent
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-3">
                {agentActions.headline}
              </h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mb-4" />
              <p className="text-lg text-concrete-600 max-w-[660px] mx-auto">
                {agentActions.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agentActions.cards.map((card, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="rounded-xl border border-concrete-200 p-7 h-full hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-full ${agentIconColors[i % agentIconColors.length]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <AgentIcon index={i} />
                    </div>
                    <div>
                      <h3 className="font-heading text-[17px] font-bold text-concrete-900 mb-2 group-hover:text-concrete-600 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-concrete-600 text-[15px] leading-relaxed">
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

      {/* ─── 6. SCALE / STATS — white bg, CountUp numbers ─── */}
      <section className="bg-white py-20 md:py-28 border-t border-concrete-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                At Scale
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-3">
                {scaleStats.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                {scaleStats.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {scaleStats.stats.map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="text-center py-6">
                  <div className="font-heading text-5xl font-extrabold text-concrete-900 mb-1">
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
                  <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-2 mb-3" />
                  <p className="text-sm text-concrete-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INTEGRATIONS — light bg, pills ─── */}
      <section className="bg-concrete-50 py-16 border-y border-concrete-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Security & Integrations
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-3">
                {integrationSecurity.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[720px] mx-auto">
                {integrationSecurity.subheadline}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {integrationSecurity.items.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white border border-concrete-200 rounded-full px-5 py-2.5 text-sm font-semibold text-concrete-900 hover:border-cta hover:shadow-sm transition-all duration-200 cursor-default"
                  title={item.description}
                >
                  <div className="w-2 h-2 rounded-full bg-cta" />
                  {item.name}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 8. PRICING — white bg ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              Pricing
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
              {pricing.headline}
            </h2>
            <p className="text-lg text-concrete-600 max-w-[600px] mx-auto mb-10">
              {pricing.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-[520px] mx-auto mb-10">
              {pricing.detail.split(". ").filter(s => s.trim().length > 0).map((sentence, i) => (
                <div key={i} className="flex items-start gap-3 mb-4 text-left">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-cta flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-concrete-900"
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
                  <p className="text-concrete-600 text-[15px] leading-relaxed">
                    {sentence.trim()}
                    {!sentence.trim().endsWith(".") ? "." : ""}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href={pricing.cta.href}
              className="inline-flex items-center gap-2 bg-cta text-concrete-900 font-bold rounded-full px-10 py-4 text-lg hover:scale-105 hover:shadow-lg transition-all duration-200"
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
          </FadeIn>
        </div>
      </section>

      {/* ─── 9. FAQ — white bg ─── */}
      <section className="bg-white py-20 md:py-28" id="faq">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                FAQ
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-3">
                Questions From Enterprise Teams
              </h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto" />
            </div>
          </FadeIn>
          <FAQAccordion items={faq.items} />
        </div>
      </section>

      {/* ─── 10. FINAL CTA — yellow section ─── */}
      <section className="bg-cta py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 leading-tight mb-5">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-concrete-900/60 mb-10 max-w-[600px] mx-auto">
              {finalCta.subheadline}
            </p>
            <Link
              href={finalCta.cta.href}
              className="inline-flex items-center gap-2 bg-concrete-900 text-white font-bold text-lg px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-200"
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
