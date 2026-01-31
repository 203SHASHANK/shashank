import React from 'react';
import { Github, Linkedin, Code, Mail, Terminal, Cpu, Database, Server, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Identity', href: '#about' },
    { name: 'Execution', href: '#experience' },
    { name: 'Modules', href: '#projects' },
    { name: 'CoreStack', href: '#skills' },
    { name: 'Connect', href: '#contact' }
  ];

  const coreTech = ['Java Enterprise', 'Spring Microservices', 'SQL Optimization', 'System Design'];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.socialLinks.linkedin },
    { name: 'LeetCode', icon: Code, url: personalInfo.socialLinks.leetcode },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800 pt-20 pb-10 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-x-0 bottom-0 h-64 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Module */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-dark-900 border border-matrix/20 rounded-lg flex items-center justify-center text-matrix shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tighter">
                  {personalInfo.name}
                </h3>
                <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest leading-none">
                  Backend_Systems_Engineer
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-sans italic border-l-2 border-slate-800 pl-6 py-1">
              "Building high-availability server-side logic and robust data architectures.
              Always optimizing, always secure."
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-900 border border-slate-800 rounded flex items-center justify-center text-slate-500 hover:text-matrix hover:border-matrix/40 group transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div>
            <div className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Server className="w-3 h-3 text-cyber-blue" />
              Site_Map
            </div>
            <div className="grid grid-cols-1 gap-3">
              {navItems.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="w-fit font-mono text-xs font-black uppercase tracking-wider text-slate-500 hover:text-white transition-colors text-left group"
                >
                  <span className="text-slate-800 mr-2 group-hover:text-matrix transition-colors">{" >> "}</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Core Foundations */}
          <div>
            <div className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Database className="w-3 h-3 text-matrix" />
              Core_Specialization
            </div>
            <div className="flex flex-wrap gap-2">
              {coreTech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-900 border border-slate-800 text-slate-500 text-[9px] font-mono font-bold rounded-sm uppercase tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 p-4 bg-dark-900/50 border border-slate-800 rounded">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-3.5 h-3.5 text-cyber-gold animate-pulse" />
                <span className="text-[9px] font-mono font-black text-white uppercase tracking-widest">System Health</span>
              </div>
              <div className="w-full bg-dark-850 h-1 rounded-full overflow-hidden">
                <div className="bg-matrix h-full w-[98%] shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest">
            <span>© {currentYear} ACCESS_GRANTED</span>
            <span className="hidden md:block">|</span>
            <span>SHASHANK_S // PORT_65535</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-700 uppercase tracking-widest">
            Handcrafted with <Heart className="w-3 h-3 text-matrix/40 hover:text-red-500 transition-colors cursor-pointer" /> in Bengaluru
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;