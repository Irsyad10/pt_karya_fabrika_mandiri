"use client";

import React from "react";
import { MessageSquare, Calculator } from "lucide-react";

export function FloatingAction() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Estimator Link */}
      <a
        href="#kalkulator"
        className="bg-[#ffffff] text-[#000000] px-4 py-2 rounded-full border border-[#c6c6c6] text-xs font-mono font-medium tracking-tight shadow-none hover:border-[#000000] hover:bg-[#f3f3f3] transition-all flex items-center gap-2"
      >
        <Calculator className="w-3.5 h-3.5 text-[#000000]" />
        <span className="hidden sm:inline">Kalkulator Proyek</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000000] text-[#ffffff] hover:bg-[#2f2f2f] px-5 py-3 rounded-full border border-[#c6c6c6]/50 flex items-center gap-2.5 transition-transform active:scale-95 group"
        aria-label="Hubungi WhatsApp"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#34c759] animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#d1ffca]" />
        <span className="font-mono text-xs font-semibold uppercase tracking-wider">
          Chat Engineer
        </span>
      </a>
    </div>
  );
}
