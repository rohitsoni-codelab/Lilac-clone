import ContactHero from "@/components/contact/ContactHero";
import Appointment from "@/components/contact/Appointment";
import Office from "@/components/contact/Office";
import SocialGrid from "@/components/contact/SocialGrid";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Appointment />
      <Office />
      <SocialGrid />
    </main>
  );
}
