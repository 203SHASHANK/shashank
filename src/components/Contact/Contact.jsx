import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Code, CheckCircle2, AlertCircle, Copy, Phone, Terminal, Network, ShieldAlert } from 'lucide-react';
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

  // Initialize EmailJS
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
      label: 'Channel: SMTP',
      value: personalInfo.email,
      action: 'mailto:' + personalInfo.email,
      color: 'text-cyber-blue'
    },
    {
      icon: Phone,
      label: 'Channel: VOIP',
      value: personalInfo.phone,
      action: 'tel:' + personalInfo.phone,
      color: 'text-matrix'
    },
    {
      icon: MapPin,
      label: 'Node: Physical',
      value: personalInfo.location,
      action: null,
      color: 'text-cyber-gold'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-matrix/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-matrix/10 border border-matrix/20 rounded text-matrix shadow-[0_0_15px_rgba(0,255,65,0.1)]">
              <Network className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-black text-matrix uppercase tracking-[0.3em]">Comm_Link_Protocol</span>
          </div>
          <h2 className="section-title text-white uppercase tracking-tighter">
            System <span className="text-matrix">Handshake</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl font-mono text-sm uppercase tracking-widest mt-2">
            Establish secure connection to backend core
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Connection Info & Social Nodes */}
          <div className="space-y-8">
            <div className="glass-card relative border-matrix/10 p-8 overflow-hidden">
              {/* Background Grid Accent */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

              <h3 className="text-lg font-mono font-black text-white uppercase tracking-widest mb-8 border-b border-slate-800 pb-4">
                Global_Endpoints
              </h3>

              <div className="space-y-8 relative z-10">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className={`p-4 bg-dark-900 border border-slate-800 rounded flex items-center justify-center ${method.color} shadow-sm group-hover:border-matrix/30 transition-all duration-500`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest mb-1.5">
                          {method.label}
                        </p>
                        <div className="flex items-center gap-3">
                          {method.action ? (
                            <a
                              href={method.action}
                              className="text-sm font-mono font-black text-white hover:text-matrix transition-colors truncate uppercase"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <span className="text-sm font-mono font-black text-slate-300 truncate uppercase">
                              {method.value}
                            </span>
                          )}

                          {(method.label.includes('SMTP') || method.label.includes('VOIP')) && (
                            <button
                              onClick={() => handleCopy(method.value, method.label)}
                              className="p-1.5 text-slate-700 hover:text-matrix transition-all"
                              title="Sync to local cache"
                            >
                              {copiedField === method.label ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Security Notice */}
            <div className="p-6 bg-dark-900/50 border border-slate-800 rounded flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full border border-yellow-500/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-black text-yellow-500/80 uppercase tracking-widest mb-1">Incoming_Data_Policy</h4>
                <p className="text-[11px] font-mono text-slate-500 uppercase leading-relaxed">
                  All transmissions are processed via secure SMTP relays.
                  End-to-end encryption active for non-public channels.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Interface */}
          <div className="relative group/form">
            <div className="absolute inset-0 bg-matrix/20 rounded-lg blur-2xl opacity-0 group-hover/form:opacity-20 transition-opacity duration-1000" />

            <div className="relative bg-dark-900/40 border border-slate-800 p-8 rounded-lg overflow-hidden backdrop-blur-sm">
              {/* Terminal Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-dark-850 border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <div className="ml-4 text-[9px] font-mono text-slate-600 uppercase tracking-widest">transmission_interface.sh</div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-mono font-black text-white uppercase tracking-widest mb-6">
                  Data_Packet_Construction
                </h3>

                {submitStatus && (
                  <div className={`mb-8 p-4 rounded border flex items-center gap-4 ${submitStatus === 'success'
                    ? 'bg-matrix/5 text-matrix border-matrix/20'
                    : 'bg-red-500/5 text-red-500 border-red-500/20'
                    }`}>
                    {submitStatus === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="text-[11px] font-mono font-black uppercase tracking-widest">
                      {submitStatus === 'success'
                        ? '>> Transmission successful: Data persistent'
                        : '>> Error: Uplink failed. Retry requested.'}
                    </span>
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest ml-1">Identifier</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 bg-dark-950 border border-slate-800 rounded font-mono text-sm text-white focus:border-matrix/40 outline-none transition-all"
                        placeholder="[SOURCE_NAME]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest ml-1">Origin_Node</label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-dark-950 border border-slate-800 rounded font-mono text-sm text-white focus:border-matrix/40 outline-none transition-all"
                        placeholder="user@remote_host.net"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest ml-1">Project_Flag</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-950 border border-slate-800 rounded font-mono text-sm text-white focus:border-matrix/40 outline-none transition-all"
                      placeholder="INQUIRY_TYPE_RECRUITMENT"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-widest ml-1">Payload_Content</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-950 border border-slate-800 rounded font-mono text-sm text-white focus:border-matrix/40 outline-none transition-all resize-none"
                      placeholder="Enter raw requirements or greetings..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden py-4 border border-matrix/50 bg-matrix/5 hover:bg-matrix/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-matrix/30 border-t-matrix rounded-full animate-spin" />
                          <span className="text-[11px] font-mono font-black text-matrix uppercase tracking-[0.2em]">Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[11px] font-mono font-black text-matrix uppercase tracking-[0.2em]">Execute_Send</span>
                          <Send className="w-4 h-4 text-matrix group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-matrix shadow-[0_0_10px_rgba(0,255,65,0.8)] translate-y-2 group-hover:translate-y-0 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 flex items-center gap-3 text-[9px] font-mono text-slate-700 uppercase tracking-widest">
                  <div className="w-2 h-2 bg-matrix/20 rounded-full" />
                  Awaiting packet submission from local_host...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;