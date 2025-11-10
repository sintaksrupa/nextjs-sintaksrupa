import { type Gallery } from "@/data/gallery";
import { GalleryDetails } from "@/components/galeri/GalleryDetails";
import { GalleryCarousel } from "@/components/galeri/GalleryCarousel";

type GallerySectionProps = {
  galleries: Gallery[];
};

export function GallerySection({ galleries }: GallerySectionProps) {
  return (
    <div className="flex flex-col gap-36">
      {galleries.map((gallery) => (
        <section key={gallery.title}>
          <div className="max-w-7xl grid lg:grid-cols-2 items-center justify-center gap-5 lg:gap-10 xl:gap-20 mx-auto px-3 md:px-5">
            <GalleryDetails
              title={gallery.title}
              descriptions={gallery.description}
            />

            <GalleryCarousel images={gallery.images} />
          </div>
        </section>
      ))}
    </div>
  );
}
