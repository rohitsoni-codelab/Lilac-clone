import Reveal from "@/components/ui/Reveal";

export default function Appointment() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner max-w-3xl text-center">

          <h2 className="mb-6">Book an appointment.</h2>

          <p className="text-sm max-w-xl mx-auto leading-relaxed mb-16">
            Add some text here if you like, and add your scheduling widget below.
          </p>

          <div className="appointment-frame mx-auto">
            <div className="appointment-placeholder">
              <p className="text-sm mb-6">This page is not active</p>
              <button className="btn">Go to account</button>
              <p className="text-xs mt-10 opacity-70">
                Powered by acuity scheduling
              </p>
            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}
