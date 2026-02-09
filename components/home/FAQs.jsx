"use client";

import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FAQs() {
  const items = [
    {
      title: "Do you offer telehealth sessions?",
      content:
        "Yes. I offer secure telehealth therapy for clients located anywhere in California, in addition to in-person sessions in Santa Monica.",
    },
    {
      title: "What issues do you specialize in?",
      content:
        "I work primarily with adults navigating anxiety, trauma, emotional burnout, and stress related to high-pressure or caregiving roles.",
    },
    {
      title: "What is EMDR therapy?",
      content:
        "EMDR is an evidence-based therapy that helps the brain process distressing memories more adaptively. It’s often used for trauma but can also support anxiety and stress-related concerns.",
    },
    {
      title: "Do you accept insurance?",
      content:
        "I do not accept insurance directly. However, I can provide superbills that you may submit to your insurance provider for potential out-of-network reimbursement.",
    },
  ];

  return (
    <section className="section bg-[var(--bg-cream)]">
      <div className="section-inner grid gap-20 lg:grid-cols-2 items-center">

        {/* IMAGE */}
        <Reveal>
          <div className="relative h-[420px] max-w-md overflow-hidden rounded-[200px_200px_40px_40px]">
            <Image
              src="/images/faq.jpg"
              alt="Calming therapy space with soft florals"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* ACCORDION */}
        <Reveal>
          <div>
            <h2 className="mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion items={items} />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
