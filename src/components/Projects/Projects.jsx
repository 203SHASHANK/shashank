import React, { useState } from 'react';
import { Github, ExternalLink, Code2, ArrowUpRight, Folder, Terminal, Box } from 'lucide-react';
import { projects, personalInfo } from '../../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-dark-900 border border-slate-800 rounded-lg overflow-hidden transition-all duration-500 hover:border-matrix/40 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] hover-lift h-full flex flex-col">
      {/* Module ID Tag */}
      <div className="absolute top-0 right-0 p-4 z-20">
        <div className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest bg-dark-950 px-2 py-1 border border-slate-800 rounded">
          MOD_{project.id.toString().padStart(3, '0')}
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col relative">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

        <div className="flex justify-between items-start mb-8 relative z-10">
          <div className="w-14 h-14 bg-dark-850 border border-slate-700 rounded flex items-center justify-center text-3xl shadow-inner group-hover:border-matrix/30 group-hover:text-shadow-glow group-hover:scale-110 transition-all duration-500">
            {project.image}
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-matrix hover:bg-matrix/5 border border-transparent hover:border-matrix/20 rounded transition-all"
              aria-label="View Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-cyber-blue hover:bg-cyber-blue/5 border border-transparent hover:border-cyber-blue/20 rounded transition-all"
                aria-label="View Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-4 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-matrix rounded-full animate-breathing-glow" />
            <div className="text-[10px] font-mono font-black tracking-widest text-matrix/60 uppercase">
              {project.category}
            </div>
          </div>
          <h3 className="text-xl font-display font-black text-white group-hover:text-matrix transition-colors uppercase tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-sans line-clamp-3 group-hover:text-slate-400 transition-colors relative z-10">
          {project.description}
        </p>

        <div className="mt-auto space-y-6 relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-dark-850 border border-slate-800 text-slate-500 text-[9px] font-mono font-bold rounded-sm uppercase tracking-tighter group-hover:border-matrix/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600">
              <Terminal className="w-3 h-3" />
              <span>STABLE_RELD_{project.year}</span>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-mono font-black text-white hover:text-matrix uppercase tracking-widest group/btn transition-all">
              Inspect
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-matrix/10 border border-matrix/20 rounded text-matrix">
              <Box className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-black text-matrix uppercase tracking-[0.3em]">Module_Repository</span>
          </div>
          <h2 className="section-title text-white uppercase tracking-tighter">
            Architectural <span className="text-matrix">Deployments</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-mono text-sm uppercase tracking-widest mt-2">
            Selected backend systems & technical prototypes
          </p>
        </div>

        {/* Cyber Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-slate-800 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 font-mono text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${selectedCategory === category
                ? 'text-matrix'
                : 'text-slate-600 hover:text-slate-400'
                }`}
            >
              {category}
              {selectedCategory === category && (
                <div className="absolute -bottom-8 left-0 w-full h-0.5 bg-matrix shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up flex" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-matrix/20 flex items-center justify-center animate-spin-slow">
              <Folder className="w-6 h-6 text-matrix opacity-40" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Public Access Verification</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase mt-1">Full source code available on centralized repository</div>
            </div>
          </div>
          <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn-primary group">
            Open Global_Repo (GitHub)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;