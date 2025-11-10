import { HeroSection } from "@/components/layanan/HeroSection";
import { ServicesNav } from "@/components/navigations/ServicesNav";

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="space-y-12 pb-40">
      <HeroSection />

      <ServicesNav />

      {children}
    </main>
  );
}
