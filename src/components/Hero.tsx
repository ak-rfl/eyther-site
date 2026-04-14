"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white pt-[160px] pb-24 relative overflow-hidden" id="hero">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Centered headline */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="font-heading text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] mb-6"
          >
            Fire Your Agency.
            <br />
            <span className="text-accent-500">
              Your AI Marketing Team Starts Tonight.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-concrete-600 leading-relaxed mb-10 max-w-[600px] mx-auto"
          >
            homeAI studies your market, your competitors, and your reviews — then
            runs your SEO, ads, and campaigns 24/7. One-fifth the cost of your
            current agency.
          </motion.p>

          {/* Single bold CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-[#F5C518] text-concrete-900 font-bold text-lg px-10 py-4 rounded-full transition-transform duration-200 hover:scale-105"
            >
              Get My Free Marketing Audit
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-16 text-sm text-concrete-400"
          >
            <span className="flex items-center gap-1.5">
              <span>🏆</span>
              Rated #1 AI Marketing for Contractors
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">★★★★★</span>
              Trusted by 500+ contractors
            </span>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-8 flex-wrap justify-center"
          >
            {[
              { num: "24/7", label: "Always Running" },
              { num: "1/5th", label: "The Cost of an Agency" },
              { num: "6", label: "AI Specialists on Your Team" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold tracking-tight text-concrete-900">
                  {s.num}
                </span>
                <span className="text-xs text-concrete-400 uppercase tracking-wider font-medium mt-0.5">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
