"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingAction } from "@/components/floating-action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import {
  Building2,
  Calendar,
  MapPin,
  Scale,
  Maximize2,
  CheckCircle2,
  ExternalLink,
  X,
  ArrowRight,
  ShieldCheck,
  Layers,
} from "lucide-react";

interface ProjectItem {
  id: string;
  category: "all" | "warehouse" | "factory" | "fabrication" | "infrastructure";
  titleId: string;
  titleEn: string;
  client: string;
  location: string;
  year: string;
  tonnage: string;
  area: string;
  statusId: string;
  statusEn: string;
  image: string;
  descId: string;
  descEn: string;
  scopeId: string[];
  scopeEn: string[];
  specs: { label: string; val: string }[];
}

export default function PortfolioPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "kfm-proj-01",
      category: "warehouse",
      titleId: "Ereksi Rangka Struktur Baja Gudang Logistik Modern",
      titleEn: "Modern Logistics Warehouse Structural Steel Erection",
      client: "PT Multi Logistik Nusantara",
      location: "Kawasan Industri MM2100, Cikarang, Jawa Barat",
      year: "2025 - 2026",
      tonnage: "680 Ton",
      area: "12,500 m²",
      statusId: "Selesai 100% (Handover)",
      statusEn: "100% Completed (Handover)",
      image: "/images/hero-steel-frame.jpg",
      descId:
        "Proyek pembangunan struktur baja gudang penyimpanan logistik bentang bebas (clear span 38m) menggunakan profil WF 500 dan WF 700 dengan standar toleransi presisi dan pengelasan SAW otomatis.",
      descEn:
        "Turnkey structural steel logistics warehouse featuring a 38m clear span engineered with WF 500 and WF 700 sections adhering to strict geometric tolerances and automated SAW welds.",
      scopeId: [
        "Fabrikasi dan ereksi kolom baja WF 700 & rafter bentang lebar",
        "Pemasangan sistem atap galvalum dengan insulasi peredam panas",
        "Pengujian NDT Ultrasonic Testing pada 100% sambungan las momen",
        "Penerapan Zero Accident K3 selama 180 hari kerja tanpa insiden",
      ],
      scopeEn: [
        "Fabrication and erection of heavy WF 700 columns and long-span rafters",
        "Installation of insulated galvalume roofing systems",
        "100% Ultrasonic NDT testing on moment connection welds",
        "Zero Accident safety record over 180 consecutive project days",
      ],
      specs: [
        { label: isEn ? "Clear Span" : "Bentang Bebas", val: "38 Meter" },
        { label: isEn ? "Steel Profile" : "Profil Baja", val: "WF 500 - WF 700 SNI" },
        { label: isEn ? "Erection Crane" : "Kapasitas Crane", val: "Mobile Crane 50 Ton" },
        { label: isEn ? "Finishing" : "Proteksi Cat", val: "Epoxy Primer & Topcoat" },
      ],
    },
    {
      id: "kfm-proj-02",
      category: "factory",
      titleId: "Pembangunan Pabrik Perakitan Berat & Mezzanine",
      titleEn: "Heavy Manufacturing Plant & Mezzanine Construction",
      client: "PT Indo Presisi Manufaktur",
      location: "Kawasan Industri Karawang (KIIC), Jawa Barat",
      year: "2025",
      tonnage: "920 Ton",
      area: "16,800 m²",
      statusId: "Selesai 100%",
      statusEn: "100% Completed",
      image: "/images/hero-crane-structure.jpg",
      descId:
        "Rancang bangun gedung fasilitas perakitan otomotif terintegrasi dengan overhead traveling crane kapasitas 20 ton. Dilengkapi perkuatan pondasi pedestal dan sambungan baut mutu tinggi Grade 8.8.",
      descEn:
        "Design and build of an integrated automotive manufacturing plant with a 20-ton overhead traveling crane runway, reinforced pedestals, and high-strength Grade 8.8 bolt assemblies.",
      scopeId: [
        "Ereksi balok runway crane kapasitas 20 Ton",
        "Pemasangan lantai mezzanine beban 1,500 kg/m²",
        "Pekerjaan cladding dinding insulated sandwich panel",
        "Clash detection BIM 3D antara struktur dan instalasi utilitas pabrik",
      ],
      scopeEn: [
        "Erection of 20-Ton overhead traveling crane runway girders",
        "Installation of heavy-duty mezzanine floors rated at 1,500 kg/m²",
        "Insulated sandwich panel wall cladding installation",
        "3D BIM clash detection integrating structural and factory utilities",
      ],
      specs: [
        { label: isEn ? "Crane Capacity" : "Beban Crane", val: "20 Ton Overhead" },
        { label: isEn ? "Floor Rating" : "Kapasitas Lantai", val: "1,500 kg / m²" },
        { label: isEn ? "Fasteners" : "Baut Mutu Tinggi", val: "ASTM A325 / F10T" },
        { label: isEn ? "Safety Protocol" : "Standar K3", val: "ISO 45001 Verified" },
      ],
    },
    {
      id: "kfm-proj-03",
      category: "warehouse",
      titleId: "Pusat Distribusi Dingin (Cold Storage) & Gudang Farmasi",
      titleEn: "Pharmaceutical Distribution & Cold Storage Facility",
      client: "PT Sumber Sehat Distribusi",
      location: "Kawasan Industri Jababeka Phase VI, Cikarang",
      year: "2024 - 2025",
      tonnage: "540 Ton",
      area: "9,600 m²",
      statusId: "Selesai 100%",
      statusEn: "100% Completed",
      image: "/images/warehouse-construction.jpg",
      descId:
        "Fasilitas gudang cold storage temperatur terkontrol dengan struktur baja anti karat dan insulasi poliuretan khusus farmasi. Dirancang dengan efisiensi energi tinggi.",
      descEn:
        "Climate-controlled cold storage warehouse facility with anti-corrosion structural steel coatings and pharmaceutical-grade polyurethane insulation panels.",
      scopeId: [
        "Fabrikasi baja dengan perlakuan cat anti korosi C4 High-Build Epoxy",
        "Struktur baja penyangga ceiling panel cold room",
        "Pondasi lantai insulasi anti retak dengan wiremesh M8",
        "Sertifikasi kelayakan uji fungsi ruangan berstandar BPOM",
      ],
      scopeEn: [
        "Steel fabrication with C4 High-Build Epoxy anti-corrosion coating",
        "Structural steel supports for cold room ceiling paneling",
        "Insulated anti-crack slab foundation with M8 wiremesh",
        "Room commissioning certification compliant with health standards",
      ],
      specs: [
        { label: isEn ? "Temperature" : "Suhu Operasional", val: "-20°C to +4°C" },
        { label: isEn ? "Corrosion Class" : "Kelas Korosi", val: "ISO 12944 C4" },
        { label: isEn ? "Execution Time" : "Waktu Pengerjaan", val: "5 Bulan" },
        { label: isEn ? "Inspection" : "Inspeksi Las", val: "100% Passed" },
      ],
    },
    {
      id: "kfm-proj-04",
      category: "fabrication",
      titleId: "Fabrikasi Komponen Baja Presisi & Built-Up Box Girder",
      titleEn: "Precision Structural Components & Built-Up Box Girders",
      client: "PT Karya Konstruksi Infrastruktur",
      location: "Workshop Fabrikasi KFM, Jababeka",
      year: "2025",
      tonnage: "1,200 Ton",
      area: "Workshop Unit",
      statusId: "Selesai 100%",
      statusEn: "100% Completed",
      image: "/images/precision-fabrication.jpg",
      descId:
        "Manufaktur built-up girder baja dengan toleransi ketat ±0.05 mm untuk jembatan dan struktur bentang lebar. Dikerjakan dengan mesin CNC Plasma otomatis dan pengelasan submerged arc welding.",
      descEn:
        "Manufacturing of heavy welded built-up box girders with strict ±0.05mm tolerances for bridge and wide-span projects using automated CNC plasma cutters and submerged arc welding.",
      scopeId: [
        "Pemotongan plat tebal 25mm - 60mm dengan CNC Multi-Torch Flame",
        "Submerged Arc Welding (SAW) penetrasi penuh dengan uji NDT",
        "Sandblasting Sa 2.5 dan pelapisan zinc-rich primer",
        "Penyusunan modul siap kirim dengan nomor penomoran presisi",
      ],
      scopeEn: [
        "Heavy plate cutting (25mm-60mm) via multi-torch CNC flame",
        "Full-penetration Submerged Arc Welding (SAW) verified by NDT",
        "Sa 2.5 sandblasting and zinc-rich primer protective coating",
        "Modular packaging and tagging for rapid site assembly",
      ],
      specs: [
        { label: isEn ? "Plate Thickness" : "Ketebalan Plat", val: "Hingga 60 mm" },
        { label: isEn ? "Welding Method" : "Metode Las", val: "Automatic SAW & FCAW" },
        { label: isEn ? "NDT Results" : "Hasil NDT", val: "Zero Defects" },
        { label: isEn ? "Delivery" : "Pengiriman", val: "Multi-Axle Trailer" },
      ],
    },
    {
      id: "kfm-proj-05",
      category: "infrastructure",
      titleId: "Rancang Bangun Jembatan Penyeberangan Pipa Industri (Pipe Rack)",
      titleEn: "Industrial Pipe Rack Bridge Structure & Heavy Supports",
      client: "PT Petro Chemika Mandiri",
      location: "Cilegon, Banten",
      year: "2024",
      tonnage: "380 Ton",
      area: "Bentang 120m",
      statusId: "Selesai 100%",
      statusEn: "100% Completed",
      image: "/images/hero-steel-frame.jpg",
      descId:
        "Struktur pipe rack baja bertingkat melintasi jalur operasional pabrik petrokimia aktif. Menuntut standar keselamatan migas tingkat tinggi dan perakitan modular tanpa memutus jalur pipa eksisting.",
      descEn:
        "Multi-tier structural steel pipe rack spanning across an operational petrochemical plant corridor, requiring stringent oil & gas safety standards and modular erection without pipeline shutdowns.",
      scopeId: [
        "Perancangan struktur penahan beban termal dan getaran pipa",
        "Pabrikasi modular rangka baja di workshop KFM",
        "Ereksi malam hari dengan safety permit migas",
        "Hot-dip galvanizing standar ASTM A123 untuk proteksi korosi kimia",
      ],
      scopeEn: [
        "Structural engineering resisting thermal expansion and fluid vibration",
        "Off-site modular pre-assembly at KFM workshop",
        "Night erection under active plant safety permits",
        "Hot-dip galvanizing conforming to ASTM A123 for harsh chemical defense",
      ],
      specs: [
        { label: isEn ? "Protection" : "Lapisan Proteksi", val: "Hot-Dip Galvanized" },
        { label: isEn ? "Span Length" : "Panjang Bentang", val: "120 Meter" },
        { label: isEn ? "Safety Permit" : "Izin Kerja K3", val: "PTW Migas High Risk" },
        { label: isEn ? "Life Span" : "Umur Rencana", val: "25+ Tahun Bebas Korosi" },
      ],
    },
    {
      id: "kfm-proj-06",
      category: "factory",
      titleId: "Konsultasi Rekayasa & Fabrikasi Pabrik Kemasan Ekspor",
      titleEn: "Engineering Consultation & Plant Fabrication for Export Facility",
      client: "PT Global Packaging Industri",
      location: "Kawasan Industri Kendal, Jawa Tengah",
      year: "2025 - 2026",
      tonnage: "750 Ton",
      area: "14,200 m²",
      statusId: "Sedang Berjalan (On-Going)",
      statusEn: "On-Going Construction",
      image: "/images/bim-consultation.jpg",
      descId:
        "Layanan terintegrasi dari tahap pemodelan 3D BIM, analisis struktur terhadap gempa zona tinggi, fabrikasi struktur atap bentang 42m, hingga pengawasan ereksi di lokasi.",
      descEn:
        "Integrated delivery from 3D BIM clash modeling, high-seismic zone structural design, 42m-span roof truss fabrication, to comprehensive on-site erection management.",
      scopeId: [
        "Pemodelan 3D BIM dengan deteksi tabrakan 100%",
        "Value Engineering menghemat 18% volume baja profil",
        "Fabrikasi struktur atap bentang 42m tanpa tiang perantara",
        "Supervisi quality control bertahap di workshop dan site",
      ],
      scopeEn: [
        "3D BIM modeling delivering 100% clash-free coordination",
        "Value Engineering reducing structural steel tonnage by 18%",
        "Fabrication of 42m-span column-free roof trusses",
        "Multi-tier quality control supervision at shop and site",
      ],
      specs: [
        { label: isEn ? "Progress" : "Kemajuan Fisik", val: "85% On-Schedule" },
        { label: isEn ? "Span" : "Bentang Atap", val: "42 Meter Bebas Tiang" },
        { label: isEn ? "Savings" : "Efisiensi Biaya", val: "18% Value Eng." },
        { label: isEn ? "Safety" : "Catatan K3", val: "Zero Accident" },
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] selection:bg-[#d1ffca] selection:text-black">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#000000] text-white pt-16 sm:pt-24 pb-16 sm:pb-20 border-b border-[#2f2f2f]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="mint" size="sm">
              {isEn ? "PROVEN TRACK RECORD" : "REKAM JEJAK PEKERJAAN KAMI"}
            </Badge>
            <span className="font-mono text-xs text-[#979797]">
              {isEn ? "VERIFIED PROJECT GALLERY" : "DOKUMENTASI PROYEK NYATA"}
            </span>
          </div>

          <h1 className="font-condensed text-[44px] sm:text-[68px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.92] max-w-4xl mb-6">
            {isEn
              ? "PROJECT PORTFOLIO & TRACK RECORD"
              : "PORTOFOLIO STRUKTUR BAJA & GUDANG"}
          </h1>

          <p className="text-base sm:text-lg text-[#c6c6c6] max-w-3xl leading-relaxed font-normal mb-8">
            {isEn
              ? "Explore our portfolio of industrial warehouses, manufacturing facilities, heavy steel erections, and precision workshop fabrications delivered across key industrial regions in Indonesia with high precision and zero accident safety."
              : "Jelajahi portofolio proyek konstruksi gudang industri, pabrik manufaktur, ereksi rangka baja berat, dan fabrikasi presisi yang telah kami selesaikan dengan standar mutu SNI/ASTM, ketepatan waktu, dan rekor Zero Accident K3."}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-6 border-t border-white/20">
            <div>
              <span className="font-mono text-xs text-[#979797] uppercase block">
                {isEn ? "Steel Erected" : "Baja Terpasang"}
              </span>
              <span className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#ffffff]">
                45,000+ Ton
              </span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#979797] uppercase block">
                {isEn ? "Total Area Built" : "Total Luas Gedung"}
              </span>
              <span className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#d1ffca]">
                280,000+ m²
              </span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#979797] uppercase block">
                {isEn ? "Safety Record" : "Rekor K3 Nasional"}
              </span>
              <span className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#fff100]">
                100% Zero Accident
              </span>
            </div>
            <div>
              <span className="font-mono text-xs text-[#979797] uppercase block">
                {isEn ? "Schedule Adherence" : "Ketepatan Jadwal"}
              </span>
              <span className="font-condensed text-2xl sm:text-3xl font-extrabold text-[#ffffff]">
                99.4% On-Time
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#c6c6c6]">
          {[
            { id: "all", label: isEn ? "All Projects" : "Semua Proyek" },
            { id: "warehouse", label: isEn ? "Industrial Warehouses" : "Gudang Logistik" },
            { id: "factory", label: isEn ? "Manufacturing Plants" : "Pabrik Industri" },
            { id: "fabrication", label: isEn ? "Workshop Fabrication" : "Fabrikasi Workshop" },
            { id: "infrastructure", label: isEn ? "Infrastructure & Racks" : "Infrastruktur & Pipe Rack" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                filter === cat.id
                  ? "bg-[#000000] text-[#ffffff] shadow-sm font-bold"
                  : "bg-[#ffffff] text-[#555555] hover:text-[#000000] border border-[#c6c6c6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] rounded-[24px] overflow-hidden border border-[#c6c6c6]/60 hover:border-[#000000] transition-all group flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e5e5]">
                  <Image
                    src={item.image}
                    alt={isEn ? item.titleEn : item.titleId}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-[4px] bg-[#000000]/80 backdrop-blur-md text-[#d1ffca] font-mono text-[11px] font-semibold border border-white/10">
                      {isEn ? item.statusEn : item.statusId}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#fff100] text-[#000000] font-mono text-[11px] font-bold">
                      {item.tonnage}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#666666] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#333333] shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <h3 className="font-condensed text-[24px] sm:text-[26px] font-bold uppercase text-[#000000] leading-tight mb-2 group-hover:text-[#2f2f2f] transition-colors">
                    {isEn ? item.titleEn : item.titleId}
                  </h3>

                  <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed mb-4">
                    {isEn ? item.descEn : item.descId}
                  </p>

                  {/* Specs Quick Row */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#f0f0f0] text-xs font-mono">
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase">
                        {isEn ? "Building Area" : "Luas Bangunan"}
                      </span>
                      <span className="font-bold text-[#000000]">{item.area}</span>
                    </div>
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase">
                        {isEn ? "Year" : "Tahun"}
                      </span>
                      <span className="font-bold text-[#000000]">{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedProject(item)}
                  className="w-full justify-between text-xs py-2.5 rounded-[8px]"
                >
                  <span>{isEn ? "View Project Details" : "Lihat Spesifikasi Lengkap"}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#d1ffca]" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-[28px] border border-[#c6c6c6] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#f3f3f3] text-[#444444] hover:text-[#000000] transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="mint" size="sm">
                  {isEn ? selectedProject.statusEn : selectedProject.statusId}
                </Badge>
                <span className="font-mono text-xs text-[#888888]">
                  KFM REF: {selectedProject.id.toUpperCase()}
                </span>
              </div>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black uppercase text-[#000000]">
                {isEn ? selectedProject.titleEn : selectedProject.titleId}
              </h3>
              <p className="font-mono text-xs text-[#666666] flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#333333]" />
                <span>{selectedProject.location}</span>
                <span>• {selectedProject.year}</span>
              </p>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] rounded-[18px] overflow-hidden bg-[#e5e5e5] mb-6 border border-[#c6c6c6]/50">
              <Image
                src={selectedProject.image}
                alt={isEn ? selectedProject.titleEn : selectedProject.titleId}
                fill
                className="object-cover"
              />
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {selectedProject.specs.map((sp, sIdx) => (
                <div key={sIdx} className="p-3 rounded-[10px] bg-[#f8f8f8] border border-[#e5e5e5]">
                  <span className="font-mono text-[10px] text-[#888888] uppercase block">
                    {sp.label}
                  </span>
                  <span className="font-bold text-xs text-[#000000] block mt-0.5">
                    {sp.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase font-bold text-[#000000] mb-1.5">
                {isEn ? "Project Overview:" : "Deskripsi Teknis Proyek:"}
              </h4>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {isEn ? selectedProject.descEn : selectedProject.descId}
              </p>
            </div>

            {/* Scope */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase font-bold text-[#000000] mb-2">
                {isEn ? "Scope of Work Executed:" : "Ruang Lingkup Pekerjaan KFM:"}
              </h4>
              <div className="space-y-1.5">
                {(isEn ? selectedProject.scopeEn : selectedProject.scopeId).map((sc, scIdx) => (
                  <div key={scIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                    <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                    <span>{sc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#e5e5e5]">
              <span className="font-mono text-xs text-[#777777]">
                {isEn ? "Need a similar structure for your facility?" : "Ingin konsultasi proyek sejenis?"}
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto"
                  onClick={() => setSelectedProject(null)}
                >
                  <Button variant="primary" size="sm" className="w-full text-xs">
                    <span>{isEn ? "Consult This Design" : "Konsultasi Desain Serupa"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d1ffca]" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs"
                >
                  {isEn ? "Close" : "Tutup"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-[#000000] text-white rounded-[32px] p-8 sm:p-12 border border-[#2f2f2f] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Badge variant="mint" size="sm" className="mb-2">
              {isEn ? "START YOUR PROJECT" : "RENCANAKAN PROYEK ANDA"}
            </Badge>
            <h3 className="font-condensed text-[32px] sm:text-[46px] font-black uppercase text-white leading-none mb-2">
              {isEn ? "HAVE A CONSTRUCTION TENDER OR INQUIRY?" : "MEMILIKI KEBUTUHAN TENDER ATAU PEMBANGUNAN GUDANG?"}
            </h3>
            <p className="text-sm text-[#979797] max-w-xl">
              {isEn
                ? "Send us your structural drawings or specifications for a free preliminary engineering review and estimated cost breakdown."
                : "Kirimkan gambar teknis atau spesifikasi kebutuhan Anda untuk review rekayasa awal dan penawaran estimasi Rencana Anggaran Biaya (RAB)."}
            </p>
          </div>

          <div className="shrink-0 flex gap-3 w-full md:w-auto">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <Button variant="mint" size="lg" className="w-full sm:w-auto text-black font-bold">
                <span>{isEn ? "Request Quotation" : "Minta Penawaran RAB"}</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAction />
    </div>
  );
}
