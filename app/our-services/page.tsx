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
  Compass,
  Building2,
  Wrench,
  PackageCheck,
  HardHat,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
  Zap,
} from "lucide-react";

export default function OurServicesPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "konsultasi",
      num: "01",
      icon: Compass,
      titleId: "Konsultasi Rekayasa & Pemodelan BIM 3D",
      titleEn: "Engineering Consultation & BIM 3D Modeling",
      subtitleId: "Studi Kelayakan, Analisis Struktur & Gambar Kerja Presisi",
      subtitleEn: "Feasibility Studies, Structural Analysis & Precision Shop Drawings",
      descId:
        "Layanan perancangan teknis komprehensif mengintegrasikan analisis pembebanan struktur (gempa, angin, beban mati/hidup sesuai SNI 1726 & SNI 1729) dengan pemodelan 3D Building Information Modeling (BIM). Mengeliminasi tabrakan elemen struktur & MEP sebelum pabrikasi dimulai.",
      descEn:
        "Comprehensive structural engineering integrating seismic, wind, and gravity loading analyses (adhering to SNI & AISC standards) with advanced 3D Building Information Modeling (BIM) to eliminate design clashes and rework prior to fabrication.",
      image: "/images/bim-consultation.jpg",
      capabilities: isEn
        ? [
            "3D BIM Modeling (Tekla Structures & Autodesk Revit)",
            "Structural Analysis with SAP2000 & ETABS software",
            "Clash Detection between Structural, Architectural & MEP systems",
            "Value Engineering: Trimming 15-25% costs without compromising safety",
            "Detailed Fabrication & Erection Shop Drawings (IFC certified)",
          ]
        : [
            "Pemodelan 3D BIM (Tekla Structures & Autodesk Revit)",
            "Analisis Kekuatan Struktur dengan SAP2000 & ETABS",
            "Clash Detection Digital mencegah tabrakan struktur dan pipa MEP",
            "Value Engineering: Efisiensi biaya 15-25% dengan mempertahankan faktor aman",
            "Gambar Kerja (Shop Drawing) & Erection Drawing berakurasi tinggi",
          ],
      specs: [
        { label: isEn ? "Software" : "Perangkat Lunak", val: "Tekla, Revit, SAP2000" },
        { label: isEn ? "Design Code" : "Standar Desain", val: "SNI 1726, SNI 1729, AISC 360" },
        { label: isEn ? "Clash Accuracy" : "Akurasi Desain", val: "100% Clash Free" },
      ],
    },
    {
      id: "konstruksi",
      num: "02",
      icon: Building2,
      titleId: "Konstruksi Gudang & Bangunan Baja Industri",
      titleEn: "Industrial Warehouse & Structural Steel Construction",
      subtitleId: "Rancang Bangun Gudang Logistik Bentang Lebar & Pabrik Berat",
      subtitleEn: "Design & Build Wide-Span Logistics Warehouses & Heavy Plants",
      descId:
        "Eksekusi konstruksi struktur baja secara menyeluruh, mencakup pekerjaan pondasi bor pile / foot plate, struktur baja berat bentang lebar (clear span tanpa tiang tengah), atap insulasi, lantai beton bertulang (floor hardener), dan fasilitas utilitas pabrik.",
      descEn:
        "Turnkey industrial steel construction covering bored-pile/pad foundations, wide clear-span heavy structural steel framing, insulated roofing systems, reinforced floor-hardened concrete slabs, and complete plant utility integration.",
      image: "/images/warehouse-construction.jpg",
      capabilities: isEn
        ? [
            "Wide-span industrial warehouses (up to 48m clear-span)",
            "Heavy manufacturing plant structures & multi-story mezzanines",
            "Commercial steel buildings, hangars & distribution logistics centers",
            "Rigorous site safety management with licensed Kemenaker K3 officers",
            "Speed of delivery 30% faster than conventional reinforced concrete",
          ]
        : [
            "Gudang logistik bentang lebar tanpa tiang tengah (hingga 48 meter)",
            "Bangunan pabrik manufaktur berat dan struktur lantai mezzanine",
            "Hanggar, gedung komersial, dan pusat distribusi ritel modern",
            "Pengawasan K3 harian dengan Safety Officer bersertifikasi Kemenaker",
            "Kecepatan konstruksi 30% lebih cepat dibanding metode konvensional",
          ],
      specs: [
        { label: isEn ? "Clear Span" : "Bentang Bersih", val: "Hingga 48 Meter" },
        { label: isEn ? "Floor Capacity" : "Beban Lantai", val: "3 - 10 Ton / m²" },
        { label: isEn ? "Speed" : "Kecepatan Kerja", val: "Tepat Waktu (On-Schedule)" },
      ],
    },
    {
      id: "fabrikasi",
      num: "03",
      icon: Wrench,
      titleId: "Manufaktur & Fabrikasi Baja Presisi",
      titleEn: "Precision Steel Manufacturing & Fabrication",
      subtitleId: "Fasilitas Workshop Terpadu dengan Toleransi Mesin ±0.05mm",
      subtitleEn: "Integrated Workshop Facility with ±0.05mm CNC Tolerances",
      descId:
        "Didukung workshop manufaktur modern berkapasitas ribuan ton per tahun. Memproses baja profil WF, H-Beam, built-up girder, plate girder, bracing, dan anchoring dengan pemotongan CNC plasma/flame, pengelasan SAW otomatis, serta uji NDT/UT independen.",
      descEn:
        "Supported by a state-of-the-art fabrication facility delivering thousands of tons annually. Processing WF profiles, built-up welded girders, trusses, and base plates utilizing CNC cutting, automated SAW welding, and certified NDT ultrasonic inspections.",
      image: "/images/precision-fabrication.jpg",
      capabilities: isEn
        ? [
            "CNC Plasma & Flame Cutting for heavy steel plates (up to 70mm thick)",
            "Submerged Arc Welding (SAW) & Flux-Cored Arc Welding (FCAW)",
            "Certified welders qualified to ASME IX / AWS D1.1 / Kemenaker RI",
            "Surface treatment: Automatic Sandblasting Sa 2.5 & Protective Epoxy Coating",
            "Non-Destructive Testing (NDT/UT & Magnetic Particle Inspection)",
          ]
        : [
            "Pemotongan CNC Plasma & Flame untuk plat tebal (hingga tebal 70mm)",
            "Pengelasan otomatis Submerged Arc Welding (SAW) & FCAW",
            "Welder bersertifikat resmi sesuai standar ASME IX, AWS D1.1 & Kemenaker",
            "Pembersihan permukaan Sandblasting Sa 2.5 & Pengecatan Epoxy Primer",
            "Pemeriksaan sambungan las Non-Destructive Testing (NDT / Ultrasonic)",
          ],
      specs: [
        { label: isEn ? "Tolerance" : "Toleransi", val: "±0.05 mm" },
        { label: isEn ? "Surface Prep" : "Preparasi Cat", val: "Sandblasting Sa 2.5" },
        { label: isEn ? "Welder Lic." : "Lisensi Welder", val: "WPS/PQR Kemenaker" },
      ],
    },
    {
      id: "pengadaan",
      num: "04",
      icon: PackageCheck,
      titleId: "Pengadaan Material Proyek Bersertifikat",
      titleEn: "Certified Industrial Material Procurement",
      subtitleId: "Baja Standar SNI & ASTM dengan Mill Certificate Resmi",
      subtitleEn: "SNI & ASTM Standard Steel with Official Mill Certificates",
      descId:
        "Penyediaan material konstruksi baja dan aksesoris struktur berkualitas tinggi langsung dari produsen terkemuka. Setiap pasokan dijamin memiliki Mill Certificate asli dengan nomor heat dan uji komposisi kimia serta kekuatan mekanik.",
      descEn:
        "Direct procurement of premium structural steel sections, plates, fasteners, and claddings from tier-one mills. Every shipment is accompanied by authentic Mill Test Certificates verifying chemical composition and tensile strength.",
      image: "/images/hero-steel-frame.jpg",
      capabilities: isEn
        ? [
            "Wide Flange (WF), H-Beam, I-Beam profiles conforming to SNI 07-7178",
            "Structural Steel Plates (ASTM A36, SS400, SM490, Hardox wear plates)",
            "High-strength structural bolt assemblies (A325, Grade 8.8 & 10.9, F10T)",
            "Galvalume/Zincalume insulated roof & wall sheeting with UV protection",
            "Transparent bulk procurement pricing with prompt job-site logistics",
          ]
        : [
            "Baja profil Wide Flange (WF), H-Beam, dan I-Beam standar SNI 07-7178",
            "Plat baja struktural ASTM A36, SS400, SM490, dan plat tahan aus",
            "Baut mutu tinggi (A325, Grade 8.8, Grade 10.9, F10T) bersertifikat",
            "Atap dan dinding galvalum/zincalume anti karat dengan peredam panas",
            "Harga pengadaan kompetitif dengan jadwal pengiriman armada terkontrol",
          ],
      specs: [
        { label: isEn ? "Certification" : "Sertifikasi", val: "Mill Certificate 100%" },
        { label: isEn ? "Standard" : "Standar", val: "SNI 07-7178, ASTM A36" },
        { label: isEn ? "Delivery" : "Logistik", val: "Jangkauan Seluruh Indonesia" },
      ],
    },
    {
      id: "ereksi",
      num: "05",
      icon: HardHat,
      titleId: "Ereksi Struktur & Instalasi Mekanikal",
      titleEn: "Structural Steel Erection & Mechanical Rigging",
      subtitleId: "Pemasangan Lapangan Presisi dengan Mobile Crane & Alat Angkat K3",
      subtitleEn: "Precision Field Assembly with Certified Mobile Cranes & Rigging",
      descId:
        "Proses perakitan dan ereksi komponen baja di site proyek dipandu oleh Lifting Plan terverifikasi. Didukung armada crane berkala inspeksi, rigger bersertifikasi, serta pengawasan plumbness total station untuk memastikan kelurusan struktur sempurna.",
      descEn:
        "Field steel erection and rigging executed under certified engineered lifting plans. Driven by regularly inspected mobile cranes, licensed riggers, and digital total station plumbness alignment to ensure flawless structural geometry.",
      image: "/images/hero-crane-structure.jpg",
      capabilities: isEn
        ? [
            "Heavy column and long-span rafter assembly using 25T-80T mobile cranes",
            "Digital Total Station plumbness, elevation & alignment inspections",
            "Pre-tensioned bolt torque calibration with calibrated torque wrenches",
            "Comprehensive Job Safety Analysis (JSA) & daily safety briefing",
            "Safe erection protocols in active industrial factory environments",
          ]
        : [
            "Ereksi kolom berat dan rafter bentang panjang memakai mobile crane 25T-80T",
            "Pengukuran kelurusan & elevasi kolom dengan Digital Total Station",
            "Pengencangan baut torsi terkalibrasi (Calibrated Torque Wrench)",
            "Penerapan Job Safety Analysis (JSA) & briefing keselamatan harian",
            "Prosedur ereksi aman di lingkungan pabrik yang tetap beroperasi",
          ],
      specs: [
        { label: isEn ? "Equipment" : "Armada Crane", val: "Mobile Crane 25T - 80T" },
        { label: isEn ? "Measurement" : "Alat Ukur", val: "Digital Total Station" },
        { label: isEn ? "Safety" : "Protokol K3", val: "Certified Rigging & SIO" },
      ],
    },
    {
      id: "retrofit",
      num: "06",
      icon: RefreshCw,
      titleId: "Perkuatan Struktur & Maintenance Industri",
      titleEn: "Structural Retrofitting & Industrial Maintenance",
      subtitleId: "Audit Beban, Penambahan Mezzanine & Restorasi Korosi Baja",
      subtitleEn: "Structural Audits, Mezzanine Additions & Anti-Corrosion Restoration",
      descId:
        "Layanan perbaikan, penguatan kapasitas beban, dan perawatan rutin pada gedung industri yang sedang beroperasi tanpa menghentikan aktivitas produksi klien.",
      descEn:
        "Repair, load capacity strengthening, and routine maintenance for operational industrial facilities without disrupting ongoing production workflows.",
      image: "/images/warehouse-construction.jpg",
      capabilities: isEn
        ? [
            "Load capacity strengthening for existing cranes and industrial mezzanines",
            "Structural steel jacket retrofitting and stiffener plate welding",
            "Re-roofing and skylight replacement on active operating warehouses",
            "High-build industrial epoxy repainting & cathodic corrosion protection",
            "Periodic structural safety audit & non-destructive health checks",
          ]
        : [
            "Peningkatan kapasitas beban struktur untuk crane gantung dan mezzanine",
            "Retrofit baja dengan penambahan pelat pengaku (stiffener) & bracing",
            "Penggantian atap bocor & pemasangan insulasi pada gudang yang beroperasi",
            "Pengecatan ulang anti-korosi dengan cat epoxy tahan bahan kimia",
            "Audit kelayakan struktur berkala dan laporan inspeksi teknis",
          ],
      specs: [
        { label: isEn ? "Operation" : "Kondisi Kerja", val: "Pabrik Tetap Beroperasi" },
        { label: isEn ? "Protection" : "Proteksi", val: "Epoxy High Build Anti Karat" },
        { label: isEn ? "Audit" : "Laporan Audit", val: "Rekomendasi Rekayasa Resmi" },
      ],
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: isEn ? "Technical Survey & Consultation" : "Survey Teknis & Konsultasi",
      desc: isEn
        ? "On-site topographical survey, soil data analysis, and client operational requirements discovery."
        : "Survey lokasi, kajian data tanah sondir, dan penentuan kebutuhan operasional gedung bersama klien.",
    },
    {
      step: "02",
      title: isEn ? "3D BIM Engineering & Budgeting" : "Rekayasa 3D BIM & Penyusunan RAB",
      desc: isEn
        ? "Generating 3D models, structural calculations, clash detection, and transparent value-engineered cost breakdowns."
        : "Pemodelan 3D digital, kalkulasi kekuatan struktur, simulasi benturan MEP, dan penawaran RAB transparan.",
    },
    {
      step: "03",
      title: isEn ? "Workshop Fabrication & NDT Testing" : "Fabrikasi Workshop & Uji NDT",
      desc: isEn
        ? "Precision CNC cutting, automated SAW welding, ultrasonic testing, sandblasting, and epoxy priming in workshop."
        : "Pemotongan presisi CNC, pengelasan SAW, inspeksi ultrasonik NDT, sandblasting Sa 2.5, dan pelapisan cat primer.",
    },
    {
      step: "04",
      title: isEn ? "On-Site Erection & Rigging" : "Ereksi Struktur di Lapangan",
      desc: isEn
        ? "Safe crane erection according to rigorous Lifting Plans, high-strength bolt torquing, and alignment control."
        : "Pengangkatan kolom dan rafter dengan mobile crane berlisensi, pengencangan baut torsi, dan kontrol elevasi.",
    },
    {
      step: "05",
      title: isEn ? "Commissioning & Handover" : "Uji Fungsi & Serah Terima",
      desc: isEn
        ? "Final inspections, as-built drawings delivery, quality certificate package, and comprehensive project warranty."
        : "Inspeksi akhir bersama konsultan, penyerahan gambar as-built drawing, bundel sertifikat mutu, dan garansi pemeliharaan.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] selection:bg-[#d1ffca] selection:text-black">
      <Navbar />

      {/* Page Header Banner */}
      <section className="bg-[#000000] text-white pt-16 sm:pt-24 pb-16 sm:pb-20 border-b border-[#2f2f2f] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="mint" size="sm">
              {isEn ? "COMPREHENSIVE SERVICES" : "LAYANAN TEKNIS & EPC TERPADU"}
            </Badge>
            <span className="font-mono text-xs text-[#979797]">
              {isEn ? "END-TO-END CAPABILITY" : "DARI TAHAP AWAL HINGGA HANDOVER"}
            </span>
          </div>

          <h1 className="font-condensed text-[44px] sm:text-[68px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.92] max-w-4xl mb-6">
            {isEn
              ? "ENGINEERING, CONSTRUCTION & PRECISION FABRICATION"
              : "SOLUSI REKAYASA, KONSTRUKSI & MANUFAKTUR PRESISI"}
          </h1>

          <p className="text-base sm:text-lg text-[#c6c6c6] max-w-3xl leading-relaxed font-normal mb-8">
            {isEn
              ? "PT. Karya Fabrika Mandiri delivers end-to-end industrial structural solutions. We combine advanced 3D BIM pre-construction with high-tonnage workshop fabrication and zero-accident site erection to build durable warehouses, plants, and complex steel structures."
              : "PT. Karya Fabrika Mandiri menghadirkan kapabilitas terpadu untuk rancang bangun industri. Mengombinasikan pemodelan digital 3D BIM, workshop manufaktur presisi bertoleransi tinggi, serta ereksi lapangan berstandar K3 untuk menghasilkan gedung gudang dan pabrik yang kokoh, efisien, dan tahan gempa."}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact-us">
              <Button variant="mint" size="lg" className="rounded-[8px] px-8 text-black font-bold text-sm">
                <span>{isEn ? "Request Technical Consultation" : "Konsultasi Kebutuhan Teknis"}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20layanan%20konstruksi."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-white" size="lg" className="rounded-[8px] px-6 text-sm">
                <span>{isEn ? "Chat with Engineer (WA)" : "WhatsApp Konsultasi Cepat"}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <Badge variant="ash" size="sm" className="mb-2">
            {isEn ? "CORE PILLARS" : "6 LAYANAN UTAMA KAMI"}
          </Badge>
          <h2 className="font-condensed text-[36px] sm:text-[52px] font-extrabold uppercase tracking-tight text-[#000000] leading-none">
            {isEn ? "INDUSTRIAL SERVICES PORTFOLIO" : "SPESIFIKASI LAYANAN TERPADU"}
          </h2>
        </div>

        <div className="space-y-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#ffffff] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-[#c6c6c6]/60 shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Left Column: Details & Capabilities */}
                  <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-[10px] bg-[#000000] text-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#d1ffca]" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#888888] font-bold block">
                          SERVICE /{item.num}
                        </span>
                        <span className="font-mono text-xs text-[#000000] font-semibold">
                          PT. KARYA FABRIKA MANDIRI
                        </span>
                      </div>
                    </div>

                    <h3 className="font-condensed text-[30px] sm:text-[40px] font-extrabold uppercase tracking-tight text-[#000000] leading-[0.95] mb-2">
                      {isEn ? item.titleEn : item.titleId}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-[#555555] font-semibold mb-4">
                      {isEn ? item.subtitleEn : item.subtitleId}
                    </p>

                    <p className="text-[14px] sm:text-[15px] text-[#444444] leading-relaxed mb-6">
                      {isEn ? item.descEn : item.descId}
                    </p>

                    {/* Capabilities Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <span className="font-mono text-xs uppercase text-[#000000] font-bold tracking-wider block mb-2">
                        {isEn ? "Key Capabilities & Outputs:" : "Cakupan Pekerjaan & Keunggulan:"}
                      </span>
                      {item.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#444444]">
                          <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#e5e5e5]">
                      {item.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#e5e5e5]">
                          <span className="font-mono text-[10px] text-[#888888] block uppercase">
                            {sp.label}
                          </span>
                          <span className="font-bold text-xs text-[#000000] block truncate">
                            {sp.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-[#c6c6c6]/50 bg-[#e5e5e5] group shadow-inner">
                      <Image
                        src={item.image}
                        alt={isEn ? item.titleEn : item.titleId}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
                        <span className="px-2.5 py-1 rounded-[4px] bg-black/70 backdrop-blur-md">
                          DOC: KFM-{item.num}
                        </span>
                        <Link href="/contact-us">
                          <span className="px-3 py-1 rounded-[4px] bg-[#d1ffca] text-black font-bold flex items-center gap-1 hover:bg-white transition-colors">
                            <span>{isEn ? "Inquire" : "Tanya"}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrated Delivery Workflow (5 Stages) */}
      <section className="py-16 sm:py-24 bg-[#000000] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <Badge variant="mint" size="sm" className="mb-2">
                {isEn ? "PROJECT DELIVERY" : "STANDAR OPERASIONAL"}
              </Badge>
              <h2 className="font-condensed text-[38px] sm:text-[56px] font-black uppercase tracking-tight text-white leading-none">
                {isEn ? "5-STAGE INTEGRATED WORKFLOW" : "5 TAHAP PELAKSANAAN PROYEK"}
              </h2>
            </div>
            <p className="text-sm text-[#979797] max-w-[420px] leading-relaxed">
              {isEn
                ? "Every project adheres to a disciplined multi-stage protocol to ensure schedule predictability, safety adherence, and zero rework."
                : "Setiap proyek dijalankan melalui tahapan terstruktur dengan pengawasan ketat, memastikan jadwal tepat waktu dan hasil pekerjaan berstandar tinggi."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="bg-[#171717] rounded-[20px] p-5 border border-[#2f2f2f] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#d1ffca]">
                      /{wf.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#d1ffca]" />
                  </div>
                  <h3 className="font-condensed text-xl font-bold uppercase text-white mb-2 leading-tight">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-[#979797] leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Inverted Banner */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-[#ffffff] rounded-[32px] p-8 sm:p-12 border border-[#c6c6c6]/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Badge variant="mint" size="sm" className="mb-2">
              {isEn ? "GET IN TOUCH" : "KONSULTASI GRATIS"}
            </Badge>
            <h3 className="font-condensed text-[32px] sm:text-[46px] font-black uppercase tracking-tight text-[#000000] leading-none mb-2">
              {isEn ? "READY TO BUILD YOUR NEXT INDUSTRIAL FACILITY?" : "SIAP MEMULAI PROYEK STRUKTUR BAJA ANDA?"}
            </h3>
            <p className="text-sm sm:text-base text-[#555555] max-w-xl">
              {isEn
                ? "Contact our engineering team to discuss structural design, obtain an accurate Bill of Quantities (BoQ), or schedule a workshop visit."
                : "Hubungi tim rekayasa kami untuk berdiskusi mengenai desain struktur, estimasi anggaran proyek (RAB), maupun jadwal kunjungan ke workshop fabrikasi kami."}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                <span>{isEn ? "Contact Us" : "Hubungi Kami"}</span>
                <ArrowRight className="w-4 h-4 text-[#d1ffca]" />
              </Button>
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAction />
    </div>
  );
}
