"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="section bg-[var(--bg-warm)]">
      <div className="section-inner grid items-center gap-16 md:grid-cols-2">

        {/* TEXT COLUMN — LEFT */}
        <Reveal>
          <div className="max-w-xl space-y-6">
            <h2>
              Meet Dr. Maya Reynolds, PsyD
            </h2>

            <p>
              I’m a licensed clinical psychologist offering therapy for adults
              navigating anxiety, trauma, and emotional burnout. My work is
              grounded in evidence-based care and shaped by a belief that therapy
              should feel thoughtful, collaborative, and deeply human.
            </p>

            <p>
              I integrate approaches such as EMDR, cognitive-behavioral therapy
              (CBT), mindfulness-based practices, and trauma-informed care to
              support meaningful, lasting change. Sessions are paced
              intentionally, with attention to both emotional insight and
              nervous system regulation.
            </p>

            <p>
              I offer in-person therapy in Santa Monica, California, as well as
              secure telehealth sessions for clients across the state. Therapy is
              a space to slow down, reconnect with yourself, and build more
              sustainable ways of living and working.
            </p>
          </div>
        </Reveal>

        {/* IMAGE COLUMN — RIGHT */}
        <Reveal>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-[520px] w-[360px] overflow-hidden">
              <Image
                src="/images/maya.jpg"
                alt="Dr. Maya Reynolds, PsyD"
                fill
                priority
                className="object-cover rounded-[180px_180px_48px_48px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
