"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export default function BlogPostPage() {
  const { slug } = useParams();

  const currentIndex = blogPosts.findIndex(
    (post) => post.slug === slug
  );

  const post = blogPosts[currentIndex];
  const prevPost = blogPosts[currentIndex - 1];
  const nextPost = blogPosts[currentIndex + 1];

  if (!post) return null;

  return (
    <main>
      {/* Blog Content */}
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner blog-post">

          <span className="blog-date">
            {post.date}
          </span>

          <h1>
            {post.title}
          </h1>

          <div className="blog-body">
            {post.content.map((para, i) => (
              <p key={i}>
                {para}
              </p>
            ))}
          </div>

          {/* Prev / Next Navigation */}
          <div className="blog-nav">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="blog-nav-prev"
              >
                ← {prevPost.title}
              </Link>
            ) : (
              <span />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="blog-nav-next"
              >
                {nextPost.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>

        </div>
      </section>

      {/* Divider before footer */}
      <div className="section-inner">
        <hr className="blog-divider" />
      </div>

      <div className="h-24" />
    </main>
  );
}
