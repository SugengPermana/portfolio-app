"use client"
import { useState } from "react";
import { motion } from "motion/react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { certificatesData } from "../data/data";

// Mock data, based on the images provided

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  
  const displayedCertificates = showAll 
    ? certificatesData 
    : certificatesData.slice(0, 6);

  return (
    <section className="py-20 md:py-32" id="certificates">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
          ACHIEVEMENTS
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
          My Certificates
        </h3>
        <div className="w-12 h-1 bg-foreground mx-auto mt-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <Award className="w-8 h-8 mb-6 text-foreground" strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-4">{cert.title}</h4>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-6">{cert.year}</p>
                {cert.credentialId !== "-" && (
                  <p className="text-xs text-muted-foreground font-mono bg-muted py-2 px-3 rounded break-all mb-6">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
              <a 
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold mt-4 text-muted-foreground group-hover:text-foreground transition-colors"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {certificatesData.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-muted transition-colors font-medium text-sm"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show All ({certificatesData.length}) <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
