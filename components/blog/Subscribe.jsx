"use client";

import Reveal from "@/components/ui/Reveal";

export default function Subscribe() {
  return (
    <section className="section bg-[var(--bg-cream)]">
      <Reveal>
        <div className="section-inner">

          {/* Dark container */}
          <div className="subscribe-dark">

            <h2>Subscribe</h2>

            <p>
              Sign up with your email address to receive news and updates.
            </p>

            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Email Address"
              />
              <button type="submit">SIGN UP</button>
            </form>

            <span className="subscribe-note">
              We respect your privacy.
            </span>

          </div>

        </div>
      </Reveal>
    </section>
  );
}
