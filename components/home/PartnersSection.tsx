import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="flex flex-col gap-12 w-full items-center justify-center px-3 md:px-5">
      <div className="flex flex-col md:flex-row w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl gap-3 items-start md:items-end justify-between text-start">
        <h2 className="max-w-4xl text-3xl lg:text-4xl uppercase leading-10 md:leading-12 lg:leading-14">
          Mereka yang Telah Memilih{" "}
          <span className="inline md:block font-sans normal-case">
            Sintaks <span className="text-accent font-serif">Rupa</span>
          </span>
        </h2>

        <p className="max-w-sm md:max-w-xs lg:max-w-sm text-base lg:text-lg">
          <span className="font-sans normal-case">
            Sintaks <span className="text-accent font-serif">Rupa</span>
          </span>{" "}
          menjadi pilihan terpercaya bagi berbagai bisnis dan UMKM yang ingin
          tampil lebih profesional.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl gap-6">
        {partners.map((partner) => (
          <div
            key={partner.imageSrc}
            className="flex flex-col w-full h-full items-center justify-center text-center border p-3"
          >
            <Image
              src={partner.imageSrc}
              alt={partner.imageAlt}
              width={540}
              height={540}
              className="shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
