"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <footer className="bg-[#012655] text-[#ffffff] border-t border-[#0065bf]/30 pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0065bf]/20">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-14 bg-white rounded-[10px] p-1.5 flex items-center justify-center border border-white/20 shadow-sm shrink-0">
                <Image
                  src="/images/kfm-logo-transparent.png"
                  alt="PT. KARYA FABRIKA MANDIRI Logo"
                  width={100}
                  height={68}
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-condensed text-2xl font-bold tracking-tight uppercase block leading-none text-white">
                  PT. KARYA FABRIKA MANDIRI
                </span>
                <span className="font-mono text-[11px] text-[#a4a6a9] uppercase">
                  Engineering · Construction · Manufacturing
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#a4a6a9] leading-relaxed max-w-[420px] font-normal">
              {isEn
                ? "Integrated contractor providing engineering consultation, structural steel construction, material procurement, and precision fabrication with a continuous Zero Accident K3 commitment."
                : "Perusahaan penyedia solusi terintegrasi di bidang konsultasi rekayasa, konstruksi struktur baja, pengadaan material proyek, dan manufaktur presisi dengan komitmen Zero Accident K3 nasional."}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-[#001a3d] text-[#ffffff] font-mono text-[11px] px-3 py-1 rounded-[4px] border border-[#0065bf]/40">
                ISO 9001:2015
              </span>
              <span className="bg-[#001a3d] text-[#ffffff] font-mono text-[11px] px-3 py-1 rounded-[4px] border border-[#0065bf]/40">
                ISO 45001:2018
              </span>
              <span className="bg-[#0065bf] text-white font-mono text-[11px] px-3 py-1 rounded-[4px] font-bold">
                ZERO ACCIDENT K3
              </span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs text-[#60a5fa] uppercase tracking-wider block font-bold">
              [ {isEn ? "QUICK NAVIGATION" : "NAVIGASI HALAMAN"} ]
            </span>
            <ul className="space-y-2 text-sm text-[#a4a6a9]">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Home Page" : "Halaman Utama (Home)"}</span>
                </Link>
              </li>
              <li>
                <Link href="/#visi-misi" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Vision, Mission & Motto" : "Visi, Misi & Motto"}</span>
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Our Services" : "Layanan Kami (Our Services)"}</span>
                </Link>
              </li>
              <li>
                <Link href="/portofolio" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Project Portfolio" : "Portofolio Proyek"}</span>
                </Link>
              </li>
              <li>
                <Link href="/legalitas" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Legality & Compliance" : "Legalitas & Sertifikasi"}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#0065bf]">•</span>
                  <span>{isEn ? "Contact Us" : "Hubungi Kami (Contact Us)"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop Address */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs text-[#60a5fa] uppercase tracking-wider block font-bold">
              [ {isEn ? "OFFICE & WORKSHOP" : "KANTOR & WORKSHOP"} ]
            </span>
            <div className="space-y-3 text-xs font-mono text-[#a4a6a9]">
              <div>
                <span className="text-white font-semibold block mb-0.5">
                  Workshop &amp; Fabrikasi:
                </span>
                <p>
                  Kawasan Industri Jababeka Phase VI, Cikarang, Kab. Bekasi, Jawa Barat 17530
                </p>
              </div>

              <div>
                <span className="text-white font-semibold block mb-0.5">
                  Head Office:
                </span>
                <p>
                  Gedung Menara Mandiri Lt. 18, Jl. Jend. Sudirman, Jakarta Selatan 12190
                </p>
              </div>

              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-3.5 h-3.5 text-[#60a5fa]" />
                  <span>+62 21 8990 1234 / +62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-3.5 h-3.5 text-[#60a5fa]" />
                  <span>proyek@karyafabrika.co.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#a4a6a9]">
          <p>
            © {new Date().getFullYear()} PT. KARYA FABRIKA MANDIRI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legalitas" className="hover:text-white transition-colors">
              {isEn ? "Legality & Licenses" : "Legalitas & Izin Usaha"}
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              {isEn ? "Consultation Desk" : "Meja Konsultasi"}
            </Link>
            <a
              href="#"
              className="flex items-center gap-1 text-[#60a5fa] hover:text-white transition-colors hover:underline"
            >
              <span>{isEn ? "Back To Top" : "Kembali Ke Atas"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
