"use client";

import Reveal from "@/components/ui/Reveal";

export default function Office() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-accent)]">
        <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* OFFICE DETAILS */}
          <div className="text-white">
            <h2 className="mb-6">
              Office Location
            </h2>

            <p className="text-sm opacity-90 mb-10">
              Santa Monica, California<br />
              In-person and telehealth sessions available
            </p>

            <h3 className="uppercase tracking-widest text-sm mb-3">
              Availability
            </h3>

            <p className="text-sm opacity-90">
              Monday – Friday<br />
              By appointment only
            </p>
          </div>

          {/* MAP */}
          <div className="office-map-frame mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps?q=Santa%20Monica%20California&output=embed"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </Reveal>
  );
}
