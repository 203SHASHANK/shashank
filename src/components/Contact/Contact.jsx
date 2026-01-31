import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Code, CheckCircle2, AlertCircle, Copy, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  // Initialize EmailJS (Consider moving these to env variables)
  const EMAIL_SERVICE_ID = 'service_53klkeq';
  const EMAIL_TEMPLATE_ID = 'shashank_203';
  const EMAIL_PUBLIC_KEY = '5e_Mdvc7CZLJV-7cg';

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto-reply email (if configured in EmailJS)
      await emailjs.send(
        EMAIL_SERVICE_ID,
        'confirmation_template_id',
        {
          to_email: formData.email,
          to_name: formData.name,
          message: 'Thank you for contacting me! I will get back to you soon.'
        },
        EMAIL_PUBLIC_KEY
      ).catch(() => { }); // Ignore confirmation errors

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      action: 'mailto:' + personalInfo.email,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      action: 'tel:' + personalInfo.phone,
      color: 'text-green-500 bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      action: null,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalInfo.socialLinks.github,
      hoverColor: 'hover:text-slate-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalInfo.socialLinks.linkedin,
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: personalInfo.socialLinks.leetcode,
      hoverColor: 'hover:text-orange-500'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
            <Send className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, and potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Contact Methods & Socials */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`p-3 rounded-xl ${method.color} shrink-0 transition-transform group-hover:scale-110`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                          {method.label}
                        </p>
                        <div className="flex items-center gap-2">
                          {method.action ? (
                            <a
                              href={method.action}
                              className="text-lg font-semibold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-lg font-semibold text-slate-900 dark:text-white truncate">
                              {method.value}
                            </span>
                          )}

                          {(method.label === 'Email' || method.label === 'Phone') && (
                            <button
                              onClick={() => handleCopy(method.value, method.label)}
                              className="p-1.5 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                              title="Copy to clipboard"
                            >
                              {copiedField === method.label ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white shadow-lg overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-white/80 mb-8 max-w-sm">
                  Follow me on social media to stay updated with my latest projects and tech insights.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-all hover:scale-110"
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-3xl shadow-xl transform rotate-1 opacity-50 dark:opacity-20" />
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h3>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}>
                  {submitStatus === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  <span className="font-medium">
                    {submitStatus === 'success'
                      ? 'Message sent successfully!'
                      : 'Failed to send message. Please try again.'}
                  </span>
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;