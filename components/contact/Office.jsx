import Reveal from "@/components/ui/Reveal";

export default function OfficeMap() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-sage)]">
        <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="text-white">
            <h2 className="mb-6">My Office</h2>
            <p className="text-sm opacity-90 mb-10">
              123 Example Street<br />Minneapolis, MN
            </p>
            <h3 className="uppercase tracking-widest text-sm mb-3">Hours</h3>
            <p className="text-sm opacity-90">
              Monday – Friday<br />10am – 6pm
            </p>
          </div>

          <div className="office-map-frame mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps?q=Minneapolis&output=embed"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </Reveal>
  );
}
