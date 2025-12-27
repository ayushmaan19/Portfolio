import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Github, Linkedin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

// CONFIGURATION: Set the reset time in seconds here
const RESET_DELAY_SECONDS = 5;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [countdown, setCountdown] = useState(RESET_DELAY_SECONDS);

  // --- EFFECT: Handle the Countdown & Reset Logic ---
  useEffect(() => {
    let timer;
    let resetTimeout;

    if (status === 'success') {
      // 1. Reset countdown number immediately
      setCountdown(RESET_DELAY_SECONDS);

      // 2. Start counting down every second (for the text)
      timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      // 3. Set the hard reset to trigger exactly when time is up
      resetTimeout = setTimeout(() => {
        setStatus('idle');
        setCountdown(RESET_DELAY_SECONDS); 
      }, RESET_DELAY_SECONDS * 1000);
    }


    return () => {
      clearInterval(timer);
      clearTimeout(resetTimeout);
    };
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const TEMPLATE_ID_ADMIN = import.meta.env.VITE_TEMPLATE_ADMIN;
    const TEMPLATE_ID_AUTOREPLY = import.meta.env.VITE_TEMPLATE_AUTOREPLY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ADMIN, form.current, PUBLIC_KEY)
      .then(() => {
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_AUTOREPLY, form.current, PUBLIC_KEY);

          setStatus('success');
          e.target.reset(); 
      }, (error) => {
          console.error("Transmission Failed:", error.text);
          setStatus('error');

          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="py-32 border-t border-border bg-black/50 relative overflow-hidden">
      
      {/* --- ADD CUSTOM KEYFRAMES FOR THE BAR ANIMATION --- */}
      <style>{`
        @keyframes shrink-bar {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT COLUMN: Context */}
          <div>
            <div className="flex items-center gap-2 text-blue-500 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="font-mono text-xs uppercase tracking-widest">System Status: Online</p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Let's architect something <br />
              <span className="text-zinc-500">resilient together.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              I am currently open to internships, FTE, or freelance opportunities where I can apply my skills in distributed systems and full-stack architecture.
            </p>

            <div className="space-y-6 font-mono text-sm">
              <a href="mailto:ayushmaan1092003@gmail.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 border border-border bg-surface flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <Mail size={20} className="group-hover:text-blue-500 transition-colors" />
                </div>
                <span>ayushmaan1092003@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 border border-border bg-surface flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="flex gap-6 mt-12 border-t border-border pt-8">
              <a href="https://github.com/ayushmaan19" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                <Github size={16} /> Github
              </a>
              <a href="https://in.linkedin.com/in/ayushmaan-yadav-152b141b1" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The "Terminal" Form */}
          <div className="bg-surface border border-border p-8 md:p-10 relative group min-h-[500px] flex flex-col justify-center transition-all duration-500">
            
            {/* Decorative Corner Borders */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors duration-300 ${status === 'success' ? 'border-green-500' : 'border-blue-500'}`}></div>
            <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${status === 'success' ? 'border-green-500' : 'border-blue-500'}`}></div>
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${status === 'success' ? 'border-green-500' : 'border-blue-500'}`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors duration-300 ${status === 'success' ? 'border-green-500' : 'border-blue-500'}`}></div>

            {/* STATE 1: LOADING OVERLAY */}
            {status === 'sending' && (
               <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-in fade-in duration-300">
                  <Loader2 size={48} className="text-blue-500 animate-spin mb-4" />
                  <p className="font-mono text-sm uppercase tracking-widest text-blue-400 animate-pulse">Establishing Uplink...</p>
               </div>
            )}

            {/* STATE 2: SUCCESS MESSAGE */}
            {status === 'success' && (
               <div className="absolute inset-0 bg-surface z-20 flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 text-center px-8">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Complete</h3>
                  <p className="text-zinc-400 mb-8">System has acknowledged your request. An automated confirmation has been sent to your inbox.</p>
                  
                  {/* --- ANIMATED BAR --- */}
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-2">
                     <div 
                        className="h-full bg-green-500 origin-left"
                        style={{

                           animation: `shrink-bar ${RESET_DELAY_SECONDS}s linear forwards`
                        }}
                     ></div>
                  </div>
                  
                  {/* --- DYNAMIC COUNTDOWN TEXT --- */}
                  <p className="font-mono text-[10px] text-zinc-500 uppercase">
                    Resetting Interface in {countdown}s
                  </p>
               </div>
            )}

            {/* STATE 3: ERROR MESSAGE */}
            {status === 'error' && (
               <div className="absolute inset-0 bg-surface z-20 flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 text-center px-8">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Uplink Failed</h3>
                  <p className="text-zinc-400">Connection rejected. Please check your network or try again manually.</p>
               </div>
            )}

            {/* DEFAULT FORM */}
            <div className={`transition-opacity duration-300 ${status !== 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send size={18} className="text-blue-500" />
                Initialize Transmission
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase">/ User_ID (Name)</label>
                  <input 
                    type="text" 
                    name="from_name" 
                    required
                    className="w-full bg-background border border-border p-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 font-mono text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase">/ Return_Address (Email)</label>
                  <input 
                    type="email" 
                    name="reply_to" 
                    required
                    className="w-full bg-background border border-border p-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 font-mono text-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase">/ Payload (Message)</label>
                  <textarea 
                    name="message" 
                    required
                    rows="4"
                    className="w-full bg-background border border-border p-4 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 font-mono text-sm resize-none"
                    placeholder="Enter your message parameters..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-bold py-4 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                >
                  Execute Send <ArrowRight size={16} />
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;