"use client"
import { motion } from "motion/react";
import { stack } from "../data/data";
export function TechStack() {
  return (
    <section className="py-20 md:py-32" id="tech-stack">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          My Arsenal
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          Tech Stack
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {stack.map((category, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                {category.title}
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
                  <span className="font-medium text-sm md:text-base text-foreground/80">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
