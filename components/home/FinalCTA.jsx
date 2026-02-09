import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
export default function FinalCTA() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-sage)] text-white">
        <div className="section-inner text-center max-w-3xl">

          <h2 className="mb-6">
            Get started today.
          </h2>

          <p className="mb-10 text-white/80">
            Ready to take the first step toward feeling more grounded and supported?
            I offer in-person therapy in Santa Monica and secure telehealth sessions
            throughout California.
          </p>

          <Link href="/contact" className="btn btn-inverse">
            Get in touch
          </Link>

        </div>
      </section>
    </Reveal>
  );
}
