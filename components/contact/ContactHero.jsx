import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section className="section bg-[#d9d7dd]">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <Reveal>
          <div className="pt-12">

            <h1 className="mb-8">Let’s Connect</h1>

            <p className="text-sm mb-4">
              Starting therapy is courageous.
            </p>

            <p className="max-w-sm text-sm leading-relaxed">
              Get in touch for questions, or to book a free 15-minute consultation.
            </p>

            <div className="mt-16 flex gap-6 items-end">
              <Image src="/images/social1.jpg" alt="" width={140} height={180} />
              <Image src="/images/social2.jpg" alt="" width={140} height={180} />
            </div>

          </div>
        </Reveal>

        {/* RIGHT NOTE */}
        <Reveal>
          <div className="bg-[#2c3a1f] text-white px-8 py-8 max-w-md md:mt-24">
            <p className="text-xs leading-loose tracking-wide">
              <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on
              your contact page this is not HIPAA-compliant. Squarespace stores
              data that is input into forms in the Marketing tab under Profiles.
              Instead, you can embed a HIPAA-compliant form, a link to your client
              portal, or simply put your email address.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
