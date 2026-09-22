"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck, Factory } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#layanan", label: "Layanan Terpadu" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#kalkulator", label: "Kalkulator Proyek" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#alur-kerja", label: "Alur Kerja" },
    { href: "#k3-sertifikasi", label: "Standar K3" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#e5e5e5]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Brand Logo & Tag */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-[#000000] text-white flex items-center justify-center rounded-[8px] group-hover:bg-[#2f2f2f] transition-colors">
            <Factory className="w-5 h-5 text-[#d1ffca]" />
          </div>
          <div className="flex flex-col">
            <span className="font-condensed text-xl sm:text-2xl font-bold tracking-tight uppercase leading-none text-[#000000]">
              PT KARYA FABRIKA MANDIRI
            </span>
            <span className="font-mono text-[11px] text-[#444444] tracking-tight uppercase">
              Engineering · Construction · Manufacturing
            </span>
          </div>
        </Link>

        {/* Floating Capsule Nav Pill (DESIGN.md specification: 48px radius, white background, #444444 links) */}
        <nav className="hidden lg:flex items-center bg-[#ffffff] rounded-[48px] px-6 py-2.5 gap-6 border border-[#c6c6c6]/40">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#444444] hover:text-[#000000] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary" size="md" className="gap-2">
              <span>Konsultasi Proyek</span>
              <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#000000] hover:bg-[#ffffff] rounded-[8px] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-b border-[#c6c6c6] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
              <Badge variant="mint">SISTEM TERINTEGRASI</Badge>
              <span className="font-mono text-xs text-[#979797]">ISO 9001 & 45001</span>
            </div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#000000] py-2 hover:text-[#444444] border-b border-[#f3f3f3]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button variant="primary" size="md" className="w-full justify-between">
                  <span>Hubungi Tim Teknis</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
                </Button>
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="ghost" size="md" className="w-full justify-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#444444]" />
                  <span>WhatsApp Konsultasi</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
