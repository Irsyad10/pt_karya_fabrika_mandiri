import React from "react";
import Link from "next/link";
import { Factory, Mail, Phone, MapPin, ArrowUp, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#ffffff] border-t border-[#2f2f2f] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2f2f2f]">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#171717] rounded-[8px] flex items-center justify-center border border-[#2f2f2f]">
                <Factory className="w-5 h-5 text-[#d1ffca]" />
              </div>
              <div>
                <span className="font-condensed text-2xl font-bold tracking-tight uppercase block leading-none">
                  PT KARYA FABRIKA MANDIRI
                </span>
                <span className="font-mono text-[11px] text-[#979797] uppercase">
                  Engineering · Construction · Manufacturing
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#979797] leading-relaxed max-w-[420px] font-normal">
              Perusahaan penyedia solusi terintegrasi di bidang konsultasi rekayasa,
              konstruksi struktur baja, pengadaan material proyek, dan manufaktur presisi.
              Berkomitmen pada ketepatan perencanaan, mutu tinggi, efisiensi biaya,
              serta standar keselamatan K3 nasional.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-[#171717] text-[#d1ffca] font-mono text-[11px] px-3 py-1 rounded-[4px] border border-[#2f2f2f]">
                ISO 9001:2015
              </span>
              <span className="bg-[#171717] text-[#d1ffca] font-mono text-[11px] px-3 py-1 rounded-[4px] border border-[#2f2f2f]">
                ISO 45001:2018
              </span>
              <span className="bg-[#171717] text-[#fff100] font-mono text-[11px] px-3 py-1 rounded-[4px] border border-[#2f2f2f]">
                ZERO ACCIDENT K3
              </span>
            </div>
          </div>

          {/* Pillars Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs text-[#d1ffca] uppercase tracking-wider block">
              [ 04 PILAR UTAMA ]
            </span>
            <ul className="space-y-2 text-sm text-[#979797]">
              <li>
                <a
                  href="#layanan"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>01.</span>
                  <span>Konsultasi &amp; Desain Teknis</span>
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>02.</span>
                  <span>Konstruksi Baja Terpadu</span>
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>03.</span>
                  <span>Pengadaan Material Proyek</span>
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>04.</span>
                  <span>Manufaktur &amp; Fabrikasi Workshop</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#kalkulator"
                  className="text-[#ffffff] hover:text-[#d1ffca] font-mono text-xs flex items-center gap-1"
                >
                  → Buka Kalkulator Estimasi Proyek
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop Address */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs text-[#d1ffca] uppercase tracking-wider block">
              [ KANTOR &amp; WORKSHOP ]
            </span>
            <div className="space-y-3 text-xs font-mono text-[#979797]">
              <div>
                <span className="text-white font-semibold block mb-0.5">
                  Workshop &amp; Fabrikasi:
                </span>
                <p>
                  Kawasan Industri Jababeka Phase VI, Cikarang, Kab. Bekasi, Jawa Barat
                  17530
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
                  <Phone className="w-3.5 h-3.5 text-[#d1ffca]" />
                  <span>+62 21 8990 1234 / +62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-3.5 h-3.5 text-[#fff100]" />
                  <span>proyek@karyafabrika.co.id</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#979797]">
          <p>
            © {new Date().getFullYear()} PT KARYA FABRIKA MANDIRI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#k3-sertifikasi" className="hover:text-white transition-colors">
              Kebijakan K3 &amp; Mutu
            </a>
            <a href="#layanan" className="hover:text-white transition-colors">
              Standar Operasional Prosedur
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-[#d1ffca] hover:underline"
            >
              <span>Kembali Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
