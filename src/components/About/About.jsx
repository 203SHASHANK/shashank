import { GraduationCap, Calendar, Trophy, Star, BookOpen } from 'lucide-react';
import { personalInfo, education, achievements } from '../../data/portfolioData';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '1+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Code Commits', value: '1k+' }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-800/20 dark:to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image & Stats */}
          <div className="relative">
            <div className="relative z-10 space-y-6">
              {/* Main Description Card */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-4xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h3>
                    <p className="text-primary-600 dark:text-primary-400">Based in {personalInfo.location}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  I'm a passionate Computer Science graduate from {education.university} with a strong foundation in modern web technologies.
                  My journey began with a curiosity for how things work on the web, which has evolved into a dedicated career in building scalable,
                  user-centric applications.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-500/10 to-accent-500/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">Me</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I specialize in building full-stack applications with React, Node.js, and Java.
                My experience ranges from developing secure authentication systems to creating interactive frontend interfaces.
                I'm constantly exploring new technologies like AI and Machine Learning to push the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="space-y-6">
              {/* Education Card */}
              <div className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{education.degree}</h4>
                  <div className="text-slate-600 dark:text-slate-400 mb-1">{education.university}</div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {education.duration}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" /> CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Achievement Card */}
              <div className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Key Achievements</h4>
                  <div className="space-y-3 mt-2">
                    {achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests Card */}
              <div className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Interests</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Apart from coding, I'm passionate about exploring new places, solving DSA problems, and keeping up with the latest tech trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;