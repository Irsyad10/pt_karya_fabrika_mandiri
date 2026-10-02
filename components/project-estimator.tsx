"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Calculator,
  Building,
  Hammer,
  Clock,
  Send,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckSquare,
  Square,
} from "lucide-react";

export function ProjectEstimator() {
  const projectTypes = [
    {
      id: "pabrik",
      name: "PABRIK MANUFAKTUR",
      desc: "Bangunan industri berat dengan rel overhead crane, pondasi mesin, dan ruang produksi terpadu.",
      baseWeeks: 16,
      steelKgPerSqm: 42,
    },
    {
      id: "gudang",
      name: "GUDANG LOGISTIK BENTANG LEBAR",
      desc: "Struktur baja bentang lebar tanpa kolom tengah (clear-span) untuk kapasitas penyimpanan optimal.",
      baseWeeks: 12,
      steelKgPerSqm: 32,
    },
    {
      id: "struktur",
      name: "STRUKTUR BAJA KHUSUS / MEZANIN",
      desc: "Pekerjaan penambahan mezanin bertingkat, struktur jembatan pipa (pipe rack), dan kanopi heavy-duty.",
      baseWeeks: 8,
      steelKgPerSqm: 50,
    },
    {
      id: "tangki",
      name: "TANGKI & BEJANA INDUSTRI",
      desc: "Fabrikasi bejana tekan, tangki silo penyimpanan cairan/kimia, dan sistem perpipaan terintegrasi.",
      baseWeeks: 10,
      steelKgPerSqm: 65,
    },
  ];

  const areaPresets = [500, 1000, 2500, 5000, 10000];

  const [selectedType, setSelectedType] = useState(projectTypes[1].id);
  const [area, setArea] = useState(2500);
  const [scopes, setScopes] = useState({
    bim: true,
    fabrication: true,
    erection: true,
    procurement: true,
  });
  const [timelineSpeed, setTimelineSpeed] = useState<"standard" | "fasttrack">("standard");

  const currentType = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];

  // Calculate estimated metrics
  const estimatedTonnage = Math.round((area * currentType.steelKgPerSqm) / 1000);
  let estimatedWeeks = Math.max(
    6,
    Math.round(currentType.baseWeeks * Math.sqrt(area / 1500) * (timelineSpeed === "fasttrack" ? 0.75 : 1))
  );

  const toggleScope = (key: keyof typeof scopes) => {
    setScopes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedScopeNames = [
    scopes.bim && "Konsultasi & BIM 3D",
    scopes.fabrication && "Fabrikasi Workshop",
    scopes.erection && "Konstruksi & Ereksi",
    scopes.procurement && "Pengadaan Material",
  ].filter(Boolean);

  const waMessage = encodeURIComponent(
    `Halo Tim Teknis PT Karya Fabrika Mandiri,\nSaya ingin menanyakan estimasi proyek:\n- Tipe: ${currentType.name}\n- Luas/Skala: ${area} m²\n- Estimasi Tonase Baja: ~${estimatedTonnage} Ton\n- Lingkup: ${selectedScopeNames.join(
      ", "
    )}\n- Opsi Timeline: ${timelineSpeed === "fasttrack" ? "Fast-Track (Prioritas Cepat)" : "Standar Normal"}\nMohon informasi konsultasi & pembahasan teknis lebih lanjut.`
  );

  return (
    <section id="kalkulator" className="py-16 sm:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="mint">SIMULATOR PERENCANAAN TEKNIS</Badge>
              <span className="font-mono text-xs text-[#71767c]">INTERACTIVE TOOL</span>
            </div>
            <h2 className="font-condensed text-[42px] sm:text-[64px] font-extrabold uppercase tracking-tight text-[#012655] leading-[0.9]">
              KALKULATOR ESTIMASI PROYEK
            </h2>
          </div>
          <p className="text-[16px] text-[#484d53] max-w-[460px] font-normal leading-relaxed">
            Hitung perkiraan kebutuhan baja, durasi pengerjaan, dan ruang lingkup
            layanan untuk proyek Anda dalam beberapa detik.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#ffffff] rounded-[32px] p-6 sm:p-10 border border-[#a4a6a9]/30 flat-card shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Options Input Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Project Type */}
              <div>
                <label className="font-mono text-[12px] text-[#71767c] uppercase tracking-wider block mb-3 font-semibold">
                  01. PILIH KLASIFIKASI PROYEK
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.id}
                      onClick={() => setSelectedType(pt.id)}
                      className={`p-4 rounded-[16px] text-left border transition-all cursor-pointer ${
                        selectedType === pt.id
                          ? "bg-[#012655] text-[#ffffff] border-[#012655] shadow-xs"
                          : "bg-[#f4f6f9] text-[#012655] border-[#a4a6a9]/25 hover:border-[#0065bf]"
                      }`}
                    >
                      <span className="font-condensed text-[18px] sm:text-[20px] font-bold uppercase block leading-snug">
                        {pt.name}
                      </span>
                      <span
                        className={`text-[12px] line-clamp-2 mt-1 ${
                          selectedType === pt.id ? "text-[#a4a6a9]" : "text-[#484d53]"
                        }`}
                      >
                        {pt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Scale / Area in m2 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-mono text-[12px] text-[#71767c] uppercase tracking-wider font-semibold">
                    02. ESTIMASI LUAS BANGUNAN / AREA (M²)
                  </label>
                  <span className="font-mono text-base font-bold text-white bg-[#0065bf] px-3 py-1 rounded-[6px] shadow-xs">
                    {area.toLocaleString('id-ID')} m²
                  </span>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {areaPresets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setArea(preset)}
                      className={`px-3.5 py-1.5 rounded-[8px] font-mono text-xs font-medium cursor-pointer border transition-colors ${
                        area === preset
                          ? "bg-[#012655] text-[#ffffff] border-[#012655] shadow-xs"
                          : "bg-[#f4f6f9] text-[#484d53] border-transparent hover:border-[#0065bf]"
                      }`}
                    >
                      {preset.toLocaleString('id-ID')} m²
                    </button>
                  ))}
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="200"
                  max="15000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#e5e5e5] rounded-lg appearance-none cursor-pointer accent-[#000000]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#979797] mt-1.5">
                  <span>200 m² (Fasilitas Khusus)</span>
                  <span>15.000 m² (Mega Kompleks)</span>
                </div>
              </div>

              {/* Step 3: Scope Selection */}
              <div>
                <label className="font-mono text-[12px] text-[#979797] uppercase tracking-wider block mb-3">
                  03. CAKUPAN SOLUSI TERINTEGRASI
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => toggleScope("bim")}
                    className="flex items-center gap-3 p-3.5 bg-[#f3f3f3] rounded-[12px] text-left hover:bg-[#eaeaea] transition-colors cursor-pointer"
                  >
                    {scopes.bim ? (
                      <CheckSquare className="w-5 h-5 text-[#000000]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#979797]" />
                    )}
                    <div>
                      <span className="font-semibold text-[14px] text-[#000000] block">
                        Konsultasi Desain &amp; BIM
                      </span>
                      <span className="text-[12px] text-[#444444]">
                        Analisis struktur, shop drawing, RKS
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => toggleScope("fabrication")}
                    className="flex items-center gap-3 p-3.5 bg-[#f3f3f3] rounded-[12px] text-left hover:bg-[#eaeaea] transition-colors cursor-pointer"
                  >
                    {scopes.fabrication ? (
                      <CheckSquare className="w-5 h-5 text-[#000000]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#979797]" />
                    )}
                    <div>
                      <span className="font-semibold text-[14px] text-[#000000] block">
                        Fabrikasi Baja Workshop
                      </span>
                      <span className="text-[12px] text-[#444444]">
                        CNC cutting, perakitan, blasting &amp; cat
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => toggleScope("procurement")}
                    className="flex items-center gap-3 p-3.5 bg-[#f3f3f3] rounded-[12px] text-left hover:bg-[#eaeaea] transition-colors cursor-pointer"
                  >
                    {scopes.procurement ? (
                      <CheckSquare className="w-5 h-5 text-[#000000]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#979797]" />
                    )}
                    <div>
                      <span className="font-semibold text-[14px] text-[#000000] block">
                        Pengadaan Material Proyek
                      </span>
                      <span className="text-[12px] text-[#444444]">
                        Baja profil SNI, sandwich panel, MEP
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => toggleScope("erection")}
                    className="flex items-center gap-3 p-3.5 bg-[#f3f3f3] rounded-[12px] text-left hover:bg-[#eaeaea] transition-colors cursor-pointer"
                  >
                    {scopes.erection ? (
                      <CheckSquare className="w-5 h-5 text-[#000000]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#979797]" />
                    )}
                    <div>
                      <span className="font-semibold text-[14px] text-[#000000] block">
                        Ereksi &amp; Konstruksi Site
                      </span>
                      <span className="text-[12px] text-[#444444]">
                        Instalasi lapangan dengan crane &amp; K3
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 4: Timeline Priority */}
              <div>
                <label className="font-mono text-[12px] text-[#979797] uppercase tracking-wider block mb-3">
                  04. JADWAL &amp; SKEMA PENYELESAIAN
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setTimelineSpeed("standard")}
                    className={`flex-1 p-3 rounded-[12px] border text-center font-medium text-sm transition-all cursor-pointer ${
                      timelineSpeed === "standard"
                        ? "bg-[#012655] text-[#ffffff] border-[#012655]"
                        : "bg-[#f4f6f9] text-[#484d53] border-transparent hover:border-[#0065bf]"
                    }`}
                  >
                    Jadwal Normal (Efisiensi Maksimal)
                  </button>
                  <button
                    onClick={() => setTimelineSpeed("fasttrack")}
                    className={`flex-1 p-3 rounded-[12px] border text-center font-medium text-sm transition-all cursor-pointer ${
                      timelineSpeed === "fasttrack"
                        ? "bg-[#012655] text-[#ffffff] border-[#012655]"
                        : "bg-[#f4f6f9] text-[#484d53] border-transparent hover:border-[#0065bf]"
                    }`}
                  >
                    Fast-Track (Shift Ganda &amp; Akselerasi)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#012655] via-[#012655] to-[#001736] text-[#ffffff] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-[#0065bf]/30 shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#0065bf]/30 mb-6">
                  <span className="font-mono text-xs text-[#60a5fa] tracking-wider uppercase font-bold">
                    ESTIMASI RINGKASAN TEKNIS
                  </span>
                  <Badge variant="mint" size="sm">
                    SIMULASI
                  </Badge>
                </div>

                {/* Primary Figure 1: Estimated Steel Tonnage */}
                <div className="mb-6">
                  <span className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1">
                    ESTIMASI KEBUTUHAN STRUKTUR BAJA
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-condensed text-[54px] sm:text-[64px] font-black leading-none text-[#ffffff]">
                      ~{estimatedTonnage.toLocaleString('id-ID')}
                    </span>
                    <span className="font-mono text-lg text-[#60a5fa] font-bold">TON</span>
                  </div>
                  <span className="text-[12px] text-[#a4a6a9] mt-1 block">
                    Berdasarkan indeks {currentType.steelKgPerSqm} kg/m² standar industri.
                  </span>
                </div>

                {/* Primary Figure 2: Estimated Timeline */}
                <div className="mb-8 pt-6 border-t border-[#0065bf]/20">
                  <span className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1">
                    ESTIMASI DURASI PENGERJAAN
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-condensed text-[54px] sm:text-[64px] font-black leading-none text-[#ffffff]">
                      {estimatedWeeks} - {estimatedWeeks + 4}
                    </span>
                    <span className="font-mono text-lg text-[#60a5fa] font-bold">MINGGU</span>
                  </div>
                  <span className="text-[12px] text-[#a4a6a9] mt-1 block">
                    {timelineSpeed === "fasttrack"
                      ? "Skema akselerasi fast-track dengan tim paralel di workshop dan site."
                      : "Pola kerja standar dengan milestone pengawasan K3 berjenjang."}
                  </span>
                </div>

                {/* Technical Guarantees Included */}
                <div className="space-y-2 mb-8 bg-[#001a3d] p-4 rounded-[16px] border border-[#0065bf]/25">
                  <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                    <ShieldCheck className="w-4 h-4 text-[#60a5fa] shrink-0" />
                    <span>Garansi Struktural &amp; Standar SNI 1729:2020</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                    <ShieldCheck className="w-4 h-4 text-[#60a5fa] shrink-0" />
                    <span>Laporan Inspeksi Las NDT/UT &amp; Mill Certificate</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#cbd5e1]">
                    <ShieldCheck className="w-4 h-4 text-[#60a5fa] shrink-0" />
                    <span>Pengawasan K3 Bersertifikat Ahli K3 Umum</span>
                  </div>
                </div>
              </div>

              {/* Direct Action Link to WhatsApp / Form */}
              <div className="pt-4 border-t border-[#0065bf]/20">
                <a
                  href={`https://wa.me/6281234567890?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="mint" size="lg" className="w-full justify-between shadow-md">
                    <span className="font-bold text-white">Kirim Hasil &amp; Dapatkan RAB Resmi</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Button>
                </a>
                <span className="text-center block text-[11px] font-mono text-[#979797] mt-2.5">
                  Respon teknis dalam 1x24 jam oleh lead engineer kami
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
