"use client"
import { Send, Mail, MapPin } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (Simulated)");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="py-20 md:py-32" id="contact">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          GET IN TOUCH
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          Let's Work Together
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h4 className="text-3xl font-bold tracking-tight mb-4">Have a project in mind?</h4>
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Email</span>
                  <a href="mailto:darrell2645@gmail.com" className="font-semibold text-lg hover:text-muted-foreground transition-colors">darrell2645@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Location</span>
                  <span className="font-semibold text-lg">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4 hidden lg:flex">
              <div className="h-px bg-border flex-1" />
              <span className="text-xs font-mono text-muted-foreground">Ready to start?</span>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-muted/30 border border-border rounded-3xl p-8 lg:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label htmlFor="name" className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Full Name</label>
                   <input 
                     type="text" 
                     id="name"
                     required
                     value={formState.name}
                     onChange={e => setFormState({...formState, name: e.target.value})}
                     placeholder="Asep Mekanik"
                     className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label htmlFor="email" className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Email Address</label>
                   <input 
                     type="email" 
                     id="email"
                     required
                     value={formState.email}
                     onChange={e => setFormState({...formState, email: e.target.value})}
                     placeholder="asep@example.com"
                     className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                   />
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <label htmlFor="subject" className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Subject</label>
                 <input 
                   type="text" 
                   id="subject"
                   required
                   value={formState.subject}
                   onChange={e => setFormState({...formState, subject: e.target.value})}
                   placeholder="Project discussion"
                   className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                 />
               </div>

               <div className="flex flex-col gap-2">
                 <label htmlFor="message" className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Message</label>
                 <textarea 
                   id="message"
                   required
                   rows={5}
                   value={formState.message}
                   onChange={e => setFormState({...formState, message: e.target.value})}
                   placeholder="Tell me about your project..."
                   className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 resize-y"
                 />
               </div>
               
               <button 
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full mt-4 flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold disabled:opacity-50"
               >
                 <Send className="w-4 h-4" />
                 {isSubmitting ? "Sending..." : "Send Message"} 
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
