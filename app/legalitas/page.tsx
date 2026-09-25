"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingAction } from "@/components/floating-action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ProfileModal } from "@/components/profile-modal";
import {
  ShieldCheck,
  FileText,
  Award,
  CheckCircle2,
  Download,
  Building,
  HardHat,
  Stamp,
  ExternalLink,
  Lock,
  FileCheck,
} from "lucide-react";

export default function LegalityPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const legalItems = [
    {
      labelId: "Nama Entitas Hukum",
      labelEn: "Legal Entity Name",
      val: "PT KARYA FABRIKA MANDIRI",
    },
    {
      labelId: "Bentuk Badan Usaha",
      labelEn: "Company Structure",
      val: isEn ? "Limited Liability Company (Perseroan Terbatas / PT)" : "Perseroan Terbatas (PT) Swasta Nasional",
    },
    {
      labelId: "SK Kemenkumham RI",
      labelEn: "Ministry of Law & Human Rights Decree",
      val: "AHU-0012948.AH.01.01.TAHUN 2021",
    },
    {
      labelId: "Nomor Induk Berusaha (NIB)",
      labelEn: "Business Identification Number (NIB)",
      val: "0220108392182 (OSS RBA Terverifikasi)",
    },
    {
      labelId: "Nomor Pokok Wajib Pajak (NPWP)",
      labelEn: "Taxpayer ID (NPWP) & PKP Status",
      val: "42.891.304.8-413.000 (Pengusaha Kena Pajak / PKP)",
    },
    {
      labelId: "Sertifikat Badan Usaha (SBU LPJK)",
      labelEn: "Construction Business License (SBU)",
      val: "KBLI 41019 & KBLI 42915 (Struktur Baja & Gedung)",
    },
    {
      labelId: "BPJS Ketenagakerjaan & Kesehatan",
      labelEn: "Social Security Employment & Health",
      val: "Terdaftar Aktif 100% Tenaga Kerja & Personel Site",
    },
    {
      labelId: "Domisili Workshop & Kantor",
      labelEn: "Registered Office & Workshop Location",
      val: "Bekasi (Kawasan Industri Jababeka) & Jakarta Selatan",
    },
  ];

  const certifications = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      titleId: "Sistem Manajemen Mutu Terakreditasi",
      titleEn: "Quality Management System Certified",
      org: "KAN / International Accreditation Forum",
      descId:
        "Memastikan seluruh tahapan konsultasi desain, pengadaan material baja, pabrikasi workshop berpresisi tinggi, dan instalasi lapangan mengikuti standar manajemen mutu berstandar global.",
      descEn:
        "Ensuring all phases of engineering design, steel material procurement, high-precision workshop fabrication, and on-site erection adhere to international quality benchmarks.",
      points: isEn
        ? [
            "Standard Operating Procedures (SOP) across all fabrication lines",
            "Traceable Mill Certificates for every heat number and batch",
            "Multi-stage internal & external quality auditing cycles",
          ]
        : [
            "Standard Operating Procedure (SOP) baku di seluruh lini fabrikasi",
            "Pelacakan Mill Certificate material sesuai nomor heat dan batch pabrik",
            "Audit mutu bertahap internal dan verifikasi pihak ketiga berkala",
          ],
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      titleId: "Sistem Manajemen Keselamatan & Kesehatan Kerja",
      titleEn: "Occupational Health & Safety Management System",
      org: "TUV / Sucofindo Accredited",
      descId:
        "Komitmen tertinggi kami terhadap keselamatan jiwa seluruh personel di workshop manufaktur dan site konstruksi dengan target berkelanjutan Zero Accident.",
      descEn:
        "Our utmost commitment to safeguarding every personnel's health and life in workshops and job sites, targeting continuous Zero Accident operations.",
      points: isEn
        ? [
            "Daily Job Safety Analysis (JSA) and pre-work toolbox briefings",
            "100% certified PPE compliance and licensed safety officers",
            "Rigorous lifting plan review and periodic crane maintenance checks",
          ]
        : [
            "Penerapan Job Safety Analysis (JSA) dan safety briefing harian",
            "Kepatuhan 100% APD lengkap dan pengawasan Ahli K3 Konstruksi",
            "Verifikasi Lifting Plan serta inspeksi berkala crane dan alat angkat",
          ],
    },
    {
      id: "smk3",
      code: "SMK3 KEMENAKER RI",
      titleId: "Sertifikasi Sistem Manajemen K3 Nasional",
      titleEn: "National K3 Safety Management Certification",
      org: "Kementerian Ketenagakerjaan Republik Indonesia",
      descId:
        "Kepatuhan hukum terhadap Peraturan Pemerintah No. 50 Tahun 2012 mengenai penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja di sektor industri dan konstruksi.",
      descEn:
        "Statutory compliance with Indonesian Government Regulation No. 50/2012 regarding Occupational Safety and Health Management across construction operations.",
      points: isEn
        ? [
            "Recognized Gold Flag (Bendera Emas) safety achievement criteria",
            "P2K3 (Safety Committee) active reporting to Ministry of Manpower",
            "Regular medical examinations and site emergency response drills",
          ]
        : [
            "Kriteria pencapaian tingkat lanjutan Bendera Emas Kemenaker",
            "Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) aktif",
            "Pemeriksaan kesehatan berkala dan simulasi tanggap darurat rutin",
          ],
    },
    {
      id: "welder",
      code: "WPS / PQR WELDER",
      titleId: "Sertifikasi Kualifikasi Juru Las & Prosedur Las",
      titleEn: "Welder Qualification & Welding Procedure Specifications",
      org: "Kemenaker RI & Migas Accredited (ASME IX / AWS D1.1)",
      descId:
        "Seluruh juru las (welder) di workshop dan site memegang lisensi resmi dengan spesifikasi prosedur las (WPS/PQR) teruji di laboratorium independen.",
      descEn:
        "All workshop and site welders hold official licenses qualified under Welding Procedure Specifications (WPS/PQR) tested in accredited laboratories.",
      points: isEn
        ? [
            "Certified SMAW, FCAW, and Submerged Arc Welding (SAW) welders",
            "Non-Destructive Testing (NDT) passing rates exceeding 99.8%",
            "Qualified for heavy moment connections and structural bridge girders",
          ]
        : [
            "Juru las bersertifikasi SMAW, FCAW, dan Submerged Arc Welding (SAW)",
            "Tingkat kelulusan uji NDT (Ultrasonic/MPI) mencapai lebih dari 99.8%",
            "Kualifikasi sambungan kritis balok-kolom momen dan girder jembatan",
          ],
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
              {isEn ? "OFFICIAL COMPLIANCE" : "KEPATUHAN REGULASI & STANDAR K3"}
            </Badge>
            <span className="font-mono text-xs text-[#979797]">
              {isEn ? "VERIFIED LEGALITY" : "DOKUMEN HUKUM RESMI REPUBLIK INDONESIA"}
            </span>
          </div>

          <h1 className="font-condensed text-[44px] sm:text-[68px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.92] max-w-4xl mb-6">
            {isEn
              ? "CORPORATE LEGALITY & OFFICIAL ACCREDITATIONS"
              : "LEGALITAS PERUSAHAAN & SERTIFIKASI RESMI"}
          </h1>

          <p className="text-base sm:text-lg text-[#c6c6c6] max-w-3xl leading-relaxed font-normal mb-8">
            {isEn
              ? "PT. Karya Fabrika Mandiri operates with complete transparency and compliance with all Indonesian corporate, construction, tax, and labor safety laws. We are ready to fulfill all pre-qualification requirements for private and public sector tenders."
              : "PT. Karya Fabrika Mandiri beroperasi dengan transparansi hukum penuh dan memenuhi seluruh perizinan jasa konstruksi, sertifikasi mutu ISO, perpajakan resmi, dan kepatuhan keselamatan kerja (K3) Kemenaker RI. Siap bermitra dalam tender korporasi swasta, BUMN, maupun multinasional."}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="mint"
              size="lg"
              onClick={() => setProfileModalOpen(true)}
              className="rounded-[8px] px-8 text-black font-bold gap-2 text-sm"
            >
              <Download className="w-4 h-4 text-black" />
              <span>{isEn ? "Download Company Legality Dossier" : "Unduh Dokumen Legalitas (PDF)"}</span>
            </Button>
            <a
              href="mailto:rekanan@karyafabrika.co.id?subject=Permohonan%20Berkas%20Prakualifikasi%20Vendor"
              className="inline-block"
            >
              <Button variant="outline-white" size="lg" className="rounded-[8px] px-6 text-sm">
                <span>{isEn ? "Vendor Registration Inquiry" : "Pendaftaran Rekanan Vendor"}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Legal Master Data Table Section */}
      <section className="py-16 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <Badge variant="ash" size="sm" className="mb-2">
            {isEn ? "MASTER DATA" : "IDENTITAS HUKUM PERUSAHAAN"}
          </Badge>
          <h2 className="font-condensed text-[36px] sm:text-[48px] font-extrabold uppercase tracking-tight text-[#000000] leading-none">
            {isEn ? "STATUTORY REGISTRATION SUMMARY" : "RINGKASAN LEGALITAS FORMAL"}
          </h2>
          <p className="text-sm text-[#555555] max-w-2xl mt-2">
            {isEn
              ? "All legal documents have been validated through the Online Single Submission (OSS RBA) and Ministry of Law & Human Rights systems."
              : "Seluruh berkas legalitas resmi telah terverifikasi melalui sistem Online Single Submission (OSS RBA) dan Kementerian Hukum & HAM RI."}
          </p>
        </div>

        {/* Master Table */}
        <div className="bg-[#ffffff] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#c6c6c6]/60 shadow-sm mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#000000] text-white font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 border-b border-[#2f2f2f] w-12">#</th>
                  <th className="py-4 px-6 border-b border-[#2f2f2f]">
                    {isEn ? "Statutory Parameter" : "Uraian Legalitas"}
                  </th>
                  <th className="py-4 px-6 border-b border-[#2f2f2f]">
                    {isEn ? "Registration Details" : "Nomor & Keterangan Resmi"}
                  </th>
                  <th className="py-4 px-6 border-b border-[#2f2f2f] text-right">
                    {isEn ? "Verification Status" : "Status Verifikasi"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e5e5] text-xs sm:text-sm">
                {legalItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f9f9f9] transition-colors">
                    <td className="py-4 px-6 font-mono text-[#888888]">
                      {(idx + 1).toString().padStart(2, "0")}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#000000]">
                      {isEn ? item.labelEn : item.labelId}
                    </td>
                    <td className="py-4 px-6 font-mono text-[#333333]">
                      {item.val}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#d1ffca]/40 text-[#000000] font-mono text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34c759]" />
                        <span>{isEn ? "VALID & ACTIVE" : "TERVERIFIKASI"}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-10">
          <Badge variant="mint" size="sm" className="mb-2">
            {isEn ? "STANDARDS" : "SISTEM MANAJEMEN MUTU & K3"}
          </Badge>
          <h2 className="font-condensed text-[36px] sm:text-[48px] font-extrabold uppercase tracking-tight text-[#000000] leading-none">
            {isEn ? "CERTIFICATIONS & QUALITY FRAMEWORKS" : "SERTIFIKASI MUTU & KESELAMATAN KERJA"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#ffffff] rounded-[24px] p-6 sm:p-8 border border-[#c6c6c6]/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-[8px] bg-[#000000] text-white flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#d1ffca]" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#888888] block">
                        ACCREDITED BODY:
                      </span>
                      <span className="font-mono text-xs font-bold text-[#000000]">
                        {cert.org}
                      </span>
                    </div>
                  </div>
                  <Badge variant="yellow" size="sm">
                    {cert.code}
                  </Badge>
                </div>

                <h3 className="font-condensed text-2xl sm:text-3xl font-extrabold uppercase text-[#000000] mb-2 leading-tight">
                  {isEn ? cert.titleEn : cert.titleId}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {isEn ? cert.descEn : cert.descId}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#f0f0f0]">
                  <span className="font-mono text-[11px] uppercase font-bold text-[#000000] block mb-1">
                    {isEn ? "Audit Criteria & Compliance:" : "Kriteria Audit & Standar Kepatuhan:"}
                  </span>
                  {cert.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34c759] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Integrity Pledge Section */}
        <div className="bg-[#000000] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-[#333333] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] animate-pulse" />
                <span className="font-mono text-xs text-[#d1ffca] uppercase font-semibold">
                  {isEn ? "SAFETY & ETHICS PLEDGE" : "KOMITMEN MUTLAK K3 & INTEGRITAS"}
                </span>
              </div>
              <h3 className="font-condensed text-[30px] sm:text-[42px] font-black uppercase text-white leading-tight mb-4">
                &ldquo;ZERO ACCIDENT &amp; UNCOMPROMISED QUALITY&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-[#c6c6c6] leading-relaxed font-normal">
                {isEn
                  ? "At PT. Karya Fabrika Mandiri, safety is not merely a regulation—it is our fundamental moral obligation. Every steel beam erected, every weld laid, and every crane lifted adheres unconditionally to life-safety protocols, environmental protection, and contractual honesty."
                  : "Bagi manajemen PT. Karya Fabrika Mandiri, keselamatan kerja bukanlah sekadar pemenuhan regulasi di atas kertas, melainkan komitmen moral yang tak tergantikan. Setiap balok baja yang diereksi, setiap pengelasan yang dilakukan, dan setiap pengangkatan crane dijalankan dengan disiplin mitigasi risiko tertinggi demi melindungi keselamatan jiwa tenaga kerja dan aset klien."}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="mint"
                size="md"
                onClick={() => setProfileModalOpen(true)}
                className="w-full text-black font-bold text-xs justify-between"
              >
                <span>{isEn ? "View Complete Profile" : "Buka Profil Perusahaan"}</span>
                <FileCheck className="w-4 h-4 text-black" />
              </Button>
              <Link href="/contact-us">
                <Button variant="outline-white" size="md" className="w-full text-xs justify-between">
                  <span>{isEn ? "Contact Legal / Tender Team" : "Hubungi Tim Tender KFM"}</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
      <Footer />
      <FloatingAction />
    </div>
  );
}
