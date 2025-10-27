import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex min-h-[75vh] w-full flex-col items-start md:items-center justify-center px-3 md:px-5">
        <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex flex-col gap-6 items-start md:items-center justify-center text-start md:text-center pt-10">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl uppercase tracking leading-11 md:leading-14 lg:leading-17">
            Halaman Tidak Ditemukan
          </h1>

          <p className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-base md:text-lg lg:text-xl">
            Halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
            Jika Anda yakin ini adalah kesalahan, silakan coba muat ulang
            halaman.
          </p>

          <Button className="font-serif rounded-none p-5" asChild>
            <Link href="/">Kembali Ke Beranda</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
