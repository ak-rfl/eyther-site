import FadeIn from "./FadeIn";

interface InlineCTAProps {
  text?: string;
  buttonText?: string;
  href?: string;
  dark?: boolean;
}

export default function InlineCTA({
  text = "See what your AI marketing team would do for your business.",
  buttonText = "Get My Free Audit",
  href = "/audit",
  dark = false,
}: InlineCTAProps) {
  return (
    <FadeIn>
      <div
        className={`py-12 ${
          dark ? "bg-concrete-50" : "bg-cta/10"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            className={`text-lg font-medium ${
              dark ? "text-concrete-700" : "text-primary-700"
            }`}
          >
            {text}
          </p>
          <a
            href={href}
            className="font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-all whitespace-nowrap shrink-0 bg-cta text-concrete-900"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
