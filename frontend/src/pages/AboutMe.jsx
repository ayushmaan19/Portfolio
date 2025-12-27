import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ArrowLeft, Globe, Github, Linkedin, Mail, GraduationCap, Calendar, Award, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const education = [
  {
    school: "VIT-AP University",
    degree: "B.Tech in Computer Science",
    date: "2022 - Present",
    grade: "CGPA: 8.0/10.0",
    details: "Specializing in Distributed Systems and Cloud Computing."
  },
  {
    school: "DPS Kashipur", 
    degree: "Senior Secondary (XII)",
    date: "2020 - 2022",
    grade: "PCM: 85%",
    details: "Strong foundation in Physics, Chemistry, and Mathematics."
  }
];

const About = () => {
  const [copied, setCopied] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ayushmaan1092003@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "ayushmaan1092003@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30 font-sans pt-24 px-6 md:px-12 lg:px-24 flex flex-col">
      
      {/* --- CSS to hide scrollbar but keep functionality --- */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Back Navigation */}
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest w-fit">
        <ArrowLeft size={16} /> Return to Terminal
      </Link>

      <div className="max-w-7xl mx-auto w-full flex-grow">
        
        {/* --- HEADER SECTION (Image & Specs) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-border pb-16 mb-16">
          
          {/* IMAGE BLOCK */}
          <div className="lg:col-span-4">
             <div className="aspect-[3/4] bg-zinc-900 border border-border relative overflow-hidden group rounded-2xl hover:rounded-none transition-all duration-500">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.8)_100%)]"></div>
                <div className="absolute bottom-4 left-4">
                    <p className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-1">Subject_01</p>
                    <p className="text-xl font-bold">Ayushmaan Yadav</p>
                </div>
             </div>
          </div>

          {/* SPECS BLOCK */}
          <div className="lg:col-span-8 flex flex-col justify-between">
             <div>
               <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                 Profile <span className="text-zinc-600">Configuration.</span>
               </h1>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-mono text-sm border-t border-border pt-8">
                 <div>
                   <p className="text-zinc-500 text-xs uppercase mb-1">Architecture Class</p>
                   <p className="text-lg">Software Engineer(Lvl 1)</p>
                 </div>
                 <div>
                   <p className="text-zinc-500 text-xs uppercase mb-1">Base of Operations</p>
                   <p className="text-lg flex items-center gap-2">
                      <Globe size={16} className="text-blue-500"/> Greater Noida, India
                   </p>
                 </div>
                 <div>
                   <p className="text-zinc-500 text-xs uppercase mb-1">Primary Stack</p>
                   <p className="text-lg">MERN + Distributed Systems</p>
                 </div>
                 <div>
                   <p className="text-zinc-500 text-xs uppercase mb-1">Current Directive</p>
                   <p className="text-lg text-blue-400">Open to opportunities</p>
                 </div>

                 <div className="md:col-span-2 border-t border-border pt-8 mt-4">
                    <p className="text-zinc-500 text-xs uppercase mb-3">Connection Protocols</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/ayushmaan19" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Github size={18} /> GitHub</a>
                        <a href="https://in.linkedin.com/in/ayushmaan-yadav-152b141b1" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Linkedin size={18} /> LinkedIn</a>
                        
                        <button 
                          onClick={handleCopy} 
                          className="flex items-center gap-2 hover:text-blue-400 transition-colors focus:outline-none"
                        >
                          {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
                          <span className={copied ? "text-green-500" : ""}>
                            {copied ? "Copied!" : "Email"}
                          </span>
                        </button>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* LEFT COLUMN: The Narrative (SCROLLABLE & FADING) */}
          <div className="lg:col-span-8 relative">
             <div className="flex items-center gap-2 text-blue-500 mb-8">
               <Terminal size={18} />
               <p className="font-mono text-sm uppercase tracking-widest">readme.md</p>
             </div>
             
             {/* FADE CONTAINER */}
             <div className="relative">
                {/* SCROLLABLE AREA */}
                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="h-[600px] overflow-y-auto pr-2 no-scrollbar space-y-8 text-base text-zinc-400 leading-relaxed font-light pb-12"
                >
                  
                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">A Journey of Building, Learning, and Leading</h3>
                    <p>
                      I am Ayushmaan Kumar Yadav, a computer science engineer driven by a deep curiosity for how technology can be structured, scaled, and applied to solve real-world problems. My journey into software engineering has not been a linear one shaped by shortcuts or surface-level achievements, but rather a steadily evolving path defined by discipline, experimentation, and a consistent desire to understand systems at their core—whether technical, organizational, or human.
                    </p>
                    <p className="mt-4">
                      From an early academic foundation in science and mathematics to building full-scale, production-ready platforms that serve real users, my growth has been anchored in one principle: meaningful engineering is created at the intersection of logic, responsibility, and impact.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Early Foundations and Academic Discipline</h3>
                    <p>
                      My formal academic journey began with a strong grounding in physics, chemistry, and mathematics during my higher secondary education at DPS Kashipur, Uttarakhand. These years shaped my analytical thinking and introduced me to structured problem-solving.
                    </p>
                    <p className="mt-4">
                      In 2022, I enrolled in the Computer Science & Engineering program at Vellore Institute of Technology, Amaravati. University life was not just about academic rigor; it was a period of discovering how theory meets implementation. Concepts such as operating systems, computer networks, cryptography, and software engineering principles stopped being abstract ideas and became design constraints that influenced how I wrote code and architected systems.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Learning by Building: Projects as a Growth Engine</h3>
                    <p>
                      My strongest learning has always occurred through building. I believe projects are not merely portfolio artifacts; they are reflections of how an engineer thinks, handles complexity, and takes responsibility for outcomes.
                    </p>
                    <p className="mt-4">
                      One of the most defining projects in my journey has been <strong>LegalEase (NyayaSetu)</strong>, a full-stack legal technology platform where I serve as the Lead Developer. LegalEase was conceptualized to address inefficiencies in traditional legal workflows by creating a unified digital ecosystem. Built using the MERN stack, it implements role-based authentication, secure document handling with AWS S3, and real-time communication via Socket.IO. The integration of an AI-powered legal assistant using Gemini and Groq APIs boosted operational efficiency by over 50%.
                    </p>
                    <p className="mt-4">
                      Another milestone was building an AI-powered <strong>Knowledge Base Search Engine</strong>. I led the development of a system capable of handling over 10,000 monthly document uploads with sub-second response times. Utilizing RAG (Retrieval-Augmented Generation), ChromaDB, and LangChain, this project taught me how to think about performance, scalability, and reliability as first-class requirements.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Professional Experience and Industry Exposure</h3>
                    <p>
                      My professional journey includes hands-on experience in both structured organizations and freelance environments. As a Backend Developer Intern at <strong>Raytech Consultancy Services (PLRduck.com)</strong>, I automated dynamic product page generation, contributing to a 43% increase in user engagement and a 27% improvement in CTR. This role exposed me to real-world business metrics and the direct impact of backend decisions on user behavior.
                    </p>
                    <p className="mt-4">
                      Earlier, as a Freelance Developer with the TEDx group at Shivaji College, I translated Figma prototypes into responsive, high-performance websites. Working in a constrained tech stack environment strengthened my fundamentals and taught me how to optimize performance without relying on heavy frameworks.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Engineering Mindset and Technical Depth</h3>
                    <p>
                      Technically, my strengths span across backend systems, cloud computing, and applied AI. I work comfortably with Java and JavaScript, prioritizing clean architecture and security. My experience with Node.js, MongoDB, Docker, and AWS allows me to design systems that are robust and adaptable. To reinforce my problem-solving ability, I have solved over <strong>400 Data Structures and Algorithms problems</strong> on LeetCode.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Leadership, Responsibility, and Team Dynamics</h3>
                    <p>
                      Leadership has been a recurring theme. As Team Lead for the <strong>Smart India Hackathon 2024</strong>, I led a six-member team in designing a drug testing prototype for NADA. Managing timelines and delegating responsibilities taught me that leadership is about clarity, accountability, and trust.
                    </p>
                    <p className="mt-4">
                      Earlier, as the Basketball Team Captain at Father Agnel School, I led the team to three consecutive regional championships. These experiences defined by physical endurance and collective morale continue to influence how I collaborate with peers today.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-white font-bold text-lg mb-2">Beyond Technology</h3>
                    <p>
                      Outside academics, competitive sports have shaped my discipline. Being a <strong>four-time university arm-wrestling champion</strong> and a two-time national-level powerlifting winner demanded consistency and mental strength. Additionally, my recognition in the UNICEF Heartfulness Essay Writing Competition reflects my ability to articulate ideas thoughtfully and connect technical reasoning with human values.
                    </p>
                  </section>

                  {/* UPDATED: Quote with Smokey Effect */}
                  <section className="border-t border-border pt-6 mt-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent blur-xl opacity-50 rounded-lg pointer-events-none"></div>
                    <p className="italic text-gray/80 text-s font-serif font-thin tracking-wide relative z-10 px-4 py-2 border-l-2 border-blue-500">
                      "The goal is not to write code that works. The goal is to write systems that survive."
                    </p>
                  </section>

                </div>

                {/* SMOKEY EFFECT OVERLAY */}
                <div 
                   className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none transition-opacity duration-500 ${isAtBottom ? 'opacity-0' : 'opacity-100'}`}
                ></div>
             </div>
          </div>

          {/* RIGHT COLUMN: Education Timeline */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 text-blue-500 mb-8">
               <GraduationCap size={18} />
               <p className="font-mono text-sm uppercase tracking-widest">Education Log</p>
             </div>

            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-zinc-800 border border-zinc-600 rounded-full group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors"></div>

                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border border-border px-2 py-1 mb-3 rounded bg-black/50">
                    <Calendar size={10} />
                    {edu.date}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">{edu.degree}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                     <Award size={14} className="text-blue-500" />
                     {edu.grade}
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* --- FOOTER --- */}
      <footer className="border-t border-border py-8 text-center text-zinc-500 font-mono text-sm">
        <p>&copy; {new Date().getFullYear()} Ayushmaan Yadav. All systems operational.</p>
      </footer>

    </div>
  );
};

export default About;