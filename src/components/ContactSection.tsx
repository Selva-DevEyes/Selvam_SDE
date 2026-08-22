'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentRole }) => {
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
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight title-line">
          Get in <span className="text-[#78cc6d]">Touch</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Feel free to reach out for full-stack engineering roles, Python backend development, or enterprise web projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Contact Info Details Column */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Copy Card */}
          <div className="p-5 rounded-2xl bg-[#12171b] border border-[#282c30] space-y-3">
            <span className="text-[10px] font-mono text-[#78cc6d] uppercase tracking-widest">
              Direct Email
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#161b20] border border-[#282c30]">
              <span className="text-xs font-mono text-white select-all">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-[#12171b] text-slate-400 hover:text-[#78cc6d] transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#78cc6d]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedEmail && (
              <span className="text-[11px] text-[#78cc6d] font-mono block">
                ✓ Email copied to clipboard!
              </span>
            )}
          </div>

          {/* Phone & Location */}
          <div className="p-5 rounded-2xl bg-[#12171b] border border-[#282c30] space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#78cc6d]/10 text-[#78cc6d] border border-[#78cc6d]/20">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Phone / WhatsApp</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {PORTFOLIO_DATA.personal.phonePrimary} / {PORTFOLIO_DATA.personal.phoneSecondary}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#282c30]">
              <div className="p-2.5 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400">Location</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl bg-[#12171b] border border-[#282c30] space-y-3">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Social Channels
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-xs font-mono text-slate-300 hover:text-[#78cc6d] hover:border-[#78cc6d]/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-xs font-mono text-slate-300 hover:text-[#78cc6d] hover:border-[#78cc6d]/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-3xl bg-[#12171b] border border-[#282c30] space-y-4"
          >
            <h3 className="text-lg font-bold text-white">How Can I Help You?</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-300">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#78cc6d] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-300">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#78cc6d] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-300">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Role Opportunity"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#78cc6d] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-300">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Selvam, I'd like to talk about..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#78cc6d] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#78cc6d] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#78cc6d]/20"
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </button>

            {sent && (
              <p className="text-xs font-mono text-[#78cc6d] text-center">
                ✓ Opening default email application!
              </p>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};
