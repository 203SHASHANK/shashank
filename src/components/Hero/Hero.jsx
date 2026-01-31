import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Code, Mail, MapPin, Terminal, Cpu, Server } from 'lucide-react';
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

  const SocialLink = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 font-mono">System Online</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-400">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="h-12 text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 font-medium font-mono">
                &gt; {text}
                <span className="animate-blink">_</span>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={scrollToProjects} className="btn-primary flex items-center gap-2 group">
                <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                View Projects
              </button>

              <button onClick={downloadCV} className="btn-secondary flex items-center gap-2">
                Download CV
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <SocialLink href={personalInfo.socialLinks.github} icon={Github} label="GitHub" />
              <SocialLink href={personalInfo.socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={personalInfo.socialLinks.leetcode} icon={Code} label="LeetCode" />
            </div>
          </div>

          {/* Right Content - Terminal Visual */}
          <div className={`relative ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'} delay-300 hidden lg:block`}>
            <div className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
              {/* Terminal Window */}
              <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden font-mono text-sm leading-6">
                {/* Terminal Header */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="ml-4 text-slate-400 text-xs flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    bash — 80x24
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 text-slate-300 space-y-4 h-[400px]">
                  <div>
                    <span className="text-emerald-400">shashank@dev:~$</span> ./init_profile.sh
                  </div>

                  <div className="space-y-1 pl-4 border-l-2 border-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">ℹ</span>
                      <span>Loading core modules...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">ℹ</span>
                      <span>Analyzing tech stack...</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">BACKEND</div>
                      <div className="text-emerald-300">Java, Python, Go</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">DB & CLOUD</div>
                      <div className="text-blue-300">SQL, Firebase, AWS</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-emerald-400">shashank@dev:~$</span> cat current_status.json
                    <br />
                    <span className="text-yellow-300">{`{`}</span>
                    <div className="pl-4">
                      <span className="text-blue-300">"role"</span>: <span className="text-orange-300">"Software Engineer"</span>,<br />
                      <span className="text-blue-300">"company"</span>: <span className="text-orange-300">"Probeplus"</span>,<br />
                      <span className="text-blue-300">"mood"</span>: <span className="text-orange-300">"Ready to Build"</span>
                    </div>
                    <span className="text-yellow-300">{`}`}</span>
                  </div>

                  <div>
                    <span className="text-emerald-400">shashank@dev:~$</span> <span className="animate-blink inline-block w-2 h-4 bg-slate-300 align-middle"></span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -right-10 -bottom-10 opacity-20">
                <Server className="w-48 h-48 text-emerald-500" />
              </div>
              <div className="absolute -z-10 -left-10 top-20 opacity-20">
                <Cpu className="w-32 h-32 text-blue-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 py-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-2 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500 dark:from-primary-400 dark:to-emerald-400 font-display font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;