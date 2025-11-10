import type { Metadata } from "next";
import { type Gallery, GalleryCategory } from "@/data/gallery";
import { galleries } from "@/data/gallery";
import { GallerySection } from "@/components/galeri/GallerySection";

export const metadata: Metadata = {
  title: "Galeri Website",
};

function getSortedWebsiteGalleries(galleries: Gallery[]) {
  const websiteGalleries = galleries.filter(
    (gallery) => gallery.category === GalleryCategory.WEBSITE
  );

  return websiteGalleries;
}

export default function GaleriWebsite() {
  return <GallerySection galleries={getSortedWebsiteGalleries(galleries)} />;
}
