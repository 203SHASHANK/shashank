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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
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
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:scale-110 transition-all duration-300 z-50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-primary-300/20 dark:bg-primary-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-accent-300/20 dark:bg-accent-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default App;