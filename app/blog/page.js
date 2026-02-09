import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Subscribe from "@/components/blog/Subscribe";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />

      {/* Full-width Subscribe block */}
      <Subscribe />
    </>
  );
}

