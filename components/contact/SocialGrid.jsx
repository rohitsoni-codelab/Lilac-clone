"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const images = [
  "/images/social1.jpg",
  "/images/social2.jpg",
  "/images/social3.jpg",
  "/images/social4.jpg",
];

export default function SocialGrid() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner">

          <h2 className="mb-6">
            A Glimpse Into the Space
          </h2>

          <p className="max-w-md text-sm leading-relaxed mb-12">
            Therapy is not only about conversation — it’s also about environment.
            These details reflect the calm, grounding atmosphere clients experience
            when working with me.
          </p>

          <div className="social-grid">
            {images.map((src, i) => (
              <div key={i} className="social-item">
                <Image
                  src={src}
                  alt="Calm therapeutic environment"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}
