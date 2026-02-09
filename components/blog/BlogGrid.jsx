import BlogCard from "./BlogCard";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blogData";

export default function BlogGrid() {
  return (
    <section className="section bg-[var(--bg-warm)]">
      <div className="section-inner max-w-6xl grid md:grid-cols-2 gap-x-16 gap-y-28">
        {blogPosts.map((post) => (
          <Reveal key={post.slug}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
