"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Compass,
  Layers,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Tag & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Badge variant="mint" size="md">
              SOLUSI TERPADU TAHAP AWAL HINGGA HANDOVER
            </Badge>
            <Badge variant="ash" size="sm" className="hidden sm:inline-flex">
              TERAKREDITASI LPJK & KEMENAKER RI
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-[12px] font-mono text-[#444444]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
            <span>FABRIKASI & KONSTRUKSI AKTIF</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Massive Condensed Editorial Typography (DESIGN.md 80px - 130px, 0.9 line-height) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-condensed text-[54px] sm:text-[76px] md:text-[96px] lg:text-[108px] xl:text-[118px] font-extrabold uppercase text-[#000000] leading-[0.88] tracking-[-0.035em] mb-6">
              SOLUSI REKAYASA,
              <br />
              KONSTRUKSI &amp;
              <br />
              <span className="text-[#2f2f2f]">FABRIKASI PRESISI</span>
            </h1>

            <p className="text-[17px] sm:text-[19px] leading-[1.4] text-[#444444] max-w-[620px] mb-8 font-normal">
              <strong>PT Karya Fabrika Mandiri</strong> mengintegrasikan{" "}
              <span className="text-[#000000] font-medium">konsultasi rekayasa</span>,{" "}
              <span className="text-[#000000] font-medium">konstruksi terpadu</span>,{" "}
              <span className="text-[#000000] font-medium">pengadaan material</span>, dan{" "}
              <span className="text-[#000000] font-medium">manufaktur baja presisi</span>.
              Ditenagai tenaga ahli berpengalaman yang menjamin ketepatan perencanaan,
              efisiensi biaya terukur, serta standar keselamatan K3 tertinggi.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#inquiry">
                <Button variant="primary" size="lg" className="rounded-[8px] px-8">
                  <span>Mulai Konsultasi Teknis</span>
                  <ArrowRight className="w-5 h-5 text-[#d1ffca]" />
                </Button>
              </a>
              <a href="#kalkulator">
                <Button variant="ghost" size="lg" className="gap-2">
                  <Calculator className="w-4 h-4 text-[#000000]" />
                  <span>Kalkulator Estimasi Proyek</span>
                </Button>
              </a>
            </div>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#c6c6c6]">
              <div>
                <span className="font-mono text-[11px] text-[#979797] uppercase block">
                  Perencanaan
                </span>
                <span className="font-condensed text-xl font-bold uppercase text-[#000000]">
                  Akurasi BIM 3D
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#979797] uppercase block">
                  Standar Mutu
                </span>
                <span className="font-condensed text-xl font-bold uppercase text-[#000000]">
                  QC Bertahap SNI
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#979797] uppercase block">
                  Efisiensi
                </span>
                <span className="font-condensed text-xl font-bold uppercase text-[#000000]">
                  Value Eng. 15-25%
                </span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-[#979797] uppercase block">
                  Keselamatan
                </span>
                <span className="font-condensed text-xl font-bold uppercase text-[#000000]">
                  Zero Accident
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical 3D Tactile Render Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#ffffff] rounded-[32px] p-3 border border-[#c6c6c6]/50 flat-card overflow-hidden group">
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden bg-[#e5e5e5]">
                <Image
                  src="/images/hero-fabrication.jpg"
                  alt="3D Modular Structural Steel and Concrete Engineering Object - PT Karya Fabrika Mandiri"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Technical Annotation Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#000000]/90 text-[#ffffff] font-mono text-[11px] px-3 py-1.5 rounded-[4px] tracking-wide uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#d1ffca] rounded-full" />
                    MODULAR STEEL &amp; CONCRETE RENDER
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="bg-[#fff100] text-[#000000] font-mono text-[11px] font-bold px-2.5 py-1 rounded-[4px]">
                    TOLERANSI ±0.05MM
                  </span>
                </div>
              </div>

              {/* Bottom Card Spec Breakdown */}
              <div className="p-4 pt-4 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[12px] text-[#444444] uppercase font-semibold">
                      WORKSHOP MANUFAKTUR &amp; SITE TERINTEGRASI
                    </span>
                  </div>
                  <p className="text-[13px] text-[#979797] mt-0.5">
                    Fabrikasi baja berat, bejana tekan, &amp; perakitan modular siap ereksi
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <Badge variant="mint" size="sm">
                    KAPASITAS TINGGI
                  </Badge>
                </div>
              </div>
            </div>

            {/* Decorative Side Tag */}
            <div className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right">
              <span className="font-mono text-[11px] text-[#979797] tracking-widest uppercase">
                PT KARYA FABRIKA MANDIRI · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
