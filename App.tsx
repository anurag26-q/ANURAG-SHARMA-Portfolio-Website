import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Background } from './components/Background';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* Fixed elements must be outside the main container to avoid stacking context issues with opacity transitions */}
      <Background />
      
      {/* Ambient background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <Navbar />
      
      <main 
        className={`min-h-screen text-slate-300 selection:bg-primary-500/30 selection:text-primary-200 relative overflow-x-hidden transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
      
      <AIChat />
    </>
  );
};

export default App;