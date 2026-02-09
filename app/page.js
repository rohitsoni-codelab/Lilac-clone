import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Support from "@/components/home/Support";
import Intro from "@/components/home/Intro";
import FAQs from "@/components/home/FAQs";
import Background from "@/components/home/Background";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Support />
      <Intro />
      <FAQs />
      <Background />
      <FinalCTA />
    </>
  );
}
