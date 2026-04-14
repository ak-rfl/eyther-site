"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════ */

interface FormData {
  // Step 1
  businessName: string;
  trade: string;
  tradeOther: string;
  yearsInBusiness: string;
  employees: string;
  // Step 2
  cities: string;
  state: string;
  zipCodes: string;
  serviceRadius: string;
  // Step 3
  websiteUrl: string;
  googleBusinessUrl: string;
  facebookUrl: string;
  instagramHandle: string;
  yelpUrl: string;
  tiktokHandle: string;
  nextdoorPresence: boolean | null;
  // Step 4
  monthlySpend: string;
  currentChannels: string[];
  biggestFrustration: string;
  // Step 5
  contactName: string;
  email: string;
  phone: string;
}

interface FieldErrors {
  [key: string]: string;
}

interface FieldValid {
  [key: string]: boolean;
}

/* ═══════════════════════════════════════════════
   REGEX PATTERNS
   ═══════════════════════════════════════════════ */

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
  zip: /^\d{5}(-\d{4})?$/,
  url: /^(https?:\/\/)?(www\.)?[\w-]+\.[\w.-]+\/?.*$/,
  cityName: /^[a-zA-Z\s-]+$/,
  handle: /^@?[\w.]+$/,
  businessName: /^.{2,100}$/,
};

/* ═══════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════ */

const TOTAL_STEPS = 5;

const TRADES = [
  "Plumbing",
  "HVAC",
  "Electrical",
  "Roofing",
  "Landscaping",
  "Other",
];

const YEARS_OPTIONS = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

const EMPLOYEE_OPTIONS = [
  "Just me",
  "2-5",
  "6-15",
  "16-50",
  "50+",
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const SERVICE_RADIUS_OPTIONS = [
  "10 miles",
  "15 miles",
  "25 miles",
  "50 miles",
  "100+ miles",
];

const MONTHLY_SPEND_OPTIONS = [
  "$0 (nothing right now)",
  "Under $500",
  "$500-$1,000",
  "$1,000-$2,500",
  "$2,500-$5,000",
  "$5,000+",
];

const MARKETING_CHANNELS = [
  "Google Ads",
  "Facebook Ads",
  "SEO / agency",
  "Angi / HomeAdvisor / Thumbtack",
  "Yard signs / door hangers",
  "Referral only",
  "Other",
];

const STEP_CONFIG = [
  {
    headline: "Let\u2019s get to know your business",
    subtext:
      "We\u2019ll use this to benchmark you against top performers in your trade and market.",
  },
  {
    headline: "Where do your customers find you?",
    subtext:
      "Your AI team needs to know your turf to dominate the local search results.",
  },
  {
    headline: "Where are you showing up online?",
    subtext:
      "Don\u2019t worry if some of these are empty \u2014 that\u2019s exactly what we\u2019re here to fix.",
  },
  {
    headline: "What\u2019s your marketing situation right now?",
    subtext:
      "No judgment \u2014 80% of contractors we talk to say \u201CI know I should be doing more, I just don\u2019t know what works.\u201D",
  },
  {
    headline: "Almost done \u2014 where should we send your audit?",
    subtext:
      "You\u2019ll get a personalized marketing audit within 24 hours. No sales pitch, just an honest look at where you stand.",
  },
];

/* ═══════════════════════════════════════════════
   INITIAL STATE
   ═══════════════════════════════════════════════ */

const initialFormData: FormData = {
  businessName: "",
  trade: "",
  tradeOther: "",
  yearsInBusiness: "",
  employees: "",
  cities: "",
  state: "",
  zipCodes: "",
  serviceRadius: "",
  websiteUrl: "",
  googleBusinessUrl: "",
  facebookUrl: "",
  instagramHandle: "",
  yelpUrl: "",
  tiktokHandle: "",
  nextdoorPresence: null,
  monthlySpend: "",
  currentChannels: [],
  biggestFrustration: "",
  contactName: "",
  email: "",
  phone: "",
};

/* ═══════════════════════════════════════════════
   VALIDATION HELPERS
   ═══════════════════════════════════════════════ */

function validateZipCodes(input: string): string | null {
  if (!input.trim()) return null; // optional
  const zips = input.split(",").map((z) => z.trim()).filter(Boolean);
  for (const zip of zips) {
    if (!REGEX.zip.test(zip)) {
      return `"${zip}" is not a valid ZIP code. Use 5-digit format (e.g. 85001).`;
    }
  }
  return null;
}

function validateCities(input: string): string | null {
  if (!input.trim()) return null; // optional
  const cities = input.split(",").map((c) => c.trim()).filter(Boolean);
  for (const city of cities) {
    if (!REGEX.cityName.test(city)) {
      return `"${city}" contains invalid characters. Use letters, spaces, and hyphens only.`;
    }
  }
  return null;
}

function validateUrl(input: string, label: string): string | null {
  if (!input.trim()) return null; // optional
  if (!REGEX.url.test(input.trim())) {
    return `Please enter a valid ${label} URL.`;
  }
  return null;
}

function validateHandle(input: string, platform: string): string | null {
  if (!input.trim()) return null; // optional
  if (!REGEX.handle.test(input.trim())) {
    return `Please enter a valid ${platform} handle (e.g. @yourbusiness).`;
  }
  return null;
}

/* ═══════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════ */

export default function AuditPageClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [validFields, setValidFields] = useState<FieldValid>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [materialFiles, setMaterialFiles] = useState<File[]>([]);
  const [logoDragActive, setLogoDragActive] = useState(false);
  const [materialsDragActive, setMaterialsDragActive] = useState(false);

  const logoInputRef = useRef<HTMLInputElement>(null);
  const materialsInputRef = useRef<HTMLInputElement>(null);

  /* ── Field Updater ── */
  const updateField = useCallback(
    (field: keyof FormData, value: string | boolean | null | string[]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
      // Clear valid state too so it re-validates on blur
      if (validFields[field]) {
        setValidFields((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors, validFields]
  );

  /* ── Toggle Checkbox ── */
  const toggleChannel = useCallback((channel: string) => {
    setFormData((prev) => {
      const channels = prev.currentChannels.includes(channel)
        ? prev.currentChannels.filter((c) => c !== channel)
        : [...prev.currentChannels, channel];
      return { ...prev, currentChannels: channels };
    });
  }, []);

  /* ── Single-field Validation (for blur) ── */
  function validateField(field: string): boolean {
    let error: string | null = null;

    switch (field) {
      case "businessName":
        if (formData.businessName.trim() && !REGEX.businessName.test(formData.businessName.trim())) {
          error = "Business name must be 2-100 characters.";
        }
        break;
      case "tradeOther":
        if (formData.trade === "Other" && formData.tradeOther.trim() && formData.tradeOther.trim().length < 2) {
          error = "Please enter at least 2 characters.";
        }
        break;
      case "cities":
        error = validateCities(formData.cities);
        break;
      case "zipCodes":
        error = validateZipCodes(formData.zipCodes);
        break;
      case "websiteUrl":
        error = validateUrl(formData.websiteUrl, "website");
        break;
      case "googleBusinessUrl":
        error = validateUrl(formData.googleBusinessUrl, "Google Business Profile");
        break;
      case "facebookUrl":
        error = validateUrl(formData.facebookUrl, "Facebook");
        break;
      case "yelpUrl":
        error = validateUrl(formData.yelpUrl, "Yelp");
        break;
      case "instagramHandle":
        error = validateHandle(formData.instagramHandle, "Instagram");
        break;
      case "tiktokHandle":
        error = validateHandle(formData.tiktokHandle, "TikTok");
        break;
      case "contactName":
        if (formData.contactName.trim() && formData.contactName.trim().length < 2) {
          error = "Name must be at least 2 characters.";
        }
        break;
      case "email":
        if (formData.email.trim() && !REGEX.email.test(formData.email.trim())) {
          error = "Please enter a valid email address.";
        }
        break;
      case "phone":
        if (formData.phone.trim() && !REGEX.phone.test(formData.phone.trim())) {
          error = "Please enter a valid US phone number (e.g. (555) 123-4567).";
        }
        break;
    }

    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
      setValidFields((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      return false;
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      // Mark as valid only if the field has content
      const value = formData[field as keyof FormData];
      if (typeof value === "string" && value.trim()) {
        setValidFields((prev) => ({ ...prev, [field]: true }));
      }
      return true;
    }
  }

  /* ── Step Validation (for Continue) ── */
  function validateStep(step: number): boolean {
    const newErrors: FieldErrors = {};

    if (step === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Business name is required.";
      } else if (!REGEX.businessName.test(formData.businessName.trim())) {
        newErrors.businessName = "Business name must be 2-100 characters.";
      }
      if (!formData.trade) {
        newErrors.trade = "Please select your trade.";
      }
      if (formData.trade === "Other" && !formData.tradeOther.trim()) {
        newErrors.tradeOther = "Please specify your trade.";
      }
    }

    if (step === 2) {
      const citiesErr = validateCities(formData.cities);
      if (citiesErr) newErrors.cities = citiesErr;
      const zipErr = validateZipCodes(formData.zipCodes);
      if (zipErr) newErrors.zipCodes = zipErr;
    }

    if (step === 3) {
      const urlFields: [string, string][] = [
        ["websiteUrl", "website"],
        ["googleBusinessUrl", "Google Business Profile"],
        ["facebookUrl", "Facebook"],
        ["yelpUrl", "Yelp"],
      ];
      for (const [field, label] of urlFields) {
        const err = validateUrl(formData[field as keyof FormData] as string, label);
        if (err) newErrors[field] = err;
      }
      const igErr = validateHandle(formData.instagramHandle, "Instagram");
      if (igErr) newErrors.instagramHandle = igErr;
      const ttErr = validateHandle(formData.tiktokHandle, "TikTok");
      if (ttErr) newErrors.tiktokHandle = ttErr;
    }

    if (step === 5) {
      if (!formData.contactName.trim()) {
        newErrors.contactName = "Your name is required.";
      } else if (formData.contactName.trim().length < 2) {
        newErrors.contactName = "Name must be at least 2 characters.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!REGEX.email.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (formData.phone.trim() && !REGEX.phone.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid US phone number (e.g. (555) 123-4567).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* ── Navigation ── */
  function handleNext() {
    if (validateStep(currentStep)) {
      setDirection(1);
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setDirection(-1);
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ── File Handlers ── */
  function handleLogoDrop(e: React.DragEvent) {
    e.preventDefault();
    setLogoDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setLogoFile(file);
    }
  }

  function handleMaterialsDrop(e: React.DragEvent) {
    e.preventDefault();
    setMaterialsDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    setMaterialFiles((prev) => [...prev, ...files]);
  }

  function removeMaterialFile(index: number) {
    setMaterialFiles((prev) => prev.filter((_, i) => i !== index));
  }

  /* ── Submit ── */
  async function handleSubmit() {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Audit form submitted:", {
        ...formData,
        logoFile: logoFile?.name ?? null,
        materialFiles: materialFiles.map((f) => f.name),
      });
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  }

  /* ═══════════════════════════════════════════════
     SHARED STYLES — Consistent sizing across all fields
     ═══════════════════════════════════════════════ */

  const fieldHeight = "h-[52px]";
  const fieldBorder = "border-2 rounded-lg";
  const fieldPadding = "px-4";
  const fieldText = "text-base text-concrete-900 placeholder:text-concrete-400";
  const fieldFocus =
    "focus:outline-none focus:border-[#F5C518] focus:ring-[#F5C518] focus:shadow-[0_0_0_3px_rgba(245,197,24,0.15)]";
  const fieldTransition = "transition-all";

  function borderColor(field: string) {
    if (errors[field]) return "border-error";
    if (validFields[field]) return "border-success";
    return "border-concrete-200";
  }

  const inputClass = (field: string) =>
    `w-full ${fieldHeight} ${fieldBorder} ${fieldPadding} ${fieldText} bg-white ${fieldFocus} ${fieldTransition} ${borderColor(field)}`;

  const selectClass = (field: string) =>
    `w-full ${fieldHeight} ${fieldBorder} ${fieldPadding} ${fieldText} bg-white ${fieldFocus} ${fieldTransition} appearance-none cursor-pointer ${borderColor(field)}`;

  const textareaClass = (field: string) =>
    `w-full ${fieldBorder} ${fieldPadding} py-3 ${fieldText} bg-white ${fieldFocus} ${fieldTransition} resize-none ${borderColor(field)}`;

  const labelClass = "block text-sm font-medium text-concrete-700 mb-2";

  const fieldGap = "space-y-6";

  const optionalLabel = (
    <span className="text-concrete-400 font-normal">(optional)</span>
  );

  /* ── Inline Error / Valid Indicator ── */
  function FieldMessage({ field }: { field: string }) {
    if (errors[field]) {
      return (
        <p className="text-error text-sm mt-1.5 flex items-center gap-1.5" role="alert">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          {errors[field]}
        </p>
      );
    }
    if (validFields[field]) {
      return (
        <p className="text-success text-sm mt-1.5 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Looks good
        </p>
      );
    }
    return null;
  }

  /* Select arrow component for consistency */
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

  /* ═══════════════════════════════════════════════
     ANIMATION VARIANTS
     ═══════════════════════════════════════════════ */

  const stepVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  /* ═══════════════════════════════════════════════
     SUCCESS SCREEN
     ═══════════════════════════════════════════════ */

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] w-full"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-concrete-100 p-8 md:p-12 text-center">
            {/* Success icon */}
            <div className="w-20 h-20 bg-[#F5C518] rounded-full flex items-center justify-center mx-auto mb-6">
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-10 h-10 text-concrete-900"
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
              Your Free Marketing Audit is Being Built
            </h2>

            <p className="text-concrete-600 text-base leading-relaxed mb-8 max-w-[460px] mx-auto">
              Our AI team is already analyzing your market, competitors, and
              online presence. Here&apos;s what&apos;s coming to your inbox at{" "}
              <strong className="text-concrete-900">{formData.email}</strong>:
            </p>

            {/* Checklist */}
            <div className="bg-concrete-50 rounded-xl p-6 mb-8 text-left">
              <ul className="space-y-3.5">
                {[
                  "Local SEO scorecard",
                  "Competitor analysis",
                  "Google Ads opportunity report",
                  "Review strategy",
                  "Custom campaign recommendations",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-concrete-700"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#F5C518]/20 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-concrete-900"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-concrete-400 mb-8">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Expected delivery: Within 24 hours
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-concrete-900 font-medium hover:text-[#F5C518] transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to homepage
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════
     FORM STEPS
     ═══════════════════════════════════════════════ */

  return (
    <div className="min-h-[calc(100vh-72px)] bg-white pt-[96px] pb-20 px-6">
      <div className="max-w-[680px] mx-auto">
        {/* ── Progress Bar ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-concrete-400">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <span className="text-sm font-medium text-concrete-400">
              {Math.round((currentStep / TOTAL_STEPS) * 100)}%
            </span>
          </div>
          <div className="flex gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  i < currentStep
                    ? "bg-[#F5C518]"
                    : "bg-concrete-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Step Content ── */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Step Header */}
            <div className="mb-8 text-center">
              <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-concrete-900 mb-2">
                {STEP_CONFIG[currentStep - 1].headline}
              </h1>
              <div className="w-16 h-1 bg-[#F5C518] rounded-full mx-auto mt-4 mb-6" />
              <p className="text-base text-concrete-500 leading-relaxed">
                {STEP_CONFIG[currentStep - 1].subtext}
              </p>
            </div>

            {/* Step Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-concrete-100 p-6 md:p-8">
              {/* ═══ STEP 1: About Your Business ═══ */}
              {currentStep === 1 && (
                <div className={fieldGap}>
                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className={labelClass}>
                      Business Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      placeholder="e.g. Tony's Plumbing Co."
                      maxLength={100}
                      value={formData.businessName}
                      onChange={(e) =>
                        updateField("businessName", e.target.value)
                      }
                      onBlur={() => validateField("businessName")}
                      className={inputClass("businessName")}
                      aria-invalid={!!errors.businessName}
                    />
                    <FieldMessage field="businessName" />
                  </div>

                  {/* Trade */}
                  <div>
                    <label htmlFor="trade" className={labelClass}>
                      Trade / Industry <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="trade"
                        value={formData.trade}
                        onChange={(e) => updateField("trade", e.target.value)}
                        className={selectClass("trade")}
                        aria-invalid={!!errors.trade}
                      >
                        <option value="">Select your trade</option>
                        {TRADES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                    <FieldMessage field="trade" />
                    {formData.trade === "Other" && (
                      <div className="mt-4">
                        <input
                          type="text"
                          placeholder="Please specify your trade"
                          value={formData.tradeOther}
                          onChange={(e) =>
                            updateField("tradeOther", e.target.value)
                          }
                          onBlur={() => validateField("tradeOther")}
                          className={inputClass("tradeOther")}
                        />
                        <FieldMessage field="tradeOther" />
                      </div>
                    )}
                  </div>

                  {/* Years in Business */}
                  <div>
                    <label htmlFor="yearsInBusiness" className={labelClass}>
                      How long in business?
                    </label>
                    <div className="relative">
                      <select
                        id="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={(e) =>
                          updateField("yearsInBusiness", e.target.value)
                        }
                        className={selectClass("yearsInBusiness")}
                      >
                        <option value="">Select</option>
                        {YEARS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                  </div>

                  {/* Employees */}
                  <div>
                    <label htmlFor="employees" className={labelClass}>
                      Number of employees
                    </label>
                    <div className="relative">
                      <select
                        id="employees"
                        value={formData.employees}
                        onChange={(e) =>
                          updateField("employees", e.target.value)
                        }
                        className={selectClass("employees")}
                      >
                        <option value="">Select</option>
                        {EMPLOYEE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ STEP 2: Service Area ═══ */}
              {currentStep === 2 && (
                <div className={fieldGap}>
                  {/* Cities */}
                  <div>
                    <label htmlFor="cities" className={labelClass}>
                      City / Cities covered
                    </label>
                    <input
                      id="cities"
                      type="text"
                      placeholder="e.g. Phoenix, Scottsdale, Tempe"
                      value={formData.cities}
                      onChange={(e) => updateField("cities", e.target.value)}
                      onBlur={() => validateField("cities")}
                      className={inputClass("cities")}
                    />
                    <FieldMessage field="cities" />
                    {!errors.cities && (
                      <p className="text-xs text-concrete-400 mt-1.5">
                        Separate multiple cities with commas
                      </p>
                    )}
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="state" className={labelClass}>
                      State
                    </label>
                    <div className="relative">
                      <select
                        id="state"
                        value={formData.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        className={selectClass("state")}
                      >
                        <option value="">Select state</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                  </div>

                  {/* ZIP Codes */}
                  <div>
                    <label htmlFor="zipCodes" className={labelClass}>
                      ZIP codes served
                    </label>
                    <textarea
                      id="zipCodes"
                      placeholder="e.g. 85001, 85002, 85003"
                      value={formData.zipCodes}
                      onChange={(e) => updateField("zipCodes", e.target.value)}
                      onBlur={() => validateField("zipCodes")}
                      rows={3}
                      className={textareaClass("zipCodes")}
                    />
                    <FieldMessage field="zipCodes" />
                    {!errors.zipCodes && (
                      <p className="text-xs text-concrete-400 mt-1.5">
                        Separate with commas (5-digit ZIP codes)
                      </p>
                    )}
                  </div>

                  {/* Service Radius */}
                  <div>
                    <label htmlFor="serviceRadius" className={labelClass}>
                      Service radius
                    </label>
                    <div className="relative">
                      <select
                        id="serviceRadius"
                        value={formData.serviceRadius}
                        onChange={(e) =>
                          updateField("serviceRadius", e.target.value)
                        }
                        className={selectClass("serviceRadius")}
                      >
                        <option value="">Select radius</option>
                        {SERVICE_RADIUS_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ STEP 3: Online Presence ═══ */}
              {currentStep === 3 && (
                <div className={fieldGap}>
                  {/* Website URL */}
                  <div>
                    <label htmlFor="websiteUrl" className={labelClass}>
                      Website URL {optionalLabel}
                    </label>
                    <input
                      id="websiteUrl"
                      type="url"
                      placeholder="https://www.yourbusiness.com"
                      value={formData.websiteUrl}
                      onChange={(e) =>
                        updateField("websiteUrl", e.target.value)
                      }
                      onBlur={() => validateField("websiteUrl")}
                      className={inputClass("websiteUrl")}
                    />
                    <FieldMessage field="websiteUrl" />
                  </div>

                  {/* Google Business Profile */}
                  <div>
                    <label htmlFor="googleBusinessUrl" className={labelClass}>
                      Google Business Profile URL {optionalLabel}
                    </label>
                    <input
                      id="googleBusinessUrl"
                      type="url"
                      placeholder="https://g.page/your-business"
                      value={formData.googleBusinessUrl}
                      onChange={(e) =>
                        updateField("googleBusinessUrl", e.target.value)
                      }
                      onBlur={() => validateField("googleBusinessUrl")}
                      className={inputClass("googleBusinessUrl")}
                    />
                    <FieldMessage field="googleBusinessUrl" />
                  </div>

                  {/* Facebook */}
                  <div>
                    <label htmlFor="facebookUrl" className={labelClass}>
                      Facebook page URL {optionalLabel}
                    </label>
                    <input
                      id="facebookUrl"
                      type="url"
                      placeholder="https://www.facebook.com/yourbusiness"
                      value={formData.facebookUrl}
                      onChange={(e) =>
                        updateField("facebookUrl", e.target.value)
                      }
                      onBlur={() => validateField("facebookUrl")}
                      className={inputClass("facebookUrl")}
                    />
                    <FieldMessage field="facebookUrl" />
                  </div>

                  {/* Instagram */}
                  <div>
                    <label htmlFor="instagramHandle" className={labelClass}>
                      Instagram handle {optionalLabel}
                    </label>
                    <input
                      id="instagramHandle"
                      type="text"
                      placeholder="@yourbusiness"
                      value={formData.instagramHandle}
                      onChange={(e) =>
                        updateField("instagramHandle", e.target.value)
                      }
                      onBlur={() => validateField("instagramHandle")}
                      className={inputClass("instagramHandle")}
                    />
                    <FieldMessage field="instagramHandle" />
                  </div>

                  {/* Yelp */}
                  <div>
                    <label htmlFor="yelpUrl" className={labelClass}>
                      Yelp page URL {optionalLabel}
                    </label>
                    <input
                      id="yelpUrl"
                      type="url"
                      placeholder="https://www.yelp.com/biz/your-business"
                      value={formData.yelpUrl}
                      onChange={(e) => updateField("yelpUrl", e.target.value)}
                      onBlur={() => validateField("yelpUrl")}
                      className={inputClass("yelpUrl")}
                    />
                    <FieldMessage field="yelpUrl" />
                  </div>

                  {/* TikTok */}
                  <div>
                    <label htmlFor="tiktokHandle" className={labelClass}>
                      TikTok handle {optionalLabel}
                    </label>
                    <input
                      id="tiktokHandle"
                      type="text"
                      placeholder="@yourbusiness"
                      value={formData.tiktokHandle}
                      onChange={(e) =>
                        updateField("tiktokHandle", e.target.value)
                      }
                      onBlur={() => validateField("tiktokHandle")}
                      className={inputClass("tiktokHandle")}
                    />
                    <FieldMessage field="tiktokHandle" />
                  </div>

                  {/* Nextdoor */}
                  <div>
                    <label className={labelClass}>
                      Nextdoor presence? {optionalLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateField(
                            "nextdoorPresence",
                            formData.nextdoorPresence === true ? null : true
                          )
                        }
                        className={`${fieldHeight} rounded-lg ${fieldBorder} font-medium text-sm ${fieldTransition} ${
                          formData.nextdoorPresence === true
                            ? "border-[#F5C518] bg-[#F5C518]/10 text-concrete-900"
                            : "border-concrete-200 text-concrete-600 hover:border-concrete-400"
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          updateField(
                            "nextdoorPresence",
                            formData.nextdoorPresence === false ? null : false
                          )
                        }
                        className={`${fieldHeight} rounded-lg ${fieldBorder} font-medium text-sm ${fieldTransition} ${
                          formData.nextdoorPresence === false
                            ? "border-[#F5C518] bg-[#F5C518]/10 text-concrete-900"
                            : "border-concrete-200 text-concrete-600 hover:border-concrete-400"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ STEP 4: Current Marketing ═══ */}
              {currentStep === 4 && (
                <div className={fieldGap}>
                  {/* Monthly Spend */}
                  <div>
                    <label htmlFor="monthlySpend" className={labelClass}>
                      Current monthly marketing spend
                    </label>
                    <div className="relative">
                      <select
                        id="monthlySpend"
                        value={formData.monthlySpend}
                        onChange={(e) =>
                          updateField("monthlySpend", e.target.value)
                        }
                        className={selectClass("monthlySpend")}
                      >
                        <option value="">Select</option>
                        {MONTHLY_SPEND_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <SelectArrow />
                    </div>
                  </div>

                  {/* Current Channels */}
                  <div>
                    <label className={labelClass}>Currently using?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {MARKETING_CHANNELS.map((channel) => (
                        <button
                          key={channel}
                          type="button"
                          onClick={() => toggleChannel(channel)}
                          className={`flex items-center gap-3 ${fieldPadding} py-3.5 rounded-lg ${fieldBorder} text-left text-sm font-medium ${fieldTransition} ${
                            formData.currentChannels.includes(channel)
                              ? "border-[#F5C518] bg-[#F5C518]/10 text-concrete-900"
                              : "border-concrete-200 text-concrete-600 hover:border-concrete-400"
                          }`}
                        >
                          <div
                            className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center ${fieldTransition} ${
                              formData.currentChannels.includes(channel)
                                ? "border-[#F5C518] bg-[#F5C518]"
                                : "border-concrete-300"
                            }`}
                          >
                            {formData.currentChannels.includes(channel) && (
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
                          {channel}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Biggest Frustration */}
                  <div>
                    <label htmlFor="biggestFrustration" className={labelClass}>
                      Biggest marketing frustration {optionalLabel}
                    </label>
                    <textarea
                      id="biggestFrustration"
                      placeholder="What's not working? What keeps you up at night about your marketing?"
                      value={formData.biggestFrustration}
                      onChange={(e) =>
                        updateField("biggestFrustration", e.target.value)
                      }
                      rows={3}
                      className={textareaClass("biggestFrustration")}
                    />
                  </div>
                </div>
              )}

              {/* ═══ STEP 5: Contact Info & Collateral ═══ */}
              {currentStep === 5 && (
                <div className={fieldGap}>
                  {/* Name */}
                  <div>
                    <label htmlFor="contactName" className={labelClass}>
                      Your name <span className="text-error">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      placeholder="e.g. Tony Hernandez"
                      value={formData.contactName}
                      onChange={(e) =>
                        updateField("contactName", e.target.value)
                      }
                      onBlur={() => validateField("contactName")}
                      className={inputClass("contactName")}
                      aria-invalid={!!errors.contactName}
                    />
                    <FieldMessage field="contactName" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => validateField("email")}
                      className={inputClass("email")}
                      aria-invalid={!!errors.email}
                    />
                    <FieldMessage field="email" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone{" "}
                      <span className="text-concrete-400 font-normal">
                        (optional) &mdash; We&apos;ll text, not cold-call. Promise.
                      </span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onBlur={() => validateField("phone")}
                      className={inputClass("phone")}
                    />
                    <FieldMessage field="phone" />
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className={labelClass}>
                      Business logo {optionalLabel}
                    </label>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setLogoDragActive(true);
                      }}
                      onDragLeave={() => setLogoDragActive(false)}
                      onDrop={handleLogoDrop}
                      onClick={() => logoInputRef.current?.click()}
                      className={`w-full relative flex flex-col items-center justify-center gap-2 ${fieldBorder} border-dashed rounded-lg py-8 ${fieldPadding} cursor-pointer ${fieldTransition} ${
                        logoDragActive
                          ? "border-[#F5C518] bg-[#F5C518]/10"
                          : "border-concrete-200 hover:border-concrete-400 bg-concrete-50"
                      }`}
                    >
                      <input
                        ref={logoInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setLogoFile(file);
                        }}
                      />
                      {logoFile ? (
                        <div className="flex items-center gap-3">
                          <svg
                            className="w-5 h-5 text-success"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span className="text-sm text-concrete-700 font-medium">
                            {logoFile.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLogoFile(null);
                            }}
                            className="text-concrete-400 hover:text-error transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="w-8 h-8 text-concrete-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                          </svg>
                          <span className="text-sm text-concrete-500">
                            Drag & drop your logo, or{" "}
                            <span className="text-[#F5C518] font-medium">
                              click to browse
                            </span>
                          </span>
                          <span className="text-xs text-concrete-400">
                            PNG, JPG, SVG up to 5MB
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Marketing Materials Upload */}
                  <div>
                    <label className={labelClass}>
                      Any existing marketing materials {optionalLabel}
                    </label>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setMaterialsDragActive(true);
                      }}
                      onDragLeave={() => setMaterialsDragActive(false)}
                      onDrop={handleMaterialsDrop}
                      onClick={() => materialsInputRef.current?.click()}
                      className={`w-full relative flex flex-col items-center justify-center gap-2 ${fieldBorder} border-dashed rounded-lg py-8 ${fieldPadding} cursor-pointer ${fieldTransition} ${
                        materialsDragActive
                          ? "border-[#F5C518] bg-[#F5C518]/10"
                          : "border-concrete-200 hover:border-concrete-400 bg-concrete-50"
                      }`}
                    >
                      <input
                        ref={materialsInputRef}
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          setMaterialFiles((prev) => [...prev, ...files]);
                        }}
                      />
                      <svg
                        className="w-8 h-8 text-concrete-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                      </svg>
                      <span className="text-sm text-concrete-500">
                        Drag & drop files, or{" "}
                        <span className="text-[#F5C518] font-medium">
                          click to browse
                        </span>
                      </span>
                      <span className="text-xs text-concrete-400">
                        Brochures, flyers, business cards, etc.
                      </span>
                    </div>
                    {materialFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {materialFiles.map((file, i) => (
                          <div
                            key={`${file.name}-${i}`}
                            className="flex items-center gap-3 px-4 py-3 bg-concrete-50 rounded-lg border border-concrete-100"
                          >
                            <svg
                              className="w-4 h-4 text-concrete-400 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span className="text-sm text-concrete-700 flex-1 truncate">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeMaterialFile(i)}
                              className="text-concrete-400 hover:text-error transition-colors shrink-0"
                            >
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M18 6L6 18M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ── Navigation Buttons ── */}
            <div className="flex items-center justify-between mt-8 gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 border border-concrete-900 text-concrete-900 font-medium text-[15px] rounded-full px-6 py-3 hover:bg-concrete-900/5 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#F5C518] text-concrete-900 font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                >
                  Continue
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-[#F5C518] text-concrete-900 font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-transform flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Submitting...
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
                    </>
                  ) : (
                    <>
                      Submit My Free Audit
                      <svg
                        width="16"
                        height="16"
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
              )}
            </div>

            {/* ── Trust badge ── */}
            <div className="flex items-center justify-center gap-1.5 mt-6 text-[13px] text-concrete-400">
              <svg
                className="w-3.5 h-3.5 text-success"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Free. No credit card. Results in 24 hours.
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
