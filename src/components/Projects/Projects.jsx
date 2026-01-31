import React, { useState } from 'react';
import { Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl text-4xl shadow-sm border border-slate-100 dark:border-slate-600 group-hover:scale-110 transition-transform duration-500">
            {project.image}
          </div>
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
              aria-label="View Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-full transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase mb-2">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
            <span className="text-sm text-slate-400 font-mono">
              {project.year}
            </span>
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-white group-hover:gap-2 transition-all duration-300">
              Details
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Code2 className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">Works</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover a collection of my technical projects, featuring innovations in Machine Learning, IoT, and Application Development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 group">
            View GitHub Profile
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;