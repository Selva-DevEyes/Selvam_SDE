'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Phone, MapPin, Copy, Check, Send } from 'lucide-react';

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
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Get in <span className="text-[var(--accent-green)]">Touch</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Feel free to reach out for full-stack engineering roles, Python backend development, or enterprise web projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Contact Info Details Column */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Copy Card */}
          <div className="p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-3">
            <span className="text-[10px] font-mono text-[var(--accent-green)] uppercase tracking-widest">
              Direct Email
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-xs font-mono text-[var(--text-main)] select-all">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-[var(--bg-body)] text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[var(--accent-green)]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedEmail && (
              <span className="text-[11px] text-[var(--accent-green)] font-mono block">
                ✓ Email copied to clipboard!
              </span>
            )}
          </div>

          {/* Phone & Location */}
          <div className="p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent-green-bg)] text-[var(--accent-green)] border border-[var(--accent-green)]/20">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">Phone / WhatsApp</div>
                <div className="text-xs font-semibold text-[var(--text-main)] mt-0.5">
                  {PORTFOLIO_DATA.personal.phonePrimary} / {PORTFOLIO_DATA.personal.phoneSecondary}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-color)]">
              <div className="p-2.5 rounded-xl bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">Location</div>
                <div className="text-xs font-semibold text-[var(--text-main)] mt-0.5">
                  {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-3">
            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
              Social Channels
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-main)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-main)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all"
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
            className="p-6 rounded-3xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-4"
          >
            <h3 className="text-lg font-bold text-[var(--text-main)]">How Can I Help You?</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-main)]">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-[var(--text-main)]">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[var(--text-main)]">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Role Opportunity"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--accent-green)] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[var(--text-main)]">Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Selvam, I'd like to talk about..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[#282c30] text-[var(--text-main)] placeholder-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--accent-green)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[var(--accent-green)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20"
            >
              <Send className="w-4 h-4" />
              <span>SEND MESSAGE</span>
            </button>

            {sent && (
              <p className="text-xs font-mono text-[var(--accent-green)] text-center">
                ✓ Opening default email application!
              </p>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};
