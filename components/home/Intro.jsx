import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
export default function Intro() {
  return (
    <Reveal>
      <section className="section">
        <div className="section-inner grid gap-20 lg:grid-cols-2 items-center">

          {/* Text */}
          <div className="space-y-6 max-w-md">
            <h2>Hi, I’m Dr. Maya.</h2>

            <p>
              I’m a licensed clinical psychologist supporting adults who feel
              overwhelmed by anxiety, trauma, or burnout. My work blends practical
              tools with depth-oriented therapy.
            </p>

            <Link href="/contact" className="btn">
              Let’s chat
            </Link>
          </div>

          {/* Images */}
          <div className="relative h-[520px] flex justify-center">
            <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden">
              <Image
                src="/images/maya.jpg"
                alt="Dr. Maya Reynolds"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}
