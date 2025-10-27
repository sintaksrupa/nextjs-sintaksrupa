import Image from "next/image";

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
        {/* SHANE INDONESIA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-shane-indonesia.webp"
            alt="Logo Shane Indonesia"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* HERBADYNE */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-herbadyne.webp"
            alt="Logo Herbadyne"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* WL */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-wl.webp"
            alt="Logo WL"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* ETTASHANE */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-ettashane.webp"
            alt="Logo Ettashane"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* WANGI ID */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-wangi-id.webp"
            alt="Logo Wangi ID"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* BINASYIFA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-binasyifa.webp"
            alt="Logo Binasyifa"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* BENEFA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-benefa.webp"
            alt="Logo Benefa"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* CLARISA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-clarisa.webp"
            alt="Logo Clarisa"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* MISS CLEAN */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-miss-clean.webp"
            alt="Logo Miss Clean"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* ZUMA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-zuma-parfume.webp"
            alt="Logo Parfume"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* JOTHAMILK */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-jothamilk.webp"
            alt="Logo Jothamilk"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>

        {/* BERSAMA INTI NUSANTARA */}
        <div className="flex flex-col w-full h-full items-center justify-center text-center border p-3">
          <Image
            src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/master-logo-bersama-inti-nusantara.webp"
            alt="Logo Bersama Inti Nusantara"
            width={540}
            height={540}
            className="shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
