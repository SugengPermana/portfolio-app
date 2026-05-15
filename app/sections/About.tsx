"use client"
import { motion } from "motion/react";
import { experience, skills } from "../data/data";


export default function About() {
  return (
    <div id="about" className="container mx-auto px-6 md:px-12 xl:px-24">
      {/* Header */}
      <section className="pt-10 pb-20 md:pb-32 border-b border-border">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="max-w-4xl"
         >
           <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-8">
             I build digital products that are <span className="text-muted-foreground italic">visually engaging</span> and technically sound.
           </h1>
           <p className="text-xl md:text-2xl font-light text-muted-foreground leading-snug text-balance">
             With over 6 years of experience, I blend design principles with robust engineering to create seamless experiences on the web.
           </p>
         </motion.div>
      </section>

      {/* Bio & Details Grid */}
      <section className="py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10" />
               <p className="text-muted-foreground/30 font-light uppercase tracking-widest relative z-20">Portrait</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-20">
            {/* Bio */}
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">Bio</h2>
              <div className="prose prose-lg dark:prose-invert prose-p:font-light prose-p:leading-relaxed prose-p:text-foreground/80 max-w-none">
                <p>
                  I'm a passionate software engineer with a keen eye for design. My journey started when I discovered the power of CSS to shape digital spaces. Since then, I've expanded my toolkit to encompass the full web stack, always prioritizing user experience and clean architecture.
                </p>
                <p>
                  I believe that great software is made by understanding the people who use it. When I'm not coding, I'm usually exploring new design trends, reading about architecture, or tinkering with new frameworks.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
               <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">Experience</h2>
               <div className="flex flex-col gap-12">
                 {experience.map((exp, index) => (
                   <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
                     <div className="md:col-span-1 text-muted-foreground text-sm font-medium mt-1">
                       {exp.period}
                     </div>
                     <div className="md:col-span-3">
                       <h3 className="text-xl font-medium mb-1">{exp.role}</h3>
                       <p className="text-muted-foreground mb-4">{exp.company}</p>
                       <p className="text-foreground/80 font-light leading-relaxed text-sm md:text-base">
                         {exp.description}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Stack/Skills */}
            <div>
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 border border-border rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
