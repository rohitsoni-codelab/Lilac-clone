"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Office() {
    return (
        <section className="section bg-[var(--bg-warm)]">
            <div className="section-inner">

                {/* Heading */}
                <Reveal>
                    <div className="max-w-2xl mx-auto text-center mb-20">
                        <h2 className="mb-6">
                            A Calm Space for Healing
                        </h2>
                        <p>
                            My Santa Monica office is designed to feel quiet, comfortable, and grounding. The space supports a sense of privacy and ease, allowing therapy sessions to feel focused, intentional, and emotionally safe from the moment you arrive.

                        </p>
                    </div>
                </Reveal>

                {/* Images */}
                <div className="grid gap-10 md:grid-cols-3">

                    <Reveal>

                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">

                            <Image
                                src="/images/office-1.jpg"
                                alt="Therapy office interior with natural light"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">

                            <Image
                                src="/images/office-2.jpg"
                                alt="Comfortable therapy seating area"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">

                            <Image
                                src="/images/office-3.jpg"
                                alt="Calm and private therapy environment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Reveal>

                </div>

                {/* Supporting Details */}
                <Reveal>
                    <div className="max-w-xl mx-auto text-center mt-16 space-y-2">
                        <p>
                            In-person therapy available in Santa Monica, California.
                        </p>
                        <p>
                            Secure telehealth sessions offered statewide across California.
                        </p>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
