import React from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeViewer = () => {
  const resumeUrl = "/v34Elab.pdf"; 

  return (
    <div className="h-screen w-full flex flex-col pt-20 bg-background text-white font-sans overflow-hidden">

      {/* --- PDF EMBED --- */}
      <div className="flex-1 bg-zinc-900 relative">
        <iframe 
          src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
          className="w-full h-full border-none"
          title="Resume PDF"
        />
        
        {/* Mobile Fallback */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
           <p className="text-zinc-600 font-mono text-sm animate-pulse">Loading Document Stream...</p>
        </div>
      </div>
      
    </div>
  );
};

export default ResumeViewer;