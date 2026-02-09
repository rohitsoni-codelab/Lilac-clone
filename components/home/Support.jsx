import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
export default function Support() {
  return (
    <Reveal>
      <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — IMAGE (FULL HEIGHT) */}
        <div className="relative min-h-[90vh]">
          <Image
            src="/images/support.jpg"
            alt="Woman resting peacefully"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex items-center bg-[#d9d7dd] px-8 sm:px-16 lg:px-24">
          <div className="max-w-md space-y-8">

            <h2 className="font-serif text-3xl leading-tight">
              You don’t have to do this all alone.
            </h2>

            <p className="text-sm leading-relaxed">
              If you’re facing any of these, there’s hope:
            </p>

            <ul className="space-y-3 text-sm">
              <li>• Persistent feelings of overwhelm or stress</li>
              <li>• Trouble focusing or making decisions</li>
              <li>• Difficulty managing emotions</li>
              <li>• Feeling disconnected, exhausted, or burned out</li>
              <li>• A pervasive sense of always being “on edge”</li>
            </ul>

            <p className="text-sm leading-relaxed">
              With empathy and guidance, we’ll work together to navigate
              the challenges life throws your way.
            </p>

            <div>
              <Link href="/contact" className="btn">
                Work with me
              </Link>
            </div>

          </div>
        </div>

      </section>
    </Reveal>
  );
}
