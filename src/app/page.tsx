import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TradeVerticals from "@/components/TradeVerticals";
import Problems from "@/components/Problems";
import InlineCTA from "@/components/InlineCTA";
import SleepingTimeline from "@/components/SleepingTimeline";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import AuditForm from "@/components/AuditForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

/*
  Section order per James Clear (IA) 9-section reorder:
  1. Hero (with trade strip)
  2. Problem (dark) + inline CTA
  3. While You Were Sleeping + inline CTA
  4. How It Works
  5. Results + Testimonials + inline CTA
  6. Comparison + inline CTA
  7. Pricing
  8. Audit Form + FAQ (merged zone)
  9. Final CTA + Footer
*/

export default function Home() {
  return (
    <>
      <Nav />

      {/* 1. Hero + Trade Strip */}
      <Hero />

      {/* Trade Verticals */}
      <TradeVerticals />

      {/* 2. The Problem */}
      <Problems />
      <InlineCTA
        text="See where your marketing is leaking money — free."
        buttonText="Get My Free Audit"
      />

      {/* 3. While You Were Sleeping */}
      <SleepingTimeline />
      <InlineCTA
        text="Want this working for your business overnight?"
        buttonText="Start My Free Audit"
        dark
      />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Results + Testimonials */}
      <Results />
      <InlineCTA
        text="Ready to see these results for your business?"
        buttonText="Get My Free Audit"
      />

      {/* 6. Comparison */}
      <Comparison />

      {/* 7. Pricing */}
      <Pricing />

      {/* 8. Audit Form + FAQ */}
      <AuditForm />
      <FAQ />

      {/* 9. Final CTA + Footer */}
      <FinalCTA />
      <Footer />

      {/* Mobile sticky bar */}
      <MobileStickyBar />
    </>
  );
}
