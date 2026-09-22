"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ArrowUpRight,
  Maximize2,
  X,
  CheckCircle,
  MapPin,
  Calendar,
  Layers,
  ShieldCheck,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  image: string;
  metrics: { label: string; value: string }[];
  scope: string[];
  description: string;
  technicalHighlight: string;
}

export function PortfolioSection() {
  const [filter, setFilter] = useState("SEMUA");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "SEMUA",
    "KONSTRUKSI BAJA",
    "MANUFAKTUR & FABRIKASI",
    "GUDANG & LOGISTIK",
    "KONSULTASI & REKAYASA",
  ];

  const projects: Project[] = [
    {
      id: "PRJ-01",
      title: "Pabrik Manufaktur Otomotif & Heavy Assembly",
      category: "KONSTRUKSI BAJA",
      client: "PT Multi Auto Component Indonesia",
      location: "Kawasan Industri KIIC, Karawang",
      year: "2025",
      image: "/images/warehouse-construction.jpg",
      metrics: [
        { label: "Tonase Baja", value: "1.450 Ton" },
        { label: "Luas Area", value: "22.000 m²" },
        { label: "Ketepatan Waktu", value: "100% On-Schedule" },
      ],
      scope: [
        "Konsultasi struktur dan detail shop drawing Tekla BIM",
        "Fabrikasi kolom WF 800 & girder overhead crane 30 Ton",
        "Ereksi struktur lapangan dengan 4 mobile crane kapasitas 50 Ton",
        "Instalasi atap insulated panel dan sistem ventilasi pasif",
      ],
      description:
        "Pembangunan komplek pabrik otomotif heavy-duty yang dirancang untuk menahan getaran mesin stamping bertekanan tinggi. Seluruh sambungan las kritis melalui uji NDT ultrasonik dengan hasil defect-free.",
      technicalHighlight:
        "Toleransi defleksi rel overhead crane dijaga sangat ketat pada skala L/1000 sesuai standar JIS.",
    },
    {
      id: "PRJ-02",
      title: "Pusat Distribusi Logistik Bentang Lebar (Clear-Span)",
      category: "GUDANG & LOGISTIK",
      client: "PT Nusantara Prima Logistik",
      location: "GIIC Deltamas, Cikarang",
      year: "2025",
      image: "/images/warehouse-construction.jpg",
      metrics: [
        { label: "Clear Span", value: "48 Meter" },
        { label: "Luas Lantai", value: "35.000 m²" },
        { label: "K3 Safety", value: "Zero Accident" },
      ],
      scope: [
        "Desain optimasi bentang lebar 48m tanpa tiang tengah",
        "Pengadaan struktur baja profil mutu tinggi BJ 41 / ASTM A36",
        "Lantai beton industri super flat (FF/FL high tolerance)",
        "Dinding penutup perimeter fire-rated sandwich panel",
      ],
      description:
        "Gudang logistik skala regional yang memprioritaskan mobilitas forklift automated guided vehicles (AGV). Desain bebas kolom memaksimalkan kapasitas rak penyimpanan hingga 30% lebih padat.",
      technicalHighlight:
        "Menggunakan sistem truss pelengkung presisi tinggi yang diproduksi di workshop kami di bawah pengawasan ketat.",
    },
    {
      id: "PRJ-03",
      title: "Fabrikasi Heavy Box Girder & Jembatan Pipa Kimia",
      category: "MANUFAKTUR & FABRIKASI",
      client: "PT Chandra Petrochemical Energy",
      location: "Kawasan Industri Ciwandan, Cilegon",
      year: "2024",
      image: "/images/precision-fabrication.jpg",
      metrics: [
        { label: "Plat Tebal", value: "Hingga 65 mm" },
        { label: "Total Bobot", value: "820 Ton" },
        { label: "NDT Pass Rate", value: "99.8%" },
      ],
      scope: [
        "Pemotongan presisi plat tebal dengan CNC multi-torch",
        "Submerged Arc Welding (SAW) bersertifikasi ASME Section IX",
        "Surface preparation sandblasting Sa 2.5 & epoxy 3-layer system",
        "Trial assemble di workshop sebelum mobilisasi ke lokasi kilang",
      ],
      description:
        "Fabrikasi struktur penopang pipa proses petrokimia bersuhu tinggi dan lingkungan korosif laut. Menggunakan coating khusus tahan garam dan asam industri.",
      technicalHighlight:
        "Pemeriksaan sambungan las menggunakan 100% Radiography & Ultrasonic Testing.",
    },
    {
      id: "PRJ-04",
      title: "Studi Kelayakan, BIM 3D & Value Engineering Smelter",
      category: "KONSULTASI & REKAYASA",
      client: "Konsorsium Mineral Prima",
      location: "Halmahera Timur, Maluku Utara",
      year: "2024",
      image: "/images/bim-consultation.jpg",
      metrics: [
        { label: "Efisiensi Biaya", value: "Rp 8.4 Milyar" },
        { label: "Clash Resolved", value: "312 Titik Deteksi" },
        { label: "Level of Detail", value: "BIM LOD 400" },
      ],
      scope: [
        "Studi kelayakan struktur terhadap gempa zona seismik tinggi",
        "Pemodelan 3D terpadu struktur sipil, mekanikal, dan pipa",
        "Value engineering pemilihan grade baja berbanding ketebalan",
        "RAB definitif dan pedoman metode kerja ereksi (Method Statement)",
      ],
      description:
        "Layanan konsultasi rekayasa penuh untuk fasilitas pengolahan nikel. Melalui integrasi BIM, 312 potensi tabrakan pipa dan struktur dapat diselesaikan pada tahap perancangan di kantor.",
      technicalHighlight:
        "Value Engineering berhasil mereduksi bobot baja sebesar 16% tanpa mengurangi faktor keamanan minimum 1.6.",
    },
    {
      id: "PRJ-05",
      title: "Fabrikasi Tangki Silo & Pressure Vessel Storage 600m³",
      category: "MANUFAKTUR & FABRIKASI",
      client: "PT Agronas Bio Solution",
      location: "Kawasan Industri Gresik",
      year: "2024",
      image: "/images/hero-fabrication.jpg",
      metrics: [
        { label: "Kapasitas", value: "600.000 Liter" },
        { label: "Tekanan Uji", value: "18.5 Bar" },
        { label: "Material", value: "Stainless 316L / CS" },
      ],
      scope: [
        "Rolling plat silinder presisi dengan toleransi ovalitas <0.2%",
        "Pengelasan TIG & MIG oleh welder bersertifikat Kemenaker",
        "Hydrostatic pressure test dan vacuum bubble leak test",
        "Instalasi insulasi rockwool dan jaket aluminium luar",
      ],
      description:
        "Pembuatan tangki penyimpanan bahan baku cair industri pengolahan pangan dan energi terbarukan dengan standar food-grade dan keselamatan tangki bejana tekan nasional.",
      technicalHighlight:
        "Disertifikasi langsung oleh Pengawas Keselamatan Kerja Bejana Tekan Kemenaker RI.",
    },
    {
      id: "PRJ-06",
      title: "Pengadaan Material Baja & Bangunan Cold Storage",
      category: "KONSTRUKSI BAJA",
      client: "PT Samudera Cold Logistics",
      location: "Kawasan Industri Kendal (KIK)",
      year: "2024",
      image: "/images/warehouse-construction.jpg",
      metrics: [
        { label: "Suhu Ruang", value: "-25° Celsius" },
        { label: "Panel PIR", value: "12.000 m²" },
        { label: "Rangka", value: "Hot-Dip Galvanized" },
      ],
      scope: [
        "Suplai baja WF dengan proteksi Hot-Dip Galvanizing tahan karat",
        "Pengadaan sandwich panel PIR 150mm tahan api B1",
        "Struktur penopang mesin chiller dan kompresor industri",
        "Ereksi cepat dengan sistem baut high-tensile tanpa pengelasan site",
      ],
      description:
        "Fasilitas penyimpanan rantai dingin modern untuk hasil perikanan dan produk medis. Penggunaan struktur galvanis memastikan proteksi terhadap kondensasi uap air dingin.",
      technicalHighlight:
        "Thermal-break design pada sambungan kolom untuk mencegah kebocoran suhu dingin ke tanah pondasi.",
    },
  ];

  const filteredProjects =
    filter === "SEMUA"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portofolio" className="py-16 sm:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="mint">REKAM JEJAK &amp; EKSEKUSI NYATA</Badge>
              <span className="font-mono text-xs text-[#444444]">SHOWCASE</span>
            </div>
            <h2 className="font-condensed text-[42px] sm:text-[64px] font-extrabold uppercase tracking-tight text-[#000000] leading-[0.9]">
              PORTOFOLIO PROYEK TERPILIH
            </h2>
          </div>
          <p className="text-[16px] text-[#444444] max-w-[460px] font-normal leading-relaxed">
            Eksplorasi proyek-proyek strategis yang telah kami selesaikan dengan
            ketepatan perencanaan, mutu prima, dan standar K3 tanpa kompromi.
          </p>
        </div>

        {/* Filter Pills Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-[48px] font-mono text-[12px] font-semibold tracking-wider uppercase transition-all cursor-pointer border ${
                filter === cat
                  ? "bg-[#000000] text-[#ffffff] border-[#000000]"
                  : "bg-[#ffffff] text-[#444444] border-[#c6c6c6]/60 hover:border-[#000000] hover:text-[#000000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (DESIGN.md 2-3 columns flat cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#ffffff] rounded-[28px] overflow-hidden border border-[#c6c6c6]/50 flat-card flex flex-col justify-between group cursor-pointer hover:border-[#000000] transition-all"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="mint" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#000000]/75 p-2 rounded-full text-white backdrop-blur-sm group-hover:bg-[#000000] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-[#ffffff]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#979797] mb-2">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-condensed text-[24px] sm:text-[26px] font-bold uppercase tracking-tight text-[#000000] leading-snug group-hover:text-[#2f2f2f] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-[#444444] line-clamp-2 mb-5 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Micro Metrics Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#f3f3f3]">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#f3f3f3] p-2 rounded-[8px] text-center">
                        <span className="font-mono text-[10px] text-[#979797] uppercase block">
                          {m.label}
                        </span>
                        <span className="font-condensed text-[14px] font-bold text-[#000000] truncate block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#000000] group-hover:underline">
                  LIHAT SPESIFIKASI TEKNIS
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#000000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal Dialog */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#ffffff] rounded-[32px] max-w-[840px] w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative flat-card border border-[#c6c6c6]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#f3f3f3] hover:bg-[#e5e5e5] text-[#000000] transition-colors cursor-pointer"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="mint">{selectedProject.category}</Badge>
                    <span className="font-mono text-xs text-[#979797]">
                      {selectedProject.id} · {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="font-condensed text-[32px] sm:text-[44px] font-black uppercase text-[#000000] leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-[#444444] mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#000000]" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#000000]" />
                      Klien: {selectedProject.client}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-3 bg-[#f3f3f3] p-4 rounded-[16px]">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="font-mono text-[11px] text-[#979797] uppercase block">
                        {m.label}
                      </span>
                      <span className="font-condensed text-xl sm:text-2xl font-bold text-[#000000]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                    RINGKASAN PEKERJAAN
                  </h4>
                  <p className="text-[15px] text-[#444444] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Scope Checklist */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-[#000000] uppercase tracking-wider mb-3">
                    LINGKUP LAYANAN TERINTEGRASI
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.scope.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-sm text-[#2f2f2f]">
                        <CheckCircle className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Highlight Box */}
                <div className="bg-[#000000] text-white p-5 rounded-[16px]">
                  <span className="font-mono text-[11px] text-[#fff100] uppercase block mb-1">
                    [ HIGHLIGHT REKAYASA TEKNIS ]
                  </span>
                  <p className="text-sm font-normal text-[#c6c6c6]">
                    {selectedProject.technicalHighlight}
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t border-[#e5e5e5]">
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => setSelectedProject(null)}
                  >
                    Tutup
                  </Button>
                  <a href="#inquiry" onClick={() => setSelectedProject(null)}>
                    <Button variant="primary" size="md">
                      Konsultasikan Proyek Serupa
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
