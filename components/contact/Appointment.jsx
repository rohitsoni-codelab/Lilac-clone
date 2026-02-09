"use client";

import Reveal from "@/components/ui/Reveal";

export default function Appointment() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner max-w-3xl text-center">

          <h2 className="mb-6">
            Schedule a Consultation
          </h2>

          <p className="text-sm max-w-xl mx-auto leading-relaxed mb-16">
            If you’re interested in working together, scheduling a consultation
            is a simple first step. This time can be used to ask questions,
            discuss what you’re looking for, and see if my approach feels like
            the right fit for you.
          </p>

          <div className="appointment-frame mx-auto">
            <div className="appointment-placeholder">

              <p className="text-sm mb-6">
                Online scheduling will be available soon.
              </p>

              <button className="btn">
                Go to Client Portal
              </button>

              <p className="text-xs mt-10 opacity-70">
                Scheduling powered by Acuity
              </p>

            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}
