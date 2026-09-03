'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';

interface ContactSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate mailto / contact submission
    setTimeout(() => {
      setStatus('success');
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <div className="space-y-10 sm:space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Get In <span className="text-[var(--accent-green)]">Touch</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Have a project in mind, contract inquiry, or full-time opportunity? Let&apos;s connect!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: Contact Cards & Quick Direct Copy */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Direct Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-3 shadow-lg">
            <label className="text-xs font-mono font-bold text-[var(--accent-green)] uppercase tracking-wider block mb-2.5">
              DIRECT EMAIL
            </label>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] gap-2">
              <span className="text-xs font-mono font-bold text-[var(--text-main)] truncate">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[var(--bg-body)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all border border-[var(--border-color)] shrink-0"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone & Location List */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-5 shadow-lg">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[var(--accent-green-bg)] text-[var(--accent-green)] border border-[var(--accent-green)]/30 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-[var(--text-muted)] block mb-1.5">
                  Phone / WhatsApp
                </label>
                <div className="text-xs font-bold text-[var(--text-main)] space-y-1">
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phonePrimary.replace(/\s+/g, '')}`}
                    className="block hover:text-[var(--accent-green)] transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.phonePrimary}
                  </a>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phoneSecondary.replace(/\s+/g, '')}`}
                    className="block hover:text-[var(--accent-green)] transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--border-color)] pt-4 flex items-start gap-3.5">
              <div className="p-3 rounded-xl bg-[var(--accent-cyan-bg)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-[var(--text-muted)] block mb-1.5">
                  Location
                </label>
                <div className="text-xs font-bold text-[var(--text-main)]">
                  {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-3.5 shadow-lg">
            <label className="text-xs font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2.5">
              SOCIAL CHANNELS
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <GithubIcon className="w-4 h-4 text-[var(--accent-green)]" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <LinkedinIcon className="w-4 h-4 text-[var(--accent-green)]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-6 shadow-2xl">
          
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-[var(--text-main)]">
              How Can I Help You?
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              Send a direct message and I will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[var(--text-main)] block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-green)] transition-all shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[var(--text-main)] block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-green)] transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[var(--text-main)] block mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Project Inquiry / Role Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-green)] transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-[var(--text-main)] block mb-2">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="Hi Selvam, I'd like to talk about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-green)] transition-all shadow-inner resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-[var(--accent-green)] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20"
            >
              {status === 'sending' ? (
                <span>SENDING MESSAGE...</span>
              ) : status === 'success' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>MESSAGE READY (MAIL APP OPENED)</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};
