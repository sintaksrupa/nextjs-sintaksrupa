export function HeroSection() {
  return (
    <section className="flex items-center justify-center bg-[url(https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/hero-image-sintaks-rupa.webp)] bg-cover bg-center">
      <div className="flex min-h-screen w-full flex-col items-start md:items-center justify-center bg-black/75 px-3 md:px-5">
        <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex flex-col gap-6 items-start md:items-center justify-center text-start md:text-center text-primary-foreground pt-7">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl uppercase tracking leading-11 md:leading-14 lg:leading-17">
            Jasa Desain Grafis & Website Terjangkau{" "}
            <span className="text-accent">Terpercaya</span>
          </h1>

          <p className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-base md:text-lg lg:text-xl">
            Saatnya bisnismu naik level! Dapatkan desain grafis dan website
            profesional dengan harga bersahabat dan proses cepat. Bikin karya
            lokal makin dikenal, karena kami{" "}
            <span className="text-accent">#PartnernyaUMKM</span>
          </p>
        </div>
      </div>
    </section>
  );
}
