import React from "react";
import { Badge } from "./ui/badge";

export function StatsSection() {
  const stats = [
    {
      value: "150+",
      unit: "PROYEK",
      label: "PROYEK SELESAI & DISERAHTERIMAKAN",
      desc: "Menjangkau fasilitas industri, pabrik manufaktur, gudang logistik & struktur komersial.",
      tag: "TRACK RECORD",
    },
    {
      value: "100%",
      unit: "K3 ZERO",
      label: "STANDAR K3 ZERO ACCIDENT",
      desc: "Prosedur keselamatan kerja ketat bersertifikasi Kemenaker dan pengawasan harian di lapangan.",
      tag: "KESELAMATAN",
    },
    {
      value: "98.8%",
      unit: "AKURASI",
      label: "KETEPATAN JADWAL (ON-TIME)",
      desc: "Simulasi jadwal terintegrasi memastikan milestone konstruksi tercapai tanpa keterlambatan.",
      tag: "PERENCANAAN",
    },
    {
      value: "15-25%",
      unit: "HEMAT",
      label: "EFISIENSI BIAYA KONTRAKTOR",
      desc: "Rekayasa nilai (Value Engineering) meminimalisir sisa material dan efisiensi rantai pasok.",
      tag: "VALUE ENG.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-y border-[#a4a6a9]/30">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono text-[12px] text-[#0065bf] uppercase tracking-wider block mb-2 font-bold">
              [ METRIK KINERJA &amp; KEPERCAYAAN ]
            </span>
            <h2 className="font-condensed text-[38px] sm:text-[52px] font-bold uppercase tracking-tight text-[#012655] leading-none">
              STANDAR TINGGI DALAM SETIAP EKSEKUSI
            </h2>
          </div>
          <p className="text-[15px] text-[#484d53] max-w-[420px] font-normal leading-relaxed">
            Data rekam jejak nyata yang dibangun di atas dedikasi teknis, kepatuhan keselamatan,
            dan kolaborasi terbuka dengan pemilik proyek serta konsultan pengawas.
          </p>
        </div>

        {/* 4 Flat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] rounded-[28px] p-6 border border-[#a4a6a9]/30 flat-card flex flex-col justify-between hover:border-[#0065bf] transition-colors group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="mint" size="sm">
                    {item.tag}
                  </Badge>
                  <span className="font-mono text-[11px] text-[#71767c]">0{idx + 1}</span>
                </div>
                <div className="font-condensed text-[56px] sm:text-[64px] font-black text-[#012655] group-hover:text-[#0065bf] transition-colors leading-[0.88] tracking-tight">
                  {item.value}
                </div>
                <div className="font-mono text-[11px] text-[#484d53] font-semibold tracking-wider uppercase mt-2">
                  {item.unit}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#a4a6a9]/20">
                <h3 className="font-bold text-[15px] text-[#012655] uppercase tracking-tight mb-1">
                  {item.label}
                </h3>
                <p className="text-[13px] text-[#484d53] leading-normal font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
