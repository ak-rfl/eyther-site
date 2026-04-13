"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What if I already have a marketing agency?",
    a: "Start with the free audit — it'll show you exactly what your agency is doing vs. what homeAI would do. Most contractors save $1,000-$3,000/month by switching, and get better results because the AI team never sleeps, never forgets follow-ups, and adjusts your campaigns in real-time.",
  },
  {
    q: "I'm not tech-savvy. Can I actually use this?",
    a: "If you can check your email, you can use homeAI. Every morning you get a plain-English briefing — no dashboards to learn, no buttons to click. It's like having a marketing person who sends you a text every morning with what happened and what's coming up. Setup takes 10 minutes.",
  },
  {
    q: "How fast can I get started?",
    a: "Same day. Once you pick a plan, your AI team starts learning your business immediately. Campaigns start running within 24-48 hours. Review requests go out after your next completed job.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No contracts. No setup fees. Cancel anytime from your dashboard — no phone calls, no \"retention specialists,\" no guilt trips. We keep customers by delivering results, not locking you in.",
  },
  {
    q: "Do you work with my trade?",
    a: "We currently serve plumbing, HVAC, electrical, roofing, and landscaping companies. Each trade gets customized campaign strategies, ad copy, review templates, and content tuned to how your specific customers search and buy.",
  },
  {
    q: "What's included in the free audit?",
    a: "Your audit includes: current Google ranking for your top 10 local keywords, your Google Business Profile score vs. top 3 competitors, a review velocity comparison, and a concrete plan showing what your AI marketing team would do in your first 30 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-24" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight">
              Questions Contractors Ask Us
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div className="border-b border-concrete-100">
                <button
                  className="w-full py-6 flex items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-heading text-[17px] font-semibold text-concrete-900 hover:text-primary-500 transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-6 h-6 shrink-0 text-concrete-400 transition-transform duration-300 ${
                      openIndex === i
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
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-hidden={openIndex !== i}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-[300px] pb-6"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-base text-concrete-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
