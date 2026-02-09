"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-[4/3] mb-6 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <span className="text-xs opacity-70 tracking-wide">
        {post.date}
      </span>

      {/* Title */}
      <h3 className="mt-2 mb-3">
        {post.title}
      </h3>

      {/* Link */}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block text-sm underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
      >
        Read More
      </Link>
    </article>
  );
}
