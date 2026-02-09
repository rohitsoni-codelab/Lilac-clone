import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const images = [
  "/images/social1.jpg",
  "/images/social2.jpg",
  "/images/social3.jpg",
  "/images/social4.jpg",
];

export default function SocialGrid() {
  return (
    <Reveal>
      <section className="section bg-[var(--bg-cream)]">
        <div className="section-inner">

          <h2 className="mb-12">Find me on social.</h2>

          <div className="social-grid">
            {images.map((src, i) => (
              <div key={i} className="social-item">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}
