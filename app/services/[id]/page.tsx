"use client";

import { ArrowLeft, CheckCircle2, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";

const servicesData = {
  "web-dev": {
    title: "Web Development Pricing",
    description: "Pilih paket pengembangan website yang sesuai dengan kebutuhan bisnis atau project Anda.",
    packages: [
      { 
        name: "Landing Page Development", 
        originalPrice: "Rp 1.000.000",
        price: "Rp 500.000", 
        delivery: "3-5 Hari Kerja",
        promo: "Diskon 50%",
        features: ["1 Halaman Website", "Responsive Design", "SEO Friendly", "Fast Loading"] 
      },
      { 
        name: "Company Profile Website", 
        originalPrice: "Rp 2.500.000",
        price: "Rp 1.500.000", 
        delivery: "7-10 Hari Kerja",
        promo: "Promo Terbatas",
        features: ["Multi-halaman", "CMS Integration", "Contact Form", "Professional Design"] 
      },
      { 
        name: "Portfolio Website", 
        originalPrice: "Rp 1.200.000",
        price: "Rp 750.000", 
        delivery: "5-7 Hari Kerja",
        promo: "Best Value",
        features: ["Showcase Projects", "Resume Download", "Custom Domain Support", "Modern Animations"] 
      },
      { 
        name: "Dashboard / Admin Panel", 
        price: "Mulai Rp 2.500.000", 
        delivery: "14-21 Hari Kerja",
        features: ["Data Visualization", "User Management", "API Integration", "Secure Login"] 
      },
      { 
        name: "Website Redesign", 
        originalPrice: "Rp 2.000.000",
        price: "Rp 1.000.000", 
        delivery: "7-14 Hari Kerja",
        promo: "Diskon 50%",
        features: ["Modern UI Update", "Performance Boost", "Mobile Optimization", "UX Improvement"] 
      },
      { 
        name: "Tugas Akhir Programming", 
        originalPrice: "Rp 3.000.000",
        price: "Rp 1.500.000", 
        delivery: "14-30 Hari Kerja",
        promo: "Harga Mahasiswa",
        features: ["Full Source Code", "Database Design", "Revisi Terbatas", "Bimbingan Instalasi"] 
      },
      { 
        name: "Custom Web Application", 
        price: "Custom Pricing", 
        delivery: "Sesuai Kompleksitas",
        features: ["Tailored Features", "Complex Logic", "Database Design", "Full Stack Setup"] 
      },
    ]
  },
  "ui-ux": {
    title: "UI/UX Design Pricing",
    description: "Pilih paket desain antarmuka yang sesuai dengan kebutuhan produk digital Anda.",
    packages: [
      { 
        name: "Landing Page UI", 
        originalPrice: "Rp 600.000",
        price: "Rp 300.000", 
        delivery: "2-4 Hari Kerja",
        promo: "Diskon 50%",
        features: ["Figma Source File", "Wireframing", "1 Page UI", "Asset Export"] 
      },
      { 
        name: "Website UI Design", 
        originalPrice: "Rp 2.000.000",
        price: "Rp 1.000.000", 
        delivery: "5-10 Hari Kerja",
        promo: "Promo Terbatas",
        features: ["Multi-page Design", "Interactive Prototype", "Responsive Layouts (Desktop & Mobile)"] 
      },
      { 
        name: "Mobile App Design", 
        price: "Mulai Rp 1.500.000", 
        delivery: "10-14 Hari Kerja",
        features: ["iOS/Android Guidelines", "User Flow Diagram", "Interactive Prototype", "Component Library"] 
      },
      { 
        name: "Dashboard Design", 
        originalPrice: "Rp 3.500.000",
        price: "Rp 2.000.000", 
        delivery: "10-21 Hari Kerja",
        promo: "Best Value",
        features: ["Complex Data Layouts", "Component States", "Clean & Modern UI", "Dark/Light Mode Support"] 
      },
      { 
        name: "Design System", 
        price: "Mulai Rp 3.000.000", 
        delivery: "14-30 Hari Kerja",
        features: ["Typography Scale", "Color Palette", "Reusable Components", "Comprehensive Guidelines"] 
      },
    ]
  }
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground"
          >
            {serviceData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            {serviceData.description}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex flex-col relative border border-border rounded-3xl p-8 bg-card hover:border-foreground/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Promo Badge */}
              {pkg.promo && (
                <div className="absolute top-5 right-5 bg-foreground/10 text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-foreground/20 shadow-sm backdrop-blur-md">
                  <Tag className="w-3.5 h-3.5" />
                  {pkg.promo}
                </div>
              )}

              <h4 className="text-xl font-bold mb-4 pr-24 text-foreground">{pkg.name}</h4>
              
              <div className="mb-6 flex flex-col gap-1">
                {pkg.originalPrice && (
                  <span className="text-muted-foreground line-through text-sm font-medium">
                    {pkg.originalPrice}
                  </span>
                )}
                <div className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {pkg.price}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground/80 mb-8 bg-muted/50 border border-border/50 w-fit px-3 py-1.5 rounded-lg font-medium">
                <Clock className="w-4 h-4 text-foreground/70" />
                <span>Pengerjaan: <strong>{pkg.delivery}</strong></span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20Sugeng,%20saya%20tertarik%20dengan%20jasa%20${encodeURIComponent(pkg.name)}`}
                target="_blank"
                rel="noopener"
                className="w-full py-4 px-4 bg-foreground text-background text-center rounded-xl font-semibold group-hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-md"
              >
                Pilih Paket Ini
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
