"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";

const links = [
  { name: "Home", path: "#home", id: "home" },
  { name: "Services", path: "#services", id: "services" },
  { name: "Resume", path: "#resume", id: "resume" },
  { name: "Work", path: "#work", id: "work" },
  { name: "Contact", path: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = "home";
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between relative">
          <a href="#home" className="text-xl font-semibold tracking-tighter uppercase z-50 relative group outline-none overflow-hidden h-8 flex items-center">
            <span className="flex flex-col transform transition-transform duration-300 group-hover:-translate-y-full">
              <span>Darrell.</span>
              <span className="text-muted-foreground">Darrell.</span>
            </span>
          </a>

          {/* Center Desktop Nav */}
          <nav className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-8 font-medium text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="relative py-2 group text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-px bg-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="px-5 py-2 rounded-full border-2 border-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-colors">
              Hire Me
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-4 z-50 relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={cn("w-full h-[2px] bg-foreground transition-all duration-300 origin-left", isMobileMenuOpen ? "rotate-45 translate-x-[2.5px] -translate-y-[1px]" : "rotate-0")} />
                <span className={cn("w-full h-[2px] bg-foreground transition-all duration-300", isMobileMenuOpen ? "opacity-0" : "opacity-100")} />
                <span className={cn("w-full h-[2px] bg-foreground transition-all duration-300 origin-left", isMobileMenuOpen ? "-rotate-45 translate-x-[2.5px] translate-y-[1px]" : "rotate-0")} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-background border-b border-border shadow-lg md:hidden p-4 flex flex-col gap-2"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                    activeSection === link.id
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="h-px bg-border my-2" />
            <div className="flex items-center gap-4 px-4 py-2">
              <ThemeToggle />
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-2 rounded-full border-2 border-foreground font-medium text-sm hover:bg-foreground hover:text-background transition-colors">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
