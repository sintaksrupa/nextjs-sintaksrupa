import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicesSection } from "@/components/layanan/ServicesSection";

export const metadata: Metadata = {
  title: "Layanan",
};

export default function Layanan() {
  return <ServicesSection services={services} />;
}
