import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";

export default function Background() {
  const items = [
    {
      title: "Education",
      content:
        "Doctor of Psychology (PsyD) in Clinical Psychology. Extensive training in evidence-based therapeutic approaches.",
    },
    {
      title: "Licensure",
      content:
        "Licensed Clinical Psychologist in the state of California.",
    },
    {
      title: "Certifications",
      content:
        "Trained in EMDR therapy, CBT, mindfulness-based practices, and trauma-informed care.",
    },
  ];

  return (
    <Reveal>
      <section className="section bg-[var(--bg-warm)]">
        <div className="section-inner max-w-3xl">

          <h2 className="mb-10 text-center">
            My Professional Background
          </h2>

          <Accordion items={items} />

        </div>
      </section>
    </Reveal>
  );
}
