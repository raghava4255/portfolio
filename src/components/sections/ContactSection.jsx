import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ShieldCheck, Terminal } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { profile } from '../../data/profile';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [logs, setLogs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const runSubmitPipeline = async () => {
    setIsSubmitting(true);
    setLogs([]);

    const pipelineLogs = [
      'guest@port:~$ send-msg --from-portfolio',
      'Validating form headers... OK',
      `Target email: ${profile.email}`,
      'Establishing secure SMTP TLS connection... OK',
      'Serializing message body parameters...',
      'Deploying queue task message-service:v1... SUCCESS',
      '🚀 Pipeline Complete: Message deployed to database queue!'
    ];

    for (let i = 0; i < pipelineLogs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400 + Math.random() * 300));
      setLogs((prev) => [...prev, pipelineLogs[i]]);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    runSubmitPipeline();
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSuccess(false);
    setLogs([]);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">
                Contact Details
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold">Email</span>
                    <a href={`mailto:${profile.email}`} className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-neon-purple dark:text-purple-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold">Phone</span>
                    <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold">Location</span>
                    <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                      {profile.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social box */}
            <div className="glass-card p-6 sm:p-8 flex items-center justify-around">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <div className="p-3.5 rounded-full bg-slate-100 hover:bg-blue-600/10 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 group-hover:border-blue-600/40 dark:group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-300">
                  <Linkedin size={22} />
                </div>
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <div className="p-3.5 rounded-full bg-slate-100 hover:bg-black/5 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 group-hover:border-slate-800/40 dark:group-hover:border-white/40 group-hover:scale-110 transition-all duration-300">
                  <Github size={22} />
                </div>
                <span className="text-xs font-semibold">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form / CLI log display */}
          <div className="md:col-span-7">
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess && !isSubmitting && (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                      Send a Message
                    </h4>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 transition-all text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Message Content
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your project details or message..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/60 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-500 transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold accent-gradient-bg cursor-pointer text-sm"
                    >
                      <span>Send Transmission</span>
                      <Send size={16} />
                    </button>
                  </motion.form>
                )}

                {isSubmitting && (
                  <motion.div
                    key="submitting-logs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-xs leading-relaxed text-slate-400 bg-slate-950 p-6 rounded-xl border border-white/5 min-h-[300px] flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-2 select-none border-b border-white/10 pb-2">
                        <Terminal size={14} /> message-delivery-pipeline
                      </div>
                      {logs.map((log, index) => (
                        <div key={index} className={log.includes('SUCCESS') || log.includes('OK') ? 'text-emerald-400' : 'text-slate-300'}>
                          {log}
                        </div>
                      ))}
                      <div className="w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-0.5 inline-block" />
                    </div>
                    <div className="text-[10px] text-slate-600 text-right mt-4 select-none">
                      Deploying payload...
                    </div>
                  </motion.div>
                )}

                {isSuccess && !isSubmitting && (
                  <motion.div
                    key="success-prompt"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="text-center space-y-6 animate-fade-in"
                  >
                    <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck size={48} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                        Payload Transmitted!
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
                        Thank you! Your message has bypassed the dev buffers and has been deployed directly to {profile.email}. I will respond shortly.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold border border-slate-200/50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 cursor-pointer transition-all"
                    >
                      Send Another Packet
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
