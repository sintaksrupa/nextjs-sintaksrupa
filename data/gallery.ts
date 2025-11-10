export enum GalleryCategory {
  DESAIN_GRAFIS = "DESAIN_GRAFIS",
  WEBSITE = "WEBSITE",
}

export type GalleryImage = {
  url: string;
  alt: string;
};

export type Gallery = {
  category: GalleryCategory;
  title: string;
  description: string[];
  images: GalleryImage[];
};

export const galleries: Gallery[] = [
  // ETTASHANE
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Ettashane",
    description: [
      "Ettashane memasuki pasar susu kambing sebagai pendatang baru, dengan tantangan utama menciptakan citra merek yang modern, segar, dan berbeda dari produk serupa. Tujuan utamanya adalah untuk mengedukasi audiens mengenai manfaat produk dan membangun kepercayaan sejak awal.",
      "Saya merancang identitas visual yang strategis dan kohesif untuk media sosial serta iklan digital. Fokusnya adalah pada tampilan visual yang bersih dan penyampaian cerita yang autentik. Desain ini bertujuan untuk membedakan merek tersebut dan menciptakan fondasi yang kuat untuk kampanye pemasaran di masa depan.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/ettashane-social-media.webp",
        alt: "Ettashane Social Media",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/ettashane-marketing.webp",
        alt: "Ettashane Marketing",
      },
    ],
  },
  // HERBADYNE
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Herbadyne",
    description: [
      "Proyek ini berfokus pada desain ulang visual produk pasta gigi herbal, Herbadyne, di platform e-commerce. Tujuannya adalah untuk meningkatkan daya tarik visual, membangun citra merek yang konsisten yang memberikan kesan alami dan sehat, serta memudahkan konsumen menemukan informasi produk melalui tata letak yang bersih.",
      "Desain ulang visual ini menampilkan warna-warna yang terinspirasi dari herbal, tipografi minimalis, dan galeri produk yang profesional dan interaktif. Deskripsi singkat yang padat dan persuasif juga ditambahkan agar lebih meyakinkan. Hasilnya diharapkan dapat meningkatkan kepercayaan konsumen, meningkatkan minat beli, dan memperkuat posisi pasar Herbadyne.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/herbadyne-e-commerce.webp",
        alt: "Herbadyne E-Commerce",
      },
    ],
  },
  // BENEFA
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Benefa",
    description: [
      "Proyek ini berfokus pada desain ulang tampilan visual toko e-commerce Benefa skincare. Lingkup pekerjaannya mencakup pembuatan banner toko dan visual produk yang menarik serta selaras dengan identitas merek. Tujuannya adalah untuk meningkatkan daya tarik, profesionalisme, dan citra premiumnya sebagai lini perawatan kulit alami.",
      "Dalam desainnya, saya memasukkan elemen-elemen elegan yang mencerminkan kesan sofistikasi dan modern. Banner dirancang agar komunikatif dan menarik pengunjung, sementara visual produk diperbarui agar lebih konsisten, modern, dan persuasif dalam mendorong minat beli konsumen.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/benefa-banner.webp",
        alt: "Benefa Banner",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/benefa-e-commerce.webp",
        alt: "Benefa E-Commerce",
      },
    ],
  },
  // Miss Clean
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Miss Clean",
    description: [
      "Proyek ini melibatkan perancangan banner toko e-commerce untuk Miss Clean, sebuah merek yang menyediakan produk-produk kebersihan. Tujuannya adalah untuk membangun tampilan toko yang profesional, menarik, dan mudah dikenali oleh konsumen.",
      "Dalam proses desain, saya menggunakan elemen-elemen yang cerah, segar, dan komunikatif untuk mencerminkan kesan bersih. Banner dirancang dengan gaya visual yang konsisten, menampilkan identitas merek Miss Clean secara lebih menonjol untuk meningkatkan kepercayaan pelanggan dan menarik pembeli di platform e-commerce.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/miss-clean-banner.webp",
        alt: "Miss Clean Banner",
      },
    ],
  },
  // JOTHAMILK
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Jothamilk",
    description: [
      "Proyek ini berfokus pada desain ulang tampilan toko e-commerce untuk Jothamilk, sebuah produk susu kambing etawa yang sehat. Lingkup pekerjaannya mencakup pembuatan banner toko yang komunikatif dan pembaruan visual produk agar lebih menarik serta mudah dikenali oleh konsumen.",
      "Dalam desainnya, saya menekankan kesan alami dan sehat melalui kombinasi warna-warna bersih dan tipografi yang jelas. Banner ditata untuk meningkatkan daya tarik toko, sementara visual produk diperbarui agar selaras dengan identitas merek Jothamilk, yang menonjolkan kualitas dan manfaatnya.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/jothamilk-banner.webp",
        alt: "Jothamilk Banner",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/jothamilk-e-commerce.webp",
        alt: "Jothamilk E-Commerce",
      },
    ],
  },
  // TEH DAUN SENNA
  {
    category: GalleryCategory.DESAIN_GRAFIS,
    title: "Teh Daun Senna",
    description: [
      "Proyek ini berfokus pada desain visual produk Teh Daun Senna untuk e-commerce. Dikenal sebagai teh pelangsing alami, desain ini menonjolkan manfaat kesehatan dan gaya hidup sehat.",
      "Tampilan visual dibuat dengan nuansa hijau segar dan tipografi modern agar informasi menjadi jelas dan menarik. Elemen grafis, seperti ilustrasi daun dan kemasan produk, diperkuat untuk membangun citra alami, sekaligus meningkatkan daya tarik dan kepercayaan konsumen di platform e-commerce.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/teh-daun-senna-e-commerce.webp",
        alt: "Teh Daun Senna E-Commerce",
      },
    ],
  },
  // COMPUTEPEDIA
  {
    category: GalleryCategory.WEBSITE,
    title: "Computepedia",
    description: [
      "Computepedia adalah proyek full-stack yang dirancang sebagai studi kasus untuk membangun aplikasi web modern dari awal. Proyek ini menyimulasikan sebuah toko online sederhana di mana pengguna yang telah terautentikasi dapat mengelola katalog produk dan kategori.",
      "Tujuan utama dari proyek ini adalah untuk mengimplementasikan arsitektur yang bersih dan terpisah (MVC pada backend, manajemen state terpusat pada frontend) serta fitur-fitur esensial seperti keamanan API dan pengalaman pengguna yang reaktif.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/computepedia-home.webp",
        alt: "Computepedia Halaman Beranda",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/computepedia-edit-product.webp",
        alt: "Computepedia Halaman Edit Produk",
      },
    ],
  },
  // NEXOCIAL
  {
    category: GalleryCategory.WEBSITE,
    title: "Nexocial",
    description: [
      "Nexocial adalah aplikasi media sosial full-stack yang dibangun dari awal menggunakan App Router Next.js. Proyek ini berfungsi sebagai studi kasus komprehensif untuk pengembangan web modern, yang mendemonstrasikan cara mengintegrasikan berbagai tools andal untuk menciptakan pengalaman pengguna yang mulus dan berperforma tinggi.",
      "Proyek ini memiliki backend yang andal, didukung oleh Prisma dan database Postgres serverless dari Neon. Kekuatan ini dilengkapi dengan frontend yang reaktif, yang dibangun menggunakan kombinasi Server dan Client Components, termasuk implementasi WebSocket untuk mengirimkan notifikasi instan secara real-time kepada pengguna.",
    ],
    images: [
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/nexocial-home.webp",
        alt: "Nexocial Halaman Beranda",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/nexocial-notifications.webp",
        alt: "Nexocial Halaman Notifikasi",
      },
      {
        url: "https://qbbs2frdex6nzjnr.public.blob.vercel-storage.com/nexocial-profile.webp",
        alt: "Nexocial Halaman Profil",
      },
    ],
  },
];
