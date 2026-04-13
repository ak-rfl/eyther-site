"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  BlogPost,
  categoryColors,
  categoryBadgeColors,
  categoryLabels,
} from "@/data/blog-posts";

const categories: Array<BlogPost["category"] | "all"> = [
  "all",
  "plumbing",
  "hvac",
  "electrical",
  "roofing",
  "landscaping",
  "marketing",
  "industry",
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <FadeIn delay={0.06 * (index % 6)}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="bg-white border border-concrete-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
          {/* Gradient Cover */}
          <div
            className={`h-40 bg-gradient-to-br ${categoryColors[post.category]} relative`}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-3 left-3">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryBadgeColors[post.category]} bg-white/90 backdrop-blur-sm`}
              >
                {categoryLabels[post.category]}
              </span>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-xs text-concrete-400 mb-3">
              <span>{formatDate(post.publishDate)}</span>
              <span className="w-1 h-1 rounded-full bg-concrete-200" />
              <span>{post.readTime}</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-concrete-900 mb-2 group-hover:text-primary-500 transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-concrete-600 leading-relaxed mb-4 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-concrete-50">
              <span className="text-xs text-concrete-400 font-medium">
                {post.author}
              </span>
              <span className="text-xs font-medium text-primary-500 group-hover:text-accent-500 transition-colors">
                Read more &rarr;
              </span>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <FadeIn>
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-white border border-concrete-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="grid md:grid-cols-2">
            {/* Gradient Cover */}
            <div
              className={`h-56 md:h-full min-h-[280px] bg-gradient-to-br ${categoryColors[post.category]} relative`}
            >
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/90 text-accent-500 backdrop-blur-sm uppercase tracking-wide">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryBadgeColors[post.category]} bg-white/90 backdrop-blur-sm`}
                >
                  {categoryLabels[post.category]}
                </span>
              </div>
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-concrete-400 mb-4">
                <span>{formatDate(post.publishDate)}</span>
                <span className="w-1 h-1 rounded-full bg-concrete-200" />
                <span>{post.readTime}</span>
              </div>

              <h2 className="font-heading text-2xl md:text-[28px] font-bold text-concrete-900 mb-3 group-hover:text-primary-500 transition-colors leading-tight">
                {post.title}
              </h2>

              <p className="text-base text-concrete-600 leading-relaxed mb-5">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-concrete-400 font-medium">
                  By {post.author}
                </span>
                <span className="text-sm font-medium text-primary-500 group-hover:text-accent-500 transition-colors">
                  Read the full article &rarr;
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}

export default function BlogCategoryFilter({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<
    BlogPost["category"] | "all"
  >("all");

  const featuredPost = posts.find((p) => p.featured);
  const filteredPosts =
    activeCategory === "all"
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "all" && featuredPost;

  return (
    <>
      {/* Category Filter */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary-500 text-white shadow-sm"
                  : "bg-concrete-50 text-concrete-600 hover:bg-concrete-100 hover:text-concrete-900"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat]}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Featured Post */}
      {showFeatured && (
        <div className="mb-10">
          <FeaturedPostCard post={featuredPost} />
        </div>
      )}

      {/* Post Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-concrete-400 text-lg">
            No posts in this category yet. Check back soon!
          </p>
        </div>
      )}
    </>
  );
}
