import React from 'react';
import { GraduationCap, Calendar, Trophy, Star, BookOpen, Fingerprint, Database, Code, ShieldCheck } from 'lucide-react';
import { personalInfo, education, achievements, stats } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-matrix/5 to-transparent -z-10" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyber-blue/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-matrix/10 border border-matrix/20 rounded text-matrix">
              <Fingerprint className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-black text-matrix uppercase tracking-[0.3em]">Identity_Kernel</span>
          </div>
          <h2 className="section-title text-white uppercase tracking-tighter">
            System <span className="text-matrix">Profile</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-mono text-sm uppercase tracking-widest mt-2">
            Decentralized core logic & educational foundations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Core Logic */}
          <div className="relative space-y-8 animate-fade-in-up">
            <div className="glass-card relative border-matrix/10 p-8 space-y-6 overflow-hidden hover-lift">
              {/* Background Grid Accent */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded bg-dark-850 border border-slate-700 flex items-center justify-center text-3xl group-hover:border-matrix/30 transition-all duration-500">
                  {personalInfo.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 bg-matrix rounded-full animate-breathing-glow" />
                    <p className="text-matrix/80 font-mono text-[10px] font-bold uppercase tracking-widest leading-none">
                      {personalInfo.title} // {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">
                  <Database className="w-3.5 h-3.5 text-matrix" />
                  Primary Memory Segment
                </div>
                <p className="text-slate-400 leading-relaxed font-sans text-sm border-l-2 border-matrix/20 pl-4 py-1">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 relative z-10">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-sm font-mono font-black text-white uppercase">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Status Code */}
            <div className="p-4 bg-dark-900/50 border border-slate-800 rounded font-mono text-[10px] text-slate-500 space-y-1">
              <div className="text-matrix/40 group-hover:text-matrix transition-colors">{" >> "}INIT_SEQUENCE_SUCCESSFUL</div>
              <div>{" >> "}CORE_MODULES_LOADED: [JAVA, SPRING_BOOT, SQL]</div>
              <div>{" >> "}SECURITY_HANDSHAKE: ENCRYPTED</div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-matrix rounded-full" />
                <span>SYSTEM_STABLE_VER_2.4.0</span>
              </div>
            </div>
          </div>

          {/* Right Column - Foundation & Milestones */}
          <div className="space-y-12 animate-fade-in-up delay-200">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-cyber-blue shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                <h3 className="text-lg font-mono font-black text-white uppercase tracking-widest">Foundation_Protocol</h3>
              </div>

              <div className="group relative bg-dark-900 border border-slate-800 p-6 rounded transition-all hover:border-cyber-blue/30 overflow-hidden hover-lift hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                  <GraduationCap className="w-12 h-12 text-cyber-blue" />
                </div>

                <div className="relative z-10 space-y-4">
                  <div>
                    <h4 className="text-sm font-mono font-black text-white uppercase tracking-tight group-hover:text-cyber-blue transition-colors">
                      {education.degree}
                    </h4>
                    <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mt-1">
                      {education.university}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-slate-800/50">
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono font-black text-slate-700 uppercase">Timespan</div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                        <Calendar className="w-3 h-3 text-cyber-blue/50" /> {education.duration}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono font-black text-slate-700 uppercase">Performance</div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                        <Star className="w-3 h-3 text-yellow-500/50" /> CGPA: {education.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-matrix shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
                <h3 className="text-lg font-mono font-black text-white uppercase tracking-widest">Optimization_Milestones</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((item, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <div className="mt-1">
                      <ShieldCheck className="w-4 h-4 text-matrix/30 group-hover/item:text-matrix transition-colors" />
                    </div>
                    <p className="text-[13px] font-mono text-slate-500 group-hover/item:text-slate-300 transition-colors uppercase tracking-tighter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Interaction Prompt */}
            <div className="pt-8 flex items-center gap-4 border-t border-slate-800">
              <Code className="w-5 h-5 text-slate-700" />
              <div className="text-[9px] font-mono font-bold text-slate-700 uppercase tracking-widest">
                System awaiting further instruction... <br />
                <span className="text-matrix/40 animate-pulse">_ Root access granted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;