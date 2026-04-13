"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

const cards = [
  {
    title: "Home Service Businesses",
    description: "You're in the right place. Keep scrolling.",
    href: null,
    active: true,
  },
  {
    title: "Marketing Agencies",
    description: "Give every client account a persistent brain.",
    href: "/solutions/agencies",
    active: false,
  },
  {
    title: "Multi-Location / Enterprise",
    description: "One brain across all your locations.",
    href: "/solutions/enterprise",
    active: false,
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-center text-sm font-bold uppercase tracking-[1.5px] text-concrete-400 mb-8 font-heading">
            Who is homeAI for?
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              {card.href ? (
                <Link
                  href={card.href}
                  className="group block rounded-xl border-2 border-concrete-100 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <h3 className="font-heading font-bold text-concrete-900 mb-1.5 group-hover:text-primary-500 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-concrete-600 text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              ) : (
                <div className="rounded-xl border-2 border-primary-500 bg-primary-50 p-6 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="inline-block bg-primary-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      You&apos;re here
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-primary-700 mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-primary-600 text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
