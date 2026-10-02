"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import { ProfileModal } from "./profile-modal";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Menu,
  X,
  ArrowUpRight,
  PhoneCall,
  Globe,
  ChevronDown,
  Check,
  FileText,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/our-services", label: t("nav.services") },
    { href: "/portofolio", label: t("nav.portfolio") },
    { href: "/legalitas", label: t("nav.legality") },
    { href: "/contact-us", label: t("nav.contact") },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#ffffff]/92 backdrop-blur-md transition-all border-b border-[#a4a6a9]/30 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-3">
          {/* Brand Logo & Tag */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            {/* Official KFM Emblem Logo from Image 1 */}
            <div className="relative h-11 sm:h-12 w-14 sm:w-16 flex items-center justify-center shrink-0">
              <Image
                src="/images/kfm-logo-transparent.png"
                alt="PT. KARYA FABRIKA MANDIRI Logo"
                width={120}
                height={80}
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-condensed text-xl sm:text-2xl font-black tracking-tight uppercase leading-none text-[#012655] group-hover:text-[#0065bf] transition-colors">
                PT. KARYA FABRIKA MANDIRI
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#484d53] tracking-tight uppercase mt-0.5 font-medium">
                {t("nav.tagline")}
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Pill Style) */}
          <nav className="hidden xl:flex items-center bg-[#f4f6f9] rounded-[48px] px-5 py-2 gap-5 border border-[#a4a6a9]/35 shadow-xs">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors whitespace-nowrap relative py-1 ${
                    isActive
                      ? "text-[#0065bf] font-bold"
                      : "text-[#484d53] hover:text-[#0065bf]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0065bf] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher, Profile Button & Consultation */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#a4a6a9]/50 bg-[#ffffff] text-[#012655] hover:bg-[#f4f6f9] hover:border-[#0065bf] text-xs font-mono font-medium transition-all shadow-xs"
                aria-label={t("nav.selectLang")}
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#484d53]" />
                <span className="uppercase font-bold tracking-wider">
                  {language === "id" ? "ID" : "US"}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-[#484d53] transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#ffffff] border border-[#a4a6a9]/40 rounded-[14px] shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3.5 py-1.5 text-[10px] font-mono uppercase text-[#71767c] tracking-wider border-b border-[#f0f4f8] mb-1">
                    {t("nav.selectLang")}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("id");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition-colors ${
                      language === "id"
                        ? "bg-[#0065bf]/15 text-[#0065bf] font-semibold"
                        : "text-[#484d53] hover:bg-[#f4f6f9]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">🇮🇩</span>
                      <span>Bahasa Indonesia</span>
                    </span>
                    {language === "id" && (
                      <Check className="w-3.5 h-3.5 text-[#0065bf]" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("en");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition-colors ${
                      language === "en"
                        ? "bg-[#0065bf]/15 text-[#0065bf] font-semibold"
                        : "text-[#484d53] hover:bg-[#f4f6f9]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">🇬🇧</span>
                      <span>English (US)</span>
                    </span>
                    {language === "en" && (
                      <Check className="w-3.5 h-3.5 text-[#0065bf]" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Profile Button */}
            <button
              type="button"
              onClick={() => setProfileModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#a4a6a9]/50 bg-[#ffffff] text-[#012655] hover:bg-[#f4f6f9] hover:border-[#0065bf] text-xs font-mono font-medium transition-all shadow-xs"
              title={t("nav.profile")}
            >
              <FileText className="w-3.5 h-3.5 text-[#484d53]" />
              <span className="font-semibold">{t("nav.profile")}</span>
              <ChevronDown className="w-3 h-3 text-[#484d53]" />
            </button>

            {/* Konsultasi Button */}
            <Link href="/contact-us">
              <Button variant="mint" size="sm" className="gap-1.5 text-xs py-2 px-4 shadow-sm">
                <span>{t("nav.consult")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </Button>
            </Link>
          </div>

          {/* Mobile Actions: Language + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            {/* Quick Mobile Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#c6c6c6] bg-[#ffffff] text-xs font-mono font-bold"
              aria-label="Switch Language"
            >
              <span>{language === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#012655] hover:bg-[#f4f6f9] rounded-[8px] transition-colors border border-[#a4a6a9]/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#ffffff] border-b border-[#a4a6a9]/40 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#a4a6a9]/20">
                <Badge variant="mint">SISTEM TERINTEGRASI</Badge>
                <span className="font-mono text-xs text-[#71767c]">ISO 9001 &amp; 45001</span>
              </div>

              {/* Nav links */}
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#012655] py-2 hover:text-[#0065bf] border-b border-[#f0f4f8] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#71767c]" />
                </Link>
              ))}

              {/* Mobile Profile & Language */}
              <div className="pt-2 pb-2 border-b border-[#f0f4f8] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setProfileModalOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-[8px] bg-[#f4f6f9] border border-[#a4a6a9]/30 text-xs font-mono text-[#012655]"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#484d53]" />
                    <span className="font-bold">{t("nav.profile")}</span>
                  </span>
                  <span className="text-[#0065bf] font-bold">Unduh PDF →</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setLanguage("id")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-[8px] text-xs font-mono font-medium border transition-all ${
                      language === "id"
                        ? "bg-[#012655] text-[#ffffff] border-[#012655]"
                        : "bg-[#f4f6f9] text-[#484d53] border-[#a4a6a9]/30"
                    }`}
                  >
                    <span>🇮🇩</span>
                    <span>Indonesia</span>
                    {language === "id" && <Check className="w-3.5 h-3.5 text-[#0065bf]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-[8px] text-xs font-mono font-medium border transition-all ${
                      language === "en"
                        ? "bg-[#012655] text-[#ffffff] border-[#012655]"
                        : "bg-[#f4f6f9] text-[#484d53] border-[#a4a6a9]/30"
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                    {language === "en" && <Check className="w-3.5 h-3.5 text-[#0065bf]" />}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="mint" size="md" className="w-full justify-between shadow-sm">
                    <span>{t("nav.consult")}</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="ghost" size="md" className="w-full justify-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Kami</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Company Profile Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </>
  );
}
