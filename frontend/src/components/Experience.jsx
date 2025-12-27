import React from 'react';
import { Briefcase, Calendar, ChevronRight, Building2 } from 'lucide-react';

const experiences = [
  {
    role: "Backend Developer and Content Manager-Intern",
    company: "Raytech Consultancy Services Pvt. Ltd (PLRduck.com)",
    date: "July 2024 - Sept 2024",
    description: [
      "Engineered backend services and automated dynamic product page generation, streamlining logic and service functionality.",
      "Drove a 43% increase in engagement and 27% CTR growth by building a custom automated web page generator for dynamic product pages. Applied responsive design.",
      "Maintained 95% of the legacy code."
    ],
    tech: ["Node.js", "Css", "Docker"],
    logo: "/cmpImgs/comp1.png" 
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Shivaji college DU, tedx group",
    date: "Feb 2023 - Jun 2023",
    description: [
      "Developed and deployed a responsive client website from Figma prototypes using vanilla HTML, CSS, and JavaScript.",
      "Improved site performance by ~30% and delivered seamless cross-device compatibility.",
      "Boosted engagement with an intuitive UI/UX hosted on GitHub Pages."
    ],
    tech: ["JavaScript", "Figma", "GitHub Pages"],
    logo: "/cmpImgs/comp2.png" 
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end gap-4 border-b border-border pb-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
          <Briefcase className="text-blue-500" />
          Professional Experience
        </h2>
        <p className="font-mono text-xs text-muted pb-1">EXECUTION LOG</p>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full ring-4 ring-background group-hover:ring-blue-500/20 transition-all z-10"></div>

            {/* Layout Container: Logo (Left) + Content (Right) */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              
              {/* --- LOGO COLUMN (New Feature) --- */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg border border-white/10 bg-surface flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                  {exp.logo ? (
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-full h-full object-cover" 
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'block'; 
                      }} 
                    />
                  ) : (
                    <Building2 className="text-zinc-600 group-hover:text-blue-500 transition-colors" size={20} />
                  )}
                  {/* Hidden Fallback for broken images */}
                  <Building2 className="hidden text-zinc-600 group-hover:text-blue-500 transition-colors" size={20} />
                </div>
              </div>

              {/* --- CONTENT COLUMN (Your Existing Content) --- */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-zinc-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 bg-surface border border-border px-3 py-1 rounded-full w-fit">
                    <Calendar size={12} />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-zinc-400">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight size={16} className="mt-1 text-blue-500 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, tIndex) => (
                    <span key={tIndex} className="text-[10px] font-mono border border-white/10 px-2 py-1 text-zinc-500 uppercase hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;