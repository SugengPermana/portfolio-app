"use client"
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "web-dev",
    num: "01",
    title: "Web Development",
    description: "Building fast, scalable, and responsive web applications using modern frameworks like React, Next.js, and Node.js with clean, maintainable code."
  },
  {
    id: "ui-ux",
    num: "02",
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and seamless user experiences — from wireframes and prototypes to pixel-perfect, accessible final products."
  }
];

export function Services() {
  return (
    <section className="py-20 md:py-32" id="services">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          What I Do
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          My Services
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <Link key={i} href={`/services/${service.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative text-foreground border border-border hover:border-foreground hover:shadow-lg rounded-3xl p-10 flex flex-col justify-between transition-shadow overflow-hidden h-full cursor-pointer bg-card hover:bg-muted/10"
            >
              <div>
                <span
                  className="text-6xl md:text-7xl font-bold font-mono tracking-tighter block mb-8 transition-colors text-transparent opacity-30 group-hover:opacity-60"
                  style={{ WebkitTextStroke: "2px currentColor", color: "var(--foreground)" }}
                >
                  {service.num}
                </span>
                <div className="h-px w-full bg-border mb-8" />
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-12">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
