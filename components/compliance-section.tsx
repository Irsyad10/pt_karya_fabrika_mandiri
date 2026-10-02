import React from "react";
import { Badge } from "./ui/badge";
import {
  ShieldCheck,
  Award,
  FileCheck,
  CheckCircle,
  HardHat,
  Scale,
  Users,
} from "lucide-react";

export function ComplianceSection() {
  const certifications = [
    {
      code: "ISO 9001:2015",
      title: "SISTEM MANAJEMEN MUTU",
      org: "Quality Management System",
      desc: "Menjamin proses konsultasi, fabrikasi, dan konstruksi konsisten mengikuti prosedur mutu terstandarisasi internasional.",
    },
    {
      code: "ISO 45001:2018",
      title: "MANAJEMEN K3 INTERNASIONAL",
      org: "Occupational Health & Safety",
      desc: "Standar tertinggi dalam manajemen risiko bahaya kerja di area workshop manufaktur dan site konstruksi proyek.",
    },
    {
      code: "SNI 1729:2020",
      title: "STANDAR NASIONAL BAJA STRUKTURAL",
      org: "Badan Standardisasi Nasional",
      desc: "Kepatuhan perhitungan daya dukung, stabilitas lentur, dan toleransi sambungan baut serta las baja bangunan gedung.",
    },
    {
      code: "AWS D1.1 & ASME",
      title: "STANDAR PENGELASAN & BEJANA TEKAN",
      org: "American Welding Society",
      desc: "Prosedur pengelasan (WPS & PQR) bersertifikasi untuk memastikan sambungan struktural bebas cacat mikro.",
    },
  ];

  const expertises = [
    {
      title: "Ahli Utama Teknik Bangunan Gedung",
      body: "Sertifikat Keahlian (SKA) LPJK / BNSP untuk perancangan struktur bentang lebar & gedung bertingkat.",
    },
    {
      title: "Ahli K3 Konstruksi Kemenaker RI",
      body: "Pengawasan keselamatan aktif pada seluruh proses mobilisasi, pengangkatan crane, dan kerja di ketinggian.",
    },
    {
      title: "Welder Bersertifikat Kelas 6G / 4G",
      body: "Juru las berlisensi resmi dengan kualifikasi pengelasan plat tebal, bejana tekan, dan struktur baja berat.",
    },
    {
      title: "Quality Control Inspector NDT / UT",
      body: "Inspektur mutu bersertifikasi ASNT Level II untuk pemeriksaan ultrasonik dan magnetic particle testing.",
    },
  ];

  return (
    <section id="legalitas" className="py-16 sm:py-24 scroll-mt-20">
      <span id="k3-sertifikasi" className="sr-only" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="mint">KEPATUHAN REGULASI &amp; LEGALITAS</Badge>
              <span className="font-mono text-xs text-[#71767c]">K3 &amp; SERTIFIKASI</span>
            </div>
            <h2 className="font-condensed text-[42px] sm:text-[64px] font-extrabold uppercase tracking-tight text-[#012655] leading-[0.9]">
              STANDAR KESELAMATAN &amp; KUALIFIKASI TEKNIS
            </h2>
          </div>
          <p className="text-[16px] text-[#484d53] max-w-[460px] font-normal leading-relaxed">
            Legalitas penuh, sertifikasi tenaga ahli terdaftar, serta kepatuhan
            pada standar industri nasional dan internasional demi melindungi investasi proyek Anda.
          </p>
        </div>

        {/* 4 Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] rounded-[24px] p-6 border border-[#a4a6a9]/30 flat-card flex flex-col justify-between hover:border-[#0065bf] transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-white bg-[#0065bf] px-2.5 py-1 rounded-[4px] shadow-xs">
                    {cert.code}
                  </span>
                  <Award className="w-5 h-5 text-[#012655]" />
                </div>
                <h3 className="font-condensed text-[20px] font-bold uppercase tracking-tight text-[#012655] mb-1">
                  {cert.title}
                </h3>
                <span className="font-mono text-[11px] text-[#71767c] uppercase block mb-3">
                  {cert.org}
                </span>
                <p className="text-[13px] text-[#484d53] leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#a4a6a9]/20 flex items-center gap-2 text-xs font-mono text-[#012655]">
                <CheckCircle className="w-4 h-4 text-[#0065bf]" />
                <span>AKTIF &amp; TERVERIFIKASI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Competent Experts Box */}
        <div className="bg-[#ffffff] rounded-[32px] p-8 sm:p-10 border border-[#a4a6a9]/30 flat-card shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-[#0065bf] uppercase tracking-wider block mb-2 font-bold">
                TENAGA AHLI KOMPETEN
              </span>
              <h3 className="font-condensed text-[32px] sm:text-[40px] font-extrabold uppercase text-[#012655] leading-tight mb-4">
                DITANGANI LANGSUNG OLEH PRAKTISI BERLISENSI
              </h3>
              <p className="text-[15px] text-[#484d53] leading-relaxed mb-6 font-normal">
                Setiap proyek dipimpin oleh Project Manager bersertifikat dan
                didampingi tim engineer lintas disiplin sipil, struktur, mesin, dan K3.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#012655] text-white flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#60a5fa]" />
                </div>
                <div>
                  <span className="font-condensed text-xl font-bold uppercase text-[#012655] block leading-none">
                    45+ PERSONEL TEKNIS
                  </span>
                  <span className="font-mono text-xs text-[#71767c]">
                    In-House Engineers &amp; Specialists
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertises.map((exp, eIdx) => (
                <div
                  key={eIdx}
                  className="bg-[#f4f6f9] p-5 rounded-[20px] border border-[#a4a6a9]/20 hover:border-[#0065bf] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#0065bf]" />
                    <h4 className="font-bold text-[15px] text-[#012655] leading-snug">
                      {exp.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-[#484d53] leading-relaxed">
                    {exp.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
