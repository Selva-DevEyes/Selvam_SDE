'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Download, Mail, Phone, MapPin, Send, Check, Terminal, Code2, Sparkles, Sun, Moon } from 'lucide-react';

interface ProfileSidebarProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
  onNavigate: (tabId: string) => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  currentRole,
  onRoleToggle,
  onNavigate,
  theme,
  onThemeToggle,
}) => {
  const titles = [
    "Python Developer & Gen AI Engineer",
    "WordPress Specialist (6+ Yrs)",
    "Full-Stack Web Architect",
    "GoDaddy 410+ Sites Shipped"
  ];
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:w-[340px] shrink-0 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative transition-colors duration-300">
      
      {/* Top Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Profile Image Frame with Glow */}
        <div className="relative group">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-[var(--accent-green)] to-[var(--accent-cyan)] p-[3px] shadow-xl transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[var(--bg-body)] rounded-[13px] flex flex-col items-center justify-center p-3 text-center overflow-hidden relative transition-colors duration-300">
              <Terminal className="w-12 h-12 text-[var(--accent-green)] mb-2 animate-bounce" />
              <span className="text-xs font-mono font-bold text-[var(--text-main)] tracking-widest uppercase">
                SELVAM S
              </span>
              <span className="text-[10px] text-[var(--accent-green)] font-mono mt-0.5 font-semibold">
                Full-Stack / AI
              </span>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[var(--accent-green)] border-2 border-[var(--bg-card)] shadow-md" />
        </div>

        {/* Name & Subtitle */}
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-[var(--text-main)] tracking-tight">
            SELVAM <span className="text-[var(--accent-green)]">S.</span>
          </h1>
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-mono text-[var(--accent-green)] typing-cursor transition-all font-semibold">
              {titles[titleIdx]}
            </p>
          </div>
        </div>

        {/* Social Icons & Theme Toggle Row */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="p-2.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all flex items-center justify-center md:hidden"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
        </div>

      </div>

      {/* RyanCV Personal Info List */}
      <div className="my-6 py-6 border-y border-[var(--border-color)] space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-mono">EXPERIENCE:</span>
          <span className="font-semibold text-[var(--text-main)]">6+ Years</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-mono">FREELANCE:</span>
          <span className="font-semibold text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2 py-0.5 rounded border border-[var(--accent-green)]/20">
            Available
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-mono">RESIDENCE:</span>
          <span className="font-semibold text-[var(--text-main)]">India</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-mono">LOCATION:</span>
          <span className="font-semibold text-[var(--text-main)]">Tirunelveli, TN</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-mono">WP DEPLOYMENTS:</span>
          <span className="font-semibold text-[var(--accent-cyan)]">410+ Sites</span>
        </div>
      </div>

      {/* Role Focus Switcher Toggle */}
      <div className="p-2 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] mb-6 space-y-1.5 transition-colors duration-300">
        <div className="text-[10px] font-mono text-[var(--text-muted)] text-center uppercase tracking-widest">
          Active Role Perspective
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
          <button
            onClick={() => onRoleToggle('python-ai')}
            className={`py-2 px-2 rounded-xl font-bold transition-all ${
              currentRole === 'python-ai'
                ? 'bg-[var(--accent-green)] text-slate-950 shadow-md'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Python AI
          </button>
          <button
            onClick={() => onRoleToggle('wordpress-fullstack')}
            className={`py-2 px-2 rounded-xl font-bold transition-all ${
              currentRole === 'wordpress-fullstack'
                ? 'bg-[var(--accent-cyan)] text-slate-950 shadow-md'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            WordPress
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => onNavigate('resumes')}
          className="w-full py-3.5 rounded-xl bg-[var(--accent-green)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20"
        >
          <Download className="w-4 h-4" />
          <span>Download Resumes</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full py-3 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-main)] font-semibold text-xs hover:border-[var(--accent-green)]/40 hover:text-[var(--accent-green)] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4 text-[var(--accent-green)]" />
          <span>Contact Me</span>
        </button>
      </div>

    </div>
  );
};
