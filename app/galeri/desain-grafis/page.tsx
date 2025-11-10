import type { Metadata } from "next";
import { type Gallery, GalleryCategory } from "@/data/gallery";
import { galleries } from "@/data/gallery";
import { GallerySection } from "@/components/galeri/GallerySection";

export const metadata: Metadata = {
  title: "Galeri Desain Grafis",
};

function getSortedGraphicDesignGalleries(galleries: Gallery[]) {
  const graphicDesignGalleries = galleries.filter(
    (gallery) => gallery.category === GalleryCategory.DESAIN_GRAFIS
  );

  return graphicDesignGalleries;
}

export default function GaleriDesainGrafis() {
  return (
    <GallerySection galleries={getSortedGraphicDesignGalleries(galleries)} />
  );
}
