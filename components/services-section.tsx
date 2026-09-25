"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Compass,
  Building2,
  Truck,
  Wrench,
  Check,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "01",
      name: "KONSULTASI & REKAYASA TEKNIS",
      tag: "PERENCANAAN & BIM",
      icon: Compass,
      image: "/images/bim-consultation.jpg",
      summary:
        "Tahap krusial penentu efisiensi. Kami menyusun analisis struktur, studi kelayakan, hingga pemodelan BIM 3D dengan akurasi millimeter sebelum pekerjaan lapangan dimulai.",
      capabilities: [
        "Studi Kelayakan Teknis & Finansial (Feasibility Study)",
        "Pemodelan Digital 3D BIM (Building Information Modeling)",
        "Analisis Kekuatan Struktur Baja & Beton Berstandar SNI/AISC",
        "Value Engineering untuk Optimalisasi Anggaran dan Durasi",
        "Penyusunan Rencana Kerja & Syarat (RKS) serta RAB Akurat",
      ],
      deliverable: "Model 3D BIM, Gambar Kerja Detil (Shop Drawing), & Laporan Teknis Resmi",
    },
    {
      id: "02",
      name: "KONSTRUKSI TERINTEGRASI",
      tag: "PELAKSANAAN SITE",
      icon: Building2,
      image: "/images/warehouse-construction.jpg",
      summary:
        "Eksekusi fisik proyek oleh tim konstruksi berpengalaman, mulai dari pondasi bore pile, ereksi struktur baja berat, hingga serah terima bangunan operasional penuh.",
      capabilities: [
        "Pembangunan Pabrik Manufaktur & Fasilitas Pemrosesan",
        "Gudang Logistik Modern Bentang Lebar Tanpa Kolom Tengah",
        "Pemasangan Rangka Baja WF/H-Beam & Struktur Space Frame",
        "Pekerjaan Sipil, Pondasi Industri, & Lantai Beton Super Flat",
        "Instalasi Dinding Sandwich Panel & Atap Insulasi Termal",
      ],
      deliverable: "Bangunan Siap Operasional, As-Built Drawing, & Garansi Struktur",
    },
    {
      id: "03",
      name: "PENGADAAN MATERIAL PROYEK",
      tag: "SUPPLY CHAIN BERSERTIFIKAT",
      icon: Truck,
      image: "/images/hero-fabrication.jpg",
      summary:
        "Jaminan ketersediaan material konstruksi berkualitas premium dengan sertifikasi pabrik resmi (Mill Certificate), didukung jaringan logistik rantai pasok terpercaya.",
      capabilities: [
        "Baja Profil Komersial & Heavy Structural: WF, H-Beam, Plat Besi",
        "Sandwich Panel PIR/PUR/EPS untuk Ruang Bersih & Cold Storage",
        "Baut & Fastener High-Tensile (Grade 8.8, 10.9) Bersertifikat",
        "Material Pipa Industri, Fitting, Valve, & Saluran MEP Terstandar",
        "Distribusi Tepat Jadwal Langsung ke Titik Lokasi Proyek",
      ],
      deliverable: "Mill Test Certificate, Uji Tarik Baja Laboratorium, Garansi Pabrikan",
    },
    {
      id: "04",
      name: "MANUFAKTUR & FABRIKASI PRESISI",
      tag: "WORKSHOP CNC & WELDING",
      icon: Wrench,
      image: "/images/precision-fabrication.jpg",
      summary:
        "Fasilitas workshop mandiri yang dilengkapi mesin CNC modern dan welder tersertifikasi untuk memproduksi komponen baja khusus dan peralatan industri berskala besar.",
      capabilities: [
        "Pemotongan Plat Presisi Tinggi Menggunakan CNC Laser & Plasma",
        "Fabrikasi Kolom, Balok Girder, & Box Truss Siap Ereksi",
        "Pembuatan Tangki Penyimpanan Industri, Silo, & Pressure Vessel",
        "Fabrikasi Sistem Saluran Udara (Ducting) & Rangkaian Piping Spool",
        "Prosedur Pengelasan Standar AWS D1.1 / ASME dengan Uji NDT/UT",
      ],
      deliverable: "Laporan Inspeksi NDT/UT, Sertifikat Welder WPS/PQR, QC Sign-off",
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-24 scroll-mt-20">
      <span id="our-service" className="sr-only" />
      <span id="services" className="sr-only" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="mint">SOLUSI MENYELURUH DARI HULU KE HILIR</Badge>
              <span className="font-mono text-[12px] text-[#444444]">01 / 04</span>
            </div>
            <h2 className="font-condensed text-[44px] sm:text-[68px] font-extrabold uppercase tracking-tight text-[#000000] leading-[0.9]">
              EMPAT PILAR KAPABILITAS TERPADU
            </h2>
          </div>
          <p className="text-[16px] text-[#444444] max-w-[480px] font-normal leading-relaxed">
            Tidak perlu berkoordinasi dengan banyak vendor terpisah. PT Karya Fabrika Mandiri
            menghubungkan setiap mata rantai proyek dalam satu tata kelola rekayasa yang rapi,
            efisien, dan bertanggung jawab penuh.
          </p>
        </div>

        {/* Pillar Switcher Navigation on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(i)}
                className={`p-5 rounded-[20px] text-left transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                    : "bg-[#ffffff] text-[#000000] border-[#c6c6c6]/50 hover:border-[#000000]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-[12px] ${
                      isActive ? "text-[#d1ffca]" : "text-[#979797]"
                    }`}
                  >
                    PILAR {svc.id}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-[#d1ffca]" : "text-[#444444]"
                    }`}
                  />
                </div>
                <h3 className="font-condensed text-[20px] sm:text-[22px] font-bold uppercase tracking-tight leading-tight">
                  {svc.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Featured Display Card (DESIGN.md Standard Card: #ffffff, 32px radius, no shadow) */}
        <div className="bg-[#ffffff] rounded-[32px] p-6 sm:p-10 border border-[#c6c6c6]/60 flat-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Image Container with Visual Tags */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#e5e5e5] border border-[#c6c6c6]/40">
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="mint" size="sm">
                    {services[activeTab].tag}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#000000]/85 text-white p-3 rounded-[12px] text-xs font-mono backdrop-blur-sm flex items-center justify-between">
                  <span className="text-[#d1ffca]">OUTPUT:</span>
                  <span className="truncate max-w-[260px] sm:max-w-none text-right">
                    {services[activeTab].deliverable}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Capabilities & Action */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm font-semibold text-[#000000]">
                  {services[activeTab].id} / 04
                </span>
                <Badge variant="yellow" size="sm">
                  KUALITAS TERJAMIN
                </Badge>
              </div>

              <h3 className="font-condensed text-[34px] sm:text-[46px] font-extrabold uppercase text-[#000000] leading-none mb-4">
                {services[activeTab].name}
              </h3>

              <p className="text-[16px] text-[#444444] leading-relaxed mb-6 font-normal">
                {services[activeTab].summary}
              </p>

              {/* Capabilities Checklist */}
              <div className="space-y-2.5 mb-8">
                {services[activeTab].capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#d1ffca] text-[#000000] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[14px] sm:text-[15px] text-[#2f2f2f] font-medium leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e5e5e5]">
                <a href="#inquiry">
                  <Button variant="primary" size="md" className="gap-2">
                    <span>Konsultasikan Layanan Ini</span>
                    <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
                  </Button>
                </a>
                <a href="#portofolio">
                  <Button variant="ghost" size="md">
                    <span>Lihat Portofolio Terkait</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
