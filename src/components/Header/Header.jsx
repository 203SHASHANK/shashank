import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, Database, Activity } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Force dark mode
    document.documentElement.classList.add('dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Identity', href: '#about' },
    { name: 'Execution', href: '#experience' },
    { name: 'Modules', href: '#projects' },
    { name: 'CoreStack', href: '#skills' },
    { name: 'Connect', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down ${isScrolled || isMobileMenuOpen
        ? 'bg-dark-950/90 backdrop-blur-md py-3 border-b border-matrix/10'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Kernel Hub */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="relative w-10 h-10 bg-dark-900 border border-slate-700 rounded flex items-center justify-center text-matrix group-hover:border-matrix/50 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300">
              <Terminal className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-matrix rounded-full animate-breathing-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-mono font-black text-white uppercase tracking-tighter group-hover:text-matrix transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none">
                Kernel_v2.4
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Advanced Terminal Style */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex bg-dark-900/50 backdrop-blur-sm rounded-lg p-1 border border-slate-800 shadow-xl overflow-hidden">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link relative px-5 py-2 font-mono text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-matrix transition-all group/item"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-matrix/5 scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            {/* System Status Indicator - Hidden on smaller screens to prevent overlap */}
            <div className="hidden lg:flex ml-6 px-4 py-2 bg-dark-900 border border-slate-800 rounded items-center gap-3 hover:border-matrix/30 transition-all duration-300">
              <Activity className="w-3.5 h-3.5 text-matrix animate-pulse" />
              <div className="text-[9px] font-mono font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">
                System: <span className="text-matrix">Active</span>
              </div>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <div className="px-3 py-1.5 bg-dark-900 border border-slate-800 rounded flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-matrix rounded-full animate-breathing-glow" />
              <span className="text-[10px] font-mono font-black text-slate-500 uppercase">Online</span>
            </div>

            <button
              className="w-10 h-10 flex items-center justify-center bg-dark-900 border border-slate-800 rounded-lg text-white hover:border-matrix/40 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-matrix" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-950 border-t border-slate-800/50 shadow-2xl transition-all duration-300 origin-top transform ${isMobileMenuOpen
          ? 'opacity-100 scale-y-100 translate-y-0'
          : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col p-6 space-y-3">
          {navItems.map((item, i) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center justify-between w-full px-5 py-4 bg-dark-900 border border-slate-800 hover:border-matrix/20 rounded-lg group transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="font-mono text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-matrix">
                {item.name}
              </span>
              <Terminal className="w-4 h-4 text-slate-700 group-hover:text-matrix group-hover:translate-x-1 transition-all" />
            </button>
          ))}

          <div className="pt-6 mt-6 border-t border-slate-800/50 grid grid-cols-2 gap-4">
            <div className="p-4 bg-dark-900 rounded border border-slate-800">
              <Cpu className="w-4 h-4 text-cyber-blue mb-2" />
              <div className="text-[9px] font-mono font-black text-slate-600 uppercase">Core_Status</div>
              <div className="text-[10px] font-mono font-black text-white mt-1">OPTIMIZED</div>
            </div>
            <div className="p-4 bg-dark-900 rounded border border-slate-800">
              <Database className="w-4 h-4 text-cyber-gold mb-2" />
              <div className="text-[9px] font-mono font-black text-slate-600 uppercase">Data_Node</div>
              <div className="text-[10px] font-mono font-black text-white mt-1">SYNCED</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;