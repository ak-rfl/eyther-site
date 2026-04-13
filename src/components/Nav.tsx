"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-shadow duration-300 border-b border-concrete-100 bg-white/92 backdrop-blur-xl ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-[22px] font-extrabold tracking-tight">
          home<span className="text-accent-500">AI</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {["How It Works", "Results", "Pricing", "FAQ"].map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-concrete-600 text-[15px] font-medium hover:text-concrete-900 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="text-concrete-600 text-[15px] font-medium hover:text-concrete-900 transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+18005551234"
            className="text-concrete-700 text-[15px] font-bold flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            (800) 555-1234
          </a>
          <a
            href="#audit"
            className="bg-accent-500 text-white text-sm font-medium px-5 py-2.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_8px_rgba(232,86,15,0.25)]"
          >
            Get My Free Audit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] bg-concrete-900 rounded transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-concrete-900 rounded transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-concrete-900 rounded transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-concrete-100 shadow-lg transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {["How It Works", "Results", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-concrete-700 text-lg font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            href="/blog"
            className="text-concrete-700 text-lg font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <a
            href="tel:+18005551234"
            className="text-concrete-700 text-lg font-bold flex items-center gap-2 py-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            (800) 555-1234
          </a>
          <a
            href="#audit"
            className="bg-accent-500 text-white text-center font-medium px-6 py-3.5 rounded-[10px] mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get My Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
