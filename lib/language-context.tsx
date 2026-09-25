"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Nav
    "nav.home": "Home",
    "nav.about": "Visi & Misi",
    "nav.services": "Our Services",
    "nav.portfolio": "Portofolio",
    "nav.legality": "Legalitas",
    "nav.contact": "Contact Us",
    "nav.profile": "Profil Perusahaan",
    "nav.downloadProfile": "Unduh Company Profile",
    "nav.consult": "Konsultasi Sekarang",
    "nav.tagline": "Engineering · Construction · Manufacturing",
    "nav.selectLang": "Pilih Bahasa",

    // Hero
    "hero.badge": "SOLUSI REKAYASA & KONSTRUKSI TERPADU",
    "hero.accreditation": "TERAKREDITASI LPJK & KEMENAKER RI",
    "hero.active": "FABRIKASI & KONSTRUKSI AKTIF",
    "hero.company": "PT. KARYA FABRIKA MANDIRI",
    "hero.slogan": "Building Trust Through Quality",
    "hero.sloganSub": "Membangun Kepercayaan Melalui Kualitas, Presisi & Keselamatan",
    "hero.description":
      "Penyedia solusi terpadu rancang bangun struktur baja, konsultasi rekayasa teknis, pengadaan material berstandar SNI/ASTM, serta manufaktur fabrikasi presisi dengan jaminan Zero Accident dan ketepatan jadwal.",
    "hero.ctaConsult": "Konsultasi Teknis Proyek",
    "hero.ctaEstimator": "Kalkulator Estimasi",
    "hero.ctaPortfolio": "Lihat Portofolio Proyek",
    "hero.planTitle": "Perencanaan",
    "hero.planVal": "Akurasi BIM 3D",
    "hero.qualityTitle": "Standar Mutu",
    "hero.qualityVal": "QC Bertahap SNI & ASTM",
    "hero.efficiencyTitle": "Efisiensi",
    "hero.efficiencyVal": "Value Eng. 15-25%",
    "hero.safetyTitle": "Keselamatan",
    "hero.safetyVal": "Zero Accident K3",
    "hero.slide1": "Proyek Ereksi Rangka Baja Gudang Industri Modern",
    "hero.slide2": "Perakitan Kolom & Balok Baja Berat dengan Mobile Crane",
    "hero.switchPhoto": "Ganti Foto",
    "hero.photoIndicator": "Foto Dokumentasi Proyek Nyata",

    // Motto & Vision Mission
    "vm.badge": "FILOSOFI & ARAH STRATEGIS",
    "vm.title": "VISI, MISI & MOTTO PERUSAHAAN",
    "vm.subtitle":
      "Landasan utama integritas dan dedikasi kami dalam menghadirkan karya rekayasa konstruksi dan fabrikasi baja berkelas industri.",
    "vm.mottoLabel": "MOTTO PERUSAHAAN",
    "vm.mottoText": "Building Trust Through Quality & Precision",
    "vm.mottoDesc":
      "Setiap sambungan baja, kalkulasi rekayasa, dan tahapan ereksi dikerjakan dengan dedikasi tertinggi untuk menjaga amanah dan kepercayaan klien.",
    "vm.visionLabel": "VISI KAMI",
    "vm.visionTitle": "Menjadi Kontraktor EPC & Fabrikator Baja Terkemuka",
    "vm.visionDesc":
      "Menjadi perusahaan EPC (Engineering, Procurement, Construction) dan manufaktur fabrikasi baja presisi terdepan di Indonesia yang diakui atas inovasi pemodelan BIM terintegrasi, keunggulan mutu material berstandar internasional, efisiensi biaya terukur, serta komitmen tanpa kompromi pada keselamatan kerja (Zero Accident).",
    "vm.missionLabel": "MISI KAMI",
    "vm.missionTitle": "5 Pilar Komitmen Operasional",
    "vm.m1":
      "Menghadirkan layanan konsultasi rekayasa dan desain struktur berbasis teknologi 3D BIM dengan tingkat akurasi tinggi dan deteksi tabrakan terpadu.",
    "vm.m2":
      "Melaksanakan pekerjaan konstruksi dan ereksi struktur baja secara profesional, tepat waktu, dan memenuhi seluruh spesifikasi teknis SNI serta ASTM.",
    "vm.m3":
      "Mengoperasikan fasilitas workshop manufaktur dan fabrikasi berpresisi tinggi dengan pengujian mutu berkala (NDT/UT/MPI) oleh tenaga bersertifikat.",
    "vm.m4":
      "Menyediakan pengadaan material konstruksi berkualitas prima langsung dari pabrikan berlisensi dengan harga kompetitif melalui Value Engineering.",
    "vm.m5":
      "Menerapkan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3/ISO 45001) secara ketat guna mewujudkan budaya kerja Zero Accident di setiap lini.",

    // Core Values
    "values.badge": "BUDAYA KFM",
    "values.title": "NILAI-NILAI INTI KAMI",
    "val.integrity": "Integritas & Kepatuhan",
    "val.integrityDesc":
      "Transparansi biaya (RAB), legalitas resmi lengkap, dan kejujuran spesifikasi material tanpa pemotongan kualitas.",
    "val.precision": "Presisi & Kualitas Mutlak",
    "val.precisionDesc":
      "Toleransi fabrikasi milimeter dengan inspeksi berjenjang, sertifikasi welder (WPS/PQR), dan uji mutu independen.",
    "val.efficiency": "Efisiensi Cerdas (Value Engineering)",
    "val.efficiencyDesc":
      "Mengurangi limbah material dan memangkas biaya tidak efisien sebesar 15-25% tanpa mengurangi faktor keamanan.",
    "val.safety": "Keselamatan Tanpa Kompromi",
    "val.safetyDesc":
      "Penerapan standar APD lengkap, JSA harian, toolbox meeting, dan pengawasan Safety Officer berlisensi Kemenaker RI.",

    // Floating Action
    "float.chat": "Chat with us",
    "float.estimator": "Kalkulator Proyek",

    // Common
    "btn.explore": "Jelajahi Lebih Lanjut",
    "btn.contact": "Hubungi Kami",
    "btn.download": "Unduh Berkas",
    "btn.close": "Tutup",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "Vision & Mission",
    "nav.services": "Our Services",
    "nav.portfolio": "Portfolio",
    "nav.legality": "Legality & Compliance",
    "nav.contact": "Contact Us",
    "nav.profile": "Company Profile",
    "nav.downloadProfile": "Download Company Profile",
    "nav.consult": "Consult Now",
    "nav.tagline": "Engineering · Construction · Manufacturing",
    "nav.selectLang": "Select Language",

    // Hero
    "hero.badge": "INTEGRATED ENGINEERING & CONSTRUCTION SOLUTIONS",
    "hero.accreditation": "LPJK & MINISTRY OF MANPOWER ACCREDITED",
    "hero.active": "ACTIVE FABRICATION & ERECTION",
    "hero.company": "PT. KARYA FABRIKA MANDIRI",
    "hero.slogan": "Building Trust Through Quality",
    "hero.sloganSub": "Building Trust Through Quality, Precision & Safety",
    "hero.description":
      "Your integrated provider for structural steel design & build, technical engineering consultancy, certified SNI/ASTM material procurement, and precision steel fabrication with a Zero Accident commitment and punctual delivery.",
    "hero.ctaConsult": "Start Technical Consultation",
    "hero.ctaEstimator": "Project Cost Estimator",
    "hero.ctaPortfolio": "Explore Project Portfolio",
    "hero.planTitle": "Planning",
    "hero.planVal": "BIM 3D Accuracy",
    "hero.qualityTitle": "Quality Standard",
    "hero.qualityVal": "Tiered SNI & ASTM QC",
    "hero.efficiencyTitle": "Cost Efficiency",
    "hero.efficiencyVal": "Value Eng. 15-25%",
    "hero.safetyTitle": "Occupational Safety",
    "hero.safetyVal": "Zero Accident K3",
    "hero.slide1": "Erection of Modern Heavy Steel Frame Industrial Warehouse",
    "hero.slide2": "Heavy Steel Column & Rafter Assembly with Mobile Crane",
    "hero.switchPhoto": "Switch Photo",
    "hero.photoIndicator": "Real Project Site Documentation",

    // Motto & Vision Mission
    "vm.badge": "PHILOSOPHY & STRATEGIC DIRECTION",
    "vm.title": "OUR VISION, MISSION & MOTTO",
    "vm.subtitle":
      "The foundational pillars of integrity and dedication driving our industrial-grade construction and precision steel fabrication.",
    "vm.mottoLabel": "COMPANY MOTTO",
    "vm.mottoText": "Building Trust Through Quality & Precision",
    "vm.mottoDesc":
      "Every steel joint, structural engineering calculation, and site erection is carried out with utmost dedication to honor client trust and project safety.",
    "vm.visionLabel": "OUR VISION",
    "vm.visionTitle": "To Be the Leading EPC Contractor & Precision Fabricator",
    "vm.visionDesc":
      "To be the premier EPC (Engineering, Procurement, Construction) and precision steel fabrication company in Indonesia, recognized for integrated BIM innovation, international-grade material quality, measured cost efficiency, and an uncompromising commitment to Zero Accident occupational safety.",
    "vm.missionLabel": "OUR MISSION",
    "vm.missionTitle": "5 Operational Pillars of Commitment",
    "vm.m1":
      "Provide integrated engineering and structural design services powered by advanced 3D BIM technology with high geometric accuracy and clash detection.",
    "vm.m2":
      "Execute structural steel construction and site erection professionally, on schedule, adhering strictly to SNI, AISC, and ASTM technical specifications.",
    "vm.m3":
      "Operate high-precision manufacturing & fabrication workshop facilities with certified non-destructive testing (NDT/UT/MPI) and licensed welders.",
    "vm.m4":
      "Supply certified construction materials directly from tier-one manufacturers at competitive prices optimized through Value Engineering.",
    "vm.m5":
      "Enforce rigorous Occupational Health & Safety Management Systems (SMK3/ISO 45001) to foster a Zero Accident work culture across all job sites.",

    // Core Values
    "values.badge": "KFM CULTURE",
    "values.title": "OUR CORE VALUES",
    "val.integrity": "Integrity & Compliance",
    "val.integrityDesc":
      "Transparent bill of quantities (RAB), verified legal compliance, and authentic material mill certificates with zero compromises.",
    "val.precision": "Absolute Precision & Quality",
    "val.precisionDesc":
      "Millimeter fabrication tolerances with multi-stage inspections, certified welder procedures (WPS/PQR), and independent testing.",
    "val.efficiency": "Smart Value Engineering",
    "val.efficiencyDesc":
      "Minimizing material waste and trimming 15-25% unnecessary expenditures while preserving structural integrity and safety factors.",
    "val.safety": "Safety Without Compromise",
    "val.safetyDesc":
      "Strict PPE compliance, daily Job Safety Analysis (JSA), toolbox meetings, and licensed safety officers on every site.",

    // Floating Action
    "float.chat": "Chat with us",
    "float.estimator": "Project Estimator",

    // Common
    "btn.explore": "Explore More",
    "btn.contact": "Contact Us",
    "btn.download": "Download File",
    "btn.close": "Close",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kfm_lang") as Language | null;
      if (saved && (saved === "id" || saved === "en")) {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may not be available in private mode or SSR
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("kfm_lang", lang);
    } catch {
      // Ignore storage errors
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["id"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return fallback if used outside provider
    return {
      language: "id" as Language,
      setLanguage: () => {},
      t: (key: string) => translations["id"][key] || key,
    };
  }
  return context;
}
