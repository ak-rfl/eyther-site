"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

/* ═══════════════════════════════════════════════
   Enterprise Contact / Consultation Form
   /solutions/enterprise/contact
   ═══════════════════════════════════════════════ */

const LOCATION_OPTIONS = ["10-25", "25-50", "50-100", "100-200", "200+"];

const TRADE_OPTIONS = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Restoration",
  "Other",
];

interface FormData {
  companyName: string;
  yourName: string;
  role: string;
  email: string;
  phone: string;
  locations: string;
  trades: string[];
  currentSetup: string;
}

interface FieldErrors {
  [key: string]: string;
}

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
};

const initialFormData: FormData = {
  companyName: "",
  yourName: "",
  role: "",
  email: "",
  phone: "",
  locations: "",
  trades: [],
  currentSetup: "",
};

export default function EnterpriseContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* ── Shared Styles ── */
  const fieldHeight = "h-[52px]";
  const fieldBorder = "border-2 rounded-lg";
  const fieldPadding = "px-4";
  const fieldText =
    "text-base text-concrete-900 placeholder:text-concrete-400";
  const fieldFocus =
    "focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(33,133,181,0.12)]";
  const fieldTransition = "transition-all";

  function borderColor(field: string) {
    if (errors[field]) return "border-error";
    return "border-concrete-200";
  }

  const inputClass = (field: string) =>
    `w-full ${fieldHeight} ${fieldBorder} ${fieldPadding} ${fieldText} bg-white ${fieldFocus} ${fieldTransition} ${borderColor(field)}`;

  const selectClass = (field: string) =>
    `w-full ${fieldHeight} ${fieldBorder} ${fieldPadding} ${fieldText} bg-white ${fieldFocus} ${fieldTransition} appearance-none cursor-pointer ${borderColor(field)}`;

  const textareaClass = (field: string) =>
    `w-full ${fieldBorder} ${fieldPadding} py-3 ${fieldText} bg-white ${fieldFocus} ${fieldTransition} resize-none ${borderColor(field)}`;

  const labelClass = "block text-sm font-medium text-concrete-700 mb-2";

  /* ── Field Updater ── */
  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  /* ── Toggle Trade ── */
  function toggleTrade(trade: string) {
    setFormData((prev) => {
      const trades = prev.trades.includes(trade)
        ? prev.trades.filter((t) => t !== trade)
        : [...prev.trades, trade];
      return { ...prev, trades };
    });
  }

  /* ── Error Message ── */
  function FieldMessage({ field }: { field: string }) {
    if (!errors[field]) return null;
    return (
      <p
        className="text-error text-sm mt-1.5 flex items-center gap-1.5"
        role="alert"
      >
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        {errors[field]}
      </p>
    );
  }

  /* ── Select Arrow ── */
  function SelectArrow() {
    return (
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-concrete-400 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
  }

  /* ── Validation ── */
  function validate(): boolean {
    const newErrors: FieldErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }
    if (!formData.yourName.trim()) {
      newErrors.yourName = "Your name is required.";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Your role is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!REGEX.email.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.phone.trim() && !REGEX.phone.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.locations) {
      newErrors.locations = "Please select the number of locations.";
    }
    if (formData.trades.length === 0) {
      newErrors.trades = "Select at least one trade.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* ── Submit ── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Enterprise consultation form submitted:", formData);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Enterprise form submission failed:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ═══════════════════════════════════════════════
     SUCCESS SCREEN
     ═══════════════════════════════════════════════ */

  if (isSuccess) {
    return (
      <>
        <Nav />
        <section className="bg-primary-50 pt-[120px] pb-20 md:pb-24 min-h-screen">
          <div className="max-w-[720px] mx-auto px-6">
            <FadeIn>
              <Link
                href="/solutions/enterprise"
                className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:text-primary-700 transition-colors mb-8"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 011.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Enterprise
              </Link>
            </FadeIn>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-concrete-100 p-8 md:p-12 text-center">
                {/* Success icon */}
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-10 h-10 text-success"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                </div>

                <h2 className="font-heading text-3xl md:text-[40px] font-extrabold text-concrete-900 mb-3 tracking-tight leading-tight">
                  We Got It. Expect a Call Within 24 Hours.
                </h2>

                <p className="text-concrete-600 text-base leading-relaxed mb-6 max-w-[460px] mx-auto">
                  Someone from our enterprise team will reach out to schedule
                  your consultation. We&apos;ll put together a custom plan
                  showing what homeAI looks like for{" "}
                  <strong className="text-concrete-900">
                    {formData.companyName}
                  </strong>
                  &apos;s {formData.locations} locations.
                </p>

                <div className="bg-concrete-50 rounded-xl p-6 text-left max-w-[400px] mx-auto">
                  <p className="text-sm text-concrete-600 mb-3 font-medium">
                    What happens next:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "We review your network and service mix",
                      "We build a custom demo for your locations",
                      "You get a live walkthrough with our enterprise team",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-success shrink-0 mt-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="text-sm text-concrete-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/solutions/enterprise"
                    className="inline-block bg-primary-500 text-white font-medium px-6 py-3 rounded-[10px] hover:bg-primary-700 transition-colors"
                  >
                    Back to Enterprise Overview
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  /* ═══════════════════════════════════════════════
     FORM
     ═══════════════════════════════════════════════ */

  return (
    <>
      <Nav />

      <section className="bg-primary-50 pt-[120px] pb-20 md:pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/solutions/enterprise"
              className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:text-primary-700 transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 011.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Enterprise
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Enterprise Intake
              </span>
              <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-concrete-900 mb-4">
                Schedule a Consultation
              </h1>
              <p className="text-lg text-concrete-600 max-w-[540px] mx-auto">
                Takes 2 minutes. We&apos;ll put together a custom plan showing
                what homeAI looks like for your locations, service mix, and
                growth targets.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg border border-concrete-100 p-6 md:p-10"
              noValidate
            >
              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className={labelClass}>
                    Company name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    className={inputClass("companyName")}
                    placeholder="e.g. Acme Home Services"
                    value={formData.companyName}
                    onChange={(e) =>
                      updateField("companyName", e.target.value)
                    }
                  />
                  <FieldMessage field="companyName" />
                </div>

                {/* Your Name */}
                <div>
                  <label htmlFor="yourName" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="yourName"
                    type="text"
                    className={inputClass("yourName")}
                    placeholder="e.g. Jane Smith"
                    value={formData.yourName}
                    onChange={(e) => updateField("yourName", e.target.value)}
                  />
                  <FieldMessage field="yourName" />
                </div>

                {/* Role / Title */}
                <div>
                  <label htmlFor="role" className={labelClass}>
                    Role / title
                  </label>
                  <input
                    id="role"
                    type="text"
                    className={inputClass("role")}
                    placeholder="e.g. VP of Marketing"
                    value={formData.role}
                    onChange={(e) => updateField("role", e.target.value)}
                  />
                  <FieldMessage field="role" />
                </div>

                {/* Email + Phone (side by side on md) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClass("email")}
                      placeholder="jane@acmehome.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                    <FieldMessage field="email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone{" "}
                      <span className="text-concrete-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClass("phone")}
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                    <FieldMessage field="phone" />
                  </div>
                </div>

                {/* Number of Locations Dropdown */}
                <div>
                  <label htmlFor="locations" className={labelClass}>
                    Number of locations
                  </label>
                  <div className="relative">
                    <select
                      id="locations"
                      className={selectClass("locations")}
                      value={formData.locations}
                      onChange={(e) =>
                        updateField("locations", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {LOCATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} locations
                        </option>
                      ))}
                    </select>
                    <SelectArrow />
                  </div>
                  <FieldMessage field="locations" />
                </div>

                {/* Primary Trades Checkboxes */}
                <div>
                  <label className={labelClass}>Primary trades served</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {TRADE_OPTIONS.map((trade) => {
                      const isChecked = formData.trades.includes(trade);
                      return (
                        <button
                          key={trade}
                          type="button"
                          onClick={() => toggleTrade(trade)}
                          className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                            isChecked
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-concrete-200 bg-white text-concrete-600 hover:border-concrete-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? "bg-primary-500 border-primary-500"
                                : "border-concrete-300 bg-white"
                            }`}
                          >
                            {isChecked && (
                              <svg
                                className="w-3 h-3 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            )}
                          </div>
                          {trade}
                        </button>
                      );
                    })}
                  </div>
                  <FieldMessage field="trades" />
                </div>

                {/* Current Marketing Setup */}
                <div>
                  <label htmlFor="currentSetup" className={labelClass}>
                    Current marketing setup{" "}
                    <span className="text-concrete-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="currentSetup"
                    className={textareaClass("currentSetup")}
                    rows={4}
                    placeholder="e.g. In-house team of 3, using ServiceTitan and Google Ads across all locations. Each location runs their own social media..."
                    value={formData.currentSetup}
                    onChange={(e) =>
                      updateField("currentSetup", e.target.value)
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cta text-concrete-900 font-bold text-[17px] px-7 py-4 rounded-full hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Schedule a Consultation
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-concrete-400 text-center">
                  No spam, no sales bots. A real human reviews your info and
                  gets back to you within 24 hours.
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
