"use client";

const teamMembers = [
  {
    emoji: "📊",
    role: "Ad Strategist",
    description: "Runs your Google & Facebook ads 24/7",
    bg: "#2185B5",
  },
  {
    emoji: "⭐",
    role: "Review Manager",
    description: "Gets you 5-star reviews on autopilot",
    bg: "#1B9E5C",
  },
  {
    emoji: "📝",
    role: "Content Writer",
    description: "Writes blogs that rank on Google",
    bg: "#E8560F",
  },
  {
    emoji: "📱",
    role: "Social Media Pro",
    description: "Posts daily to your channels",
    bg: "#7C3AED",
  },
  {
    emoji: "🔍",
    role: "SEO Specialist",
    description: "Puts you at the top of local search",
    bg: "#0D9488",
  },
  {
    emoji: "📞",
    role: "Lead Qualifier",
    description: "Filters tire-kickers from real jobs",
    bg: "#D93B3B",
  },
  {
    emoji: "📈",
    role: "Analytics Brain",
    description: "Tracks every dollar, every lead",
    bg: "#4F46E5",
  },
  {
    emoji: "🎯",
    role: "Campaign Manager",
    description: "Launches seasonal promos automatically",
    bg: "#D4901A",
  },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const direction = reverse ? "marquee-reverse" : "marquee";

  return (
    <div className="flex gap-4 overflow-hidden">
      <div
        className={`flex gap-4 shrink-0 animate-[${direction}_30s_linear_infinite]`}
        style={{
          animation: `${direction} 30s linear infinite`,
        }}
      >
        {[...teamMembers, ...teamMembers].map((member, i) => (
          <div
            key={`${member.role}-${i}`}
            className="flex-shrink-0 w-[200px] rounded-xl p-5 shadow-md"
            style={{ backgroundColor: member.bg }}
          >
            <div className="text-4xl mb-3">{member.emoji}</div>
            <div className="text-white font-bold text-lg leading-tight mb-1">
              {member.role}
            </div>
            <div className="text-white text-sm opacity-90 leading-snug">
              {member.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AITeamMarquee() {
  return (
    <section className="w-full overflow-hidden py-16 relative">
      {/* CSS keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Gradient fade overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Row 1: scrolls left */}
      <div className="mb-4">
        <MarqueeRow />
      </div>

      {/* Row 2: scrolls right */}
      <MarqueeRow reverse />
    </section>
  );
}
