import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section className="flex w-full items-center justify-center px-3 md:px-5">
      <div className="flex flex-col md:flex-row gap-20 w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl items-center justify-between text-start">
        <Image
          src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/seorang-profesional-sedang-mengetik.webp"
          alt="Seorang profesional sedang mengetik"
          width={540}
          height={540}
          className="shadow-md"
        />

        <div className="flex flex-col gap-8">
          <h2 className="max-w-4xl text-3xl lg:text-4xl uppercase leading-10 md:leading-12 lg:leading-14">
            Naikkan Level Bisnismu di Setiap Titik Sentuh
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Logo
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Kemasan
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Company Profile
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Brosur
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Merchandise
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Banner
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Konten Marketing
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Katalog E-Commerce
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Feed IG
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Website
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Desain Lainnya
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Website Landing Page
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Website Company Profile
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Website E-Commerce
              </li>

              <li className="flex items-center gap-3 text-lg md:text-base lg:text-lg">
                <span className="flex size-5 md:size-4.5 lg:size-5 items-center justify-center bg-accent text-primary-foreground">
                  <FaCheck size={12} />
                </span>
                Website Lainnya
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button className="p-5 rounded-none" asChild>
              <Link href="/layanan">Daftar Harga</Link>
            </Button>

            <Button variant="outline" className="py-5 rounded-none" asChild>
              <Link href="/galeri">
                Jelajahi Karya Kami <MoveRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
