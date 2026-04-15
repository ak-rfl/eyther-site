"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="font-heading text-2xl font-bold text-concrete-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-concrete-600 mb-6">
          We hit an unexpected error. Try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="bg-cta text-concrete-900 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
