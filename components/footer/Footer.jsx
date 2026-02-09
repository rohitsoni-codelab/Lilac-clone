import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <Reveal>
      <footer className="bg-[var(--bg-warm)] text-[var(--text-primary)]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-3">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Licensed Clinical Psychologist offering therapy for anxiety, trauma,
              and burnout. In-person sessions in Santa Monica and telehealth across
              California.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-xs">
              Explore
            </h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3 — Office */}
          <div className="space-y-4">
            <h4 className="uppercase tracking-widest text-xs">
              Office Location
            </h4>
            <p className="text-sm leading-relaxed">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
            <p className="text-sm">
              In-person & Telehealth Sessions
            </p>
          </div>

        </div>

        {/* Bottom legal bar */}
        <div className="border-t border-[var(--border-soft)] py-6 text-center text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
          </div>
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </div>
      </footer>
    </Reveal>
  );
}
