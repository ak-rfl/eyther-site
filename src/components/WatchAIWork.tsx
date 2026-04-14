"use client";

import { motion } from "framer-motion";

const agents = [
  {
    emoji: "📊",
    name: "Ad Strategist",
    bg: "#2185B5",
    status: "Your Google Ads generated 12 calls today. CPL: $34",
  },
  {
    emoji: "⭐",
    name: "Review Manager",
    bg: "#1B9E5C",
    status: '3 new 5-star reviews posted on Google',
  },
  {
    emoji: "🔍",
    name: "SEO Specialist",
    bg: "#0D9488",
    status: "Moved from #8 to #3 for 'plumber near me'",
  },
  {
    emoji: "📝",
    name: "Content Writer",
    bg: "#E8560F",
    status: "Published: 'Why Your Water Heater Hates Winter'",
  },
  {
    emoji: "📱",
    name: "Social Media Pro",
    bg: "#7C3AED",
    status: "Posted 3 before/after photos to Instagram",
  },
  {
    emoji: "📞",
    name: "Lead Qualifier",
    bg: "#D93B3B",
    status: "Filtered 8 spam calls, forwarded 5 real jobs",
  },
];

function AgentRow({
  agent,
  index,
}: {
  agent: (typeof agents)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.15 }}
      className="flex items-center gap-3 px-4 py-3"
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
        style={{ backgroundColor: agent.bg }}
      >
        {agent.emoji}
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-concrete-900">
            {agent.name}
          </span>
          <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
        </div>
        <p className="text-xs text-concrete-500 leading-snug truncate">
          {agent.status}
        </p>
      </div>
    </motion.div>
  );
}

export default function WatchAIWork() {
  return (
    <section id="demo" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight leading-tight mb-5"
            >
              Watch Your AI Team Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-concrete-600 leading-relaxed mb-8 max-w-[400px]"
            >
              See how your AI marketing team runs your business — in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-[#F5C518] text-concrete-900 font-bold text-lg px-8 py-4 rounded-full transition-transform duration-200 hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* ── Right: iPhone Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            {/* Phone frame */}
            <div className="relative w-[320px] bg-concrete-900 rounded-[40px] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-black z-10" />

              {/* Screen */}
              <div className="bg-white rounded-[32px] overflow-hidden">
                {/* ── Header bar ── */}
                <div className="bg-concrete-900 text-white px-4 pt-8 pb-3 flex items-center justify-between">
                  <span className="font-bold text-sm tracking-tight">
                    homeAI
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-concrete-400">
                      42 hrs saved this week
                    </span>
                    <span className="bg-[#F5C518] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                      42
                    </span>
                  </div>
                </div>

                {/* ── Agent feed ── */}
                <div className="divide-y divide-concrete-100">
                  {agents.slice(0, 3).map((agent, i) => (
                    <AgentRow key={agent.name} agent={agent} index={i} />
                  ))}

                  {/* ── Yellow insight card ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="mx-4 my-3"
                  >
                    <div className="bg-[#F5C518] rounded-xl px-4 py-3 flex items-center justify-between">
                      <p className="text-sm font-semibold text-black leading-snug">
                        Your AI team saved you
                        <br />
                        42 hours this week.
                      </p>
                      <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center text-black text-sm shrink-0 ml-3">
                        →
                      </span>
                    </div>
                  </motion.div>

                  {agents.slice(3).map((agent, i) => (
                    <AgentRow key={agent.name} agent={agent} index={i + 4} />
                  ))}
                </div>

                {/* ── Bottom nav ── */}
                <div className="border-t border-concrete-100 flex items-center justify-center gap-10 py-3">
                  {/* Home icon */}
                  <svg
                    className="w-5 h-5 text-concrete-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  {/* Grid icon */}
                  <svg
                    className="w-5 h-5 text-concrete-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>

                  {/* Help circle icon */}
                  <svg
                    className="w-5 h-5 text-concrete-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
