"use client";

import { useState, useEffect } from "react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-concrete-100 p-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="/audit"
        className="block w-full bg-cta text-concrete-900 text-center font-bold py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,197,24,0.3)]"
      >
        Get My Free Marketing Audit
      </a>
    </div>
  );
}
