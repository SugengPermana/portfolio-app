"use client"
import { Search, LayoutTemplate, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const processes = [
  {
    num: "01",
    title: "Requirement Analysis",
    description: "Understand the client's goals, business requirements, and technical needs before starting development.",
    icon: Search,
    color: "text-[#3b82f6]",
    bgColor: "bg-blue-500/10 dark:bg-[#0f172a]/80",
    borderColor: "border-blue-200 dark:border-[#1e3a8a]"
  },
  {
    num: "02",
    title: "Design & Planning",
    description: "Plan the website architecture, user flow, database, and overall development strategy.",
    icon: LayoutTemplate,
    color: "text-[#a855f7]",
    bgColor: "bg-purple-500/10 dark:bg-[#1e1430]/80",
    borderColor: "border-purple-200 dark:border-[#5b21b6]"
  },
  {
    num: "03",
    title: "Development",
    description: "Build responsive, scalable, and maintainable web applications using modern technologies and clean code.",
    icon: Code2,
    color: "text-[#10b981]",
    bgColor: "bg-emerald-500/10 dark:bg-[#06241a]/80",
    borderColor: "border-emerald-200 dark:border-[#065f46]"
  },
  {
    num: "04",
    title: "Testing & Deployment",
    description: "Test the application thoroughly, optimize performance, deploy to production, and ensure everything runs smoothly.",
    icon: Rocket,
    color: "text-[#f97316]",
    bgColor: "bg-orange-500/10 dark:bg-[#2a1405]/80",
    borderColor: "border-orange-200 dark:border-[#9a3412]"
  }
];

export function WorkingProcess() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-foreground" id="process">
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-indigo-100 dark:bg-[#1e1b4b] mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-[#818cf8]">
            Workflow
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-background">
          My Working Process
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-[56px] h-[1px] bg-background/20 z-0" />

        {/* Timeline Line (Mobile) */}
        <div className="block md:hidden absolute left-[65px] top-[40px] bottom-[100px] w-[1px] bg-background/20 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          {processes.map((process, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center z-10"
            >
              {/* Icon Container */}
              <div className="relative mb-0 md:mb-8 shrink-0 mr-8 md:mr-0">
                <div className={`w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-[24px] md:rounded-[32px] border ${process.borderColor} ${process.bgColor} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 relative z-10`}>
                  <process.icon className={`w-8 h-8 md:w-12 md:h-12 ${process.color}`} strokeWidth={1.5} />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-background border border-border flex items-center justify-center shadow-xl z-20">
                  <span className="text-xs md:text-sm font-bold text-foreground">{process.num}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="pt-2 md:pt-0">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-background">{process.title}</h4>
                <p className="text-background/60 text-sm md:text-base font-light leading-relaxed max-w-[260px] mx-auto">
                  {process.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
