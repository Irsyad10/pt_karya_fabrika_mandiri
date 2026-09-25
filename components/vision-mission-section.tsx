"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "./ui/badge";
import {
  Target,
  Compass,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";

export function VisionMissionSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const missionPoints = [
    {
      num: "01",
      title: isEn ? "Integrated 3D BIM Engineering" : "Rekayasa & Desain 3D BIM Terpadu",
      desc: t("vm.m1"),
    },
    {
      num: "02",
      title: isEn ? "High-Standard Steel Construction" : "Konstruksi Baja Berstandar Tinggi",
      desc: t("vm.m2"),
    },
    {
      num: "03",
      title: isEn ? "Precision Workshop Fabrication" : "Fabrikasi Workshop Presisi & QC NDT",
      desc: t("vm.m3"),
    },
    {
      num: "04",
      title: isEn ? "Certified Material Supply & Value Eng." : "Pengadaan Material Resmi & Value Engineering",
      desc: t("vm.m4"),
    },
    {
      num: "05",
      title: isEn ? "Zero Accident K3 & SMK3 Enforcement" : "Komitmen Keselamatan K3 (Zero Accident)",
      desc: t("vm.m5"),
    },
  ];

  const coreValues = [
    {
      code: "INT",
      title: t("val.integrity"),
      desc: t("val.integrityDesc"),
      icon: ShieldCheck,
      color: "text-[#d1ffca]",
    },
    {
      code: "PRE",
      title: t("val.precision"),
      desc: t("val.precisionDesc"),
      icon: Target,
      color: "text-[#fff100]",
    },
    {
      code: "EFF",
      title: t("val.efficiency"),
      desc: t("val.efficiencyDesc"),
      icon: TrendingUp,
      color: "text-[#d1ffca]",
    },
    {
      code: "SAF",
      title: t("val.safety"),
      desc: t("val.safetyDesc"),
      icon: Award,
      color: "text-[#fff100]",
    },
  ];

  return (
    <section id="visi-misi" className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="mint" size="sm">
              {t("vm.badge")}
            </Badge>
            <span className="font-mono text-xs text-[#666666] uppercase">
              PT. KARYA FABRIKA MANDIRI
            </span>
          </div>
          <h2 className="font-condensed text-[40px] sm:text-[60px] md:text-[68px] font-black uppercase tracking-tight text-[#000000] leading-[0.92]">
            {t("vm.title")}
          </h2>
        </div>
        <p className="text-[15px] sm:text-[17px] text-[#444444] max-w-[460px] font-normal leading-relaxed">
          {t("vm.subtitle")}
        </p>
      </div>

      {/* Motto Banner: Prominent & Authoritative */}
      <div className="relative overflow-hidden bg-[#000000] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 mb-12 border border-[#333333] shadow-lg">
        {/* Decorative background grid and glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d1ffca]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#34c759] animate-ping" />
              <span className="font-mono text-xs text-[#d1ffca] uppercase tracking-widest font-semibold">
                [ {t("vm.mottoLabel")} ]
              </span>
            </div>
            <h3 className="font-condensed text-[32px] sm:text-[46px] md:text-[54px] font-extrabold uppercase text-[#ffffff] leading-[0.95] tracking-tight mb-4">
              &ldquo;{t("vm.mottoText")}&rdquo;
            </h3>
            <p className="text-[#c6c6c6] text-sm sm:text-base leading-relaxed font-normal">
              {t("vm.mottoDesc")}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <div className="px-5 py-3 rounded-[12px] bg-[#1a1a1a] border border-[#333333]">
              <span className="font-mono text-[10px] text-[#888888] uppercase block">
                {isEn ? "Pledge" : "Komitmen"}
              </span>
              <span className="font-condensed text-xl font-bold text-[#ffffff]">
                100% Zero Accident K3
              </span>
            </div>
            <div className="px-5 py-3 rounded-[12px] bg-[#1a1a1a] border border-[#333333]">
              <span className="font-mono text-[10px] text-[#888888] uppercase block">
                {isEn ? "Quality Standard" : "Standar Kualitas"}
              </span>
              <span className="font-condensed text-xl font-bold text-[#d1ffca]">
                SNI · ASTM · ISO 9001
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Visi & Misi Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Visi Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#ffffff] rounded-[28px] p-7 sm:p-9 border border-[#c6c6c6]/60 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-[12px] bg-[#000000] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#d1ffca]" />
              </div>
              <Badge variant="mint" size="sm">
                {t("vm.visionLabel")}
              </Badge>
            </div>

            <h3 className="font-condensed text-[28px] sm:text-[36px] font-bold uppercase tracking-tight text-[#000000] leading-none mb-4">
              {t("vm.visionTitle")}
            </h3>

            <p className="text-[15px] sm:text-[16px] text-[#444444] leading-relaxed mb-6 font-normal">
              {t("vm.visionDesc")}
            </p>
          </div>

          <div className="pt-6 border-t border-[#e5e5e5] space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#444444]">
              <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
              <span>{isEn ? "Nationwide Project Delivery" : "Jangkauan Pengiriman Proyek Nasional"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#444444]">
              <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
              <span>{isEn ? "Advanced 3D BIM Pre-Construction" : "Pra-Konstruksi Digital Berbasis 3D BIM"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#444444]">
              <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
              <span>{isEn ? "Certified Quality Control & NDT Testing" : "Quality Control Berlapis & Uji NDT Terverifikasi"}</span>
            </div>
          </div>
        </div>

        {/* Misi Card (7 Cols) */}
        <div className="lg:col-span-7 bg-[#ffffff] rounded-[28px] p-7 sm:p-9 border border-[#c6c6c6]/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-[12px] bg-[#000000] text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-[#fff100]" />
              </div>
              <Badge variant="yellow" size="sm">
                {t("vm.missionLabel")}
              </Badge>
            </div>

            <h3 className="font-condensed text-[28px] sm:text-[36px] font-bold uppercase tracking-tight text-[#000000] leading-none mb-6">
              {t("vm.missionTitle")}
            </h3>

            {/* Mission 5 Points List */}
            <div className="space-y-4">
              {missionPoints.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-3.5 p-3.5 rounded-[12px] bg-[#f8f8f8] hover:bg-[#f2f2f2] transition-colors border border-[#e5e5e5]"
                >
                  <span className="font-mono text-xs font-bold text-[#000000] bg-[#e5e5e5] px-2 py-1 rounded-[4px] shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#000000] mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nilai-Nilai Inti (Core Values Section) */}
      <div className="pt-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="ash" size="sm">
            {t("values.badge")}
          </Badge>
          <span className="font-mono text-xs text-[#666666] uppercase">
            {isEn ? "Core Pillars" : "Pilar Utama Budaya Kerja"}
          </span>
        </div>
        <h3 className="font-condensed text-[32px] sm:text-[44px] font-extrabold uppercase tracking-tight text-[#000000] leading-none mb-8">
          {t("values.title")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.code}
                className="bg-[#ffffff] rounded-[20px] p-6 border border-[#c6c6c6]/60 hover:border-[#000000] transition-colors flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-[#000000] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#d1ffca]" />
                    </div>
                    <span className="font-mono text-xs text-[#888888] font-bold">
                      /{val.code}
                    </span>
                  </div>

                  <h4 className="font-condensed text-xl font-bold uppercase text-[#000000] mb-2 leading-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
