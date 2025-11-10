type MainNavLink = {
  href: string;
  label: string;
};

type CategoryNavLink = {
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

export const galleryNavLinks: CategoryNavLink[] = [
  {
    href: "/galeri",
    label: "Semua",
  },
  {
    href: "/galeri/desain-grafis",
    label: "Desain Grafis",
  },
  {
    href: "/galeri/website",
    label: "Website",
  },
];

export const servicesNavLinks: CategoryNavLink[] = [
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
