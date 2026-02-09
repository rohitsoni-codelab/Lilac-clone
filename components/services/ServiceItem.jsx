import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ServiceItem({ service, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <Reveal>
      <div
        className={`service-row ${
          isReverse ? "service-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="service-image">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="service-text">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </Reveal>
  );
}
