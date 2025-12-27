import React from 'react';
import { ArrowUpRight } from 'lucide-react'; 


const projects = [
  {
    id: "01",
    title: "LegalEase Platform",
    stack: ["React", "Node.js", "MongoDB"],
    challenge: "Underserved communities lacked access to real-time legal aid. The system needed to handle sensitive documents securely while allowing high-concurrency scheduling.",
    approach: "Designed a MERN stack architecture with role-based access control (RBAC). Implemented a microservice for real-time appointment slots using WebSocket connections.",
    github: "https://github.com/ayushmaan19/LegalEase" 
  },
  {
    id: "02",
    title: "Merchant Insights",
    stack: ["Prisma", "Postgres", "Docker"],
    challenge: "Solves the problem of fragmented e-commerce data spread across multiple platforms.Eliminates manual reporting delays by providing a single real-time source of truth.",
    approach: "Built a PERN-based analytics engine to unify fragmented e-commerce data in real time. Enabled actionable insights through live dashboards and tenant-aware data modeling.",
    github: "https://github.com/ayushmaan19/Shopify-Analytics-Dashboard"  
  },
  {
    id: "03",
    title: "Knowledge-base Search(RAG)",
    stack: ["React.js", "Express.js", "chromadb", "LLMs"],
    challenge: "Addresses the challenge of manually searching large PDFs and text documents for specific information.Replaces time-consuming reading with instant, AI-driven answers grounded in source content.",
    approach: "Processes documents by chunking and embedding content into vector representations stored in ChromaDB.Uses semantic search to retrieve relevant context, which is passed to LLM APIs to generate accurate, grounded answers.",
    github: "https://github.com/ayushmaan19/Knowledge-base-Search"  
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex justify-between items-end border-b border-border pb-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
        <p className="font-mono text-xs text-muted">INDEX: 01-{projects.length.toString().padStart(2, '0')}</p>
      </div>

      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.github}
          target="_blank" 
          rel="noopener noreferrer"
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border hover:bg-surface/50 transition-colors px-4 -mx-4 cursor-pointer block"
        >
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-blue-500 mb-4 block">{project.id} ———</span>
            
            {/* Title with Hover Icon */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
              {project.title}
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
            </h3>

            <div className="flex gap-2">
               {project.stack.map((tech, tIndex) => (
                 <span key={tIndex} className="text-[10px] font-mono border border-border px-2 py-1 uppercase text-muted group-hover:border-blue-500/30 transition-colors">
                    {tech}
                 </span>
               ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] text-muted uppercase mb-2">The Challenge</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{project.challenge}</p>
          </div>
          <div className="lg:col-span-4">
             <p className="font-mono text-[10px] text-muted uppercase mb-2">The Approach</p>
             <p className="text-sm text-zinc-300 leading-relaxed border-l border-blue-500/50 pl-4">{project.approach}</p>
          </div>
        </a>
      ))}
    </section>
  );
};

export default SelectedWork;