"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="section bg-[var(--bg-accent)] text-white">
      <div className="section-inner text-center max-w-3xl">

        <Reveal>
          <h2 className="mb-6 text-white">
            Begin Therapy When You’re Ready
          </h2>
        </Reveal>

        <Reveal>
          <p className="mb-10 text-white/80">
            If you’re feeling overwhelmed, burned out, or emotionally stuck,
            therapy can offer space to slow down, gain clarity, and feel more
            grounded. I offer in-person sessions in Santa Monica, California,
            as well as secure telehealth therapy across the state.
          </p>
        </Reveal>

        <Reveal>
          <Link href="/contact" className="btn btn-inverse">
            Schedule a Consultation
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
