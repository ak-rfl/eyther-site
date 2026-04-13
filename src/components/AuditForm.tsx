"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

interface FormErrors {
  businessName?: string;
  zip?: string;
  email?: string;
  phone?: string;
}

export default function AuditForm() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validateStep1(): boolean {
    const newErrors: FormErrors = {};
    if (!businessName.trim()) {
      newErrors.businessName = "Business name is required.";
    }
    if (!zip.trim()) {
      newErrors.zip = "ZIP code is required.";
    } else if (!/^\d{5}$/.test(zip.trim())) {
      newErrors.zip = "Enter a valid 5-digit ZIP code.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateStep2(): boolean {
    const newErrors: FormErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    // Phone is optional, no validation required
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNextStep() {
    if (validateStep1()) {
      setErrors({});
      setStep(2);
    }
  }

  async function handleSubmit() {
    if (!validateStep2()) return;

    setIsSubmitting(true);
    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Audit form submitted:", {
        businessName: businessName.trim(),
        zip: zip.trim(),
        email: email.trim(),
        phone: phone.trim(),
      });
      setIsSuccess(true);
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="bg-gradient-to-br from-secondary-50 to-primary-50 py-20 md:py-24"
      id="audit"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-primary-500 rounded" />
              Free Marketing Audit
            </div>
            <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight mb-3">
              See What Your AI Marketing Team Would Do — Free
            </h2>
            <p className="text-lg text-concrete-600 max-w-[560px] mx-auto mb-12">
              Get a personalized strategy report — how your AI team would
              position your business, where your competitors are vulnerable, and
              what campaigns it would launch first.
            </p>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-concrete-100 max-w-[560px] mx-auto">
              {isSuccess ? (
                <div className="py-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-concrete-900 mb-2">
                    Thanks! We&apos;ll send your audit within 24 hours.
                  </h3>
                  <p className="text-concrete-600 text-sm">
                    Check your inbox at <strong>{email}</strong> for your personalized marketing strategy report.
                  </p>
                </div>
              ) : (
                <>
                  {/* Step indicator */}
                  <div className="flex items-center justify-center gap-2 mb-6" aria-label={`Step ${step} of 2`}>
                    <div
                      className={`h-2 rounded-full transition-all ${
                        step === 1
                          ? "w-6 bg-primary-500"
                          : "w-2 bg-concrete-200"
                      }`}
                    />
                    <div
                      className={`h-2 rounded-full transition-all ${
                        step === 2
                          ? "w-6 bg-primary-500"
                          : "w-2 bg-concrete-200"
                      }`}
                    />
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="audit-business-name" className="block text-sm font-medium text-concrete-700 mb-1.5">
                          Business Name
                        </label>
                        <input
                          id="audit-business-name"
                          type="text"
                          placeholder="e.g. Tony's Plumbing Co."
                          value={businessName}
                          onChange={(e) => {
                            setBusinessName(e.target.value);
                            if (errors.businessName) setErrors((prev) => ({ ...prev, businessName: undefined }));
                          }}
                          aria-invalid={!!errors.businessName}
                          aria-describedby={errors.businessName ? "error-business-name" : undefined}
                          className={`w-full h-[52px] border-2 rounded-[10px] px-4 text-base text-concrete-900 placeholder:text-concrete-400 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(33,133,181,0.12)] transition-all ${
                            errors.businessName ? "border-error" : "border-concrete-200"
                          }`}
                        />
                        {errors.businessName && (
                          <p id="error-business-name" className="text-error text-sm mt-1 text-left" role="alert">
                            {errors.businessName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="audit-zip" className="block text-sm font-medium text-concrete-700 mb-1.5">
                          ZIP Code
                        </label>
                        <input
                          id="audit-zip"
                          type="text"
                          placeholder="e.g. 85001"
                          maxLength={5}
                          value={zip}
                          onChange={(e) => {
                            setZip(e.target.value);
                            if (errors.zip) setErrors((prev) => ({ ...prev, zip: undefined }));
                          }}
                          aria-invalid={!!errors.zip}
                          aria-describedby={errors.zip ? "error-zip" : undefined}
                          className={`w-full h-[52px] border-2 rounded-[10px] px-4 text-base text-concrete-900 placeholder:text-concrete-400 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(33,133,181,0.12)] transition-all ${
                            errors.zip ? "border-error" : "border-concrete-200"
                          }`}
                        />
                        {errors.zip && (
                          <p id="error-zip" className="text-error text-sm mt-1 text-left" role="alert">
                            {errors.zip}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={handleNextStep}
                        className="w-full bg-accent-500 text-white font-medium text-[17px] py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_8px_rgba(232,86,15,0.25)] flex items-center justify-center gap-2 mt-2"
                      >
                        Next Step
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="audit-email" className="block text-sm font-medium text-concrete-700 mb-1.5">
                          Email
                        </label>
                        <input
                          id="audit-email"
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "error-email" : undefined}
                          className={`w-full h-[52px] border-2 rounded-[10px] px-4 text-base text-concrete-900 placeholder:text-concrete-400 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(33,133,181,0.12)] transition-all ${
                            errors.email ? "border-error" : "border-concrete-200"
                          }`}
                        />
                        {errors.email && (
                          <p id="error-email" className="text-error text-sm mt-1 text-left" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="audit-phone" className="block text-sm font-medium text-concrete-700 mb-1.5">
                          Phone{" "}
                          <span className="text-concrete-400 font-normal">
                            (optional — we&apos;ll text, not call)
                          </span>
                        </label>
                        <input
                          id="audit-phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-[52px] border-2 border-concrete-200 rounded-[10px] px-4 text-base text-concrete-900 placeholder:text-concrete-400 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(33,133,181,0.12)] transition-all"
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-accent-500 text-white font-medium text-[17px] py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_8px_rgba(232,86,15,0.25)] flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            Submitting...
                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Get My Free Audit
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setErrors({});
                          setStep(1);
                        }}
                        className="w-full border-2 border-primary-500 text-primary-500 font-medium py-3 rounded-[10px] hover:bg-primary-50 transition-colors text-sm"
                      >
                        Back
                      </button>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center justify-center gap-1.5 mt-4 text-[13px] text-concrete-400">
                <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Free. No credit card. Results in 24 hours.
              </div>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 justify-center mt-10">
              {[
                "Custom marketing strategy",
                "Competitor gap analysis",
                "Campaign recommendations",
                "AI-readiness assessment",
              ].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 text-sm text-concrete-600 font-medium"
                >
                  <span className="text-success text-lg">&#10003;</span> {b}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
