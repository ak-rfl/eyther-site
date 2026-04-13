import Link from "next/link";

const tradeLinks = [
  { name: "Plumbing", slug: "plumbing" },
  { name: "HVAC", slug: "hvac" },
  { name: "Electrical", slug: "electrical" },
  { name: "Roofing", slug: "roofing" },
  { name: "Landscaping", slug: "landscaping" },
];

export default function Footer() {
  return (
    <footer className="bg-concrete-900 pt-16 pb-8 text-white/60">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#" className="font-heading text-[22px] font-extrabold text-white inline-block mb-4">
              home<span className="text-accent-500">AI</span>
            </a>
            <p className="text-sm leading-relaxed text-white/50 max-w-[300px]">
              The AI-powered marketing team for home services contractors. Strategy
              that adapts to your business. Marketing that runs 24/7.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white/30 mb-4">
              Trades
            </h4>
            <ul className="space-y-2.5">
              {tradeLinks.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/trades/${t.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white/30 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "How It Works", href: "#how-it-works" },
                { name: "Results", href: "#results" },
                { name: "Pricing", href: "#pricing" },
                { name: "FAQ", href: "#faq" },
                { name: "Login", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[1.5px] text-white/30 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About", "Blog", "Contact", "Privacy Policy", "Terms of Service"].map(
                (t) => (
                  <li key={t}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {t}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/30">
          <span>&copy; 2026 homeAI. All rights reserved.</span>
          <a href="tel:+18005551234" className="text-white/40 hover:text-white transition-colors">
            (800) 555-1234
          </a>
        </div>
      </div>
    </footer>
  );
}
