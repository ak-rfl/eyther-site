import FadeIn from "./FadeIn";

function AlexAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#FFDBB4" />
      {/* Hair - short, neat */}
      <path d="M20 38C20 26 28 20 40 20C52 20 60 26 60 38C60 34 56 28 40 28C24 28 20 34 20 38Z" fill="#3B2314" />
      <path d="M22 38C22 36 24 30 40 30C56 30 58 36 58 38C58 34 54 26 40 26C26 26 22 34 22 38Z" fill="#4A2E1B" />
      {/* Glasses */}
      <rect x="26" y="38" width="12" height="10" rx="3" stroke="white" strokeWidth="2" fill="none" />
      <rect x="42" y="38" width="12" height="10" rx="3" stroke="white" strokeWidth="2" fill="none" />
      <line x1="38" y1="43" x2="42" y2="43" stroke="white" strokeWidth="2" />
      {/* Eyes behind glasses */}
      <circle cx="32" cy="43" r="2" fill="#2C1810" />
      <circle cx="48" cy="43" r="2" fill="#2C1810" />
      <circle cx="33" cy="42" r="0.8" fill="white" />
      <circle cx="49" cy="42" r="0.8" fill="white" />
      {/* Confident smile */}
      <path d="M34 52C36 55 44 55 46 52" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyebrows - confident */}
      <line x1="27" y1="36" x2="37" y2="35" stroke="#3B2314" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="43" y1="35" x2="53" y2="36" stroke="#3B2314" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MayaAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#E8B88A" />
      {/* Hair - pulled back with volume */}
      <path d="M20 40C20 26 28 18 40 18C52 18 60 26 60 40C60 32 54 24 40 24C26 24 20 32 20 40Z" fill="#1A1A2E" />
      <ellipse cx="40" cy="20" rx="14" ry="6" fill="#1A1A2E" />
      {/* Headset */}
      <path d="M18 40C18 30 28 22 40 22C52 22 62 30 62 40" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="14" y="38" width="6" height="10" rx="3" fill="white" opacity="0.9" />
      <rect x="60" y="38" width="6" height="10" rx="3" fill="white" opacity="0.9" />
      {/* Headset mic */}
      <path d="M14 46C10 46 8 50 12 52L18 54" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="18" cy="54" r="2" fill="white" opacity="0.9" />
      {/* Eyes - friendly */}
      <ellipse cx="33" cy="42" rx="2.5" ry="2.5" fill="#2C1810" />
      <ellipse cx="47" cy="42" rx="2.5" ry="2.5" fill="#2C1810" />
      <circle cx="34" cy="41" r="1" fill="white" />
      <circle cx="48" cy="41" r="1" fill="white" />
      {/* Big friendly smile */}
      <path d="M32 50C34 55 46 55 48 50" stroke="#B8845A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M34 52C36 54 44 54 46 52" fill="#C4956A" opacity="0.5" />
      {/* Rosy cheeks */}
      <circle cx="27" cy="48" r="3" fill="#E8A0A0" opacity="0.4" />
      <circle cx="53" cy="48" r="3" fill="#E8A0A0" opacity="0.4" />
    </svg>
  );
}

function SamAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#FFDBB4" />
      {/* Messy creative hair */}
      <path d="M18 36C18 24 26 16 40 16C54 16 62 24 62 36" fill="#D4782F" />
      <path d="M22 34C24 22 30 18 40 18C50 18 56 22 58 34" fill="#E88A3C" />
      {/* Messy strands sticking up */}
      <path d="M30 18C28 12 32 10 34 14" stroke="#D4782F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M44 16C44 10 48 9 48 14" stroke="#D4782F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M38 16C36 8 40 8 40 14" stroke="#E88A3C" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M52 20C54 14 56 16 54 20" stroke="#D4782F" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Eyes - slightly dreamy/creative */}
      <circle cx="33" cy="42" r="2.5" fill="#2C1810" />
      <circle cx="47" cy="42" r="2.5" fill="#2C1810" />
      <circle cx="34" cy="41" r="1" fill="white" />
      <circle cx="48" cy="41" r="1" fill="white" />
      {/* Slightly quirky smile */}
      <path d="M33 52C36 54 40 55 47 52" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Pencil behind ear */}
      <line x1="58" y1="30" x2="64" y2="20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
      <polygon points="64,20 65,17 63,17" fill="#FFD700" />
      <rect x="57" y="29" width="2" height="3" rx="0.5" fill="#FF6B8A" />
    </svg>
  );
}

function NoorAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#E8B88A" />
      {/* Hair - neat side part */}
      <path d="M20 38C20 26 28 18 40 18C52 18 60 26 60 38C60 30 52 24 40 24C28 24 20 30 20 38Z" fill="#1A1A1A" />
      <path d="M22 36C24 26 32 22 44 22C52 22 58 28 58 36" fill="#2D2D2D" />
      <path d="M22 36C22 32 26 24 40 22" stroke="#1A1A1A" strokeWidth="3" fill="none" />
      {/* Eyes - sharp, analytical */}
      <ellipse cx="33" cy="42" rx="2" ry="2.5" fill="#2C1810" />
      <ellipse cx="47" cy="42" rx="2" ry="2.5" fill="#2C1810" />
      <circle cx="34" cy="41" r="0.8" fill="white" />
      <circle cx="48" cy="41" r="0.8" fill="white" />
      {/* Slight focused smile */}
      <path d="M35 52C37 54 43 54 45 52" stroke="#B8845A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Magnifying glass */}
      <circle cx="62" cy="56" r="7" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="62" cy="56" r="5" fill="white" opacity="0.15" />
      <line x1="67" y1="61" x2="72" y2="66" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Eyebrows - focused */}
      <line x1="28" y1="37" x2="36" y2="36" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="36" x2="52" y2="37" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function JordanAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#C68B59" />
      {/* Trendy hair - swept, volumized */}
      <path d="M18 38C18 24 26 14 40 14C54 14 62 24 62 38" fill="#2D1B11" />
      <path d="M20 36C22 22 30 16 42 16C54 16 60 22 60 36" fill="#3B2518" />
      {/* Undercut style - shaved sides */}
      <path d="M20 38C20 36 22 34 24 34" stroke="#1A0E08" strokeWidth="1" fill="none" />
      <path d="M60 38C60 36 58 34 56 34" stroke="#1A0E08" strokeWidth="1" fill="none" />
      {/* Top swept hair */}
      <path d="M26 30C30 16 38 14 48 16C56 18 58 26 56 32" fill="#3B2518" />
      <path d="M28 28C32 18 42 16 50 20" stroke="#4A3020" strokeWidth="2" fill="none" />
      {/* Cool eyes - slightly narrowed */}
      <ellipse cx="33" cy="43" rx="2.5" ry="2" fill="#2C1810" />
      <ellipse cx="47" cy="43" rx="2.5" ry="2" fill="#2C1810" />
      <circle cx="34" cy="42.5" r="0.8" fill="white" />
      <circle cx="48" cy="42.5" r="0.8" fill="white" />
      {/* Cool smirk */}
      <path d="M35 52C38 54 44 53 47 51" stroke="#9E6E3A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyebrows - cool, slightly raised */}
      <path d="M28 38C30 36 34 36 37 37" stroke="#2D1B11" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M43 37C46 36 50 36 52 38" stroke="#2D1B11" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CaseyAvatar({ bg }: { bg: string }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="40" fill={bg} />
      <circle cx="40" cy="40" r="36" fill="white" opacity="0.15" />
      {/* Head */}
      <circle cx="40" cy="42" r="20" fill="#FFDBB4" />
      {/* Hair - professional, clean cut */}
      <path d="M20 38C20 26 28 20 40 20C52 20 60 26 60 38C60 32 54 26 40 26C26 26 20 32 20 38Z" fill="#5C3A1E" />
      <path d="M24 36C26 28 32 24 40 24C48 24 54 28 56 36" fill="#6B4423" />
      {/* Headset - professional style */}
      <path d="M16 42C16 30 26 20 40 20C54 20 64 30 64 42" stroke="white" strokeWidth="2" fill="none" />
      <rect x="12" y="40" width="5" height="8" rx="2.5" fill="white" opacity="0.9" />
      <rect x="63" y="40" width="5" height="8" rx="2.5" fill="white" opacity="0.9" />
      {/* Mic boom */}
      <path d="M12 46C8 48 8 52 12 52L20 50" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="50" r="1.5" fill="white" />
      {/* Eyes - professional, alert */}
      <circle cx="33" cy="42" r="2.5" fill="#2C1810" />
      <circle cx="47" cy="42" r="2.5" fill="#2C1810" />
      <circle cx="34" cy="41" r="1" fill="white" />
      <circle cx="48" cy="41" r="1" fill="white" />
      {/* Professional smile */}
      <path d="M34 52C37 54 43 54 46 52" stroke="#C4956A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Eyebrows - attentive */}
      <line x1="28" y1="37" x2="37" y2="36" stroke="#5C3A1E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="43" y1="36" x2="52" y2="37" stroke="#5C3A1E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const avatarComponents: Record<string, React.FC<{ bg: string }>> = {
  Alex: AlexAvatar,
  Maya: MayaAvatar,
  Sam: SamAvatar,
  Noor: NoorAvatar,
  Jordan: JordanAvatar,
  Casey: CaseyAvatar,
};

const team = [
  {
    name: "Alex",
    role: "Ad Strategist",
    bg: "#2185B5",
    quote:
      "I run your Google & Facebook ads 24/7. When your competitor's agency sleeps, I'm optimizing your bids for tomorrow's emergency calls.",
  },
  {
    name: "Maya",
    role: "Review Manager",
    bg: "#1B9E5C",
    quote:
      "I ask every happy customer for a review — at exactly the right moment. Your competitor has 200 reviews? Give me 90 days.",
  },
  {
    name: "Sam",
    role: "Content Writer",
    bg: "#E8560F",
    quote:
      "I write blog posts that rank on Google. Not generic AI slop — real content about YOUR services in YOUR market.",
  },
  {
    name: "Noor",
    role: "SEO Specialist",
    bg: "#7C3AED",
    quote:
      "I put you at the top of 'plumber near me' in your zip code. Every. Single. Day.",
  },
  {
    name: "Jordan",
    role: "Social Media Pro",
    bg: "#D93B3B",
    quote:
      "I post your best work to Instagram, Facebook, and Google — with captions that actually sound like you, not a robot.",
  },
  {
    name: "Casey",
    role: "Lead Qualifier",
    bg: "#0D9488",
    quote:
      "I filter out tire-kickers and spam so you only call back real customers with real jobs.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-cta py-20 md:py-28" id="ai-team">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold tracking-tight text-concrete-900 leading-tight mb-4">
              Stop Overpaying. Meet Your AI Team.
            </h2>
            <p className="text-lg text-concrete-700">
              AI specialists that run your marketing — ads, SEO, reviews,
              content &amp; more
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => {
            const AvatarComponent = avatarComponents[member.name];
            if (!AvatarComponent) return null;
            return (
              <FadeIn key={member.role} delay={0.08 * i}>
                <div
                  className="rounded-xl p-6 min-h-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: member.bg }}
                >
                  <div className="flex justify-center mb-4">
                    <AvatarComponent bg={member.bg} />
                  </div>
                  <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1">
                    {member.name}
                  </p>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {member.role}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
