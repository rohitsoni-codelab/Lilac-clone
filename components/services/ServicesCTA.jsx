import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ServicesCTA() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-sage)] text-white text-center">
        <div className="section-inner max-w-2xl">

          <h2 className="mb-6">Ready to get started?</h2>

          <p className="text-sm opacity-90 mb-10">
            If you’re curious about working together, I’d love to connect.
          </p>

          <Link href="/contact" className="btn btn-inverse">
            Book an Appointment
          </Link>

        </div>
      </section>
    </Reveal>
  );
}
