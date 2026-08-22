'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Download, Mail, Phone, MapPin, Send, Check, Terminal, Code2, Sparkles } from 'lucide-react';

interface ProfileSidebarProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
  onNavigate: (tabId: string) => void;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  currentRole,
  onRoleToggle,
  onNavigate,
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
    <div className="w-full lg:w-[340px] shrink-0 bg-[#161b20] border border-[#262b30] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
      
      {/* Top Profile Header */}
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Profile Image Frame with Glow */}
        <div className="relative group">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-[#78cc6d] to-[#38bdf8] p-[3px] shadow-xl transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#12171b] rounded-[13px] flex flex-col items-center justify-center p-3 text-center overflow-hidden relative">
              <Terminal className="w-12 h-12 text-[#78cc6d] mb-2 animate-bounce" />
              <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                SELVAM S
              </span>
              <span className="text-[10px] text-[#78cc6d] font-mono mt-0.5">
                Full-Stack / AI
              </span>
            </div>
          </div>
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#78cc6d] border-2 border-[#161b20] shadow-md shadow-[#78cc6d]/50" />
        </div>

        {/* Name & Subtitle */}
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            SELVAM <span className="text-[#78cc6d]">S.</span>
          </h1>
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-mono text-[#78cc6d] typing-cursor transition-all">
              {titles[titleIdx]}
            </p>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-[#78cc6d] hover:border-[#78cc6d]/40 transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-[#78cc6d] hover:border-[#78cc6d]/40 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2.5 rounded-xl bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-[#78cc6d] hover:border-[#78cc6d]/40 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* RyanCV Personal Info List */}
      <div className="my-6 py-6 border-y border-[#262b30] space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono">EXPERIENCE:</span>
          <span className="font-semibold text-white">6+ Years</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono">FREELANCE:</span>
          <span className="font-semibold text-[#78cc6d] bg-[#78cc6d]/10 px-2 py-0.5 rounded border border-[#78cc6d]/20">
            Available
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono">RESIDENCE:</span>
          <span className="font-semibold text-white">India</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono">LOCATION:</span>
          <span className="font-semibold text-slate-200">Tirunelveli, TN</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-mono">WP DEPLOYMENTS:</span>
          <span className="font-semibold text-[#38bdf8]">410+ Sites</span>
        </div>
      </div>

      {/* Role Focus Switcher Toggle */}
      <div className="p-2 rounded-2xl bg-[#12171b] border border-[#282c30] mb-6 space-y-1.5">
        <div className="text-[10px] font-mono text-slate-400 text-center uppercase tracking-widest">
          Active Role Perspective
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
          <button
            onClick={() => onRoleToggle('python-ai')}
            className={`py-2 px-2 rounded-xl font-bold transition-all ${
              currentRole === 'python-ai'
                ? 'bg-[#78cc6d] text-slate-950 shadow-md shadow-[#78cc6d]/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Python AI
          </button>
          <button
            onClick={() => onRoleToggle('wordpress-fullstack')}
            className={`py-2 px-2 rounded-xl font-bold transition-all ${
              currentRole === 'wordpress-fullstack'
                ? 'bg-[#38bdf8] text-slate-950 shadow-md shadow-[#38bdf8]/30'
                : 'text-slate-400 hover:text-white'
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
          className="w-full py-3.5 rounded-xl bg-[#78cc6d] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#78cc6d]/20"
        >
          <Download className="w-4 h-4" />
          <span>Download Resumes</span>
        </button>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full py-3 rounded-xl bg-[#12171b] border border-[#282c30] text-slate-200 font-semibold text-xs hover:border-[#78cc6d]/40 hover:text-[#78cc6d] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4 text-[#78cc6d]" />
          <span>Contact Me</span>
        </button>
      </div>

    </div>
  );
};
