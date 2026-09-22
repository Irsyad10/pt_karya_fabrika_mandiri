import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "PT Karya Fabrika Mandiri — Solusi Terintegrasi Rekayasa, Konstruksi, Pengadaan & Manufaktur",
  description:
    "Penyedia solusi terintegrasi di bidang konsultasi, konstruksi, pengadaan material, dan manufaktur presisi untuk mendukung proyek dari perencanaan hingga pelaksanaan dengan standar K3 dan mutu terbaik.",
  keywords: [
    "PT Karya Fabrika Mandiri",
    "Konsultasi Teknik",
    "Konstruksi Baja",
    "Pengadaan Material Proyek",
    "Manufaktur & Fabrikasi Presisi",
    "Gudang Modern",
    "Struktur Baja",
  ],
  authors: [{ name: "PT Karya Fabrika Mandiri" }],
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
        {children}
      </body>
    </html>
  );
}
