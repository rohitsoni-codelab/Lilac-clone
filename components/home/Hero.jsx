"use client"
import Reveal from "@/components/ui/Reveal";
import Image from "next/image"

export default function Hero() {
    return (
        <Reveal>
            <section className="section">
                <div className="section-inner">
                    <div className="grid-split">

                        {/* LEFT — TEXT */}
                        <div className="space-y-10">

                            <h1 className="font-serif text-4xl leading-tight lg:text-6xl">
                                Live your life <br />
                                in full bloom
                            </h1>

                            <p className="max-w-md text-lg text-neutral-600 leading-relaxed">

                                Therapy for adults navigating anxiety, burnout, and life transitions.
                            </p>

                            <button className="inline-block border border-neutral-900 px-8 py-4 text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition">
                                Connect with me
                            </button>
                        </div>

                        {/* RIGHT — IMAGE */}
                        <div className="relative h-[460px] w-full flex justify-center lg:justify-end">
                            <div className="relative h-full w-[320px] lg:w-[360px] overflow-hidden">
                                <Image
                                    src="/images/hero.jpg"
                                    alt="Therapy space"
                                    fill
                                    className="object-cover rounded-[180px_180px_40px_40px]"
                                    priority
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </Reveal>
    )
}
