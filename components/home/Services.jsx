"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section className="section bg-[var(--bg-cream)]">
      <div className="section-inner">

        {/* Section Heading */}
        <Reveal>
          <h2 className="mb-24 text-center">
            Areas of Focus
          </h2>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid gap-16 md:grid-cols-3">

          <ServiceCard
            title="Anxiety & Panic Therapy"
            image="/images/service-anxiety.jpg"
            alt="Anxiety therapy for adults"
            text="Support for adults experiencing chronic anxiety, panic attacks, racing thoughts, or constant tension. Therapy focuses on understanding anxiety patterns and building practical tools to feel more grounded, regulated, and present."
          />

          <ServiceCard
            title="Trauma & EMDR Therapy"
            image="/images/service-trauma.jpg"
            alt="Trauma and EMDR therapy"
            text="Trauma-informed therapy for adults navigating single-incident trauma or long-standing emotional patterns rooted in early experiences or relationships. Work is paced carefully, with safety and nervous system regulation at the core."
          />

          <ServiceCard
            title="Burnout & High-Pressure Professionals"
            image="/images/service-burnout.jpg"
            alt="Burnout therapy for professionals"
            text="Therapy for professionals, creatives, and caregivers feeling emotionally exhausted, disconnected, or stuck in cycles of overwork or perfectionism. Sessions focus on slowing down and creating more sustainable ways of living and working."
          />

        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-24 text-center">
            <Link href="/services" className="btn">
              View All Services
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* -------------------------
   Service Card Component
-------------------------- */
function ServiceCard({ title, image, alt, text }) {
  return (
    <Reveal>
      <div className="bg-white border border-[var(--border-soft)] px-8 py-12 text-center space-y-8">

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
