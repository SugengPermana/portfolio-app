"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Code2, User2 } from "lucide-react";
import { Certificates } from "../components/Certificates";
import { cn } from "../lib/utils";
import { tabs, experienceData, educationData, skillsData } from "../data/data";

export function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="py-20 md:py-32" id="resume">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          My Journey
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          Why Hire Me?
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 text-left">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-3 w-full p-4 rounded-xl text-sm font-medium transition-colors border",
                activeTab === tab.id
                  ? "bg-muted border-foreground/10 text-foreground shadow-sm"
                  : "bg-transparent border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 border-l-2 border-border/50 pl-0 md:pl-10 relative mt-4 md:mt-0 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                {experienceData.map((item, i) => (
                  <div key={i} className="relative text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6 transition-shadow">
                    <div className="absolute top-1/2 -left-10 -translate-x-[calc(50%+1px)] -translate-y-1/2 w-4 h-4 rounded-full bg-foreground hidden md:block" />
                    <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">{item.role}</h4>
                      <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <h5 className="font-medium text-foreground mb-4">{item.company}</h5>
                    <p className="text-muted-foreground font-light">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                {educationData.map((item, i) => (
                  <div key={i} className="relative 
                  text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6 transition-shadow">
                    <div className="absolute top-1/2 -left-10 -translate-x-[calc(50%+1px)] -translate-y-1/2 w-4 h-4 rounded-full bg-foreground hidden md:block" />
                    <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">{item.role}</h4>
                      <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <h5 className="font-medium text-foreground mb-4">{item.company}</h5>
                    <p className="text-muted-foreground font-light">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-8 py-4"
              >
                {skillsData.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground/90">{skill.name}</span>
                      <span className="font-medium text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-foreground rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Name</p>
                    <p className="font-bold text-lg">Sugeng Permana Desembry</p>
                  </div>
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Nationality</p>
                    <p className="font-bold text-lg">Indonesian</p>
                  </div>
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Email</p>
                    <p className="font-bold text-lg">sugengpermanad@gmail.com</p>
                  </div>
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Location</p>
                    <p className="font-bold text-lg">Bogor, Indonesia</p>
                  </div>
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6 md:col-span-2">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Languages</p>
                    <p className="font-bold text-lg">English, Indonesian</p>
                  </div>
                  <div className="text-foreground border border-border hover:border-foreground hover:shadow-xl rounded-xl p-6 md:col-span-2">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">Bio</p>
                    <p className="text-muted-foreground leading-relaxed">
                      I am a Full-Stack Developer driven by the challenge of turning complex problems into intuitive, user-centric solutions. With a strong foundation in modern web and mobile frameworks, I thrive at the intersection of clean architecture and creative design. Outside of the IDE, I stay sharp by contributing to open-source projects, experimenting with emerging tech, and finding fresh perspectives through outdoor adventures.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Certificates />
    </section>
  );
}
