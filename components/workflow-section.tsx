"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import {
  FileSearch,
  PenTool,
  Cpu,
  HardHat,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "KONSULTASI & STUDI KELAYAKAN",
      phase: "Fase Pra-Konstruksi",
      icon: FileSearch,
      desc: "Diskusi komprehensif untuk memetakan tujuan operasional, survey topografi dan geoteknik tanah, serta menyusun studi kelayakan teknis dan estimasi awal penganggaran.",
      activities: [
        "Survey geoteknik tanah (Soil Test & Sondir)",
        "Penyelarasan kebutuhan fungsional & kapasitas beban",
        "Analisis regulasi zonasi perizinan teknis (PBG/SLF)",
        "Estimasi awal RAB (Rough Order of Magnitude)",
      ],
      output: "Dokumen Feasibility Study & Terms of Reference (TOR)",
    },
    {
      num: "02",
      title: "PERENCANAAN & DESAIN TEKNIS (BIM)",
      phase: "Fase Rekayasa & Simulasi",
      icon: PenTool,
      desc: "Transformasi konsep menjadi model digital 3D BIM dengan simulasi struktur beban gempa dan angin. Memastikan seluruh titik sambungan presisi dan bebas benturan antar disiplin kerja.",
      activities: [
        "Analisis komputasi struktur baja & beton (SAP2000/ETABS)",
        "Pemodelan 3D Tekla Structures Level of Detail (LOD 400)",
        "Clash detection antara arsitektur, struktur, dan utilitas MEP",
        "Penyusunan Rencana Kerja & Syarat (RKS) serta Shop Drawing",
      ],
      output: "Gambar Kerja Terperinci (Shop Drawings) & BoQ Definitif",
    },
    {
      num: "03",
      title: "PENGADAAN MATERIAL & FABRIKASI WORKSHOP",
      phase: "Fase Manufaktur Presisi",
      icon: Cpu,
      desc: "Material baja bersertifikasi pabrik dipotong, dilubangi, dan dilas di workshop terpadu kami dengan mesin CNC laser serta welder berlisensi Kemenaker.",
      activities: [
        "Verifikasi Mill Certificate baja profil & plat industri",
        "Pemotongan CNC & pengeboran baut dengan toleransi ±0.05mm",
        "Pengelasan Submerged Arc / SMAW dengan sertifikasi AWS D1.1",
        "Surface preparation Sa 2.5 dan aplikasi cat proteksi anti-karat",
      ],
      output: "Komponen Baja Siap Ereksi dengan Laporan NDT/UT Lulus Uji",
    },
    {
      num: "04",
      title: "KONSTRUKSI & EKSEKUSI SITE LAPANGAN",
      phase: "Fase Instalasi Fisik",
      icon: HardHat,
      desc: "Mobilisasi komponen ke lokasi proyek untuk perakitan dan ereksi menggunakan mobile crane. Setiap aktivitas berada di bawah komando Ahli K3 Konstruksi demi tercapainya target Zero Accident.",
      activities: [
        "Pekerjaan pondasi bore pile & pedestal beton bertulang",
        "Ereksi kolom, rafter, dan tie-beam dengan crane tersertifikasi",
        "Pemasangan atap metal sheet, insulated panel & talang air",
        "Instalasi sistem proteksi petir, grounding, dan utilitas pendukung",
      ],
      output: "Fisik Bangunan Berdiri Kokoh Sesuai Jadwal Milestone",
    },
    {
      num: "05",
      title: "QUALITY CONTROL, UJI FUNGSI & HANDOVER",
      phase: "Fase Finalisasi & Garansi",
      icon: CheckCircle,
      desc: "Inspeksi menyeluruh, pengetesan beban (load testing), uji kekedapan air pada atap, penyusunan berkas As-Built Drawing, serta serah terima kunci kepada pemilik proyek.",
      activities: [
        "Pemeriksaan ketebalan cat (DFT gauge test) dan torsi baut",
        "Water tightness test pada sambungan atap dan dinding",
        "Penerbitan dokumen As-Built Drawing & Manual Pemeliharaan",
        "Masa retensi pemeliharaan dan garansi struktural resmi",
      ],
      output: "Berita Acara Serah Terima (BAST) & Garansi Mutu Konstruksi",
    },
  ];

  return (
    <section id="alur-kerja" className="py-16 sm:py-24 border-t border-[#c6c6c6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="mint">INTEGRASI 5 TAHAPAN TERPADU</Badge>
              <span className="font-mono text-xs text-[#444444]">ROADMAP KERJA</span>
            </div>
            <h2 className="font-condensed text-[42px] sm:text-[64px] font-extrabold uppercase tracking-tight text-[#000000] leading-[0.9]">
              ALUR KERJA DARI PERENCANAAN HINGGA PELAKSANAAN
            </h2>
          </div>
          <p className="text-[16px] text-[#444444] max-w-[460px] font-normal leading-relaxed">
            Metodologi terstruktur yang menjamin setiap tahapan saling terhubung tanpa
            gap komunikasi antar konsultan perencana, workshop manufaktur, dan kontraktor lapangan.
          </p>
        </div>

        {/* Steps Progress Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-[16px] text-left transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                    : "bg-[#ffffff] text-[#000000] border-[#c6c6c6]/50 hover:border-[#000000]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[12px] font-bold ${
                      isActive ? "text-[#d1ffca]" : "text-[#979797]"
                    }`}
                  >
                    TAHAP {step.num}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isActive ? "bg-[#2f2f2f] text-white" : "bg-[#f3f3f3] text-[#444444]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-condensed text-[16px] sm:text-[18px] font-bold uppercase leading-snug line-clamp-2">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase (DESIGN.md Standard Card: 32px radius, white surface, flat) */}
        <div className="bg-[#ffffff] rounded-[32px] p-6 sm:p-10 border border-[#c6c6c6]/60 flat-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="mint" size="sm">
                  {steps[activeStep].phase}
                </Badge>
                <span className="font-mono text-xs text-[#979797]">
                  PROSES TERKONTROL
                </span>
              </div>

              <h3 className="font-condensed text-[32px] sm:text-[46px] font-extrabold uppercase text-[#000000] leading-tight mb-4">
                TAHAP {steps[activeStep].num}: {steps[activeStep].title}
              </h3>

              <p className="text-[16px] text-[#444444] leading-relaxed mb-6 font-normal">
                {steps[activeStep].desc}
              </p>

              {/* Checklist Activities */}
              <div className="space-y-2.5 mb-8">
                <span className="font-mono text-[11px] text-[#979797] uppercase tracking-wider block mb-2">
                  AKTIVITAS UTAMA &amp; KENDALI MUTU:
                </span>
                {steps[activeStep].activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                      ✓
                    </div>
                    <span className="text-[14px] sm:text-[15px] text-[#2f2f2f] font-medium leading-tight">
                      {act}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deliverable Callout */}
              <div className="bg-[#f3f3f3] p-4 rounded-[16px] border border-[#c6c6c6]/40 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-[#979797] uppercase block">
                    DELIVERABLE RESMI
                  </span>
                  <span className="font-bold text-[14px] text-[#000000]">
                    {steps[activeStep].output}
                  </span>
                </div>
                <Badge variant="yellow" size="sm">
                  VERIFIED
                </Badge>
              </div>
            </div>

            {/* Right: Technical Infographic Visual Box */}
            <div className="lg:col-span-5 bg-[#000000] text-white rounded-[24px] p-6 sm:p-8 flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2f2f2f] mb-6">
                  <span className="font-mono text-xs text-[#d1ffca]">
                    STANDAR KENDALI KARYA FABRIKA
                  </span>
                  <span className="font-mono text-xs text-[#fff100]">
                    SOP-0{activeStep + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#171717] rounded-[16px] border border-[#2f2f2f]">
                    <span className="font-mono text-[10px] text-[#979797] uppercase block">
                      FOKUS UTAMA
                    </span>
                    <span className="font-condensed text-xl font-bold uppercase text-white">
                      Eliminasi Gap Desain &amp; Lapangan
                    </span>
                  </div>

                  <div className="p-4 bg-[#171717] rounded-[16px] border border-[#2f2f2f]">
                    <span className="font-mono text-[10px] text-[#979797] uppercase block">
                      PENGESAHAN TEKNIS
                    </span>
                    <span className="font-condensed text-xl font-bold uppercase text-white">
                      Lead Structural Engineer &amp; Ahli K3
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2f2f2f] flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="font-mono text-xs text-[#979797] hover:text-white disabled:opacity-30 cursor-pointer"
                >
                  ← TAHAP SEBELUMNYA
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
                  }
                  className="font-mono text-xs text-[#d1ffca] hover:underline disabled:opacity-30 cursor-pointer flex items-center gap-1"
                >
                  <span>TAHAP SELANJUTNYA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
