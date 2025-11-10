export function HeroSection() {
  return (
    <section className="flex items-center justify-center bg-[url(https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/hero-image-layanan-sintaks-rupa.webp)] bg-cover bg-center">
      <div className="flex h-[75vh] w-full flex-col items-start md:items-center justify-center bg-black/75 px-3 md:px-5">
        <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex flex-col gap-6 items-start md:items-center justify-center text-start md:text-center text-primary-foreground pt-7">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl uppercase tracking leading-11 md:leading-14 lg:leading-17">
            Layanan Desain Grafis & Website{" "}
            <span className="font-sans capitalize">
              Sintaks<span className="font-serif text-accent">Rupa</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
