import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "I build intelligent AI systems.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start justify-center">
        <span className="text-primary-400 font-mono tracking-wide mb-6 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
          Hi, my name is
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 mb-4 tracking-tight animate-[slideUp_0.5s_ease-out_0.4s_both]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Anurag Sharma.
          </span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-400 mb-8 tracking-tight min-h-[1.2em]">
          {text}<span className="animate-pulse text-primary-500">|</span>
        </h2>
        
        <p className="max-w-2xl text-lg text-slate-400 mb-12 leading-relaxed animate-[slideUp_0.5s_ease-out_0.8s_both]">
          I design and deploy <span className="text-slate-200">end-to-end scalable intelligent systems</span>. 
          Specializing in <span className="text-primary-400">Generative AI</span> (RAG, Multi-Agent Systems) and <span className="text-primary-400">Computer Vision</span> (YOLO). 
          I optimize large models via <span className="text-slate-200">LLM Fine-Tuning</span> and build production-grade backends using <span className="text-slate-200">FastAPI</span>, <span className="text-slate-200">Django</span>, and <span className="text-slate-200">Docker</span>.
        </p>
        
        <div className="flex gap-4 animate-[fadeIn_0.5s_ease-out_1s_both]">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary-600 text-white rounded font-medium shadow-lg shadow-primary-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative">Check out my work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 rounded hover:border-primary-500 hover:text-primary-400 transition-all duration-300 font-medium hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 z-10">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};