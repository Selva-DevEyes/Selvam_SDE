'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something <span className="gradient-text-emerald">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Available for full-stack engineering roles, Python backend development, and high-impact web contracts.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Copy Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Direct Email
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#050811] border border-slate-800">
                <span className="text-sm font-mono text-slate-200 select-all">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  ✓ Copied email to clipboard!
                </span>
              )}
            </div>

            {/* Phone & Location Info */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone & WhatsApp</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PORTFOLIO_DATA.personal.phonePrimary} / {PORTFOLIO_DATA.personal.phoneSecondary}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-emerald-500/40 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Send Me a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Selvam, I'd like to discuss a project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Email Message</span>
              </button>

              {sent && (
                <p className="text-xs font-mono text-emerald-400 text-center">
                  ✓ Opening email client to send message!
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
