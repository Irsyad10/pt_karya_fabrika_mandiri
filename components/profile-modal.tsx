"use client";

import React from "react";
import { X, Download, FileText, CheckCircle2, ShieldCheck, Building2, PhoneCall } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { language } = useLanguage();

  if (!isOpen) return null;

  const isEn = language === "en";

  const handleDownload = () => {
    // Generate a printable/downloadable company profile summary or trigger print
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Company Profile - PT. KARYA FABRIKA MANDIRI</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; padding: 40px; color: #111; }
            h1 { font-size: 26px; text-transform: uppercase; margin-bottom: 4px; }
            .subtitle { color: #666; font-size: 14px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 1px; }
            .section { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #ddd; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            .badge { display: inline-block; background: #eee; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
            ul { margin-top: 8px; padding-left: 20px; }
          </style>
        </head>
        <body>
          <h1>PT. KARYA FABRIKA MANDIRI</h1>
          <div class="subtitle">Engineering · Construction · Precision Manufacturing · EPC Contractor</div>
          
          <div class="section">
            <h3>${isEn ? "Company Overview" : "Ringkasan Perusahaan"}</h3>
            <p>${
              isEn
                ? "PT. Karya Fabrika Mandiri is a leading integrated contractor specializing in structural steel engineering, industrial warehouse construction, material procurement, and precision fabrication with SNI, ASTM, and ISO 9001/45001 standards."
                : "PT. Karya Fabrika Mandiri adalah kontraktor spesialis terintegrasi di bidang rekayasa struktur baja, konstruksi gudang & pabrik industri, pengadaan material, serta manufaktur fabrikasi presisi berstandar SNI, ASTM, dan ISO 9001/45001."
            }</p>
          </div>

          <div class="section grid">
            <div>
              <strong>${isEn ? "Legal Credentials" : "Legalitas Perusahaan"}:</strong>
              <ul>
                <li>SK Kemenkumham RI: AHU-0012948.AH.01.01</li>
                <li>NIB (OSS RBA): 0220108392182</li>
                <li>SBU LPJK: KBLI 41019 & 42915</li>
                <li>ISO 9001:2015 & ISO 45001:2018</li>
                <li>Zero Accident K3 Kemenaker RI</li>
              </ul>
            </div>
            <div>
              <strong>${isEn ? "Core Capabilities" : "Kapabilitas Utama"}:</strong>
              <ul>
                <li>${isEn ? "BIM 3D Engineering & Clash Detection" : "Konsultasi Rekayasa & Pemodelan BIM 3D"}</li>
                <li>${isEn ? "Heavy Structural Steel Construction" : "Konstruksi Gudang & Pabrik Baja Berat"}</li>
                <li>${isEn ? "Precision Fabrication (Tolerance ±0.05mm)" : "Fabrikasi Presisi (Toleransi ±0.05mm)"}</li>
                <li>${isEn ? "Certified Welder (WPS/PQR) & NDT/UT" : "Sertifikasi Welder (WPS/PQR) & Uji NDT"}</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <strong>${isEn ? "Contact & Inquiries" : "Kontak Resmi"}:</strong>
            <p>
              Head Office: Gedung Menara Mandiri Lt. 18, Jakarta Selatan 12190<br/>
              Workshop: Kawasan Industri Jababeka Phase VI, Cikarang, Jawa Barat 17530<br/>
              Tel: +62 21 8990 1234 / WhatsApp: +62 812 3456 7890<br/>
              Email: proyek@karyafabrika.co.id / Website: www.karyafabrikamandiri.com
            </p>
          </div>

          <script>window.print();</script>
        </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-[24px] border border-[#c6c6c6] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#f3f3f3] text-[#444444] hover:text-[#000000] transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#e5e5e5]">
          <div className="w-12 h-12 rounded-[10px] bg-[#000000] text-white flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-[#d1ffca]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge variant="mint" size="sm">
                OFFICIAL COMPANY PROFILE
              </Badge>
              <Badge variant="ash" size="sm">
                EDISI 2026
              </Badge>
            </div>
            <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#000000]">
              PT. KARYA FABRIKA MANDIRI
            </h3>
            <p className="font-mono text-xs text-[#666666]">
              Engineering · Construction · Material Supply · Precision Manufacturing
            </p>
          </div>
        </div>

        {/* Body content */}
        <div className="space-y-5 text-sm text-[#444444] mb-8">
          <div>
            <h4 className="font-mono text-xs uppercase text-[#000000] font-bold tracking-wider mb-1.5">
              {isEn ? "Company Summary" : "Profil Singkat Perusahaan"}
            </h4>
            <p className="leading-relaxed">
              {isEn
                ? "PT. Karya Fabrika Mandiri is an Indonesian EPC contractor and manufacturing firm dedicated to delivering world-class structural steel solutions, heavy industrial warehouse construction, and precision metal fabrication with zero-compromise safety."
                : "PT. Karya Fabrika Mandiri adalah kontraktor EPC dan spesialis manufaktur fabrikasi baja terintegrasi di Indonesia yang berkomitmen menghadirkan solusi rancang bangun gudang industri, konstruksi baja berat, dan fabrikasi presisi dengan kepatuhan mutu SNI/ASTM serta keselamatan Zero Accident."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-[#f8f8f8] rounded-[12px] border border-[#e5e5e5]">
              <span className="font-mono text-[11px] text-[#888888] uppercase block mb-1">
                {isEn ? "Legal Registration" : "Izin & Registrasi Legal"}
              </span>
              <span className="font-bold text-[#000000] block text-xs">
                NIB: 0220108392182 (OSS RBA)
              </span>
              <span className="text-[11px] text-[#666666] block">
                SK Kemenkumham &amp; SBU LPJK Terdaftar
              </span>
            </div>

            <div className="p-3.5 bg-[#f8f8f8] rounded-[12px] border border-[#e5e5e5]">
              <span className="font-mono text-[11px] text-[#888888] uppercase block mb-1">
                {isEn ? "Quality & Safety Systems" : "Sertifikasi Mutu & K3"}
              </span>
              <span className="font-bold text-[#000000] block text-xs">
                ISO 9001:2015 &amp; ISO 45001:2018
              </span>
              <span className="text-[11px] text-[#666666] block">
                SMK3 Kemenaker RI &amp; Sertifikat Welder
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase text-[#000000] font-bold tracking-wider">
              {isEn ? "Core Service Highlights" : "Layanan Utama Kami"}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
                <span>
                  {isEn
                    ? "3D BIM Engineering Modeling & Value Engineering (15-25% savings)"
                    : "Konsultasi Rekayasa 3D BIM & Rekayasa Nilai (Hemat 15-25%)"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
                <span>
                  {isEn
                    ? "Industrial Warehouse & Factory Structural Steel Erection"
                    : "Konstruksi & Ereksi Struktur Baja Gudang Pabrik Skala Besar"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
                <span>
                  {isEn
                    ? "Precision Steel Fabrication & CNC Cutting (±0.05mm tolerance)"
                    : "Manufaktur & Fabrikasi Presisi Workshop (Toleransi ±0.05mm)"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#34c759] shrink-0" />
                <span>
                  {isEn
                    ? "Certified Material Procurement (SNI, ASTM, Mill Certificate)"
                    : "Pengadaan Material Baja Resmi dengan Mill Certificate"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#e5e5e5]">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20meminta%20Company%20Profile%20PDF%20lengkap."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="ghost" size="md" className="w-full sm:w-auto gap-2 text-xs">
              <PhoneCall className="w-4 h-4 text-[#34c759]" />
              <span>{isEn ? "Request via WhatsApp" : "Minta Berkas via WhatsApp"}</span>
            </Button>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={handleDownload}
              className="w-full sm:w-auto gap-2 text-xs"
            >
              <Download className="w-4 h-4 text-[#d1ffca]" />
              <span>{isEn ? "Print / Save Profile" : "Cetak / Simpan Profil (PDF)"}</span>
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={onClose}
              className="px-4 text-xs"
            >
              {isEn ? "Close" : "Tutup"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
