import type { Metadata } from "next";
import { type Service } from "@/data/services";
import { services } from "@/data/services";
import { ServicesSection } from "@/components/layanan/ServicesSection";

export const metadata: Metadata = {
  title: "Layanan Website",
};

function getSortedWebsiteServices(services: Service[]) {
  const category = "Website";
  const websiteServices = services.filter(
    (service) => service.category === category
  );

  return websiteServices;
}

export default function LayananWebsite() {
  return <ServicesSection services={getSortedWebsiteServices(services)} />;
}
