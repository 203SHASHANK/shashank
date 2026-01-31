import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './index.css';

// Import all components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Hobbies from './components/Hobbies/Hobbies';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-dark-950 font-sans text-slate-200 selection:bg-matrix/30 selection:text-matrix overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Hobbies />

        <Contact />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-sm bg-dark-900 border border-matrix text-matrix shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:bg-matrix hover:text-dark-950 transition-all duration-300 z-50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Theme Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-matrix/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>
    </div>
  );
}

export default App;