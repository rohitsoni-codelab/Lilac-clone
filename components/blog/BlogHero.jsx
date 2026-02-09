"use client";

import Reveal from "@/components/ui/Reveal";

export default function BlogHero() {
  return (
    <section className="section bg-[var(--bg-cream)]">
      <div className="section-inner text-center max-w-2xl">

        <Reveal>
          <h1>
            Reflections on Therapy, Healing, and Emotional Wellbeing
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg">
            Thoughts and insights from my work as a licensed clinical psychologist,
            exploring anxiety, trauma, burnout, and the process of meaningful change.
            These reflections are written to support understanding, self-awareness,
            and emotional clarity.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
