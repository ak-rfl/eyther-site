import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  blogPosts,
  categoryColors,
  categoryBadgeColors,
  categoryLabels,
} from "@/data/blog-posts";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const categoryCtaCopy: Record<string, string> = {
  plumbing: "plumbing",
  hvac: "HVAC",
  electrical: "electrical",
  roofing: "roofing",
  landscaping: "landscaping",
  marketing: "home services",
  industry: "home services",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found — homeAI Blog",
    };
  }

  return {
    title: `${post.title} — homeAI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough posts from the same category, fill with other posts
  if (relatedPosts.length < 2) {
    const otherPosts = blogPosts
      .filter(
        (p) =>
          p.slug !== post.slug &&
          !relatedPosts.find((rp) => rp.slug === p.slug)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return (
    <>
      <Nav />

      <article className="pt-[96px] pb-16 md:pb-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Back Link */}
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-concrete-400 hover:text-primary-500 transition-colors mb-8 font-medium"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </FadeIn>

          {/* Article Header */}
          <div className="max-w-[720px] mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryBadgeColors[post.category]}`}
                >
                  {categoryLabels[post.category]}
                </span>
                <span className="text-xs text-concrete-400">
                  {formatDate(post.publishDate)}
                </span>
                <span className="w-1 h-1 rounded-full bg-concrete-200" />
                <span className="text-xs text-concrete-400">
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-[56px] font-extrabold tracking-tight leading-[1.08] mb-5 text-concrete-900">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-concrete-100">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-concrete-900">
                    {post.author}
                  </div>
                  <div className="text-xs text-concrete-400">
                    homeAI Marketing Insights
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Gradient Cover Image */}
            <FadeIn delay={0.1}>
              <div
                className={`w-full h-56 md:h-72 rounded-xl bg-gradient-to-br ${categoryColors[post.category]} mb-10 relative overflow-hidden border-b-4 border-cta`}
              >
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 font-heading text-6xl md:text-8xl font-extrabold tracking-tighter select-none">
                    {categoryLabels[post.category]}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Article Content */}
            <FadeIn delay={0.15}>
              <div
                className="prose prose-lg max-w-none
                  [&>p]:text-concrete-700 [&>p]:leading-[1.8] [&>p]:mb-5 [&>p]:text-base
                  [&>h3]:font-heading [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-concrete-900 [&>h3]:mt-10 [&>h3]:mb-4
                  [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-concrete-900 [&>h2]:mt-12 [&>h2]:mb-5
                  [&_strong]:text-concrete-900 [&_strong]:font-bold
                  [&_em]:text-concrete-700 [&_em]:italic
                  [&_a]:text-primary-500 [&_a]:underline [&_a]:hover:text-accent-500 [&_a]:transition-colors
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul>li]:text-concrete-700 [&>ul>li]:mb-2 [&>ul>li]:leading-[1.7]
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol>li]:text-concrete-700 [&>ol>li]:mb-2 [&>ol>li]:leading-[1.7]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </FadeIn>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-cta py-14 md:py-18">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-[40px] font-extrabold text-concrete-900 tracking-tight mb-7 leading-tight">
              See how homeAI can help your{" "}
              {categoryCtaCopy[post.category] ?? "home services"} business
            </h2>
            <a
              href="/audit"
              className="inline-block bg-concrete-900 text-white rounded-full px-8 py-3.5 font-bold text-base hover:opacity-90 transition-opacity"
            >
              Get My Free Audit
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 md:py-20 border-t border-concrete-100">
          <div className="max-w-[1200px] mx-auto px-6">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-[40px] font-extrabold text-concrete-900 text-center tracking-tight">
                Keep Reading
              </h2>
              <div className="w-12 h-1 bg-cta rounded-full mx-auto mt-3 mb-8" />
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relPost, i) => (
                <FadeIn key={relPost.slug} delay={0.08 * i}>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-white border border-concrete-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div
                        className={`h-36 bg-gradient-to-br ${categoryColors[relPost.category]} relative`}
                      >
                        <div className="absolute inset-0 bg-black/5" />
                        <div className="absolute bottom-3 left-3">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryBadgeColors[relPost.category]} bg-white/90 backdrop-blur-sm`}
                          >
                            {categoryLabels[relPost.category]}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-concrete-400 mb-2">
                          <span>
                            {new Date(relPost.publishDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-concrete-200" />
                          <span>{relPost.readTime}</span>
                        </div>

                        <h3 className="font-heading text-base font-bold text-concrete-900 group-hover:text-primary-500 transition-colors leading-snug flex-1">
                          {relPost.title}
                        </h3>

                        <span className="text-xs font-medium text-primary-500 group-hover:text-accent-500 transition-colors mt-3">
                          Read more &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
