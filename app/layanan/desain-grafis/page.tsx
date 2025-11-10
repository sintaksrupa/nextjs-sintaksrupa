import type { Metadata } from "next";
import { type Service } from "@/data/services";
import { services } from "@/data/services";
import { ServicesSection } from "@/components/layanan/ServicesSection";

export const metadata: Metadata = {
  title: "Layanan Desain Grafis",
};

function getSortedGraphicDesignServices(services: Service[]) {
  const category = "Desain Grafis";
  const graphicDesignServices = services.filter(
    (service) => service.category === category
  );

  return graphicDesignServices;
}

export default function LayananDesainGrafis() {
  return (
    <ServicesSection services={getSortedGraphicDesignServices(services)} />
  );
}
