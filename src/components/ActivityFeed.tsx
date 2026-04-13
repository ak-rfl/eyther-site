"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedItems = [
  {
    agent: "Campaign Strategy",
    avatar: "C",
    color: "bg-accent-500",
    time: "7:15 AM",
    text: 'Designed "Spring AC Tune-Up" campaign based on weather data — targeting homeowners within 15mi before temps hit 95°',
    result: "Ad copy, landing page, and budget plan ready for review",
  },
  {
    agent: "SEO & Content",
    avatar: "S",
    color: "bg-primary-700",
    time: "6:45 AM",
    text: 'Now ranking #2 for "plumber near me" in Phoenix — up from #7 last month',
    result: "3 competitor gaps identified — content calendar updated",
  },
  {
    agent: "Reputation Manager",
    avatar: "R",
    color: "bg-secondary-500",
    time: "8:15 AM",
    text: "Collected 2 new 5-star reviews overnight. Your 4.8 rating now beats top competitor (4.6)",
    result: "Responded to all reviews matching your brand voice",
  },
  {
    agent: "Social & Content",
    avatar: "M",
    color: "bg-[#8B5CF6]",
    time: "8:30 AM",
    text: "Posted before/after of yesterday's bathroom remodel — 42 likes, 3 DM inquiries",
    result: "8 posts scheduled this week",
  },
  {
    agent: "Ads Strategist",
    avatar: "A",
    color: "bg-primary-500",
    time: "9:00 AM",
    text: "Reduced cost-per-lead from $47 to $34 by pausing underperforming ad variations",
    result: "Budget reallocated to high-converting campaigns",
  },
];

export default function ActivityFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const cycleRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;

    const timer = setTimeout(() => {
      if (visibleCount < feedItems.length) {
        setShowTyping(true);
        typingTimer = setTimeout(() => {
          setShowTyping(false);
          setVisibleCount((c) => c + 1);
        }, 1200);
      } else {
        setShowSummary(true);
        // Reset after pause
        cycleRef.current = setTimeout(() => {
          setVisibleCount(0);
          setShowSummary(false);
          setShowTyping(true);
        }, 6000);
      }
    }, visibleCount === 0 ? 800 : 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(typingTimer);
      if (cycleRef.current) clearTimeout(cycleRef.current);
    };
  }, [visibleCount]);

  return (
    <div className="bg-white border border-concrete-100 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(17,20,24,0.12)]">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between border-b border-concrete-100 bg-concrete-50">
        <div className="flex items-center gap-2.5">
          <h4 className="text-sm font-semibold text-concrete-900 font-heading">
            Your AI Marketing Team — Live
          </h4>
          <span className="flex items-center gap-1.5 text-xs font-medium text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
            Active
          </span>
        </div>
        <span className="text-xs text-concrete-400 font-medium">Today</span>
      </div>

      {/* Feed body */}
      <div className="py-2 min-h-[320px] max-h-[380px] overflow-hidden">
        <AnimatePresence>
          {feedItems.slice(0, visibleCount).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-3 px-5 py-3 hover:bg-concrete-50 transition-colors"
            >
              <div
                className={`w-9 h-9 rounded-[10px] shrink-0 flex items-center justify-center text-white text-sm font-semibold ${item.color}`}
              >
                {item.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[13px] font-bold text-concrete-900">
                    {item.agent}
                  </span>
                  <span className="font-mono text-[11px] text-concrete-400">
                    {item.time}
                  </span>
                </div>
                <p className="text-sm text-concrete-600 leading-snug">
                  {item.text}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[13px] font-medium text-success">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item.result}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {showTyping && visibleCount < feedItems.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-3 px-5 py-3"
          >
            <div className="w-9 h-9 rounded-[10px] bg-concrete-100 shrink-0 flex items-center justify-center">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-concrete-400"
                    style={{
                      animation: `typing-dot 1.4s infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-concrete-400 italic">
                {feedItems[visibleCount]?.agent} is working...
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Summary */}
      <AnimatePresence>
        {showSummary && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-4 mb-4 p-3.5 rounded-[10px] bg-success/5 border border-success/10"
          >
            <div className="text-[11px] font-semibold tracking-wider uppercase text-success mb-1">
              Morning Briefing
            </div>
            <p className="text-[13px] text-concrete-600 leading-snug">
              New seasonal campaign ready. Google ranking{" "}
              <strong className="text-concrete-900">up 5 spots</strong>. Reputation
              now <strong className="text-concrete-900">#1 in your ZIP</strong>.
              Ad spend down 19%.{" "}
              <strong className="text-concrete-900">Your marketing is running.</strong>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
