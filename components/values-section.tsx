import React from "react";
import { Badge } from "./ui/badge";
import {
  Target,
  Award,
  TrendingDown,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      no: "01",
      title: "KETEPATAN PERENCANAAN",
      subtitle: "Precision Engineering & Scheduling",
      icon: Target,
      highlight: "Akurasi Volume >99%",
      desc: "Perencanaan berbasis pemodelan 3D dan clash detection mendalam sebelum pabrikasi. Memastikan jadwal pengerjaan tidak meleset, koordinasi antar disiplin mulus, dan risiko rework ditekan hingga titik nol.",
      points: [
        "Metode Penjadwalan Terintegrasi (Critical Path Method)",
        "Clash detection digital mencegah tabrakan struktur & MEP",
        "Estimasi Rencana Anggaran Biaya (RAB) transparan dan detail",
      ],
    },
    {
      no: "02",
      title: "KUALITAS PEKERJAAN",
      subtitle: "Uncompromising Quality Control",
      icon: Award,
      highlight: "Standar SNI & ASTM",
      desc: "Setiap fase fabrikasi dan konstruksi melewati checklist inspeksi bertahap. Mulai dari uji tarik baja, sertifikasi welder (WPS/PQR), hingga uji ultrasonik (UT) pada sambungan kritis struktur.",
      points: [
        "Material Mill Certificate resmi dari pabrikan berlisensi",
        "Pemeriksaan Non-Destructive Testing (NDT/UT & MPI)",
        "Toleransi presisi millimeter pada fabrikasi & perakitan",
      ],
    },
    {
      no: "03",
      title: "EFISIENSI BIAYA",
      subtitle: "Value Engineering & Waste Reduction",
      icon: TrendingDown,
      highlight: "Hemat Anggaran 15-25%",
      desc: "Kami menerapkan rekayasa nilai (Value Engineering) cerdas untuk memilih material dan metode kerja yang paling optimal tanpa sedikitpun mengorbankan durabilitas dan faktor keamanan teknis.",
      points: [
        "Optimasi pola pemotongan plat memangkas limbah baja",
        "Rantai pasok material langsung dari distributor tingkat pertama",
        "Pencegahan pembengkakan biaya lewat pengawasan harian",
      ],
    },
    {
      no: "04",
      title: "STANDAR KESELAMATAN (K3) & TEKNIS",
      subtitle: "Zero Accident Commitment",
      icon: ShieldAlert,
      highlight: "ISO 45001 & Kemenaker",
      desc: "Keselamatan kerja adalah nilai non-negosiasi. Setiap personel di lapangan dan workshop dibekali APD lengkap, pengawasan safety officer bersertifikat, serta prosedur JSA (Job Safety Analysis) harian.",
      points: [
        "Toolbox meeting harian dan mitigasi bahaya sebelum bekerja",
        "Inspeksi kelayakan rutin untuk crane, scafolding, dan mesin berat",
        "Kepatuhan regulasi ketenagakerjaan dan lingkungan hidup",
      ],
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#000000] text-[#ffffff] rounded-[36px] sm:rounded-[48px] my-6 max-w-[1240px] mx-auto px-6 sm:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pt-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="yellow" size="sm">
              NILAI DASAR OPERASIONAL KAMI
            </Badge>
            <span className="font-mono text-xs text-[#979797]">STANDAR TEKNIS</span>
          </div>
          <h2 className="font-condensed text-[40px] sm:text-[64px] font-extrabold uppercase tracking-tight text-[#ffffff] leading-[0.9]">
            KOMITMEN KAMI PADA MUTU &amp; KEPERCAYAAN
          </h2>
        </div>
        <p className="text-[15px] text-[#979797] max-w-[420px] font-normal leading-relaxed">
          Didukung tenaga ahli kompeten, kami menjunjung 4 pilar filosofi kerja
          yang menjadi standar mutlak di setiap tahapan proyek.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        {values.map((val) => {
          const Icon = val.icon;
          return (
            <div
              key={val.no}
              className="bg-[#171717] rounded-[28px] p-7 sm:p-9 border border-[#2f2f2f] hover:border-[#444444] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[10px] bg-[#2f2f2f] text-[#d1ffca] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#fff100] bg-[#fff100]/10 px-2.5 py-1 rounded-[4px]">
                      {val.highlight}
                    </span>
                    <span className="font-mono text-sm text-[#979797]">/{val.no}</span>
                  </div>
                </div>

                <h3 className="font-condensed text-[28px] sm:text-[32px] font-bold uppercase tracking-tight text-[#ffffff] leading-none mb-1">
                  {val.title}
                </h3>
                <span className="font-mono text-[12px] text-[#d1ffca] tracking-wide block mb-4">
                  {val.subtitle}
                </span>

                <p className="text-[15px] text-[#c6c6c6] leading-relaxed mb-6 font-normal">
                  {val.desc}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#2f2f2f]">
                {val.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-[13px] text-[#979797]">
                    <CheckCircle2 className="w-4 h-4 text-[#d1ffca] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
