import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BlogCategoryFilter from "@/components/BlogCategoryFilter";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — homeAI | Marketing Insights for Home Services Contractors",
  description:
    "Actionable marketing strategies for plumbers, HVAC techs, electricians, roofers, and landscapers. Real data, real results, no fluff.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-[120px] pb-14 md:pb-18 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[700px] mx-auto">
              <div className="text-primary-500 text-xs font-medium tracking-[2px] uppercase flex items-center justify-center gap-2 mb-4">
                <span className="w-8 h-0.5 bg-primary-500 rounded" />
                The homeAI Blog
              </div>
              <h1 className="font-heading text-3xl md:text-[44px] font-bold tracking-tight mb-4 leading-tight">
                Marketing insights for contractors who&apos;d rather be on the
                job site
              </h1>
              <p className="text-lg text-concrete-600 leading-relaxed">
                Real strategies, real numbers, and honest advice for home
                services businesses. No marketing jargon, no fluff — just what
                works.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlogCategoryFilter posts={blogPosts} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-[34px] font-bold text-white mb-4 leading-tight">
              Stop guessing. Start growing.
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed">
              Get a free marketing audit that shows you exactly where your leads
              are coming from, where you&apos;re losing them, and what to fix
              first.
            </p>
            <a
              href="/#audit"
              className="inline-block bg-accent-500 text-white text-base font-medium px-8 py-3.5 rounded-[10px] hover:bg-accent-600 transition-colors shadow-[0_2px_12px_rgba(232,86,15,0.3)]"
            >
              Get My Free Marketing Audit
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
