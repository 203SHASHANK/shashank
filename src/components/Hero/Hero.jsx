import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Code, Mail, MapPin, Terminal, Cpu, Server, Database, Activity } from 'lucide-react';
import { personalInfo, stats } from '../../data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    setIsLoaded(true);
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = personalInfo.roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    window.open(personalInfo.resumeUrl || '#', '_blank');
  };

  const SocialLink = ({ href, icon: Icon, label, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"

      className={`p-3 bg-dark-900 border border-matrix/20 rounded-lg text-slate-400 hover:text-matrix hover:border-matrix hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${props.className || ''}`}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-950">
      {/* Matrix-like Background Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00FF41 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-matrix/5 border border-matrix/20 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-matrix"></span>
              </span>
              <span className="text-xs font-mono font-bold text-matrix uppercase tracking-tighter">System Authenticated: Backend V3.0</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none">
                {personalInfo.name.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix to-cyber-blue drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>

              <div className="h-10 text-xl lg:text-2xl text-matrix/80 font-mono flex items-center gap-2">
                <span className="text-cyber-blue font-bold">$</span>
                <span>{text}</span>
                <span className="w-2.5 h-6 bg-matrix animate-blink ml-1"></span>
              </div>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-sans border-l-2 border-matrix/20 pl-6 italic">
                "{personalInfo.bio}"
              </p>

              <div className="flex flex-wrap gap-6 text-slate-500 text-xs font-mono pt-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-matrix" />
                  <span>{personalInfo.location.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyber-blue" />
                  <span>{personalInfo.email.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={scrollToProjects} className="btn-primary flex items-center gap-3">
                <Terminal className="w-4 h-4" />
                Initialize Projects
              </button>

              <button onClick={downloadCV} className="btn-secondary flex items-center gap-3">
                Get Payload (CV)
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-4 pt-6">
              <SocialLink href={personalInfo.socialLinks.github} icon={Github} label="GitHub" />
              <SocialLink href={personalInfo.socialLinks.linkedin} icon={Linkedin} label="LinkedIn" className="animate-fade-in-up delay-100" />
              <SocialLink href={personalInfo.socialLinks.leetcode} icon={Code} label="LeetCode" className="animate-fade-in-up delay-200" />
            </div>
          </div>

          {/* Right Content - Advanced Terminal Visual */}
          <div className={`relative ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'} delay-300 block mt-12 lg:mt-0`}>
            <div className="relative z-10 w-full max-w-lg mx-auto">
              {/* Animated Glow behind terminal */}
              <div className="absolute inset-0 bg-matrix/10 blur-[100px] animate-pulse-slow -z-10" />

              {/* Terminal Window */}
              <div className="bg-dark-900/90 rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-matrix/20 overflow-hidden font-mono text-[13px] leading-relaxed backdrop-blur-md relative">
                {/* Terminal Header */}
                <div className="bg-dark-800 px-4 py-2 flex items-center justify-between border-b border-matrix/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-matrix/50 shadow-[0_0_5px_rgba(0,255,65,0.5)]" />
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    Profile_Runtime.exe
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 text-slate-400 space-y-5 h-auto min-h-[400px] lg:h-[460px] overflow-hidden">
                  <div className="space-y-1">
                    <div className="text-matrix opacity-80 flex items-center gap-2">
                      <span className="text-cyber-blue font-bold">»</span> System initialization successful.
                    </div>
                    <div className="flex items-center gap-2 pl-4 text-slate-500 italic">
                      [OK] Runtime Environment: Java 21, Spring Boot 3.2, Go 1.22
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-cyber-blue">Core_Systems:</span>
                      <span className="text-[10px] text-matrix/60 tracking-widest uppercase">Executing...</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'API Architecture', level: '95%' },
                        { label: 'Database Logic', level: '90%' },
                        { label: 'System Security', level: '88%' },
                        { label: 'Scalability', level: '92%' }
                      ].map((item, i) => (
                        <div key={i} className="bg-dark-850 p-2 border border-matrix/5 rounded">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span>{item.label}</span>
                            <span className="text-matrix">{item.level}</span>
                          </div>
                          <div className="h-0.5 bg-dark-800 w-full overflow-hidden">
                            <div
                              className="h-full bg-matrix/50 shadow-[0_0_5px_rgba(0,255,65,0.5)]"
                              style={{ width: item.level }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyber-blue">
                      <span>{`{`}</span>
                      <span className="text-[10px] lowercase text-slate-600">server_logs</span>
                    </div>
                    <div className="pl-4 space-y-1 text-[11px]">
                      <div className="flex gap-3">
                        <span className="text-slate-600">14:29:05</span>
                        <span className="text-matrix font-bold">INFO</span>
                        <span className="text-slate-500">Optimizing query plan...</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-slate-600">14:29:12</span>
                        <span className="text-cyber-blue font-bold">DEBUG</span>
                        <span className="text-slate-500">Cache hit: profile_data</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-slate-600">14:30:01</span>
                        <span className="text-yellow-500 font-bold">WARN</span>
                        <span className="text-slate-500">Connection pool near limit</span>
                      </div>
                    </div>
                    <div className="text-cyber-blue">{`}`}</div>
                  </div>

                  <div className="border-t border-matrix/5 pt-3 md:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-matrix/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 animate-pulse" />
                      <span className="hidden sm:inline">Status: Active</span>
                      <span className="sm:hidden">Active</span>
                    </div>
                    <div>Ver: 2026.1.31</div>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Elements Removed to prevent visual artifacts */}
              {/* <div className="absolute -right-8 -bottom-16 md:-bottom-8 opacity-10 animate-float">
                <Database className="w-40 h-40 text-matrix" />
              </div>
              <div className="absolute -left-12 top-1/4 opacity-10 animate-float delay-600">
                <Server className="w-24 h-24 text-cyber-blue" />
              </div> */}
            </div>
          </div>
        </div>

        {/* Professional Stats Section - Redesigned */}
        <div className="mt-24 pt-12 border-t border-matrix/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-dark-900/40 border border-matrix/5 rounded-lg overflow-hidden ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-matrix/5 rotate-45 translate-x-10 -translate-y-10 group-hover:bg-matrix/10 transition-colors" />
                <div className="relative z-10 space-y-1">
                  <div className="text-3xl font-mono font-black text-matrix tracking-tighter group-hover:text-shadow-glow transition-all">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-matrix/30 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;