import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 text-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <span className="block text-primary-500 font-mono mb-4 text-sm tracking-wider">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">Get In Touch</h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            I am currently open to new opportunities to build innovative AI products. Whether you have a question about my projects, a potential collaboration, or just want to say hi, my inbox is always open!
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <a
            href="mailto:anuragparashar111@gmail.com"
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-primary-500 text-primary-500 rounded font-medium text-lg hover:bg-primary-500/10 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Say Hello <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};