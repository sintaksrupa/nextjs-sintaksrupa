import { HeroSection } from "@/components/home/HeroSection";
import { KeyBenefitsSection } from "@/components/home/KeyBenefitsSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <main className="space-y-40 pb-40">
      <HeroSection />

      <KeyBenefitsSection />

      <ServicesSection />

      <PartnersSection />
    </main>
  );
}
