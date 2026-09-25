"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingAction } from "@/components/floating-action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactUsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Gudang Baja / Industrial Warehouse",
    location: "",
    area: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp inquiry text
    const text = encodeURIComponent(
      `Halo PT. Karya Fabrika Mandiri,\n\nNama: ${formData.name}\nPerusahaan: ${formData.company || "-"}\nEmail: ${formData.email}\nNo Telp: ${formData.phone}\nLayanan: ${formData.service}\nLokasi: ${formData.location || "-"}\nEstimasi Luas/Tonase: ${formData.area || "-"}\nPesan: ${formData.message}\n\nSaya ingin berkonsultasi mengenai kebutuhan proyek ini.`
    );

    // After 1.5s open WA
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    }, 800);
  };

  const faqs = [
    {
      qId: "Berapa lama proses penyusunan estimasi Rencana Anggaran Biaya (RAB)?",
      qEn: "How long does it take to prepare a project cost estimate (BoQ/RAB)?",
      aId:
        "Untuk estimasi awal (preliminary estimate) berdasarkan data luasan kasar atau layout awal, kami dapat menyediakannya dalam 1-2 hari kerja. Untuk penawaran tender detail dengan perhitungan structural engineering lengkap dan gambar shop drawing, tim kami memerlukan 3-5 hari kerja.",
      aEn:
        "For preliminary estimates based on rough layout dimensions, we deliver within 1-2 business days. Comprehensive tender quotations with engineering structural calculations and Tekla 3D modeling typically require 3-5 business days.",
    },
    {
      qId: "Apakah PT. Karya Fabrika Mandiri melayani proyek di luar Pulau Jawa?",
      qEn: "Does PT. Karya Fabrika Mandiri undertake projects outside Java?",
      aId:
        "Ya. Kami melayani proyek konstruksi struktur baja dan fabrikasi di seluruh wilayah Indonesia, termasuk Sumatera, Kalimantan, Sulawesi, hingga Papua. Fabrikasi presisi dilakukan di workshop kami di Jawa Barat kemudian dikirim secara modular via trailer dan kapal kontainer.",
      aEn:
        "Yes. We execute structural steel construction across all Indonesian provinces (Sumatra, Kalimantan, Sulawesi, Papua, etc.). Components are pre-fabricated in our West Java workshop and shipped modularly via container vessels and heavy freight.",
    },
    {
      qId: "Apakah material baja yang disediakan memiliki Mill Certificate resmi?",
      qEn: "Do your structural steel materials come with official Mill Certificates?",
      aId:
        "Seluruh material baja struktural (WF, H-Beam, Plat baja, Baut mutu tinggi) yang kami pasok 100% memiliki Mill Test Certificate asli dari produsen baja berlisensi (seperti Krakatau Steel, Gunung Garuda, dll) yang memverifikasi komposisi kimia dan uji tarik mekanik sesuai standar SNI & ASTM.",
      aEn:
        "All structural steel profiles, plates, and high-strength bolts supplied by KFM are 100% accompanied by original Mill Test Certificates from licensed producers, verifying chemical composition and mechanical tensile properties adhering to SNI and ASTM specifications.",
    },
    {
      qId: "Bagaimana penerapan prosedur K3 di site proyek?",
      qEn: "How is Occupational Safety (K3) managed on job sites?",
      aId:
        "Kami memiliki komitmen mutlak Zero Accident. Di setiap lokasi pekerjaan, kami menempatkan Safety Officer berlisensi Kemenaker RI, melaksanakan Job Safety Analysis (JSA) sebelum memulai pekerjaan, mewajibkan APD berstandar internasional, serta menerapkan Lifting Plan terverifikasi untuk setiap pengangkatan crane.",
      aEn:
        "We maintain an absolute Zero Accident commitment. Every job site is manned by licensed Safety Officers, enforces daily Job Safety Analysis (JSA) hazard discovery, mandates full certified PPE, and adheres to verified crane lifting plans.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] selection:bg-[#d1ffca] selection:text-black">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#000000] text-white pt-16 sm:pt-24 pb-16 sm:pb-20 border-b border-[#2f2f2f]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="mint" size="sm">
              {isEn ? "CONSULTATION & INQUIRIES" : "LAYANAN KONSULTASI & TENDER"}
            </Badge>
            <span className="font-mono text-xs text-[#979797]">
              {isEn ? "TALK TO OUR ENGINEERS" : "RESPON CEPAT & PROFESIONAL"}
            </span>
          </div>

          <h1 className="font-condensed text-[44px] sm:text-[68px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.92] max-w-4xl mb-6">
            {isEn
              ? "CONNECT WITH OUR ENGINEERING DESK"
              : "HUBUNGI TIM REKAYASA & KONSULTASI KAMI"}
          </h1>

          <p className="text-base sm:text-lg text-[#c6c6c6] max-w-3xl leading-relaxed font-normal mb-8">
            {isEn
              ? "Whether you require a preliminary feasibility study, accurate structural cost estimation (BoQ), material procurement, or workshop visit, our engineering and commercial teams are ready to support your facility goals."
              : "Apakah Anda memerlukan estimasi anggaran proyek (RAB), konsultasi teknis pemodelan 3D BIM, penawaran fabrikasi presisi, atau kunjungan ke workshop kami, tim rekayasa PT. Karya Fabrika Mandiri siap membantu Anda secara responsif."}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20PT%20Karya%20Fabrika%20Mandiri,%20saya%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="mint" size="lg" className="rounded-[8px] px-8 text-black font-bold gap-2 text-sm">
                <MessageSquare className="w-4 h-4 text-black" />
                <span>{isEn ? "Direct WhatsApp Chat" : "Chat Langsung via WhatsApp"}</span>
              </Button>
            </a>
            <a href="tel:+622189901234" className="inline-block">
              <Button variant="outline-white" size="lg" className="rounded-[8px] px-6 text-sm gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span>+62 21 8990 1234</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Split Contact Form & Office Directory */}
      <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Consultation & Tender Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 border border-[#c6c6c6]/60 shadow-sm">
            <div className="mb-6">
              <Badge variant="ash" size="sm" className="mb-2">
                {isEn ? "ONLINE FORM" : "FORMULIR KONSULTASI"}
              </Badge>
              <h2 className="font-condensed text-[32px] sm:text-[42px] font-black uppercase tracking-tight text-[#000000] leading-none">
                {isEn ? "SUBMIT YOUR PROJECT SPECS" : "KIRIMKAN SPESIFIKASI PROYEK ANDA"}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] mt-1.5 leading-relaxed">
                {isEn
                  ? "Fill in your facility details below. Our technical estimator will review your requirements and follow up within 24 hours."
                  : "Lengkapi data proyek Anda di bawah ini. Tim estimator dan engineer kami akan mempelajari kebutuhan teknis dan merespons dalam waktu 24 jam."}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-[20px] bg-[#d1ffca]/30 border border-[#34c759] text-center animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#34c759] text-white flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase text-[#000000] mb-2">
                  {isEn ? "Inquiry Transmitted Successfully!" : "Permohonan Berhasil Terkirim!"}
                </h3>
                <p className="text-xs sm:text-sm text-[#333333] max-w-md mx-auto mb-6">
                  {isEn
                    ? "Thank you for contacting PT. Karya Fabrika Mandiri. You are being redirected to our WhatsApp technical desk. You may also contact us directly."
                    : "Terima kasih telah menghubungi PT. Karya Fabrika Mandiri. Data Anda telah disiapkan untuk diteruskan ke technical desk WhatsApp kami."}
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setSubmitted(false)}
                  className="text-xs"
                >
                  {isEn ? "Send Another Message" : "Kirim Pesan Lainnya"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Full Name *" : "Nama Lengkap *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? "e.g. John Doe" : "Contoh: Ir. Budi Santoso"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-sm text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Company / Institution" : "Nama Perusahaan / Instansi"}
                    </label>
                    <input
                      type="text"
                      placeholder={isEn ? "e.g. PT Maju Bersama" : "Contoh: PT Logistik Sukses"}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-sm text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Email Address *" : "Alamat Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-sm text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "WhatsApp / Phone *" : "Nomor WhatsApp / HP *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-sm text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Service Category *" : "Kategori Layanan *"}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-xs text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    >
                      <option value="Gudang Baja / Industrial Warehouse">
                        {isEn ? "Industrial Warehouse" : "Konstruksi Gudang Baja"}
                      </option>
                      <option value="Pabrik Manufaktur / Factory">
                        {isEn ? "Manufacturing Plant" : "Pabrik Manufaktur"}
                      </option>
                      <option value="Fabrikasi Baja Presisi">
                        {isEn ? "Precision Steel Fabrication" : "Fabrikasi Workshop Presisi"}
                      </option>
                      <option value="Konsultasi Rekayasa & BIM 3D">
                        {isEn ? "BIM 3D Engineering" : "Konsultasi Rekayasa BIM 3D"}
                      </option>
                      <option value="Pengadaan Material Baja">
                        {isEn ? "Steel Material Supply" : "Pengadaan Material Baja"}
                      </option>
                      <option value="Retrofit & Perkuatan Struktur">
                        {isEn ? "Structural Retrofitting" : "Perkuatan / Renovasi Struktur"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Project Location" : "Lokasi Proyek"}
                    </label>
                    <input
                      type="text"
                      placeholder={isEn ? "e.g. Cikarang, Bekasi" : "Contoh: Cikarang / Karawang"}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-xs text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                      {isEn ? "Estimated Area / Tonnage" : "Estimasi Luas / Tonase"}
                    </label>
                    <input
                      type="text"
                      placeholder={isEn ? "e.g. 5,000 m² / 300 Ton" : "Contoh: 5,000 m² / 250 Ton"}
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-xs text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#000000] font-bold block mb-1.5">
                    {isEn ? "Message & Project Description *" : "Pesan & Deskripsi Kebutuhan Teknis *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      isEn
                        ? "Describe your project timeline, requirements, structural preferences..."
                        : "Jelaskan kebutuhan spesifikasi bangunan, target jadwal pengerjaan, atau pertanyaan lainnya..."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[8px] bg-[#f8f8f8] border border-[#c6c6c6] text-sm text-[#000000] focus:outline-none focus:border-[#000000] transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full rounded-[8px] py-3.5 gap-2 text-sm font-bold shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#d1ffca]" />
                  <span>{isEn ? "Submit Inquiry to Technical Desk" : "Kirim Permohonan Konsultasi"}</span>
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Workshop Addresses (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Workshop Card */}
            <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#000000] text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#d1ffca]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#888888] uppercase block">
                    FACILITY / WORKSHOP YARD:
                  </span>
                  <h3 className="font-condensed text-xl font-bold uppercase text-[#000000]">
                    Workshop &amp; Fabrikasi Presisi
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                Kawasan Industri Jababeka Phase VI, Blok C No. 12-14, Cikarang, Kabupaten Bekasi, Jawa Barat 17530
              </p>

              <div className="space-y-2 text-xs font-mono text-[#444444] pt-3 border-t border-[#f0f0f0]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#333333]" />
                  <span>+62 21 8990 1234 (Workshop Desk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#333333]" />
                  <span>workshop@karyafabrika.co.id</span>
                </div>
              </div>
            </div>

            {/* Head Office Card */}
            <div className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[8px] bg-[#000000] text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#fff100]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#888888] uppercase block">
                    HEAD OFFICE:
                  </span>
                  <h3 className="font-condensed text-xl font-bold uppercase text-[#000000]">
                    Kantor Pusat &amp; Desain Rekayasa
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                Gedung Menara Mandiri Lt. 18, Jl. Jend. Sudirman Kav. 54-55, Senayan, Jakarta Selatan 12190
              </p>

              <div className="space-y-2 text-xs font-mono text-[#444444] pt-3 border-t border-[#f0f0f0]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#333333]" />
                  <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#333333]" />
                  <span>proyek@karyafabrika.co.id</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Hotline WhatsApp: +62 812 3456 7890 (24/7)</span>
                </div>
              </div>
            </div>

            {/* Safety & Service Promise */}
            <div className="bg-[#000000] text-white rounded-[24px] p-6 border border-[#2f2f2f]">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#d1ffca]" />
                <span className="font-condensed text-lg font-bold uppercase text-white">
                  {isEn ? "Prequalification Ready" : "Siap Prakualifikasi Vendor"}
                </span>
              </div>
              <p className="text-xs text-[#979797] leading-relaxed">
                {isEn
                  ? "We provide full audited legality dossiers, ISO certificates, and company profile booklets for vendor registration."
                  : "Dokumen legalitas perusahaan, SBU LPJK, ISO 9001/45001, dan sertifikat juru las siap dikirimkan untuk proses prakualifikasi rekanan."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 sm:py-24 bg-[#ffffff] border-t border-[#c6c6c6]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <Badge variant="mint" size="sm" className="mb-2">
              FAQ
            </Badge>
            <h2 className="font-condensed text-[36px] sm:text-[48px] font-black uppercase tracking-tight text-[#000000] leading-none mb-3">
              {isEn ? "FREQUENTLY ASKED QUESTIONS" : "PERTANYAAN UMUM SEPUTAR LAYANAN"}
            </h2>
            <p className="text-xs sm:text-sm text-[#555555]">
              {isEn
                ? "Key information regarding technical delivery, warranties, steel certificates, and budgeting."
                : "Informasi penting mengenai proses tender, estimasi anggaran RAB, sertifikasi material, dan standar keselamatan."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[16px] border border-[#e5e5e5] bg-[#fcfcfc] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#000000]"
                  >
                    <span>{isEn ? faq.qEn : faq.qId}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#666666] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#f0f0f0]">
                      {isEn ? faq.aEn : faq.aId}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAction />
    </div>
  );
}
