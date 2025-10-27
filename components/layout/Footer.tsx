import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaThreads,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="flex w-full px-3 md:px-5 bg-foreground text-primary-foreground pt-10">
      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex flex-col mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 justify-between border-b border-primary-foreground/25 py-10">
          <div className="md:col-span-1 flex flex-col gap-5">
            <h5 className="sr-only">Tentang</h5>

            <Link href="/">
              <Image
                src="https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/primary-white-logo-type-sintaks-rupa.png"
                alt="Sintaks Rupa Primary White Logo Type PNG"
                width={250}
                height={35}
              />
            </Link>

            <p>
              Sintaks Rupa adalah partner kreatif digital yang berbasis di
              Klaten, Jawa Tengah. Kami spesialis dalam layanan desain grafis
              dan pengembangan website. Semangat kami adalah membantu bisnis dan
              UMKM untuk bertumbuh dan tampil profesional di dunia digital
              melalui identitas visual yang kuat dan website yang optimal.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-start md:justify-end">
            <div className="block">
              <h5 className="sr-only">Kontak</h5>

              <p>Punya pertanyaan, proyek atau hanya ingin mengenal kami?</p>

              <p className="flex flex-col my-3 font-light tracking-wider">
                <span className="flex flex-col font-semibold mb-0.5 tracking-normal">
                  Whatsapp
                </span>
                0878 8919 8491
                <span className="flex flex-col font-semibold mt-1.5 tracking-normal">
                  Email
                </span>
                sintaksrupa@gmail.com
              </p>

              <div className="flex gap-5 mt-10">
                <Link href="https://wa.me/+6287889198491" target="_blank">
                  <FaWhatsapp size={25} />
                </Link>

                <Link
                  href="https://web.facebook.com/profile.php?id=61582775750979"
                  target="_blank"
                >
                  <FaFacebook size={24} />
                </Link>

                <Link href="https://x.com/sintaksrupa" target="_blank">
                  <FaXTwitter size={25} />
                </Link>

                <Link
                  href="https://www.instagram.com/sintaksrupa"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </Link>

                <Link
                  href="https://www.threads.com/@sintaksrupa"
                  target="_blank"
                >
                  <FaThreads size={25} />
                </Link>

                <Link
                  href="https://www.tiktok.com/@sintaksrupa"
                  target="_blank"
                >
                  <FaTiktok size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-5">
          &copy; {new Date().getFullYear()} Sintaks Rupa. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
