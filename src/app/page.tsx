import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AITeamMarquee from "@/components/AITeamMarquee";
import ContractorPain from "@/components/ContractorPain";
import MeetTheTeam from "@/components/MeetTheTeam";
import WatchAIWork from "@/components/WatchAIWork";
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
  Redesign — Marblism-inspired flow:
  1. Hero (bold centered headline + yellow CTA)
  2. AI Team Marquee (scrolling character cards)
  3. Pain Points (speech bubbles, contractor struggles)
  4. Meet Your AI Team (yellow bg, character cards)
  5. While You Were Sleeping (horizontal timeline cards)
  6. How It Works
  7. Results + Testimonials
  8. Comparison
  9. Pricing
  10. Audit Form + FAQ
  11. Final CTA (yellow, bold) + Footer
*/

export default function Home() {
  return (
    <>
      <Nav />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Scrolling AI Team Marquee */}
      <AITeamMarquee />

      {/* 3. Pain Points */}
      <ContractorPain />
      <InlineCTA
        text="See where your marketing is leaking money — free."
        buttonText="Get My Free Audit"
      />

      {/* 4. Meet Your AI Team */}
      <MeetTheTeam />

      {/* 4.5 Watch Your AI Team Work — Phone Mockup */}
      <WatchAIWork />

      {/* 5. While You Were Sleeping */}
      <SleepingTimeline />
      <InlineCTA
        text="Want this working for your business overnight?"
        buttonText="Start My Free Audit"
        dark
      />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Results + Testimonials */}
      <Results />
      <InlineCTA
        text="Ready to see these results for your business?"
        buttonText="Get My Free Audit"
      />

      {/* 8. Comparison */}
      <Comparison />

      {/* 9. Pricing */}
      <Pricing />

      {/* 10. Audit Form + FAQ */}
      <AuditForm />
      <FAQ />

      {/* 11. Final CTA + Footer */}
      <FinalCTA />
      <Footer />

      {/* Mobile sticky bar */}
      <MobileStickyBar />
    </>
  );
}
