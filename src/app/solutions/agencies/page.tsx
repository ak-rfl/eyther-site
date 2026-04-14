"use client";

import { useState } from "react";
import Link from "next/link"; // eslint-disable-line @typescript-eslint/no-unused-vars
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import InlineCTA from "@/components/InlineCTA"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { agencyPage } from "@/data/solutions-agency";

/* ═══════════════════════════════════════════════
   Agency Solution Page — Marblism-level redesign
   /solutions/agencies
   ═══════════════════════════════════════════════ */

const { hero, trustBadges, problems, agentLoop, actions, math, stack, partnership, faq, finalCta } =
  agencyPage;

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-purple-500",
  "bg-rose-500",
];

const actionEmojis = ["🚀", "📊", "🗓️", "🎙️", "🔍", "⚡"];

/* ─── Phone Mockup Shell ─── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[380px] mx-auto lg:mx-0">
      <div
        className="rounded-[40px] overflow-hidden relative"
        style={{
          border: "10px solid #1A1E24",
          boxShadow: "0 25px 80px rgba(26,30,36,0.25)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-concrete-900 rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="bg-concrete-900 px-5 pt-2 pb-1 flex items-center justify-between relative z-0">
          <span className="text-white/60 text-[10px] font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-2 rounded-sm bg-white/40" />
            <div className="w-3.5 h-2 rounded-sm bg-white/40" />
            <div className="w-5 h-2.5 rounded-sm bg-white/60 border border-white/30" />
          </div>
        </div>
        {/* Screen content */}
        {children}
        {/* Home indicator */}
        <div className="bg-[#12151A] pb-3 pt-2 flex justify-center">
          <div className="w-[100px] h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export default function AgencySolutionPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <Nav />

      {/* ─── 1. HERO ─── split layout: text left, phone mockup right */}
      <section className="bg-white pt-[140px] pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <FadeIn delay={0.05}>
                <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-concrete-900 mb-6">
                  {hero.headline}
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-lg text-concrete-600 max-w-[540px] leading-relaxed mb-8">
                  {hero.subheadline}
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <a
                  href={hero.cta.href}
                  className="inline-flex items-center gap-2 bg-[#F5C518] text-concrete-900 font-bold rounded-full px-10 py-4 text-lg hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-all"
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

              {/* Stat badges row */}
              <FadeIn delay={0.25}>
                <div className="flex flex-wrap gap-4 mt-10">
                  {hero.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-concrete-50 border border-concrete-200 rounded-full px-5 py-3"
                    >
                      <span className="text-primary-500 font-extrabold text-lg">
                        {stat.value}
                      </span>
                      <span className="text-concrete-600 text-sm font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — phone mockup: Agency Dashboard */}
            <FadeIn delay={0.3}>
              <PhoneFrame>
                <div className="bg-[#12151A] p-5">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white font-bold text-base">homeAI</p>
                      <p className="text-white/40 text-[11px]">Agency Dashboard</p>
                    </div>
                    <div className="bg-[#F5C518]/20 text-[#F5C518] text-[11px] font-bold px-3 py-1 rounded-full">
                      3 clients active
                    </div>
                  </div>

                  {/* Client card 1 */}
                  <div className="bg-white/[0.06] rounded-xl p-4 mb-3 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-[11px] font-bold">
                          MP
                        </div>
                        <span className="text-white font-semibold text-[13px]">Mike&apos;s Plumbing</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/[0.05] rounded-lg px-3 py-2">
                        <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Campaign</p>
                        <p className="text-[#F5C518] text-sm font-bold">+34%</p>
                      </div>
                      <div className="bg-white/[0.05] rounded-lg px-3 py-2">
                        <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Reviews</p>
                        <p className="text-emerald-400 text-sm font-bold">12/wk</p>
                      </div>
                    </div>
                  </div>

                  {/* Client card 2 */}
                  <div className="bg-white/[0.06] rounded-xl p-4 mb-3 border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-[11px] font-bold">
                          CA
                        </div>
                        <span className="text-white font-semibold text-[13px]">Comfort Air HVAC</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/[0.05] rounded-lg px-3 py-2">
                        <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Campaign</p>
                        <p className="text-[#F5C518] text-sm font-bold">+21%</p>
                      </div>
                      <div className="bg-white/[0.05] rounded-lg px-3 py-2">
                        <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Reviews</p>
                        <p className="text-emerald-400 text-sm font-bold">8/wk</p>
                      </div>
                    </div>
                  </div>

                  {/* Insight card */}
                  <div className="bg-[#F5C518]/10 border border-[#F5C518]/20 rounded-xl p-3">
                    <p className="text-[#F5C518] text-[10px] uppercase tracking-wider font-bold mb-1">Agent Insight</p>
                    <p className="text-white text-[12px] leading-relaxed">
                      &ldquo;Competitor launched $49 drain deal. Suggest countering with free inspection offer&mdash;converted 3x better last spring.&rdquo;
                    </p>
                  </div>
                </div>
              </PhoneFrame>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUST BADGES ─── light gray strip */}
      <FadeIn>
        <div className="bg-[#F7F8FA] py-8 border-y border-concrete-100">
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

      {/* ─── 3. PROBLEMS ─── light section */}
      <section className="bg-concrete-50 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              The Problem
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4 text-center">
              {problems.headline}
            </h2>
            <p className="text-lg text-concrete-600 max-w-[600px] mx-auto text-center mb-16">
              {problems.subheadline}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.cards.map((card, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-white border-l-4 border-l-primary-500 border border-concrete-200 shadow-sm rounded-xl p-7 h-full hover:shadow-md transition-all">
                  <div className="text-4xl mb-5">{card.emoji}</div>
                  <p className="text-primary-500 font-bold text-sm mb-4 leading-relaxed">
                    {card.stat}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-concrete-900 mb-3">
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

      {/* ─── 4. AGENT LOOP / HOW IT WORKS ─── yellow section, simplified */}
      <section id="how-it-works" className="bg-[#F5C518] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-concrete-900/60 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
              <span className="w-8 h-0.5 bg-concrete-900/40 rounded" />
              How It Works
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4 text-center">
              {agentLoop.headline}
            </h2>
            <p className="text-lg text-concrete-900/60 max-w-[640px] mx-auto text-center mb-16">
              {agentLoop.subheadline}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agentLoop.steps.map((step, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-concrete-900 rounded-xl p-6 h-full hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#F5C518] text-concrete-900 font-extrabold text-sm flex items-center justify-center mb-5">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {step.name}
                  </h3>
                  <p className="text-concrete-400 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. ACTIONS / WHAT THE AGENT DOES ─── white bg, split with phone mockup */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text + action cards */}
            <div>
              <FadeIn>
                <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4">
                  <span className="w-8 h-0.5 bg-primary-500 rounded" />
                  Your AI Team
                </div>
                <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
                  {actions.headline}
                </h2>
                <div className="w-16 h-1 bg-primary-500 rounded-full mb-5" />
                <p className="text-lg text-concrete-600 max-w-[500px] mb-10">
                  {actions.subheadline}
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {actions.cards.map((card, i) => (
                  <FadeIn key={i} delay={0.08 * i}>
                    <div className="border border-concrete-200 rounded-xl p-5 h-full hover:-translate-y-1 hover:shadow-lg transition-all group">
                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-lg`}
                        >
                          {actionEmojis[i % actionEmojis.length]}
                        </div>
                        <div>
                          <h3 className="font-heading text-[15px] font-bold text-concrete-900 mb-1 group-hover:text-concrete-500 transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-sm text-concrete-500 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right — phone mockup: Agent Activity Feed */}
            <FadeIn delay={0.3}>
              <PhoneFrame>
                <div className="bg-[#12151A] p-5">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white font-bold text-base">Agent Activity</p>
                      <p className="text-white/40 text-[11px]">Live feed</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-[11px] font-medium">4 agents active</span>
                    </div>
                  </div>

                  {/* Activity item 1 */}
                  <div className="bg-white/[0.06] rounded-xl p-3.5 mb-2.5 border border-white/[0.08]">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">
                        📊
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">Ad Strategist</p>
                        <p className="text-white text-[12px] leading-relaxed">
                          Paused underperforming ad set for Mike&apos;s Plumbing — CPA exceeded target by 40%
                        </p>
                        <p className="text-white/30 text-[10px] mt-1.5">2 min ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity item 2 */}
                  <div className="bg-white/[0.06] rounded-xl p-3.5 mb-2.5 border border-white/[0.08]">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm">
                        ⭐
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">Review Manager</p>
                        <p className="text-white text-[12px] leading-relaxed">
                          Responded to 3 new reviews for Comfort Air HVAC
                        </p>
                        <p className="text-white/30 text-[10px] mt-1.5">14 min ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity item 3 */}
                  <div className="bg-white/[0.06] rounded-xl p-3.5 mb-2.5 border border-white/[0.08]">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-sm">
                        🔍
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">SEO Specialist</p>
                        <p className="text-white text-[12px] leading-relaxed">
                          Published blog: &ldquo;Emergency Plumber Near Me&rdquo; ranking strategy
                        </p>
                        <p className="text-white/30 text-[10px] mt-1.5">38 min ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity item 4 */}
                  <div className="bg-white/[0.06] rounded-xl p-3.5 border border-white/[0.08]">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm">
                        📱
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">Social</p>
                        <p className="text-white text-[12px] leading-relaxed">
                          Scheduled 4 before/after posts for Mike&apos;s Plumbing
                        </p>
                        <p className="text-white/30 text-[10px] mt-1.5">1 hr ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 6. MATH / STATS ─── white bg, big countup numbers */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                The Math
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
                {math.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                {math.subheadline}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {math.stats.map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="text-center p-6">
                  <div className="text-5xl font-extrabold text-concrete-900 mb-3">
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <div className="w-10 h-1 bg-primary-500 rounded-full mx-auto mb-3" />
                  <p className="text-sm text-concrete-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. INTEGRATIONS / STACK ─── light bg */}
      <section className="bg-[#F7F8FA] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Your Stack
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-3">
                {stack.headline}
              </h2>
              <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mb-5" />
              <p className="text-lg text-concrete-600 max-w-[640px] mx-auto">
                {stack.subheadline}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {stack.integrations.map((integration, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white border border-concrete-200 rounded-full px-5 py-2.5 text-sm font-semibold text-concrete-900 hover:border-[#F5C518] hover:shadow-sm transition-all cursor-default"
                  title={integration.description}
                >
                  <div className="w-2 h-2 rounded-full bg-[#F5C518]" />
                  {integration.name}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 8. PARTNERSHIP / PRICING ─── white bg */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Pricing
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
                {partnership.headline}
              </h2>
              <p className="text-lg text-concrete-600 max-w-[600px] mx-auto">
                {partnership.subheadline}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-5 mb-12">
              {partnership.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#F5C518] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-concrete-900"
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
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <a
                href={partnership.cta.href}
                className="inline-flex items-center gap-2 bg-[#F5C518] text-concrete-900 font-bold rounded-full px-10 py-4 text-lg hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,197,24,0.4)] transition-all"
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

      {/* ─── 9. FAQ ─── white bg, accordion */}
      <section className="bg-white py-20 md:py-28" id="faq">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center gap-2 mb-4 justify-center">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                FAQ
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 mb-4">
                Questions From Agency Owners
              </h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto" />
            </div>
          </FadeIn>

          <div className="max-w-[720px] mx-auto">
            {faq.items.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div
                  className={`border-b border-concrete-200 transition-all ${
                    openFAQ === i
                      ? "border-l-4 border-l-primary-500 bg-primary-50 pl-4"
                      : "border-l-4 border-l-transparent pl-4"
                  }`}
                >
                  <button
                    className="w-full py-6 flex items-center justify-between gap-4 text-left"
                    onClick={() =>
                      setOpenFAQ(openFAQ === i ? null : i)
                    }
                    aria-expanded={openFAQ === i}
                    aria-controls={`agency-faq-answer-${i}`}
                  >
                    <span className="text-[17px] font-semibold text-concrete-900 hover:text-concrete-600 transition-colors">
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

      {/* ─── 10. FINAL CTA ─── yellow section */}
      <section className="bg-[#F5C518] py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 leading-tight mb-5">
              {finalCta.headline}
            </h2>
            <p className="text-lg text-concrete-900/60 mb-10 max-w-[560px] mx-auto">
              {finalCta.subheadline}
            </p>
            <a
              href={finalCta.cta.href}
              className="inline-flex items-center gap-2 bg-concrete-900 text-white font-bold text-lg px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_4px_30px_rgba(26,30,36,0.4)] transition-all"
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
