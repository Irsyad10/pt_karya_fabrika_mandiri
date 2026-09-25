import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. KARYA FABRIKA MANDIRI — Building Trust Through Quality",
  description:
    "Solusi Terintegrasi Rekayasa, Konstruksi, Pengadaan & Manufaktur Presisi. Berkomitmen pada standar mutu SNI/ASTM, akurasi perencanaan BIM 3D, dan Zero Accident K3.",
  keywords: [
    "PT. KARYA FABRIKA MANDIRI",
    "PT Karya Fabrika Mandiri",
    "Konstruksi Baja",
    "Fabrikasi Baja Presisi",
    "Gudang Industri",
    "Jasa Konstruksi",
    "Pengadaan Material Baja",
    "Kontraktor EPC",
    "Building Trust Through Quality",
  ],
  authors: [{ name: "PT. KARYA FABRIKA MANDIRI" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#e5e5e5] text-[#000000] font-sans antialiased selection:bg-[#d1ffca] selection:text-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
