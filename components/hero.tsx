"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Compass,
  CheckCircle2,
  Sparkles,
  Camera,
} from "lucide-react";

export function Hero() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<0 | 1>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      src: "/images/hero-steel-frame.jpg",
      titleId: "Ereksi Rangka Baja Gudang Industri",
      titleEn: "Heavy Industrial Warehouse Steel Frame Erection",
      locationId: "Kawasan Industri, Jawa Barat",
      locationEn: "Industrial Estate, West Java",
      spec: "Profil WF 400 - WF 700 · SNI 07-7178",
    },
    {
      src: "/images/hero-crane-structure.jpg",
      titleId: "Perakitan Kolom & Balok Baja dengan Mobile Crane",
      titleEn: "Heavy Column & Beam Assembly with Mobile Crane",
      locationId: "Site Proyek Manufaktur",
      locationEn: "Manufacturing Plant Project Site",
      spec: "Lifting Safety K3 · Toleransi Presisi",
    },
  ];

  // Auto-switch slides gently every 7 seconds if not manually paused
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] flex items-center justify-center overflow-hidden bg-[#0a0d14] text-white">
      {/* Background Images with Darkened Overlay (Effect Gelap seperti Gambar 1) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={language === "en" ? slide.titleEn : slide.titleId}
              fill
              priority={idx === 0}
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Enhanced Dark Overlay Layer (Mirrors Reference Image 1) */}
        {/* Dark radial gradient + dark tint ensuring slogan & title pop out clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/75 via-[#000000]/65 to-[#000000]/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000000]/40 to-[#000000]/90" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Top Badges & Operational Status */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Badge variant="mint" size="md" className="font-mono text-xs tracking-wider">
            {t("hero.badge")}
          </Badge>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[12px] font-mono text-[#d1ffca]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
            <span>{t("hero.active")}</span>
          </div>
        </div>

        {/* Massive Centered Company Title (Style exactly matching Image 1) */}
        <h1 className="font-condensed text-[48px] sm:text-[72px] md:text-[92px] lg:text-[104px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.92] drop-shadow-md max-w-5xl mb-3 sm:mb-4">
          PT. KARYA FABRIKA MANDIRI
        </h1>

        {/* Prominent Slogan Underneath Title (as requested, crisp & high contrast) */}
        <div className="mb-6 max-w-3xl">
          <p className="font-condensed text-[26px] sm:text-[36px] md:text-[42px] font-bold text-[#ffffff] tracking-wide uppercase leading-tight drop-shadow">
            &ldquo;{t("hero.slogan")}&rdquo;
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#d1ffca] font-mono tracking-wide mt-1.5 font-medium">
            {t("hero.sloganSub")}
          </p>
        </div>

        {/* Detailed Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#e0e0e0] max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal drop-shadow">
          {t("hero.description")}
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Link href="/contact-us">
            <Button
              variant="mint"
              size="lg"
              className="rounded-[10px] px-8 py-3.5 shadow-lg shadow-black/40 text-[#000000] font-bold text-sm sm:text-base gap-2 group"
            >
              <span>{t("hero.ctaConsult")}</span>
              <ArrowRight className="w-5 h-5 text-[#000000] group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/portofolio">
            <Button
              variant="outline-white"
              size="lg"
              className="rounded-[10px] px-7 py-3.5 backdrop-blur-md bg-white/10 hover:bg-white/20 border-white/40 text-white font-medium text-sm sm:text-base gap-2"
            >
              <span>{t("hero.ctaPortfolio")}</span>
            </Button>
          </Link>

          <a href="#kalkulator" className="hidden sm:inline-block">
            <Button
              variant="ghost"
              size="lg"
              className="rounded-[10px] px-6 py-3.5 text-white/90 hover:text-white border-white/20 hover:border-white/50 gap-2 text-sm"
            >
              <Calculator className="w-4 h-4 text-[#d1ffca]" />
              <span>{t("hero.ctaEstimator")}</span>
            </Button>
          </a>
        </div>

        {/* Micro Metric Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-white/15 backdrop-blur-sm">
          <div className="p-3 rounded-[12px] bg-black/40 border border-white/10 text-left">
            <span className="font-mono text-[11px] text-[#a0a0a0] uppercase block">
              {t("hero.planTitle")}
            </span>
            <span className="font-condensed text-lg sm:text-xl font-bold uppercase text-[#ffffff]">
              {t("hero.planVal")}
            </span>
          </div>

          <div className="p-3 rounded-[12px] bg-black/40 border border-white/10 text-left">
            <span className="font-mono text-[11px] text-[#a0a0a0] uppercase block">
              {t("hero.qualityTitle")}
            </span>
            <span className="font-condensed text-lg sm:text-xl font-bold uppercase text-[#ffffff]">
              {t("hero.qualityVal")}
            </span>
          </div>

          <div className="p-3 rounded-[12px] bg-black/40 border border-white/10 text-left">
            <span className="font-mono text-[11px] text-[#a0a0a0] uppercase block">
              {t("hero.efficiencyTitle")}
            </span>
            <span className="font-condensed text-lg sm:text-xl font-bold uppercase text-[#ffffff]">
              {t("hero.efficiencyVal")}
            </span>
          </div>

          <div className="p-3 rounded-[12px] bg-black/40 border border-white/10 text-left">
            <span className="font-mono text-[11px] text-[#a0a0a0] uppercase block">
              {t("hero.safetyTitle")}
            </span>
            <span className="font-condensed text-lg sm:text-xl font-bold uppercase text-[#ffffff]">
              {t("hero.safetyVal")}
            </span>
          </div>
        </div>

        {/* Project Photo Switcher Controls (Image 2 vs Image 3) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 w-full max-w-4xl text-left bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-[16px] border border-white/15">
          <div className="flex items-center gap-2.5">
            <Camera className="w-4 h-4 text-[#d1ffca] shrink-0" />
            <div className="text-xs">
              <span className="font-mono text-[11px] text-[#888888] block">
                {t("hero.photoIndicator")} ({currentSlide + 1}/2):
              </span>
              <span className="font-semibold text-white">
                {language === "en"
                  ? slides[currentSlide].titleEn
                  : slides[currentSlide].titleId}
              </span>
              <span className="text-[#a0a0a0] ml-2 text-[11px] hidden sm:inline">
                • {slides[currentSlide].spec}
              </span>
            </div>
          </div>

          {/* Switcher Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
              }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentSlide(idx as 0 | 1);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? "w-6 bg-[#d1ffca]" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
              }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
