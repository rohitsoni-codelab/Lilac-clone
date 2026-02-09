import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
export default function About() {
  return (
      <Reveal>
         <section className="section bg-[var(--bg-warm)]">
      <div className="section-inner grid-split">

        {/* Image */}
        <div className="relative flex justify-center lg:justify-start">
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

        {/* Content */}
        <div className="max-w-xl space-y-6">
          <h2>
            Therapy for Anxiety, Trauma, and Burnout in Santa Monica, CA
          </h2>

          <p>
            I’m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist based in
            Santa Monica, California. I work with adults who appear
            high-functioning on the outside but feel overwhelmed by anxiety,
            chronic stress, or the lingering impact of past experiences.
          </p>

          <p>
            My approach is warm, collaborative, and grounded. I integrate
            evidence-based methods including cognitive-behavioral therapy (CBT),
            EMDR, mindfulness-based practices, and body-oriented techniques to help
            clients understand both the emotional and physiological sides of what
            they’re experiencing.
          </p>

          <p>
            I offer both in-person therapy from my Santa Monica office and secure
            telehealth sessions across California. Therapy is a space to slow down,
            feel more regulated, and build sustainable ways of living and working.
          </p>
        </div>

      </div>
    </section>
      </Reveal>
   
  );
}
