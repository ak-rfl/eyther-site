"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════
   TYPES & CONSTANTS
   ═══════════════════════════════════════════════ */

interface AgencyFormData {
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  clientCount: string;
  currentTools: string[];
  whiteLabel: string;
  biggestChallenge: string;
}

interface FieldErrors {
  [key: string]: string;
}

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
};

const CLIENT_COUNT_OPTIONS = ["1-5", "5-15", "15-50", "50+"];

const TOOL_OPTIONS = [
  "GoHighLevel",
  "HubSpot",
  "ServiceTitan",
  "Housecall Pro",
  "Jobber",
  "Other",
];

const WHITE_LABEL_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "not-yet", label: "Not yet" },
  { value: "tell-me-more", label: "Tell me more" },
];

const initialFormData: AgencyFormData = {
  agencyName: "",
  contactName: "",
  email: "",
  phone: "",
  clientCount: "",
  currentTools: [],
  whiteLabel: "",
  biggestChallenge: "",
};

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function AgencyContactForm() {
  const [formData, setFormData] = useState<AgencyFormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* ── Shared Styles ── */
  const fieldHeight = "h-[52px]";
  const fieldBorder = "border-2 rounded-lg";
  const fieldPadding = "px-4";
  const fieldText = "text-base text-concrete-900 placeholder:text-concrete-400";
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

  const optionalLabel = (
    <span className="text-concrete-400 font-normal"> (optional)</span>
  );

  /* ── Field Updater ── */
  function updateField(field: keyof AgencyFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  /* ── Toggle Checkbox ── */
  function toggleTool(tool: string) {
    setFormData((prev) => {
      const tools = prev.currentTools.includes(tool)
        ? prev.currentTools.filter((t) => t !== tool)
        : [...prev.currentTools, tool];
      return { ...prev, currentTools: tools };
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

    if (!formData.agencyName.trim()) {
      newErrors.agencyName = "Agency name is required.";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Your name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!REGEX.email.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.phone.trim() && !REGEX.phone.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
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
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Agency contact form submitted:", formData);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ═══════════════════════════════════════════════
     SUCCESS SCREEN
     ═══════════════════════════════════════════════ */

  if (isSuccess) {
    return (
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

          <h2 className="font-heading text-2xl md:text-[32px] font-bold text-concrete-900 mb-3 tracking-tight">
            We&apos;re Reviewing Your Agency Profile
          </h2>

          <p className="text-concrete-600 text-base leading-relaxed mb-6 max-w-[460px] mx-auto">
            Expect a personalized walkthrough within 24 hours. We&apos;ll show
            you exactly how homeAI fits{" "}
            <strong className="text-concrete-900">
              {formData.agencyName}
            </strong>
            &apos;s workflow, stack, and growth targets.
          </p>

          <div className="bg-concrete-50 rounded-xl p-6 text-left max-w-[400px] mx-auto">
            <p className="text-sm text-concrete-600 mb-3 font-medium">
              What happens next:
            </p>
            <ul className="space-y-2.5">
              {[
                "We review your current tools and client count",
                "We build a custom demo for your agency",
                "You get a live walkthrough with our team",
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
                  <span className="text-sm text-concrete-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  }

  /* ═══════════════════════════════════════════════
     FORM
     ═══════════════════════════════════════════════ */

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg border border-concrete-100 p-6 md:p-10"
      noValidate
    >
      <div className="space-y-6">
        {/* Agency Name */}
        <div>
          <label htmlFor="agencyName" className={labelClass}>
            Agency name
          </label>
          <input
            id="agencyName"
            type="text"
            className={inputClass("agencyName")}
            placeholder="e.g. Contractor Growth Co."
            value={formData.agencyName}
            onChange={(e) => updateField("agencyName", e.target.value)}
          />
          <FieldMessage field="agencyName" />
        </div>

        {/* Your Name */}
        <div>
          <label htmlFor="contactName" className={labelClass}>
            Your name
          </label>
          <input
            id="contactName"
            type="text"
            className={inputClass("contactName")}
            placeholder="e.g. Sarah Mitchell"
            value={formData.contactName}
            onChange={(e) => updateField("contactName", e.target.value)}
          />
          <FieldMessage field="contactName" />
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
              placeholder="sarah@youragency.com"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            <FieldMessage field="email" />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone{optionalLabel}
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

        {/* Client Count Dropdown */}
        <div>
          <label htmlFor="clientCount" className={labelClass}>
            Number of home-services clients
          </label>
          <div className="relative">
            <select
              id="clientCount"
              className={selectClass("clientCount")}
              value={formData.clientCount}
              onChange={(e) => updateField("clientCount", e.target.value)}
            >
              <option value="" disabled>
                Select a range
              </option>
              {CLIENT_COUNT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </div>

        {/* Current Tools Checkboxes */}
        <div>
          <label className={labelClass}>Current tools</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TOOL_OPTIONS.map((tool) => {
              const isChecked = formData.currentTools.includes(tool);
              return (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleTool(tool)}
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
                  {tool}
                </button>
              );
            })}
          </div>
        </div>

        {/* White-label Radio */}
        <div>
          <label className={labelClass}>
            Interested in white-labeling?
          </label>
          <div className="flex flex-wrap gap-3">
            {WHITE_LABEL_OPTIONS.map((opt) => {
              const isSelected = formData.whiteLabel === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      whiteLabel: opt.value,
                    }))
                  }
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : "border-concrete-200 bg-white text-concrete-600 hover:border-concrete-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "border-primary-500"
                        : "border-concrete-300"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                    )}
                  </div>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Biggest Challenge */}
        <div>
          <label htmlFor="biggestChallenge" className={labelClass}>
            Biggest challenge scaling your agency{optionalLabel}
          </label>
          <textarea
            id="biggestChallenge"
            className={textareaClass("biggestChallenge")}
            rows={4}
            placeholder="e.g. Losing institutional knowledge when AMs leave, onboarding new clients takes too long, can't maintain quality at 30+ accounts..."
            value={formData.biggestChallenge}
            onChange={(e) => updateField("biggestChallenge", e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#F5C518] text-concrete-900 font-bold text-[17px] px-7 py-4 rounded-full hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              Get Agency Pricing
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
          No spam, no sales bots. A real human reviews your info and gets back
          to you within 24 hours.
        </p>
      </div>
    </form>
  );
}
