import { type Service } from "@/data/services";

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center md:justify-between max-w-2xl lg:max-w-5xl xl:max-w-7xl gap-5 mx-3 md:mx-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col min-h-48 w-72 gap-1 items-center justify-center text-center border p-5"
          >
            <h3 className="text-xl uppercase">{service.title}</h3>

            {service.regularPrice ? (
              <p className="font-medium">
                Mulai dari
                <span className="block">
                  <del className="text-red-500 font-normal">
                    {service.originalPrice}
                  </del>
                </span>
                {service.regularPrice}
              </p>
            ) : (
              <p className="font-medium">Hubungi Kami</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
