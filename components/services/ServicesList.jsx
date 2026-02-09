import ServiceItem from "./ServiceItem";
import Reveal from "@/components/ui/Reveal";

const services = [
    {
        title: "Individual Therapy",
        description:
            "One-on-one therapy sessions tailored to support emotional growth, self-understanding, and resilience.",
        image: "/images/services/service-1.jpg",
    },
    {
        title: "Trauma-Informed Care",
        description:
            "Compassionate, evidence-based approaches to processing trauma and restoring a sense of safety.",
        image: "/images/services/service-2.jpg",
    },
    {
        title: "Anxiety & Depression",
        description:
            "Support for navigating anxiety, depression, and mood-related challenges with clarity and care.",
        image: "/images/services/service-3.jpg",
    },
];


export default function ServicesList() {
    return (
        <section className="section bg-[var(--bg-warm)]">
            <div className="section-inner max-w-3xl services-list">

                {services.map((service, i) => (
                    <ServiceItem
                        key={service.title}
                        service={service}
                        index={i}
                    />
                ))}

            </div>
        </section>
    );
}
