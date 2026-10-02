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
      className="py-16 sm:py-24 bg-gradient-to-br from-[#012655] via-[#012655] to-[#001736] text-[#ffffff] rounded-[36px] sm:rounded-[48px] max-w-[1240px] mx-auto px-6 sm:px-12 my-8 scroll-mt-20 border border-[#0065bf]/30 shadow-2xl"
    >
      <span id="contact-us" className="sr-only" />
      <span id="contact" className="sr-only" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Brutalist Editorial Headline & Contact Channels */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="mint" size="sm">
                KONSULTASI GRATIS TAHAP AWAL
              </Badge>
              <span className="font-mono text-xs text-[#a4a6a9]">RESPON CEPAT</span>
            </div>

            {/* Massive Display Headline */}
            <h2 className="font-condensed text-[48px] sm:text-[72px] md:text-[84px] font-black uppercase tracking-tight text-[#ffffff] leading-[0.88] mb-6">
              SIAP MEMULAI
              <br />
              PROYEK ANDA
              <br />
              <span className="text-[#60a5fa]">DENGAN KAMI?</span>
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#a4a6a9] max-w-[500px] leading-relaxed mb-8 font-normal">
              Diskusikan rencana fasilitas industri, struktur baja bentang lebar,
              kebutuhan fabrikasi workshop, atau pengadaan material proyek Anda
              bersama lead engineer PT Karya Fabrika Mandiri.
            </p>

            {/* Brand Email Box */}
            <div className="p-4 bg-[#001a3d] rounded-[16px] border border-[#0065bf]/30 mb-6">
              <span className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1">
                KIRIMKAN DOKUMEN TENDER / TOR / RAB KE:
              </span>
              <a
                href="mailto:proyek@karyafabrika.co.id"
                className="font-mono text-base sm:text-lg font-bold text-white bg-[#0065bf] px-3 py-1.5 rounded inline-flex items-center gap-2 hover:bg-[#00529e] transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>proyek@karyafabrika.co.id</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 font-mono text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-[#60a5fa]" />
                <span>Hotline Teknis: +62 21 8990 1234 / +62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#60a5fa]" />
                <span>Workshop &amp; Fabrikasi: Kawasan Industri Jababeka, Cikarang</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#60a5fa]" />
                <span>Jam Operasional: Senin – Sabtu, 08:00 – 17:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form Card */}
        <div className="lg:col-span-6 bg-[#001a3d]/90 rounded-[28px] p-6 sm:p-8 border border-[#0065bf]/25 shadow-lg">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#0065bf] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-condensed text-[32px] font-bold uppercase text-[#ffffff]">
                PERMINTAAN KONSULTASI DITERIMA
              </h3>
              <p className="text-[14px] text-[#cbd5e1] max-w-[400px] mx-auto leading-relaxed">
                Terima kasih. Lead engineer PT Karya Fabrika Mandiri akan meninjau
                kebutuhan Anda dan menghubungi dalam waktu 1x24 jam kerja.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/6281234567890?text=${directWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="mint" size="md" className="gap-2 w-full shadow-xs">
                    <MessageSquare className="w-4 h-4 text-white" />
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
              <div className="flex items-center justify-between pb-3 border-b border-[#0065bf]/25 mb-4">
                <span className="font-mono text-xs text-[#60a5fa] uppercase font-bold">
                  FORMULIR INQUIRY PROYEK
                </span>
                <span className="font-mono text-[11px] text-[#a4a6a9]">
                  KERAHASIAAN DATA TERJAMIN
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ir. Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
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
                    className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812 3456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                    Email Perusahaan
                  </label>
                  <input
                    type="email"
                    placeholder="budi@industrimaju.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors cursor-pointer"
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
                <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                  Lokasi Rencana Proyek
                </label>
                <input
                  type="text"
                  placeholder="Misal: Cikarang, Karawang, Kendal, Gresik, luar Jawa"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#a4a6a9] uppercase block mb-1.5 font-semibold">
                  Catatan Tambahan / Spesifikasi Khusus
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan estimasi luas, target waktu penyelesaian, atau spesifikasi khusus proyek Anda..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#012655] border border-[#0065bf]/30 rounded-[8px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#60a5fa] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="mint" size="lg" type="submit" className="w-full sm:flex-1 justify-center shadow-md">
                  <span>Kirim Permintaan Konsultasi</span>
                  <Send className="w-4 h-4 text-white" />
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
