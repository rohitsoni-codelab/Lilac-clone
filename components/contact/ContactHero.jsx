"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section className="section bg-[#d9d7dd]">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <Reveal>
          <div className="pt-12">

            <h1 className="mb-8">
              Get in Touch
            </h1>

            <p className="text-sm mb-4">
              Taking the first step can feel difficult — and you don’t have to do it alone.
            </p>

            <p className="max-w-sm text-sm leading-relaxed">
              If you have questions about therapy, availability, or whether we might
              be a good fit, you’re welcome to reach out. I offer a brief consultation
              to help you decide on next steps.
            </p>

            <div className="mt-16 flex gap-6 items-end">
              <Image
                src="/images/social1.jpg"
                alt="Calm interior detail"
                width={140}
                height={180}
              />
              <Image
                src="/images/social2.jpg"
                alt="Soft natural light"
                width={140}
                height={180}
              />
            </div>

          </div>
        </Reveal>

        {/* RIGHT NOTE */}
        <Reveal>
          <div className="bg-[#2c3a1f] text-white px-8 py-8 max-w-md md:mt-24">
            <p className="text-xs leading-loose tracking-wide">
              <strong>Please note:</strong> Email and phone are the best ways to get in
              touch. For privacy and confidentiality, I do not use standard contact
              forms to collect sensitive information. You’re welcome to reach out
              directly to begin the conversation.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
