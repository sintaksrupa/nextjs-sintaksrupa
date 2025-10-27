import type { Metadata } from "next";
import { Playfair_Display_SC, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fontSerif = Playfair_Display_SC({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
});

const fontSans = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | SintaksRupa",
    default: "SintaksRupa - Jasa Desain Grafis & Website Terjangkau Terpercaya",
  },
  description:
    "Sintaks Rupa adalah partner kreatif digital yang berbasis di Klaten, Jawa Tengah. Kami adalah spesialis dalam layanan desain grafis dan pengembangan website. Semangat kami adalah membantu bisnis dan UMKM untuk bertumbuh dan tampil profesional di dunia digital melalui identitas visual yang kuat dan website yang optimal.",
  keywords: [
    "Sintaks Rupa",
    "Jasa Desain Grafis",
    "Jasa Website",
    "Jasa Desain Grafis dan Website",
    "Jasa Pembuatan Desain Grafis",
    "Jasa Pengembangan Website",
    "Jasa Pembuatan Desain Grafis dan Website",
    "Jasa Desain Grafis Terpercaya",
    "Jasa Website Terpercaya",
    "Jasa Desain Grafis dan Website Terpercaya",
    "Jasa Pembuatan Desain Grafis Terpercaya",
    "Jasa Pengembangan Website Terpercaya",
    "Jasa Pembuatan Desain Grafis dan Website Terpercaya",
    "Jasa Desain Grafis Murah",
    "Jasa Website Murah",
    "Jasa Desain Grafis dan Website Murah",
    "Jasa Pembuatan Desain Grafis Murah",
    "Jasa Pengembangan Website Murah",
    "Jasa Pembuatan Desain Grafis dan Website Murah",
    "Jasa Desain Grafis Klaten",
    "Jasa Website Klaten",
    "Jasa Desain Grafis dan Website Klaten",
    "Jasa Pembuatan Desain Grafis Klaten",
    "Jasa Pengembangan Website Klaten",
    "Jasa Pembuatan Desain Grafis dan Website Klaten",
    "Jasa Desain Grafis Jawa Tengah",
    "Jasa Website Jawa Tengah",
    "Jasa Desain Grafis dan Website Jawa Tengah",
    "Jasa Pembuatan Desain Grafis Jawa Tengah",
    "Jasa Pengembangan Website Jawa Tengah",
    "Jasa Pembuatan Desain Grafis dan Website Jawa Tengah",
  ],
  authors: [
    {
      name: "Sintaks Rupa",
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SintaksRupa - Jasa Desain Grafis & Website Terjangkau Terpercaya",
    description:
      "Sintaks Rupa adalah partner kreatif digital yang berbasis di Klaten, Jawa Tengah. Kami adalah spesialis dalam layanan desain grafis dan pengembangan website. Semangat kami adalah membantu bisnis dan UMKM untuk bertumbuh dan tampil profesional di dunia digital melalui identitas visual yang kuat dan website yang optimal.",
    url: "https://sintaksrupa.site/",
    siteName: "SintaksRupa",
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/primary-logo-type-sintaks-rupa.jpg",
        width: 800,
        height: 600,
        alt: "Sintaks Rupa Primary Logo Type",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/primary-logo-type-sintaks-rupa.jpg",
        width: 1800,
        height: 1600,
        alt: "Sintaks Rupa Primary Logo Type",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SintaksRupa - Jasa Desain Grafis & Website Terjangkau Terpercaya",
    description:
      "Sintaks Rupa adalah partner kreatif digital yang berbasis di Klaten, Jawa Tengah. Kami adalah spesialis dalam layanan desain grafis dan pengembangan website. Semangat kami adalah membantu bisnis dan UMKM untuk bertumbuh dan tampil profesional di dunia digital melalui identitas visual yang kuat dan website yang optimal.",
    images: [
      "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/primary-logo-type-sintaks-rupa.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fontSerif.variable} ${fontSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
