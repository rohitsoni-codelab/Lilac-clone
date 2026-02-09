import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner">

          {/* Section Heading */}
          <h2 className="mb-24 text-center">
            My Specialties
          </h2>

          {/* Cards Grid */}
          <div className="grid gap-16 md:grid-cols-3">

            <ServiceCard
              title="Anxiety & Panic"
              image="/images/service-anxiety.jpg"
              alt="Anxiety therapy"
              text="For adults experiencing chronic worry, panic attacks, overthinking,
              or constant tension. We focus on understanding anxiety patterns and
              developing tools to feel more grounded and regulated."
            />

            <ServiceCard
              title="Trauma & EMDR"
              image="/images/service-trauma.jpg"
              alt="Trauma therapy"
              text="Support for adults navigating single-incident trauma or long-standing
              patterns rooted in childhood, relationships, or chronic stress.
              Work is paced carefully with safety and stabilization at the core."
            />

            <ServiceCard
              title="Burnout & High Pressure"
              image="/images/service-burnout.jpg"
              alt="Burnout therapy"
              text="Therapy for professionals, creatives, and entrepreneurs feeling
              exhausted, disconnected, or stuck in perfectionism—focused on
              slowing down and building sustainable ways of living and working."
            />

          </div>

          {/* CTA — THIS IS THE CORRECT LOCATION */}
          <div className="mt-24 text-center">
            <Link href="/services" className="btn">
              View All Services
            </Link>
          </div>

        </div>
      </section>
    </Reveal>
  );
}

/* -------------------------
   Service Card Component
-------------------------- */
function ServiceCard({ title, image, alt, text }) {
  return (
    <Reveal>
      <div
        className="
          bg-white
          border border-[var(--border-soft)]
          px-8 py-12
          text-center
          space-y-8
        "
      >
        {/* Image */}
        <div className="relative w-44 h-44 mx-auto">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl">
            {title}
          </h3>
          <p className="leading-relaxed">
            {text}
          </p>
        </div>

      </div>
    </Reveal>
  );
}
