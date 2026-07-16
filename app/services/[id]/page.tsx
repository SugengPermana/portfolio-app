"use client";

import { ArrowLeft, Check, Clock, ShieldCheck, Users, Plus, X, Star, AlertTriangle, Palette, Zap, Eye } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const servicesData = {
  "web-dev": {
    title: "Layanan Pembuatan Website",
    description: "Pilih paket pengembangan website yang sesuai dengan kebutuhan bisnis atau project Anda.",
    packages: [
      {
        name: "Landing Page",
        subtitle: "1 Halaman",
        originalPrice: "Rp 1.199.999",
        price: "Rp 699.999",
        delivery: "Selesai 3 hari kerja",
        promo: "Hemat 42%",
        isPopular: false,
        features: [
          "1 email bisnis",
          "Web 1 halaman",
          "Revisi 1x",
          "SEO Dasar"
        ]
      },
      {
        name: "Company Profile",
        subtitle: "Website 5 Halaman",
        originalPrice: "Rp 3.099.000",
        price: "Rp 1.399.999",
        delivery: "Selesai 5 hari kerja",
        promo: "Hemat 65%",
        isPopular: true,
        features: [
          "1 email bisnis",
          "Web 5 halaman",
          "Revisi 1x",
          "SEO Dasar"
        ]
      },
      {
        name: "Website Dashboard",
        subtitle: "ALL System",
        originalPrice: "Rp 4.100.77",
        price: "Rp 1.999.999",
        delivery: "Selesai 6 - 7 hari kerja",
        promo: "Hemat 68%",
        isPopular: false,
        features: [
          "1 email bisnis",
          "Web 5 halaman",
          "Revisi 1x",
          "SEO Dasar",
        ]
      }
    ],
    painPoints: {
      title: "Bisnis bagus, tapi online-nya belum meyakinkan?",
      subtitle: "Kalau salah satu ini kamu banget, calon klien bisa lari ke kompetitor yang tampil lebih profesional.",
      items: [
        "Belum punya website — calon klien ragu, kalah kredibel dari kompetitor.",
        "Cuma andalkan IG / marketplace — susah dianggap profesional & serius.",
        "Websitenya seadanya, lemot, atau nggak mobile-friendly.",
        "Nggak muncul di Google waktu orang nyari jasa kamu."
      ]
    },
    guarantees: [
      { icon: "shield", title: "Garansi Anti-Hack & Uptime", desc: "Dijaga penuh selama 1 tahun." },
      { icon: "clock", title: "Selesai Tepat Waktu", desc: "menyesuaikan paket." },
      { icon: "users", title: "Konsultasi Free", desc: "bisa konsultasi gratis sesuai kebutuhan kamu" }
    ],
    faqs: [
      {
        question: "Berapa biaya jasa pembuatan website company profile?",
        answer: "Biaya pembuatan website company profile bervariasi tergantung paket yang Anda pilih. Silakan lihat tabel harga di atas untuk detailnya."
      },
      {
        question: "Berapa lama website perusahaan saya selesai?",
        answer: "Jasa bikin Landing Page selesai dalam 3 hari kerja, sedangkan jasa buat Website 5 Halaman selesai 5 hari kerja terhitung setelah materi & konten lengkap."
      },
      {
        question: "Pilih domain apa .com atau .co.id? Apa bedanya?",
        answer: ".com cocok untuk semua jenis bisnis dan paling umum. .co.id khusus badan usaha berbadan hukum (butuh dokumen legal seperti akta/NIB) dan memberi kesan paling kredibel sebagai perusahaan resmi Indonesia. Kami bantu pilihkan yang paling pas."
      },
      {
        question: "Apakah bisa tambah halaman / custom desain?",
        answer: "Bisa. Jumlah halaman dan kebutuhan desain khusus bisa disesuaikan. Sampaikan saat konsultasi, kami berikan penawaran sesuai kebutuhan bisnis kamu."
      }
    ]
  },
  "ui-ux": {
    title: "UI/UX Design Pricing",
    description: "Pilih paket desain antarmuka yang sesuai dengan kebutuhan produk digital Anda.",
    packages: [
      {
        name: "Landing Page UI",
        subtitle: "Figma Source File",
        originalPrice: "Rp 600.000",
        price: "Rp 499.999",
        delivery: "Selesai 4 hari kerja",
        promo: "Hemat 50%",
        isPopular: false,
        features: ["Figma Source File", "Wireframing", "1 Page UI", "Asset Export", "Revisi 1x"]
      },
      {
        name: "Website UI Design",
        subtitle: "Multi-page Design",
        originalPrice: "Rp 2.000.000",
        price: "Rp 999.999",
        delivery: "Selesai 5 hari kerja",
        promo: "Hemat 50%",
        isPopular: true,
        features: ["Multi-page Design", "Interactive Prototype", "Revisi 1x", "Asset Export"]
      },
      {
        name: "Dashboard Design",
        subtitle: "ALL SYSTEM",
        originalPrice: "Rp 3.500.000",
        price: "Rp 1.999.999",
        delivery: "Selesai 14 hari kerja",
        promo: "Hemat 40%",
        isPopular: false,
        features: ["Component States", "Clean & Modern UI", "Revisi 1x"]
      }
    ],
    painPoints: {
      title: "Desain asal-asalan bikin produk terlihat murahan?",
      subtitle: "Kalau salah satu ini kamu rasakan, saatnya pake jasa kami",
      items: [
        "Tampilan app / website terlihat kuno dan tidak konsisten.",
        "User bingung navigasinya bounce rate tinggi, konversi rendah.",
        "Desain dibuat developer tanpa riset UX hasilnya asal jadi.",
        "Tidak punya design system setiap halaman baru jadi eksperimen."
      ]
    },
    guarantees: [
      { icon: "palette", title: "Desain Modern & Konsisten", desc: "Mengikuti tren UI terkini dengan design system." },
      { icon: "clock", title: "Selesai Tepat Waktu", desc: "Menyesuaikan Paket" },
      { icon: "eye", title: "Riset & User-Centered", desc: "Desain berbasis data dan sesuai kebutuhan user." }
    ],
    faqs: [
      {
        question: "Apa yang saya dapatkan setelah desain selesai?",
        answer: "Anda akan mendapatkan file Figma lengkap dengan semua halaman, komponen, dan asset yang siap di-handover ke developer."
      },
      {
        question: "Berapa lama proses desain UI/UX?",
        answer: "Untuk Landing Page UI sekitar 4 hari kerja. Website multi-page sekitar 5 hari kerja, dan Dashboard Design hingga 14 hari kerja tergantung kompleksitas."
      },
      {
        question: "Apakah termasuk prototyping interaktif?",
        answer: "Ya, untuk paket Website UI Design dan Dashboard Design sudah termasuk interactive prototype di Figma yang bisa diklik dan dinavigasi."
      },
      {
        question: "Bisa request revisi setelah desain selesai?",
        answer: "Tentu. Setiap paket sudah termasuk 1x revisi. Untuk revisi tambahan, bisa dibicarakan saat konsultasi."
      }
    ]
  }
};

const iconMap = {
  shield: ShieldCheck,
  clock: Clock,
  users: Users,
  palette: Palette,
  eye: Eye,
};

const FAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-24 max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-foreground mb-10">Pertanyaan yang sering ditanya</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-bold text-foreground pr-8">{faq.question}</span>
                {isOpen ? (
                  <X className="w-5 h-5 text-[#f59e0b] shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#f59e0b] shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ServicePricingPage() {
  const params = useParams();
  const id = params.id as string;

  const serviceData = servicesData[id as keyof typeof servicesData];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Layanan tidak ditemukan</h1>
          <Link href="/" className="text-blue-500 hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        {/* Header */}
        <div className="mb-16">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground text-center"
          >
            {serviceData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-2xl mx-auto"
          >
            {serviceData.description}
          </motion.p>
        </div>

        {/* Pain Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
            {serviceData.painPoints.title}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {serviceData.painPoints.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {serviceData.painPoints.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`flex flex-col relative rounded-3xl p-8 border transition-all duration-300 ${pkg.isPopular
                ? 'bg-foreground border-foreground text-background shadow-xl md:scale-105 z-10'
                : 'bg-card border-border text-foreground hover:shadow-lg'
                }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-black text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  PALING LARIS
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <h4 className={`text-xl font-bold ${pkg.isPopular ? 'text-background' : 'text-foreground'}`}>{pkg.name}</h4>
                {pkg.subtitle && (
                  <p className={`text-sm mt-1.5 ${pkg.isPopular ? 'text-background/80' : 'text-foreground/80'}`}>
                    {pkg.subtitle}
                  </p>
                )}
              </div>

              <div className="text-center mb-8 flex flex-col items-center">
                {pkg.originalPrice && (
                  <span className={`line-through text-sm font-medium mb-1 ${pkg.isPopular ? 'text-background/60' : 'text-muted-foreground/60'}`}>
                    {pkg.originalPrice}
                  </span>
                )}
                <div className={`text-4xl font-extrabold mb-3 ${pkg.isPopular ? 'text-[#f59e0b]' : 'text-foreground'}`}>
                  {pkg.price}
                </div>
                {pkg.promo && (
                  <div className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.isPopular ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                    {pkg.promo}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow flex flex-col items-center">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-center">
                    <Check className="w-4 h-4 text-[#f59e0b] shrink-0" strokeWidth={3} />
                    <span className={pkg.isPopular ? 'text-background/90' : 'text-foreground/80'}>{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2.5 text-sm text-center mt-4 pt-4 border-t w-full justify-center border-dashed border-gray-500/30">
                  <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" strokeWidth={3} />
                  <span className={pkg.isPopular ? 'text-background/90' : 'text-foreground/80'}>{pkg.delivery}</span>
                </li>
              </ul>

              <a
                href={`https://wa.me/6281234567890?text=Halo%20Sugeng,%20saya%20tertarik%20dengan%20jasa%20${encodeURIComponent(pkg.name)}`}
                target="_blank"
                rel="noopener"
                className={`w-full py-3.5 px-4 text-center rounded-full font-bold transition-all ${pkg.isPopular
                  ? 'bg-[#f59e0b] text-black hover:bg-[#d97706]'
                  : 'bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                  }`}
              >
                Ambil Paket Ini
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="mt-32 mb-24">
          <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">Tenang, ada garansinya</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceData.guarantees.map((g, i) => {
              const IconComp = iconMap[g.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComp className="w-8 h-8 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{g.title}</h3>
                  <p className="text-muted-foreground text-sm">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={serviceData.faqs} />

      </div>
    </main>
  );
}
