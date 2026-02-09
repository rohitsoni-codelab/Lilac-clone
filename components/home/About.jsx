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
              A Thoughtful, Grounded Approach to Therapy

            </h2>

            <p>
              I’m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in Santa Monica, California. I work with adults who appear high-functioning on the outside but feel overwhelmed by anxiety, burnout, or the lasting effects of past experiences.

            </p>

            <p>
              My approach to therapy is warm, collaborative, and grounded in evidence-based care. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to support both emotional insight and nervous system regulation.

            </p>

            <p>
              I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for adults across California. Therapy is a space to slow down, reconnect with yourself, and build more sustainable ways of living and working.

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
