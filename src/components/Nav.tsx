"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const solutionLinks = [
  { label: "For Agencies", href: "/solutions/agencies" },
  { label: "For Enterprise", href: "/solutions/enterprise" },
];

const tradeLinks = [
  { label: "Plumbing", href: "/trades/plumbing" },
  { label: "HVAC", href: "/trades/hvac" },
  { label: "Electrical", href: "/trades/electrical" },
  { label: "Roofing", href: "/trades/roofing" },
  { label: "Landscaping", href: "/trades/landscaping" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <li>
            <a
              href="/#how-it-works"
              className="text-concrete-600 text-[15px] font-medium hover:text-concrete-900 transition-colors"
            >
              How It Works
            </a>
          </li>

          {/* Solutions Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              className="text-concrete-600 text-[15px] font-medium hover:text-concrete-900 transition-colors flex items-center gap-1"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onMouseEnter={() => setSolutionsOpen(true)}
            >
              Solutions
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                solutionsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-xl border border-concrete-100 shadow-lg shadow-concrete-900/8 p-5 w-[280px]">
                {/* Solution links */}
                <div className="space-y-1 mb-4">
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2.5 rounded-lg text-[15px] font-medium text-concrete-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Divider + Trade links */}
                <div className="border-t border-concrete-100 pt-3">
                  <p className="px-3 text-[11px] font-bold uppercase tracking-[1.5px] text-concrete-400 mb-2">
                    By Trade
                  </p>
                  <div className="space-y-0.5">
                    {tradeLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 rounded-lg text-[14px] text-concrete-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a
              href="/#pricing"
              className="text-concrete-600 text-[15px] font-medium hover:text-concrete-900 transition-colors"
            >
              Pricing
            </a>
          </li>
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
            href="/audit"
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
          <a
            href="/#how-it-works"
            className="text-concrete-700 text-lg font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>

          {/* Mobile Solutions Accordion */}
          <div>
            <button
              className="text-concrete-700 text-lg font-medium py-2 w-full text-left flex items-center justify-between"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              Solutions
              <svg
                className={`w-4 h-4 text-concrete-400 transition-transform duration-200 ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileSolutionsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-1 pb-2 space-y-3">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-concrete-600 text-[16px] font-medium py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-concrete-400 pt-2">
                  By Trade
                </p>
                {tradeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-concrete-600 text-[15px] py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/#pricing"
            className="text-concrete-700 text-lg font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
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
            href="/audit"
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
