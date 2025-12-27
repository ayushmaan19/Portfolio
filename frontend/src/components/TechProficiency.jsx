import React from 'react';

const proficiency = [
  {
    category: "Languages & Full Stack",
    items: [
      { name: "Java", level: "High" },
      { name: "JavaScript", level: "High" },
      { name: "React.js", level: "High" },
      { name: "Node.js", level: "High" },
      { name: "Express.js", level: "High" },
      { name: "HTML", level: "High" },
      { name: "CSS", level: "High" },
      { name: "Tailwind CSS", level: "High" },
      { name: "PHP", level: "Mid" },
      { name: "R", level: "Basic" },
    ]
  },
  {
    category: "Cloud, AI & Databases",
    items: [
      { name: "AWS", level: "Mid" },
      { name: "Oracle Cloud (OCI)", level: "Mid" },
      { name: "Docker", level: "Mid" },
      { name: "MongoDB", level: "High" },
      { name: "PostgresSQL", level: "Mid" },
      { name: "ChromaDB", level: "Mid" },
      { name: "LLMs & Prompt Engineering", level: "High" },
      { name: "RAG Pipelines", level: "Mid" },
      { name: "LangChain", level: "Mid" },
      { name: "HuggingFace", level: "Mid" },
    ]
  },
  {
    category: "Tools & Protocols",
    items: [
      { name: "Git & GitHub", level: "High" },
      { name: "REST APIs", level: "High" },
      { name: "Postman", level: "High" },
      { name: "Socket.io", level: "Mid" },
      { name: "WebRTC", level: "Mid" },
      { name: "Twilio", level: "Mid" },
      { name: "Rapid API", level: "Mid" },
      { name: "Figma", level: "High" },
      { name: "Agile Methodology", level: "Mid" },
    ]
  }
];

const TechProficiency = () => {
  return (
    <section id="proficiency" className="max-w-7xl mx-auto px-6 mb-32">
      <h2 className="text-3xl font-bold mb-12 border-b border-border pb-4">Technical Proficiency</h2>
      
      {/* Grid Layout: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-sm">
         {proficiency.map((group, index) => (
           <div key={index}>
              {/* Category Header */}
              <p className="text-xs text-blue-500 mb-6 uppercase tracking-widest font-bold">
                // {group.category}
              </p>
              
              {/* List of Skills */}
              <ul className="space-y-3">
                 {group.items.map((skill, sIndex) => (
                   <li key={sIndex} className="flex justify-between border-b border-white/5 pb-2 group hover:border-blue-500/50 transition-colors">
                     <span className="text-zinc-300 group-hover:text-white transition-colors">
                       {skill.name}
                     </span> 
                     <span className="text-zinc-600 text-xs pt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                       {skill.level}
                     </span>
                   </li>
                 ))}
              </ul>
           </div>
         ))}
      </div>
    </section>
  );
};

export default TechProficiency;