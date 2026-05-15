"use client";
import { Globe, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { allProjects } from "../data/data";

export default function Projects() {
  return (
    <div id="projects" className="container mx-auto px-6 md:px-12 xl:px-24">
       {/* Header */}
       <section className="pt-10 pb-20 border-b border-border">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="max-w-3xl"
         >
           <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-6">
             My Works
           </h1>
           <p className="text-xl font-light text-muted-foreground leading-snug">
             A collection of projects showcasing my journey in web development, design side-projects, and open source contributions.
           </p>
         </motion.div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 gap-24">
          {allProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group"
            >
              <div className="lg:col-span-7 order-2 lg:order-1 relative">
                <a href={project.link} target="_blank" rel="noreferrer" className="block w-full overflow-hidden rounded-2xl bg-muted aspect-video md:aspect-[4/3] lg:aspect-video relative z-10">
                   <div className="absolute inset-0 bg-gradient-to-br from-muted-foreground/10 to-transparent flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                     <p className="text-muted-foreground/30 text-2xl font-light uppercase tracking-widest">{project.title}</p>
                   </div>
                   <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500 z-20 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                       <ArrowUpRight className="w-8 h-8" />
                     </div>
                   </div>
                </a>
              </div>
              
              <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium mb-4 uppercase tracking-widest">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{project.year}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-foreground/80 font-light leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors border border-border px-4 py-2 rounded-full hover:bg-muted"
                  >
                    <Globe className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors border border-border px-4 py-2 rounded-full hover:bg-muted"
                  >
                    <FaGithub className="w-4 h-4" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
