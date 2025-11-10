type MainNavLink = {
  href: string;
  label: string;
};

type ServicesNavLink = {
  href: string;
  label: string;
};

export const MainNavLinks: MainNavLink[] = [
  {
    href: "/",
    label: "Beranda",
  },
  {
    href: "/galeri",
    label: "Galeri",
  },
  {
    href: "/layanan",
    label: "Layanan",
  },
];

export const servicesNavLinks: ServicesNavLink[] = [
  {
    href: "/layanan",
    label: "Semua",
  },
  {
    href: "/layanan/desain-grafis",
    label: "Desain Grafis",
  },
  {
    href: "/layanan/website",
    label: "Website",
  },
];
