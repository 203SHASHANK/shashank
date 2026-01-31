import React, { useState, useEffect, useRef } from 'react';
import { Code2, Wrench, Database, Cpu } from 'lucide-react';
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
    { id: 'languages', label: 'Languages', icon: Code2, color: 'text-blue-500' },
    { id: 'frameworks', label: 'Frameworks', icon: Cpu, color: 'text-purple-500' },
    { id: 'tools', label: 'Tools', icon: Database, color: 'text-green-500' }
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
      <div className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 shadow-sm hover:shadow-lg transition-all duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-end mb-1">
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {skill.name}
              </h3>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: isAnimated ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
            <Wrench className="w-4 h-4" />
            <span>Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">Proficiency</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to build digital solutions.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
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

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {skills.languages.length + skills.frameworks.length + skills.tools.length}+
            </div>
            <div className="text-slate-500 dark:text-slate-400 font-medium">Technologies Mastered</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">4+</div>
            <div className="text-slate-500 dark:text-slate-400 font-medium">Years of Experience</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-slate-500 dark:text-slate-400 font-medium">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;