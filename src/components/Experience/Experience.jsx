import React from 'react';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { experience, certifications } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional path and the certifications I've earned along the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
            </div>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative pl-24 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[30px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 z-10 group-hover:scale-125 transition-transform duration-300" />

                  {/* Content Card */}
                  <div className="glass-card relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="absolute -left-3 top-6 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 border-l border-b border-slate-200 dark:border-slate-700/50" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.position}</h4>
                        <div className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h5 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Key Responsibilities</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full border border-primary-100 dark:border-primary-800/50">
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
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-xl text-accent-600 dark:text-accent-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications & Awards</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-accent-500/30 dark:hover:border-accent-500/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {cert.title.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                            {cert.title}
                          </h4>
                          <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            {cert.issuer}
                          </div>
                        </div>
                        <span className="text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                          {cert.date}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-accent-500" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;