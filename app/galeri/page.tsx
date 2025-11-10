import type { Metadata } from "next";
import { galleries } from "@/data/gallery";
import { GallerySection } from "@/components/galeri/GallerySection";

export const metadata: Metadata = {
  title: "Galeri",
};

export default function Galeri() {
  return <GallerySection galleries={galleries} />;
}
