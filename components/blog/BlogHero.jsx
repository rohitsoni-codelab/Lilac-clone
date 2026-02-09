import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="section bg-[var(--bg-cream)]">
      <div className="section-inner max-w-6xl grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
          <Image
            src="/images/hero.jpg"
            alt="Blog Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="mb-6">The Lilac Blog</h1>
          <p className="max-w-md mb-4">
            My tiny corner of the internet where I talk about all
            things healing, heart, and wholeness.
          </p>
          <p className="font-medium">Glad you're here.</p>
        </div>

      </div>
    </section>
  );
}
