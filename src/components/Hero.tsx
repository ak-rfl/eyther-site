"use client";

import { motion } from "framer-motion";
import ActivityFeed from "./ActivityFeed";

export default function Hero() {
  return (
    <section className="bg-secondary-50 pt-[144px] pb-20 md:pb-24 relative overflow-hidden" id="hero">
      {/* Decorative bg */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(33,133,181,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-[13px] font-medium text-primary-500 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
              AI-Powered Marketing Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              Fire Your Agency.
              <br />
              <span className="text-accent-500">
                Your AI Marketing Team Starts Tonight.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-concrete-600 leading-relaxed mb-8 max-w-[500px]"
            >
              homeAI studies your market, your competitors, and your reviews — then
              runs your SEO, ads, and campaigns 24/7. One-fifth the cost of your
              current agency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-10"
            >
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-accent-500 text-white font-medium text-base px-7 py-4 rounded-[10px] hover:bg-accent-600 transition-all shadow-[0_2px_8px_rgba(232,86,15,0.25)] hover:shadow-[0_6px_20px_rgba(232,86,15,0.35)] hover:-translate-y-0.5"
              >
                Get My Free Marketing Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-8 flex-wrap"
            >
              {[
                { num: "24/7", label: "Always Running" },
                { num: "1/5th", label: "The Cost of an Agency" },
                { num: "6", label: "AI Specialists on Your Team" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
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

          {/* Right: Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ActivityFeed />
          </motion.div>
        </div>
      </div>

    </section>
  );
}
