"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

export function CtaInquiry() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "Konstruksi & Fabrikasi Terpadu",
    location: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const directWaText = encodeURIComponent(
    `Halo PT Karya Fabrika Mandiri,\nNama: ${formData.name || "[Nama]"}\nPerusahaan: ${
      formData.company || "[Perusahaan]"
    }\nLayanan yang dibutuhkan: ${formData.service}\nLokasi: ${
      formData.location || "[Lokasi]"
    }\nCatatan: ${formData.notes || "Konsultasi proyek baru"}`
  );

  return (
    <section
      id="inquiry"
      className="py-16 sm:py-24 bg-[#000000] text-[#ffffff] rounded-[36px] sm:rounded-[48px] max-w-[1240px] mx-auto px-6 sm:px-12 my-8 scroll-mt-20"
    >
      <span id="contact-us" className="sr-only" />
      <span id="contact" className="sr-only" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Brutalist Editorial Headline & Contact Channels */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="yellow" size="sm">
                KONSULTASI GRATIS TAHAP AWAL
              </Badge>
              <span className="font-mono text-xs text-[#979797]">RESPON CEPAT</span>
            </div>

            {/* Massive Display Headline (80px - 100px line-height 0.9) */}
            <h2 className="font-condensed text-[48px] sm:text-[72px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.88] mb-6">
              SIAP MEMULAI
              <br />
              PROYEK ANDA
              <br />
              <span className="text-[#d1ffca]">DENGAN KAMI?</span>
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#979797] max-w-[500px] leading-relaxed mb-8 font-normal">
              Diskusikan rencana fasilitas industri, struktur baja bentang lebar,
              kebutuhan fabrikasi workshop, atau pengadaan material proyek Anda
              bersama lead engineer PT Karya Fabrika Mandiri.
            </p>

            {/* Voltage Yellow Highlight for Email (DESIGN.md specification) */}
            <div className="p-4 bg-[#171717] rounded-[16px] border border-[#2f2f2f] mb-6">
              <span className="font-mono text-[11px] text-[#979797] uppercase block mb-1">
                KIRIMKAN DOKUMEN TENDER / TOR / RAB KE:
              </span>
              <a
                href="mailto:proyek@karyafabrika.co.id"
                className="font-mono text-base sm:text-lg font-bold text-[#000000] bg-[#fff100] px-2.5 py-1 rounded inline-flex items-center gap-2 hover:bg-[#ffe600] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>proyek@karyafabrika.co.id</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 font-mono text-xs text-[#c6c6c6]">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-[#d1ffca]" />
                <span>Hotline Teknis: +62 21 8990 1234 / +62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#d1ffca]" />
                <span>Workshop &amp; Fabrikasi: Kawasan Industri Jababeka, Cikarang</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#d1ffca]" />
                <span>Jam Operasional: Senin – Sabtu, 08:00 – 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form Card */}
        <div className="lg:col-span-6 bg-[#171717] rounded-[28px] p-6 sm:p-8 border border-[#2f2f2f]">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#d1ffca] text-[#000000] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-condensed text-[32px] font-bold uppercase text-[#ffffff]">
                PERMINTAAN KONSULTASI DITERIMA
              </h3>
              <p className="text-[14px] text-[#c6c6c6] max-w-[400px] mx-auto leading-relaxed">
                Terima kasih. Lead engineer PT Karya Fabrika Mandiri akan meninjau
                kebutuhan Anda dan menghubungi dalam waktu 1x24 jam kerja.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/6281234567890?text=${directWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="mint" size="md" className="gap-2 w-full">
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan via WhatsApp Instan</span>
                  </Button>
                </a>
                <Button
                  variant="ghost"
                  size="md"
                  onClick={() => setFormSubmitted(false)}
                  className="text-white border-white/30 hover:text-white"
                >
                  Kirim Pesan Lain
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2f2f2f] mb-4">
                <span className="font-mono text-xs text-[#d1ffca] uppercase">
                  FORMULIR INQUIRY PROYEK
                </span>
                <span className="font-mono text-[11px] text-[#979797]">
                  KERAHASIAAN DATA TERJAMIN
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ir. Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                    Nama Perusahaan / Instansi *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="PT Industri Maju Bersama"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812 3456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                    Email Perusahaan
                  </label>
                  <input
                    type="email"
                    placeholder="budi@industrimaju.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors cursor-pointer"
                >
                  <option value="Solusi Terpadu Penuh (Konsultasi, Pengadaan & Konstruksi)">
                    Solusi Terpadu Penuh (Konsultasi, Pengadaan &amp; Konstruksi)
                  </option>
                  <option value="Konsultasi & Rekayasa Desain BIM 3D">
                    Konsultasi &amp; Rekayasa Desain BIM 3D
                  </option>
                  <option value="Konstruksi Pabrik & Gudang Baja Bentang Lebar">
                    Konstruksi Pabrik &amp; Gudang Baja Bentang Lebar
                  </option>
                  <option value="Manufaktur & Fabrikasi Baja Presisi (Workshop)">
                    Manufaktur &amp; Fabrikasi Baja Presisi (Workshop)
                  </option>
                  <option value="Pengadaan Material Baja & Komponen Proyek">
                    Pengadaan Material Baja &amp; Komponen Proyek
                  </option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                  Lokasi Rencana Proyek
                </label>
                <input
                  type="text"
                  placeholder="Misal: Cikarang, Karawang, Kendal, Gresik, luar Jawa"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#979797] uppercase block mb-1.5">
                  Catatan Tambahan / Spesifikasi Khusus
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan estimasi luas, target waktu penyelesaian, atau spesifikasi khusus proyek Anda..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#000000] border border-[#2f2f2f] rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d1ffca] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="mint" size="lg" type="submit" className="w-full sm:flex-1 justify-center">
                  <span>Kirim Permintaan Konsultasi</span>
                  <Send className="w-4 h-4 text-black" />
                </Button>
                <a
                  href={`https://wa.me/6281234567890?text=${directWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline-white"
                    size="lg"
                    type="button"
                    className="w-full gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Langsung</span>
                  </Button>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
