"use client";
import { ArrowRight, Download, Disc3 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";
import { TechStack } from "../components/TechStack";
import { AnimatedRole } from "../components/AnimatedRole";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
  LeftItemVariants,
  RightItemVariants,
} from "../data/data";

export default function Home() {
  return (
    <div id="home" className="container mx-auto px-6 md:px-12 xl:px-24">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={LeftItemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm font-medium tracking-wide">
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              variants={LeftItemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 break-word"
            >
              Hello, I'm <br />
              Sugeng Permana <br />
              Desembry
            </motion.h1>

            <motion.div
              variants={LeftItemVariants}
              className="flex items-center gap-4 mb-6"
            >
              <AnimatedRole />
            </motion.div>

            <motion.p
              variants={LeftItemVariants}
              className="text-lg text-foreground/80 font-light leading-relaxed max-w-lg mb-10"
            >
              I'm a <em>Full-Stack Developer</em> with a passion for building
              Web applications. I am proficient in various modern technologies,
              including <em>Next js</em>, <em>Node.js</em>, <em>PHP</em>,{" "}
              <em>Laravel</em>, and adept at using <em>AI tools</em> to enhance
              development efficiency. Currently, I am actively seeking
              opportunities to contribute to challenging and growing projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 items-center mb-10"
            >
              <a
                href="https://github.com/SugengPermana"
                target="_blank"
                rel="noopener"
                aria-label="GitHub Sugeng Permana Desembry"
                className="w-12 h-12 rounded-full bg-transparent border border-border text-foreground hover:border-foreground flex items-center justify-center  transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sugengpermanadesembry/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn Sugeng Permana Desembry"
                className="w-12 h-12 rounded-full bg-transparent border border-border text-foreground hover:border-foreground flex items-center justify-center transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sgprmna_?igsh=MXBzMXEyc3E1cGRoYg=="
                target="_blank"
                rel="noopener"
                aria-label="Instagram Sugeng Permana Desembry"
                className="w-12 h-12 rounded-full bg-transparent border border-border text-foreground hover:border-foreground flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="/CV_Sugeng_Permana_Desembry.pdf"
                className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-6 py-3.5 rounded-full hover:border-foreground transition-colors font-medium text-sm"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services/web-dev"
                className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-6 py-3.5 rounded-full hover:border-foreground transition-colors font-medium text-sm"
              >
                Lihat Paket & Harga <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* Rotating dots around the image */}
              <div className="absolute -inset-4 md:-inset-6 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full rounded-full border border-dashed border-border animate-[spin_20s_linear_infinite] relative">
                  {/* Dots on the orbit */}
                  
                  {/* Top Left */}
                  <div className="absolute top-[10%] left-[10%] w-3 h-3 md:w-4 md:h-4 bg-foreground rounded-full shadow-sm" />
                  {/* Bottom Right */}  
                  <div className="absolute bottom-[10%] right-[10%] w-3 h-3 md:w-4 md:h-4 bg-foreground rounded-full shadow-sm" />
                  {/* Top Right */}
                  <div className="absolute top-[10%] right-[10%] w-3 h-3 md:w-4 md:h-4 bg-foreground rounded-full shadow-sm" />
                  {/* Bottom Left */}
                  <div className="absolute bottom-[10%] left-[10%] w-3 h-3 md:w-4 md:h-4 bg-foreground rounded-full shadow-sm" />
                </div>
              </div>

              {/* image */}
              <div className="absolute inset-0 rounded-full bg-muted overflow-hidden z-10 border-4 border-background flex items-center justify-center shadow-lg">
                <Image
                  src="/me.png"
                  alt="Profile"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 384px"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section variants={containerVariants} initial="hidden" animate="visible" className="py-12 border-t border-border">
        <motion.div variants={itemVariants}  className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-transparent md:divide-border text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">11</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">
              Years
              <br />
              Experience
            </span>
            <span className="text-sm text-muted-foreground md:hidden">
              Month Experience
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 border-l border-border md:border-none">
            <span className="text-4xl md:text-5xl font-bold">6+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">
              Projects
              <br />
              Completed
            </span>
            <span className="text-sm text-muted-foreground md:hidden">
              Projects Completed
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">6+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">
              Technologies
            </span>
            <span className="text-sm text-muted-foreground md:hidden">
              Technologies
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 border-l border-border md:border-none">
            <span className="text-4xl md:text-5xl font-bold">20+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">
              Certificates
            </span>
            <span className="text-sm text-muted-foreground md:hidden">
              Certificates
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 relative">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground md:sticky md:top-32">
              Introduction
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-2xl leading-snug font-light text-balance">
              Halo! Gue Sugeng, seorang Frontend sekaligus Backend Developer
              yang tinggal di Bogor. Sejak masuk kuliah, gue mulai tertarik sama
              dunia Tech. Dulu gue berasal dari jurusan pariwisata, bahkan
              sempat nggak ngerti apa itu coding dan sebenarnya coding itu
              dipakai buat apa, dan ngapain?. Karena rasa penasaran, gue mulai
              coba bikin website sederhana dan ikut beberapa webinar serta
              bootcamp tentang tech. Dari situ gue sadar kalau dunia Tech
              ternyata menarik banget. Gue jadi makin suka ngulik dan belajar
              gimana sebuah aplikasi atau website bisa dibuat dari nol sampai
              akhirnya dipakai banyak orang. Selain itu, sekarang AI lagi
              berkembang pesat dan muncul istilah “vibe coding”. Karena
              penasaran, gue juga mulai belajar gimana cara memanfaatkan AI buat
              membantu proses development project gue. Dari situ gue jadi
              tertarik memahami AI lebih dalam, mulai dari cara kerjanya sampai
              gimana bikin prompt yang efektif supaya hasilnya maksimal.
            </h3>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-15 md:py-22">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 relative">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground md:sticky md:top-32">
              Goals
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-2xl leading-snug font-light text-balance">
              Di waktu luang, gue suka banget explore dan eksperimen dengan
              tools AI terbaru dan mengompare perbadingan AI mana yang paling
              bagus, mulai dari Gemini, ChatGPT, Copilot, Claude dan lain
              sebagainya. Goal gue untuk 5 tahun ke depan adalah menjadi seorang
              tech professional yang fleksibel, mampu beradaptasi di berbagai
              role, dan dapat berkontribusi dalam menciptakan produk digital
              yang modern, relevan, dan benar-benar bermanfaat bagi banyak
              orang. Kalau lo tertarik, punya ide seru dan pengen kolaborasi,
              yuk ngobrol bareng gue!
            </h3>
            <div className="mt-8">
              <a
                href="#resume"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
              >
                <span className="border-b border-border group-hover:border-foreground transition-colors pb-1">
                  More about me
                </span>
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300 relative top-[1px]" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <TechStack />
    </div>
  );
}
