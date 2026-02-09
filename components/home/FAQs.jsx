import Accordion from "@/components/ui/Accordion";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FAQs() {
  const items = [
    {
      title: "Do you take insurance?",
      content:
        "I do not accept insurance directly, but I can provide superbills that you may submit to your insurance provider for potential reimbursement.",
    },
    {
      title: "What are your rates?",
      content:
        "Session fees vary depending on the type of therapy. Please reach out directly for current rates and availability.",
    },
    {
      title: "Do you have any openings?",
      content:
        "Availability changes periodically. The best way to check current openings is to contact me directly.",
    },
  ];

  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner grid gap-20 lg:grid-cols-2 items-center">

          {/* Image */}
          <div className="relative h-[420px] max-w-md overflow-hidden rounded-[200px_200px_40px_40px]">
            <Image
              src="/images/faq.jpg"
              alt="Soft calming florals"
              fill
              className="object-cover"
            />
          </div>

          {/* Accordion */}
          <div>
            <h2 className="mb-10">FAQs</h2>
            <Accordion items={items} />
          </div>

        </div>
      </section>
    </Reveal>
  );
}
