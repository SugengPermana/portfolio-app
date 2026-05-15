"use client";
import { ArrowRight, Download, Disc3 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";
import { TechStack } from "../components/TechStack";
import { Services } from "../components/Services";
import { Resume } from "../components/Resume";
import { Certificates } from "../components/Certificates";
import { Work } from "../components/Work";
import { containerVariants, itemVariants } from "../data/data";

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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 mb-8">
              <div className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm font-medium tracking-wide">Available for Work</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Hello, I'm <br />
              Darrell Rafa <br />
              Alamsyah
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-foreground" />
              <h2 className="text-xl md:text-2xl font-light text-muted-foreground font-mono">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 font-light leading-relaxed max-w-lg mb-10">
              Full-Stack Developer specializing in crafting seamless, high-converting digital experiences. From responsive web apps to robust mobile interfaces, I leverage modern frameworks to build performant products that bridge the gap between elegant design and functional code.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 items-center mb-10">
               <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                 <FaGithub className="w-5 h-5" />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                 <FaLinkedin className="w-5 h-5" />
               </a>
               <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                 <Disc3 className="w-5 h-5" />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                 <FaInstagram className="w-5 h-5" />
               </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
               <a 
                href="/cv.pdf"
                className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-6 py-3.5 rounded-full hover:bg-muted transition-colors font-medium text-sm"
               >
                 <Download className="w-4 h-4" /> Download CV
               </a>
               <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full hover:scale-105 transition-transform duration-300 font-medium text-sm"
               >
                 Hire Me <ArrowRight className="w-4 h-4" />
               </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Circular dashed ring (simplified simulation) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[110%] h-[110%] rounded-full border border-dashed border-border animate-[spin_60s_linear_infinite]" />
            </div>
            
            {/* Image Placeholder */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-muted overflow-hidden relative z-10 border-4 border-background flex items-center justify-center">
               <p className="text-muted-foreground/30 font-light uppercase tracking-widest relative z-20">Portrait</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-transparent md:divide-border text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">2+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">Years<br/>Experience</span>
            <span className="text-sm text-muted-foreground md:hidden">Years Experience</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 border-l border-border md:border-none">
            <span className="text-4xl md:text-5xl font-bold">10+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">Projects<br/>Completed</span>
            <span className="text-sm text-muted-foreground md:hidden">Projects Completed</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">8+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">Technologies</span>
            <span className="text-sm text-muted-foreground md:hidden">Technologies</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 border-l border-border md:border-none">
            <span className="text-4xl md:text-5xl font-bold">20+</span>
            <span className="text-sm text-muted-foreground text-left leading-tight hidden md:block">Certificates</span>
            <span className="text-sm text-muted-foreground md:hidden">Certificates</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
             <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground sticky top-32">
               Introduction
             </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-4xl leading-snug font-light text-balance">
              Hello, I'm Darrell. I specialize in building minimal, fast, and accessible digital products. 
              Bridging the gap between design and engineering to create impactful user experiences.
            </h3>
            <div className="mt-8">
               <a href="#resume" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
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
      <Services />
      <Resume />
      <Certificates />
      <Work />

    </div>
  );
}
