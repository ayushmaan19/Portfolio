import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code, Bot, Cloud, Download } from 'lucide-react';
import NetworkBackground from './components/NetworkBackground';
import About from './pages/AboutMe'; 
import ResumeViewer from './pages/ResumeViewer';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';    
import TechProficiency from './components/TechProficiency'; 

const techList = [
  { icon: Code, name: "MERN Stack Dev" },
  { icon: Bot, name: "Generative AI" },
  { icon: Cloud, name: "Cloud Computing" },
];

const Home = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techList.length);
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  const currentTech = techList[currentTechIndex];
  const CurrentIcon = currentTech.icon;

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 border-b border-border overflow-hidden pt-20">
        <NetworkBackground />
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 pointer-events-none">
          <div className="flex-1 text-left pointer-events-auto">
            <p className="font-mono text-xs text-blue-400 mb-6 mt-3 uppercase tracking-widest">// Software Engineer</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
             Architecting for <br />
              <span className="text-muted">Scale and Stability.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
              I design and build distributed infrastructure with a focus on clarity, reliability, and long-term maintainability. 
              Currently architecting solutions for <span className="text-white font-medium">LegalEase</span>.
            </p>
            <div className="flex gap-4">
              <Link to="/about" className="bg-white text-black px-8 py-4 font-semibold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors">
                More About Me <ArrowRight size={16} />
              </Link>
              <a href="/#contact" className="border border-border px-8 py-4 font-medium text-sm hover:bg-surface/50 backdrop-blur-sm transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          {/* RIGHT SIDE: Tech Carousel */}
          <div className="flex-1 flex justify-center h-[400px] lg:h-auto items-center pointer-events-auto">
              <div className="flex flex-col items-center text-center animate-in fade-in duration-300" key={currentTechIndex}>
                <p className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-8">
                  Core Competency // {(currentTechIndex + 1).toString().padStart(2, '0')}
                </p>
                
                <CurrentIcon 
                  className="w-72 h-72 md:w-100 md:h-100 lg:w-[450px] lg:h-[450px] text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] md:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" 
                  strokeWidth={0.8} 
                />
                
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-400 mb-8">
                  {currentTech.name}
                </h2>
              </div>
          </div>
        </div>
      </section>

      <SelectedWork />
      <TechProficiency />
      <Experience />
      <Certifications />
      <Contact />
      
      {/* SEPARATOR & FOOTER */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="h-px bg-white/20"></div>
      </div>
      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
           <p>© 2025 Ayushmaan Yadav. System Online.</p>
           <p>v2.1.0</p>
      </footer>
    </>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30 font-sans">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            AYUSHMAAN.DEV
          </Link>

          <div className="flex items-center gap-8">
            {/* DESKTOP LINKS */}
            <div className="hidden md:flex gap-8 text-xs font-mono text-muted uppercase tracking-widest">
              <a href="/#work" className="hover:text-white transition-colors">Work</a>
              <a href="/#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="/#certifications" className="hover:text-white transition-colors">Certifications</a>
            </div>

            {/* --- CONDITIONAL BUTTON LOGIC --- */}
            <div>
              {location.pathname !== '/resume' ? (
                <Link 
                  to="/resume"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex items-center gap-2 border border-white/20 bg-transparent px-5 py-2 text-xs font-mono uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black hover:pr-10"
                >
                  <span>Resume</span>
                  <ArrowUpRight 
                    size={14} 
                    className="absolute right-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </Link>
              ) : (
                <a 
                  href="/v34Elab.pdf" 
                  download="Ayushmaan_Yadav_Resume.pdf"
                  className="group flex items-center justify-center border border-white/20 bg-transparent px-3.5 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                  title="Download Resume"
                >
                  <Download size={16} />
                </a>
              )}
            </div>

          </div>

        </div>
      </nav>

      {/* MAIN CONTENT ROUTES */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes>
      </main>

    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;