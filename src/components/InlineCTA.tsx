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
          dark ? "bg-primary-900" : "bg-primary-50"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p
            className={`text-lg font-medium ${
              dark ? "text-primary-100" : "text-primary-700"
            }`}
          >
            {text}
          </p>
          <a
            href={href}
            className="bg-accent-500 text-white font-medium px-7 py-3.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_8px_rgba(232,86,15,0.25)] whitespace-nowrap shrink-0"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
