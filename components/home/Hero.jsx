"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="section bg-[var(--bg-cream)]">
            <div className="section-inner grid items-center gap-16 md:grid-cols-2">

                {/* IMAGE COLUMN — LEFT */}
                <Reveal>
                    <div className="flex justify-center md:justify-start">
                        <div className="relative h-[520px] w-[360px] overflow-hidden rounded-t-full">
                            <Image
                                src="/images/hero.jpg"
                                alt="Calm therapy environment"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Reveal>

                {/* TEXT COLUMN — RIGHT */}
                <Reveal>
                    <div className="max-w-xl space-y-8">
                        <h1>
                            Therapy for Anxiety, Trauma, and Burnout in Santa Monica, CA
                        </h1>

                        <p className="text-lg">
                            I’m Dr. Maya Reynolds, PsyD — a licensed clinical psychologist
                            offering thoughtful, evidence-based therapy for adults navigating
                            anxiety, trauma, and emotional burnout. I provide in-person therapy
                            in Santa Monica and telehealth across California.
                        </p>

                        <div className="flex gap-6 pt-4">
                            <Link href="/contact" className="btn">
                                Book a Consultation
                            </Link>

                            <Link href="/services" className="btn">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
