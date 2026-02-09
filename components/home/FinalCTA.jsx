"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="section bg-[var(--bg-accent)] text-white">
      <div className="section-inner text-center max-w-3xl">

        <Reveal>
          <h2 className="mb-6 text-white">
            Get Started Today

          </h2>
        </Reveal>

        <Reveal>
          <p className="mb-10 text-white/80">
            If you’re ready to take the first step toward feeling more grounded and supported, I invite you to reach out. I offer in-person therapy in Santa Monica and secure telehealth sessions across California.

          </p>
        </Reveal>

        <Reveal>
          <Link href="/contact" className="btn btn-inverse">
            Get in Touch


          </Link>
        </Reveal>

      </div>
    </section>
  );
}
