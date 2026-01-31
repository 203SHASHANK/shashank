import React, { useState, useEffect, useRef } from 'react';
import { Code2, Wrench, Database, Cpu, Activity, ShieldCheck, Server, Cloud } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills[activeTab].forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, `${activeTab}-${index}`]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab]);

  const tabs = [
    { id: 'languages', label: 'Core Systems', icon: Cpu, color: 'text-matrix' },
    { id: 'frameworks', label: 'Data & Architecture', icon: Database, color: 'text-cyber-blue' },
    { id: 'tools', label: 'Env & Tools', icon: Wrench, color: 'text-cyber-gold' }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setAnimatedSkills(new Set());
    setTimeout(() => {
      skills[tabId].forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, `${tabId}-${index}`]));
        }, index * 100);
      });
    }, 100);
  };

  const SkillCard = ({ skill, index, tabId }) => {
    const isAnimated = animatedSkills.has(`${tabId}-${index}`);

    return (
      <div className="group bg-dark-900/40 p-6 rounded-lg border border-slate-800 hover:border-matrix/20 transition-all duration-500 overflow-hidden relative">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-12 h-12 bg-dark-850 border border-slate-700 rounded flex items-center justify-center text-3xl group-hover:border-matrix/30 group-hover:text-shadow-glow transition-all duration-500 shrink-0">
            {skill.icon}
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-end mb-1">
              <div className="space-y-0.5">
                <h3 className="text-sm font-mono font-black text-white group-hover:text-matrix transition-colors uppercase tracking-tight">
                  {skill.name}
                </h3>
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                  Status: Operational
                </div>
              </div>
              <span className="text-[10px] font-mono font-black text-matrix bg-matrix/5 px-2 py-0.5 border border-matrix/10 rounded-sm">
                LVL_{skill.level}%
              </span>
            </div>

            <div className="relative h-1.5 w-full bg-dark-850 rounded-full overflow-hidden border border-slate-800/50">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-matrix/40 to-matrix shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-1000 ease-out"
                style={{ width: isAnimated ? `${skill.level}%` : '0%' }}
              />
              {/* Scanline effect on the bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-20 animate-scanline pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyber-blue/10 border border-cyber-blue/20 rounded text-cyber-blue">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-black text-cyber-blue uppercase tracking-[0.3em]">System_Optimization</span>
          </div>
          <h2 className="section-title text-white uppercase tracking-tighter">
            Core <span className="text-matrix">Stack</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-mono text-sm uppercase tracking-widest mt-2">
            Technical bandwidth & dependency mapping
          </p>
        </div>

        <div className="flex flex-col">
          {/* Cyber Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 p-1 bg-dark-900 border border-slate-800 rounded-lg w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded text-[11px] font-mono font-black uppercase tracking-widest transition-all duration-300 ${isActive
                    ? 'bg-dark-850 text-matrix shadow-[inset_0_0_10px_rgba(0,255,65,0.05)] border border-matrix/20'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-dark-850'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-matrix animate-pulse' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {skills[activeTab].map((skill, index) => (
              <SkillCard
                key={`${activeTab}-${skill.name}`}
                skill={skill}
                index={index}
                tabId={activeTab}
              />
            ))}
          </div>
        </div>

        {/* Global System Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Uptime', value: '99.98%', icon: Activity, color: 'text-matrix' },
            { label: 'Latency', value: '14ms', icon: ShieldCheck, color: 'text-cyber-blue' },
            { label: 'Requests', value: '2.4M', icon: Server, color: 'text-cyber-gold' },
            { label: 'Deployments', value: '150+', icon: Cloud, color: 'text-purple-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-dark-900/40 p-6 border border-slate-800 rounded-lg flex flex-col items-center text-center group hover:border-slate-700 transition-colors">
              <stat.icon className={`w-6 h-6 ${stat.color} mb-4 opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="text-2xl font-display font-black text-white mb-1 uppercase tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;