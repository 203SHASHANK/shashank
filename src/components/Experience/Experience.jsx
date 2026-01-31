import React from 'react';
import { Briefcase, Calendar, Terminal, ShieldCheck, Award, Cpu, Layers } from 'lucide-react';
import { experience, certifications } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-matrix/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h2 className="section-title text-white uppercase tracking-tighter">
            System <span className="text-matrix">Registry</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-mono text-sm uppercase tracking-widest mt-2">
            Verification of professional milestones & expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-matrix/10 border border-matrix/20 rounded-lg text-matrix shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-mono font-black text-white uppercase tracking-widest">Execution History</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-matrix/50 before:via-slate-800 before:to-transparent">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-24 group">
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-0 w-5 h-5 bg-dark-950 border-2 border-slate-700 rounded-sm rotate-45 z-10 group-hover:border-matrix group-hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all duration-500" />

                  {/* Content Card */}
                  <div className="glass-card relative border-matrix/5 group-hover:border-matrix/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-bold text-matrix uppercase tracking-widest bg-matrix/5 px-2 py-0.5 rounded w-fit">
                          {exp.type}
                        </div>
                        <h4 className="text-xl font-display font-black text-white group-hover:text-matrix transition-colors uppercase tracking-tight">
                          {exp.position}
                        </h4>
                        <div className="text-cyber-blue font-mono text-xs font-bold uppercase tracking-widest">
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-dark-850 px-3 py-1.5 border border-slate-800 rounded uppercase tracking-tighter h-fit">
                        <Calendar className="w-3.5 h-3.5 text-matrix" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-8 leading-relaxed font-sans text-sm italic border-l-2 border-matrix/10 pl-4">
                      {exp.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                        <Terminal className="w-3 h-3 text-matrix" />
                        Operation Logs
                      </div>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-400 text-[13px] group/item">
                            <ShieldCheck className="w-4 h-4 text-matrix/40 group-hover/item:text-matrix transition-colors flex-shrink-0 mt-0.5" />
                            <span className="group-hover/item:text-slate-200 transition-colors uppercase tracking-tighter font-mono">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-matrix/5">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-dark-850 border border-slate-800 text-slate-500 text-[10px] font-mono rounded-sm uppercase group-hover:border-matrix/20 group-hover:text-matrix transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/20 rounded-lg text-cyber-blue shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-mono font-black text-white uppercase tracking-widest">Validated Assets</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group relative bg-dark-900/40 p-6 rounded-lg border border-slate-800 hover:border-cyber-blue/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-cyber-blue/5 rotate-45 translate-x-6 -translate-y-6 group-hover:bg-cyber-blue/10 transition-colors" />

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded bg-dark-850 border border-slate-700 flex items-center justify-center text-cyber-blue font-black text-lg group-hover:border-cyber-blue group-hover:text-white transition-all duration-300">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-sm font-mono font-black text-white uppercase tracking-tight group-hover:text-cyber-blue transition-colors">
                            {cert.title}
                          </h4>
                          <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mt-1">
                            Issued by: {cert.issuer}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyber-blue bg-cyber-blue/5 border border-cyber-blue/10 px-2 py-1 rounded-sm uppercase tracking-tighter">
                          {cert.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="text-[9px] font-mono font-bold text-slate-500 flex items-center gap-2 group-hover:text-slate-400 transition-colors uppercase tracking-widest">
                            <span className="w-1 h-1 bg-cyber-blue opacity-40" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Hint */}
            <div className="mt-12 p-6 border border-matrix/5 rounded-lg bg-dark-900/20 flex items-center gap-6 opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
              <Layers className="w-12 h-12 text-matrix animate-pulse" />
              <div>
                <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">System Architecture Optimized</div>
                <div className="text-[9px] font-mono text-slate-600 uppercase leading-relaxed mt-1">
                  Commit sequence verified. Credentials locked. <br />
                  Ready for high-availability deployment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;