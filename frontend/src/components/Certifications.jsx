import React from 'react';
import { ShieldCheck, ExternalLink, Bookmark } from 'lucide-react';

const certifications = [
  {
    name: "Certified Architect Associate",
    issuer: "Oracle University",
    date: "ISSUED JULY, 2025",
    id: "101988908OCI25CAA",
    link: "https://drive.google.com/file/d/1Ol6DZcgpdofs-tQgyKP6Zvv6p8NtyGjN/view?usp=sharing",
    image: "/certs/Oracle.png"
  },
  {
    name: "Certified Generative AI Professional",
    issuer: "Oracle University",
    date: "ISSUED JULY, 2025",
    id: "101988908OCI25GAIOCP",
    link: "https://drive.google.com/file/d/19iGJZXXuR_e6td2dAVNtdgAfLCuOey9T/view?usp=sharing",
    image: "/certs/Oracle.png"
  },
  {
    name: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "ISSUED JUNE, 2025",
    id: "AWS-20250625-27-7up6b8",
    link: "https://www.credly.com/go/BVnvKjOs",
    image: "/certs/aws.jpg"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 mb-32">
      {/* SECTION HEADER (Matches your design) */}
      <div className="flex items-center gap-4 border-b border-border pb-4 mb-12">
        <ShieldCheck className="text-blue-500" size={28} />
        <h2 className="text-3xl font-bold tracking-tight">
          System Certifications
        </h2>
        <p className="font-mono text-xs text-muted uppercase mt-2 ml-4">STATUS: VERIFIED</p>
      </div>

      {/* CERTIFICATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 p-6 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[280px]"
          >
            {/* --- NEW: BACKGROUND IMAGE LAYER --- */}
            <div 
              className="absolute inset-0 bg-contain bg-center z-0 opacity-65 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${cert.image})` }}
            ></div>
            
            {/* --- NEW: DARK OVERLAY --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10"></div>


            {/* --- CONTENT LAYER  --- */}
            <div className="relative z-20 flex flex-col h-full justify-between">
              
              {/* Top Icons Row */}
              <div className="flex justify-between items-start">
                {/* Blue Bookmark Icon */}
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                  <Bookmark size={18} />
                </div>
                {/* External Link Icon */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-zinc-500 group-hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </div>
              </div>

              {/* Main Text Content */}
              <div className="mt-8">
                 <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                   {cert.name}
                 </h3>
                 <p className="text-zinc-400 text-sm">{cert.issuer}</p>
                 <p className="text-zinc-500 text-xs font-mono mt-1">{cert.date}</p>
              </div>
              
              {/* Bottom Validation Badge */}
              <div className="mt-8">
                <span className="inline-block font-mono text-[10px] text-zinc-400 bg-black/50 border border-white/10 px-3 py-2 rounded-full uppercase tracking-wider">
                  Validation ID: {cert.id}
                </span>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;