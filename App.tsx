import React, { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Background } from './components/Background';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const done = useCallback(() => {
    setLoaded(true);
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!loaded && <LoadingScreen onComplete={done} />}
      <Background />
      <Navbar />
      <main>
        {loaded && <Hero />}
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </>
  );
};

export default App;
