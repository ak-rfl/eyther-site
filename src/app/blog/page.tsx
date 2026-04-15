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
              <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight mb-4 leading-[1.08]">
                Marketing insights for contractors who&apos;d rather be on the
                job site
              </h1>
              <div className="w-16 h-1 bg-cta rounded-full mx-auto mt-4 mb-6" />
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
      <section className="bg-cta py-16 md:py-20">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[40px] text-concrete-900 font-extrabold tracking-tight mb-8 leading-tight">
              Stop guessing. Start growing.
            </h2>
            <a
              href="/#audit"
              className="inline-block bg-concrete-900 text-white rounded-full px-10 py-4 font-bold text-base hover:opacity-90 transition-opacity"
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
