import React from 'react';
import { Heart, Github, Linkedin, Code, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologies = ['Java', 'React', 'Python', 'Spring Boot', 'Android', 'Unity', 'Firebase'];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: personalInfo.socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, url: personalInfo.socialLinks.linkedin },
    { name: 'LeetCode', icon: Code, url: personalInfo.socialLinks.leetcode },
    { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              with modern technologies. Always learning, always building.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. Built with React & Tailwind CSS.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> in {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;