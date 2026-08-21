'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <div className="text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.handle}. All rights reserved.
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#resumes" className="hover:text-emerald-400 transition-colors">Resumes</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all flex items-center gap-2 text-xs font-mono"
        >
          <span>TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
