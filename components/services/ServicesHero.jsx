import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ServicesHero() {
  return (
    <section className="section bg-[var(--bg-cream)]">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

        <Reveal>
          <div>
            <h1 className="mb-8">Services</h1>

            <p className="text-sm max-w-md leading-relaxed">
              Therapy is a collaborative process. I offer thoughtful,
              evidence-based services designed to support healing, growth,
              and meaningful change.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative aspect-[3/4]">
            <Image
              src="/images/services-hero.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
