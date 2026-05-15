"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "../lib/utils";
import { categories, workData } from "../data/data";

export function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredWork = activeCategory === "All"
    ? workData
    : workData.filter(work => work.categories.includes(activeCategory));

  const activeProject = filteredWork[activeIndex] || filteredWork[0];

  return (
    <section className="py-20 md:py-32" id="work">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          PORTFOLIO
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          My Work
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(0);
            }}
            className={cn(
              "px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300",
              activeCategory === cat
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-foreground border-border hover:border-foreground/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Column (List) */}
        <div className="flex-1 flex flex-col gap-4">
          {filteredWork.map((work, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={work.num}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "cursor-pointer overflow-hidden transition-all duration-500 rounded-2xl border",
                  isActive
                    ? "text-foreground border border-border hover:border-foreground hover:shadow-md h-auto p-8"
                    : "text-foreground border border-border hover:border-foreground hover:shadow-md p-4 h-[72px] flex items-center"
                )}
              >
                {!isActive ? (
                  <div className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity w-full">
                    <span className="font-mono text-sm">{work.num}</span>
                    <h4 className="font-semibold text-lg">{work.title}</h4>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold tracking-widest text-[#6c63ff] uppercase flex flex-wrap gap-2">
                        {work.categories.join(", ")}
                      </span>
                      <h4 className="text-3xl font-bold">{work.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {work.tech.map((t, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4 mt-auto">
                      <a
                        href={work.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 rounded-full text-foreground border border-border hover:border-foreground hover:shadow-xl font-medium transition-colors text-sm"
                      >
                        <FaGithub className="w-4 h-4" /> GitHub
                      </a>
                      <a
                        href={work.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity text-sm"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column (Sticky Image) */}
        <div className="flex-1 relative hidden md:block">
          <div className="sticky top-32 w-full">
            <div className="bg-card border border-border rounded-3xl p-2 pb-6 shadow-2xl overflow-hidden">
              {/* Browser Window Mockup */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border mb-2 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto px-4 py-1.5 rounded-md bg-background border border-border text-xs text-muted-foreground font-mono truncate w-2/3 text-center opacity-70">
                  https://github.com/sugengPermana/{activeProject?.title.replace(/\s+/g, '')}
                </div>
              </div>

              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden px-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject?.num}
                    src={activeProject?.imageUrl}
                    alt={activeProject?.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-xl border border-border shadow-inner"
                  />
                </AnimatePresence>
              </div>

              {/* Carousel indicators */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : filteredWork.length - 1)}
                  className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {filteredWork.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        i === activeIndex ? "bg-[#6c63ff] w-4" : "bg-border"
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveIndex(prev => prev < filteredWork.length - 1 ? prev + 1 : 0)}
                  className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
