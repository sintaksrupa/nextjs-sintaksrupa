import { HeroSection } from "@/components/galeri/HeroSection";
import { GalleryNav } from "@/components/navigations/GalleryNav";

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="space-y-12 pb-40">
      <HeroSection />

      <GalleryNav />

      {children}
    </main>
  );
}
