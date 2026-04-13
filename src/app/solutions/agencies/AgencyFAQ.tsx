"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import type { FAQItem } from "@/data/solutions-agency";

interface AgencyFAQProps {
  headline: string;
  items: FAQItem[];
}

export default function AgencyFAQ({ headline, items }: AgencyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-concrete-50 py-20 md:py-24" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900">
              {headline}
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-[720px] mx-auto">
          {items.map((item, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div className="border-b border-concrete-200">
                <button
                  className="w-full py-6 flex items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                  aria-controls={`agency-faq-answer-${i}`}
                >
                  <span className="font-heading text-[17px] font-semibold text-concrete-900 hover:text-primary-500 transition-colors">
                    {item.question}
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
                  id={`agency-faq-answer-${i}`}
                  role="region"
                  aria-hidden={openIndex !== i}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
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
  );
}
