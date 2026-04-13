import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import { trades } from "@/components/TradeVerticals";

/* ═══════════════════════════════════════════════
   TRADE DATA — All copy, stats, and content
   keyed by slug
   ═══════════════════════════════════════════════ */

const tradeData: Record<
  string,
  {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    gradientFrom: string;
    gradientTo: string;
    problems: { title: string; description: string }[];
    actions: { title: string; description: string }[];
    stats: {
      value: number;
      prefix?: string;
      suffix?: string;
      decimals?: number;
      label: string;
    }[];
    timeline: { step: string; title: string; description: string }[];
    ctaHeadline: string;
  }
> = {
  plumbing: {
    headline: "The Phone's Not Ringing at 2am. But Your Competitor's Is.",
    subheadline:
      "A homeowner is standing in 3 inches of water, Googling 'emergency plumber near me' from their flooded bathroom. They're calling whoever shows up first. Right now, that's not you.",
    ctaLabel: "Get My Free Plumbing Marketing Audit",
    gradientFrom: "from-primary-50",
    gradientTo: "to-white",
    problems: [
      {
        title: "You're losing 2am calls to a worse plumber",
        description:
          "You're losing emergency calls at 2am to the guy who paid for a Google Ads setup once in 2019 and hasn't touched it since. He's not better than you -- his name just shows up first when a pipe bursts. That's the only difference.",
      },
      {
        title: "You've already been burned by an agency",
        description:
          "Your agency charges $3,200/year and hasn't updated your ad copy since they onboarded you. You've probably already asked them about it. They probably said 'we'll look into it.' That was 6 months ago.",
      },
      {
        title: "The new guy has more reviews than you",
        description:
          "You have 47 reviews at 4.2 stars. The new guy across town -- been in business 18 months -- has 200+ at 4.8. Homeowners don't call the most experienced plumber. They call the most reviewed one. And nobody's helping you close that gap.",
      },
    ],
    actions: [
      {
        title: "Launches emergency ads before the freeze hits",
        description:
          "Your AI marketing manager sees a freeze warning in your zip code and launches emergency plumber campaigns before your competitors even check the weather app",
      },
      {
        title: "Responds to every Google review in 2 hours",
        description:
          "You're under a sink. A customer just left a 4-star review. Your AI team responds thoughtfully while you finish the job -- building trust you don't have time to build",
      },
      {
        title: "Spots water main breaks and spikes your ads",
        description:
          "Water main break reports trending in your area at 11pm? Your AI team cranks up emergency plumber ads before your competitors wake up tomorrow",
      },
      {
        title: "Runs drain cleaning campaigns every fall",
        description:
          "Leaves start falling, gutters start clogging, drains start backing up. Your AI team launches drain cleaning campaigns in September -- not November when it's too late",
      },
      {
        title: "Updates your Google profile every week",
        description:
          "New job photos, fresh posts, updated service descriptions. Your Google Business Profile looks alive, not like it was last touched in 2021",
      },
      {
        title: "Tracks what your competitors are charging",
        description:
          "Knows when the guy down the street drops his drain cleaning price to $89. Adjusts your positioning so you're competing on value, not racing to the bottom",
      },
    ],
    stats: [
      { value: 3.2, suffix: "x", decimals: 1, label: "More emergency calls booked" },
      { value: 42, prefix: "$", label: "Per booked job (vs $86 industry avg)" },
      { value: 4.9, decimals: 1, label: "Avg Google rating achieved" },
      { value: 90, suffix: " days", label: "To #1 in the local map pack" },
    ],
    timeline: [
      {
        step: "01",
        title: "We pull apart your plumbing marketing in 24 hours",
        description:
          "We look at your Google Ads, your reviews, your Google Business Profile, and what every competitor in your zip code is doing. You get a report that shows exactly where booked jobs are slipping through the cracks.",
      },
      {
        step: "02",
        title: "Your AI team builds an emergency-first game plan by day 3",
        description:
          "Emergency service visibility comes first. Then a review generation machine. Then a seasonal campaign calendar built around your area's weather -- because freeze warnings and heavy rain are when your phone should be blowing up.",
      },
      {
        step: "03",
        title: "Campaigns go live by day 7 -- and never stop working",
        description:
          "Your AI team adjusts bids, swaps ad copy, and responds to reviews around the clock. You focus on running your crews. It focuses on keeping the phone ringing.",
      },
    ],
    ctaHeadline: "Ready to be the first plumber homeowners call in your city?",
  },

  hvac: {
    headline: "They Booked the Whole Summer While You Were Still Waiting on Your Agency",
    subheadline:
      "Your competitor's AC tune-up ads went live in March. Yours launched in May -- after the first heat wave already filled their schedule. In HVAC, two months late means a lost season.",
    ctaLabel: "Get My Free HVAC Marketing Audit",
    gradientFrom: "from-secondary-50",
    gradientTo: "to-white",
    problems: [
      {
        title: "You're always a season behind",
        description:
          "Your competitor launched AC tune-up ads in March. You started in May -- after the first heat wave already booked them solid. By the time your ads show up, homeowners have already picked somebody. You're fighting for leftovers.",
      },
      {
        title: "Nobody's selling your maintenance plans",
        description:
          "Maintenance plan renewals are your steadiest, most profitable revenue. But your agency doesn't market them -- they probably don't even know your renewal rate. That recurring revenue is just sitting there, untouched.",
      },
      {
        title: "You're paying 12 months for 5 months of work",
        description:
          "You pay your agency 12 months a year for a business that's slammed 5 months. The other 7 months? They're cashing your check while your trucks sit in the lot. Ask them what campaigns they ran in February. They'll change the subject.",
      },
    ],
    actions: [
      {
        title: "Launches seasonal campaigns weeks before demand hits",
        description:
          "Your AI team watches 10-day forecasts and historical search data. When the first 90-degree day is coming, your AC tune-up ads are already running. Your competitors are still 'planning.'",
      },
      {
        title: "Fills your shoulder seasons with maintenance signups",
        description:
          "October and March are dead months for most HVAC companies. Your AI team runs targeted maintenance plan campaigns to your past customers during those exact windows",
      },
      {
        title: "Keeps the trucks rolling in the slow months",
        description:
          "Indoor air quality assessments, duct cleaning, smart thermostat installs -- your AI team builds off-season campaigns around services that keep revenue coming in year-round",
      },
      {
        title: "Cranks up spend when extreme weather hits",
        description:
          "Heat wave on Thursday? Your AI team noticed Monday and already boosted your emergency AC repair ads. Your competitors will react Friday -- if their agency is even paying attention",
      },
      {
        title: "Gets reviews after every single job",
        description:
          "Every completed job triggers a review request. Every review gets a response within 2 hours. Your review count climbs while you're on the next call",
      },
      {
        title: "Stops paying peak ad rates in dead months",
        description:
          "Your marketing budget shifts monthly based on actual demand in your area. No more spending $4,000/month on ads in December when nobody's searching for AC repair",
      },
    ],
    stats: [
      { value: 2.8, suffix: "x", decimals: 1, label: "More maintenance plan signups" },
      { value: 38, prefix: "$", label: "Per booked job" },
      { value: 47, suffix: "%", label: "More revenue in off-season months" },
      { value: 89, suffix: "%", label: "Of reviews responded to same-day" },
    ],
    timeline: [
      {
        step: "01",
        title: "We tear apart your HVAC marketing in 24 hours",
        description:
          "Seasonal campaign timing, maintenance plan marketing (or lack of it), competitor positioning, review profile -- we look at everything and show you exactly where booked jobs are falling through the cracks.",
      },
      {
        step: "02",
        title: "Your AI team builds a 12-month battle plan by day 3",
        description:
          "A campaign calendar synced to your local weather patterns and seasonal demand curves. AC tune-ups in March. Furnace prep in September. Maintenance plans year-round. Every month has a plan.",
      },
      {
        step: "03",
        title: "Campaigns go live by day 7 -- and never stop working",
        description:
          "Your AI team watches the forecast, adjusts bids in real time, and makes sure your phone rings first when the AC dies on the hottest day of the year. You run the crews. It runs the marketing.",
      },
    ],
    ctaHeadline: "Ready to own every season in your market?",
  },

  electrical: {
    headline: "EV Charger Searches Are Up 340% in Your Zip Code. Your Ads Still Say 'Electrician.'",
    subheadline:
      "Every Tesla owner in your neighborhood needs a Level 2 charger. Every homeowner with a smart thermostat is a $3,000 panel upgrade waiting to happen. Your marketing is stuck in 2018.",
    ctaLabel: "Get My Free Electrical Marketing Audit",
    gradientFrom: "from-[#FFF3EB]",
    gradientTo: "to-white",
    problems: [
      {
        title: "You're sitting out the biggest boom in decades",
        description:
          "EV charger installation searches are up 340% in your zip code. Your Google ads still say 'residential electrician.' Meanwhile, the shop across town is booked 3 weeks out on charger installs alone. That work should be yours.",
      },
      {
        title: "Smart home is a $180B market. You're not in it.",
        description:
          "Smart home automation is a $180B market. Your website doesn't mention it. Every homeowner buying a Nest thermostat, Ring doorbell, or whole-home automation is a potential $3,000+ job walking right past you.",
      },
      {
        title: "You're paying $85 for tire kickers",
        description:
          "You're paying $85/lead for homeowners who want a $50 outlet swap, not the $5,000 panel upgrade you actually want to quote. Your agency sends you every lead like they're all the same. They're not. And you know it.",
      },
    ],
    actions: [
      {
        title: "Targets the jobs you actually want",
        description:
          "Your AI team builds separate campaigns for EV charger installs, 200-amp panel upgrades, and smart home wiring. Tire kickers looking for a $50 outlet swap see someone else's ad",
      },
      {
        title: "Catches trends before your competitors do",
        description:
          "EV registrations spiking in your county? New smart home product launch driving searches? Your AI team spots it and launches targeted campaigns while others are still reading the news",
      },
      {
        title: "Filters out the small jobs automatically",
        description:
          "Your AI pre-qualifies leads before they reach you. When someone calls, they're ready for a real project -- not asking how much to swap a light switch",
      },
      {
        title: "Runs EV charger campaigns to actual EV owners",
        description:
          "Targets Tesla, Rivian, and EV owners in your service area. These homeowners need a charger installed -- they just haven't found you yet because your ad doesn't mention it",
      },
      {
        title: "Positions you as the smart home electrician",
        description:
          "Google Business Profile posts, website content, and ads that make it clear: you're not just an electrician, you're the guy who wires smart homes. That distinction is worth $50,000+ a year in premium jobs",
      },
      {
        title: "Finds new commercial jobs from permit filings",
        description:
          "Your AI team monitors building permits and commercial renovation filings in your area, then targets the decision-makers before they've even started calling for bids",
      },
    ],
    stats: [
      { value: 340, suffix: "%", label: "More EV charger installation leads" },
      { value: 51, prefix: "$", label: "Per booked job (vs $94 industry avg)" },
      { value: 3.4, suffix: "x", decimals: 1, label: "More panel upgrade inquiries" },
      { value: 127, suffix: "/yr", label: "New reviews in first year" },
    ],
    timeline: [
      {
        step: "01",
        title: "We pull apart your electrical marketing in 24 hours",
        description:
          "What jobs are you getting leads for vs. what jobs you actually want? We analyze your service mix, lead quality, competitor positioning on EV and smart home, and where every ad dollar is really going.",
      },
      {
        step: "02",
        title: "Your AI team builds a high-value job strategy by day 3",
        description:
          "Separate campaign funnels for EV chargers, panel upgrades, and smart home installs. Each one targets the right homeowner at the right moment -- not just 'electrician near me' and hope for the best.",
      },
      {
        step: "03",
        title: "Campaigns go live by day 7 -- and never stop working",
        description:
          "Your AI team tracks emerging trends, filters out the low-value calls, and keeps your schedule full of the $3,000-$10,000 jobs that actually grow your business. You do the work. It finds the work.",
      },
    ],
    ctaHeadline: "Ready to book the jobs that actually move the needle?",
  },

  roofing: {
    headline: "Hail Hits Tuesday. Your Competitor Books 40 Jobs by Friday. You Book Zero.",
    subheadline:
      "In roofing, the first company that shows up in search after a storm books 80% of the jobs. Your agency said they'd get your ads up 'next week.' By then, every homeowner in the hail zone already called someone else.",
    ctaLabel: "Get My Free Roofing Marketing Audit",
    gradientFrom: "from-concrete-50",
    gradientTo: "to-white",
    problems: [
      {
        title: "Your storm response is measured in weeks",
        description:
          "Storm hits Tuesday. Your competitor's ads go live Wednesday morning. Your agency says they'll 'get to it next week.' By then, every storm chaser in 200 miles has already knocked on doors. You missed the window on the most profitable week of your year.",
      },
      {
        title: "You're ranking for 'cheap roof repair'",
        description:
          "Insurance restoration is your highest-margin work -- $15,000+ jobs where the insurance company writes the check. But your SEO campaign targets 'cheap roof repair.' Your agency doesn't understand that one insurance restoration job is worth 10 patch jobs.",
      },
      {
        title: "You're paying for leads 40 miles away",
        description:
          "You're getting calls from homeowners 40 miles away because nobody set up your geo-targeting properly. You're paying $67 per click for people you'll never send a crew to. That's money lighting on fire every single day.",
      },
    ],
    actions: [
      {
        title: "Storm damage ads live within 12 hours",
        description:
          "Your AI team monitors NOAA weather alerts for your area. When hail, high wind, or severe storms roll through, storm damage campaigns launch within 12 hours -- not 12 days",
      },
      {
        title: "Targets insurance restoration, not bargain hunters",
        description:
          "Dedicated campaigns for insurance restoration work. When a homeowner searches 'roof damage from hail,' they find you -- not when they search 'cheapest roof patch near me'",
      },
      {
        title: "Your ads only show in zip codes you serve",
        description:
          "Precision geo-targeting down to specific zip codes, with bid adjustments based on actual storm damage reports. No more paying for clicks from three counties over",
      },
      {
        title: "Books inspections before storm season starts",
        description:
          "Your AI team launches roof inspection campaigns before storm season so you've already built relationships with homeowners. When hail hits, you're the first call -- not a cold knock",
      },
      {
        title: "Turns your best jobs into your best marketing",
        description:
          "Before/after photos from your biggest jobs get posted to your Google Business Profile and run as ad creative. Homeowners see real work, not stock photos",
      },
      {
        title: "Watches your competitors after every storm",
        description:
          "Knows exactly when competitors launch storm ads, what they're bidding, and where they're targeting. Your campaigns adjust in real time to stay visible when it matters most",
      },
    ],
    stats: [
      { value: 12, suffix: "hr", label: "Storm response (vs 2 week industry avg)" },
      { value: 67, prefix: "$", label: "Per booked job" },
      { value: 2.1, suffix: "x", decimals: 1, label: "More insurance restoration jobs" },
      { value: 3, suffix: " zip codes", label: "Ranked #1 for storm damage" },
    ],
    timeline: [
      {
        step: "01",
        title: "We tear apart your roofing marketing in 24 hours",
        description:
          "Geo-targeting accuracy, storm response speed, insurance vs. repair campaign split, and what every competitor in your area is doing. We find every gap that's costing you booked jobs -- especially the storm work you should be getting.",
      },
      {
        step: "02",
        title: "Your AI team builds a storm-ready game plan by day 3",
        description:
          "Weather-triggered campaign automations, insurance restoration funnels, and geo-targeting dialed down to the zip codes where your crews actually work. Your marketing is battle-ready before the next storm even forms.",
      },
      {
        step: "03",
        title: "Campaigns go live by day 7 -- and never stop working",
        description:
          "Your AI team watches the weather 24/7, launches campaigns within hours of a storm, and keeps your phone ringing when homeowners look up and see damage. You run the crews. It fills the schedule.",
      },
    ],
    ctaHeadline: "Ready to be the first roofer homeowners call after the storm?",
  },

  landscaping: {
    headline: "Spring Cleanup Searches Start in February. Your Agency Wakes Up in April.",
    subheadline:
      "By the time your agency launches your spring campaign, every homeowner in your area has already booked someone else. In landscaping, showing up two months late means a lost season and an empty schedule.",
    ctaLabel: "Get My Free Landscaping Marketing Audit",
    gradientFrom: "from-[#EDFAF2]",
    gradientTo: "to-white",
    problems: [
      {
        title: "You miss the booking window every single year",
        description:
          "Spring cleanup searches start in February. Your agency launches your campaign in April -- after everyone's already booked their crews. You're left competing for the scraps, dropping prices to fill the schedule. And your agency still charges you for March.",
      },
      {
        title: "Your profile screams '$200 mow job'",
        description:
          "You do $50,000 outdoor living projects -- custom patios, retaining walls, full landscape redesigns. But your Google Business Profile shows photos of mowed lawns. You're attracting the $200 mow-and-go crowd instead of the homeowner who wants a $50K backyard transformation.",
      },
      {
        title: "Your best services are buried on your website",
        description:
          "Irrigation, landscape lighting, and hardscaping are your highest-margin services. But they're buried on page 3 of your website where nobody will ever find them. Homeowners don't even know you do that work. They're calling the guy who put it on his homepage.",
      },
    ],
    actions: [
      {
        title: "Launches spring campaigns while it's still snowing",
        description:
          "Your AI team launches spring cleanup ads in February, summer project campaigns in April, and fall services in August. By the time your competitors' agencies 'get around to it,' your schedule is already full",
      },
      {
        title: "Promotes the jobs that actually make your year",
        description:
          "Dedicated campaigns for hardscaping, outdoor living spaces, irrigation installs, and landscape lighting. Not $40/week mowing contracts -- the $15,000-$50,000 projects that make your year",
      },
      {
        title: "Makes your Google profile look like a portfolio",
        description:
          "Weekly updates to your Google Business Profile with your best project photos, seasonal posts, and service highlights. When a homeowner checks you out, they see a design-build pro, not a lawn care company",
      },
      {
        title: "Finds homeowners planning big backyard projects",
        description:
          "Targets homeowners searching for outdoor kitchens, fire pits, retaining walls, and custom patios. These are the people writing $30,000 checks -- and your AI team puts you in front of them first",
      },
      {
        title: "Sells more services to your existing customers",
        description:
          "Your AI team runs automated campaigns to your customer list for irrigation winterization, holiday lighting install, spring aeration. They already trust you. Now they're buying more from you",
      },
      {
        title: "Positions you as a designer, not just a mower",
        description:
          "Content, ads, and profile optimization that makes one thing clear: you're the premier landscape designer in your area, not another crew with a truck and a mower. That positioning alone is worth $100K+ in premium jobs per year",
      },
    ],
    stats: [
      { value: 3.1, suffix: "x", decimals: 1, label: "More spring jobs booked" },
      { value: 34, prefix: "$", label: "Per booked job" },
      { value: 68, suffix: "%", label: "More hardscape project inquiries" },
      { value: 4.9, decimals: 1, label: "Avg Google rating achieved" },
    ],
    timeline: [
      {
        step: "01",
        title: "We pull apart your landscaping marketing in 24 hours",
        description:
          "Seasonal timing gaps, which services homeowners can actually find, how your Google profile stacks up, and what every competitor in your area is doing. We show you exactly where booked jobs are leaking out.",
      },
      {
        step: "02",
        title: "Your AI team builds a four-season game plan by day 3",
        description:
          "A 12-month campaign calendar with pre-season launches for every service line. Hardscaping and outdoor living get their own dedicated funnels to attract the homeowners who spend real money.",
      },
      {
        step: "03",
        title: "Campaigns go live by day 7 -- and never stop working",
        description:
          "Your AI team shifts budgets with the seasons, promotes the right services at the right time, and makes sure your best work is what homeowners see first. You build the projects. It fills the pipeline.",
      },
    ],
    ctaHeadline: "Ready to fill your schedule before spring even starts?",
  },
};

/* ═══════════════════════════════════════════════
   STATIC GENERATION
   ═══════════════════════════════════════════════ */

export function generateStaticParams() {
  return trades.map((trade) => ({ slug: trade.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);

  if (!trade) {
    return { title: "Trade Not Found | homeAI" };
  }

  const data = tradeData[slug];

  return {
    title: `${trade.name} Marketing | AI-Powered Campaigns | homeAI`,
    description:
      data?.subheadline ??
      `homeAI builds and runs AI-powered marketing campaigns for ${trade.name.toLowerCase()} contractors. More leads, lower costs, zero guesswork.`,
    openGraph: {
      title: `${trade.name} Marketing | homeAI`,
      description: `AI-powered marketing for ${trade.name.toLowerCase()} contractors. ${data?.stats[0]?.label ?? "Better results, lower costs."}`,
    },
  };
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default async function TradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trade = trades.find((t) => t.slug === slug);
  const data = tradeData[slug];

  if (!trade || !data) {
    notFound();
  }

  const otherTrades = trades.filter((t) => t.slug !== slug);

  return (
    <>
      <Nav />

      {/* ─── Section 1: Trade Hero ─── */}
      <section
        className={`bg-gradient-to-b ${data.gradientFrom} ${data.gradientTo} pt-[120px] pb-16 md:pb-20`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="flex items-center gap-2 text-sm text-concrete-400 mb-8">
              <Link
                href="/"
                className="hover:text-concrete-700 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/#trades"
                className="hover:text-concrete-700 transition-colors"
              >
                Trades
              </Link>
              <span>/</span>
              <span className="text-concrete-700 font-medium">
                {trade.name}
              </span>
            </nav>
          </FadeIn>

          <div className="max-w-[800px]">
            <FadeIn delay={0.05}>
              <div
                className={`inline-flex items-center gap-3 ${trade.bg} ${trade.color} rounded-full px-4 py-2 mb-6`}
              >
                {trade.icon}
                <span className="text-sm font-semibold">{trade.name}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-[52px] md:leading-[1.1] font-extrabold tracking-tight text-concrete-900 mb-5">
                {data.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-concrete-600 leading-relaxed mb-8 max-w-[640px]">
                {data.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href="/audit"
                className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-[17px] px-7 py-4 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.3)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.4)]"
              >
                {data.ctaLabel}
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
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Section 2: The Problem ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-accent-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-accent-500 rounded" />
                Sound Familiar?
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                The {trade.name} Marketing Problem
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                You&apos;re great at the work. You&apos;ve probably been doing it for years.
                But your marketing? Somebody&apos;s been cashing your check and phoning it in.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.problems.map((problem, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="group bg-concrete-50 border-2 border-concrete-100 rounded-xl p-7 h-full hover:border-accent-400 hover:shadow-lg transition-all">
                  {/* Problem number */}
                  <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 font-heading font-bold text-sm flex items-center justify-center mb-5">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-concrete-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-concrete-600 leading-relaxed text-[15px]">
                    {problem.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: What Your AI Team Does ─── */}
      <section className="bg-concrete-50 py-16 md:py-24 border-y border-concrete-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                Your AI Marketing Team
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                What Your AI {trade.name} Team Does
              </h2>
              <p className="text-lg text-concrete-600 max-w-[560px] mx-auto">
                Think of it like having a tireless marketing manager who knows
                {trade.name.toLowerCase()} inside and out. Here&apos;s what they do every week -- automatically.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.actions.map((action, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div className="bg-white rounded-xl border border-concrete-100 p-6 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* Checkmark */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-[15px] font-bold text-concrete-900 mb-1.5">
                        {action.title}
                      </h3>
                      <p className="text-sm text-concrete-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Results Preview ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-success text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-success rounded" />
                Projected Results
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-concrete-900 mb-3">
                Real Numbers From Real {trade.name} Contractors
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {data.stats.map((stat, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-concrete-50 rounded-xl border border-concrete-100 p-6 text-center hover:border-primary-300 transition-colors">
                  <div className="font-heading text-3xl md:text-[42px] font-extrabold text-primary-700 mb-2">
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                      duration={2}
                    />
                  </div>
                  <p className="text-sm text-concrete-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: How It Works Timeline ─── */}
      <section className="bg-primary-900 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="text-primary-300 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-300 rounded" />
                Getting Started
              </div>
              <h2 className="font-heading text-3xl md:text-[40px] font-bold tracking-tight text-white mb-3">
                Live in 7 Days. Optimizing Forever.
              </h2>
              <p className="text-lg text-primary-300 max-w-[500px] mx-auto">
                From first audit to live campaigns in one week. No 90-minute
                onboarding calls. No &ldquo;strategy decks.&rdquo; Just results.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-0">
            {data.timeline.map((item, i) => (
              <FadeIn key={i} delay={0.15 * i}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-500 text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    {i < data.timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-white/10 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-10 ${i === data.timeline.length - 1 ? "pb-0" : ""}`}>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-300 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: CTA ─── */}
      <section className="bg-concrete-900 py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[44px] md:leading-[1.15] font-extrabold tracking-tight text-white mb-5">
              {data.ctaHeadline}
            </h2>
            <p className="text-lg text-white/50 mb-8 max-w-[500px] mx-auto">
              Get a free marketing audit. We&apos;ll show you exactly where booked
              jobs are leaking out -- and what your AI team would do about it.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold text-lg px-8 py-4.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.35)] hover:shadow-[0_4px_20px_rgba(232,86,15,0.5)]"
            >
              {data.ctaLabel}
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
            </a>
            <div className="flex items-center justify-center gap-1.5 mt-5 text-sm text-white/30">
              <svg
                className="w-4 h-4 text-success"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Free. No credit card. Results in 24 hours.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 7: Other Trades ─── */}
      <section className="bg-white py-16 md:py-20 border-t border-concrete-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-concrete-900 mb-2">
                Explore Other Trades
              </h2>
              <p className="text-concrete-600">
                homeAI builds trade-specific marketing for every home service
                vertical.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherTrades.map((t, i) => (
              <FadeIn key={t.slug} delay={0.08 * i}>
                <Link
                  href={`/trades/${t.slug}`}
                  className={`group block rounded-xl border-2 border-concrete-100 ${t.borderHover} transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden bg-white`}
                >
                  <div
                    className={`${t.bg} h-[80px] flex items-center justify-center transition-colors`}
                  >
                    <div
                      className={`${t.color} transition-transform group-hover:scale-110`}
                    >
                      {t.icon}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base font-bold mb-0.5 group-hover:text-primary-500 transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-concrete-400">{t.tagline}</p>
                    <span className="text-xs font-medium text-primary-500 flex items-center gap-1 group-hover:gap-2 transition-all mt-2">
                      Learn more
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
