import Reveal from "@/components/ui/Reveal";

export default function Subscribe() {
    return (
        <Reveal>
            <section className="section bg-[var(--bg-sage)] text-white">
                <div className="section-inner max-w-3xl text-center subscribe-box">

                    <h2 className="mb-4">Subscribe</h2>

                    <p className="mb-10 opacity-90">
                        Sign up with your email address to receive news and updates.
                    </p>

                    <form className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="subscribe-input"
                        />

                        <button className="btn btn-inverse">
                            Sign Up
                        </button>
                    </form>

                    <p className="mt-8 text-xs opacity-70">
                        We respect your privacy.
                    </p>

                </div>
            </section>

        </Reveal>
    );
}
