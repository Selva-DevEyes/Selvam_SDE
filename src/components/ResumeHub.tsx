'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { FileText, Download, Printer, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

interface ResumeHubProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ResumeHub: React.FC<ResumeHubProps> = ({ currentRole }) => {
  const [activeResumeTab, setActiveResumeTab] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight title-line">
          Role <span className="text-[#78cc6d]">Resumes</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Targeted resume views tailored for Python Backend / AI roles or Enterprise WordPress / Full-Stack positions.
        </p>
      </div>

      {/* Role Selection Tabs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <button
          onClick={() => setActiveResumeTab('python-ai')}
          className={`p-5 rounded-2xl border text-left transition-all ${
            activeResumeTab === 'python-ai'
              ? 'bg-[#78cc6d]/10 border-[#78cc6d] shadow-lg shadow-[#78cc6d]/10'
              : 'bg-[#12171b] border-[#282c30] hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#78cc6d] uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Target Role 1
            </span>
            {activeResumeTab === 'python-ai' && (
              <span className="w-2 h-2 rounded-full bg-[#78cc6d]" />
            )}
          </div>
          <h3 className="text-base font-bold text-white">
            Python Developer | Backend & Gen AI
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            FastAPI, Pydantic, SQLAlchemy, PostgreSQL, SQLite, Masai & IIT Patna SDE Program.
          </p>
        </button>

        <button
          onClick={() => setActiveResumeTab('wordpress-fullstack')}
          className={`p-5 rounded-2xl border text-left transition-all ${
            activeResumeTab === 'wordpress-fullstack'
              ? 'bg-[#38bdf8]/10 border-[#38bdf8] shadow-lg shadow-[#38bdf8]/10'
              : 'bg-[#12171b] border-[#282c30] hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" /> Target Role 2
            </span>
            {activeResumeTab === 'wordpress-fullstack' && (
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            )}
          </div>
          <h3 className="text-base font-bold text-white">
            WordPress Developer [6 Years] | Full-Stack
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            410+ GoDaddy Sites, PageSpeed 70→95+, WooCommerce, ACF, Custom Themes.
          </p>
        </button>
      </div>

      {/* Selected Resume View Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#12171b] border border-[#282c30] space-y-6 shadow-2xl">
        
        {/* Header Block */}
        <div className="border-b border-[#282c30] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-white">SELVAM S</h3>
            <div className="text-xs font-mono font-bold text-[#78cc6d] mt-1">
              {activeResumeTab === 'python-ai'
                ? 'PYTHON DEVELOPER | BACKEND & FULL-STACK | GEN AI'
                : 'WORDPRESS DEVELOPER [6 YEARS] | FULL-STACK | GEN AI'}
            </div>
            <div className="text-xs text-slate-400 mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <span>📧 selvamsde33@gmail.com</span>
              <span>📞 +91 8248552197, +91 9489228575</span>
              <span>📍 Tirunelveli, Tamil Nadu</span>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-[#161b20] border border-[#282c30] text-xs font-mono text-slate-300 hover:text-white hover:border-[#78cc6d]/40 transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-[#78cc6d]" />
            <span>PRINT / SAVE PDF</span>
          </button>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Professional Summary
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#161b20] p-4 rounded-xl border border-[#282c30]">
            {activeResumeTab === 'python-ai'
              ? "Backend-focused developer with 6+ years of software and web engineering experience, now specializing in Python, FastAPI, Pydantic, and SQLAlchemy for REST API and database-driven application development. Currently completing an intensive Software Development Engineering with Applied AI program (Masai & IIT Patna), building full-stack Python projects covering REST API design, database architecture, and LLM-based application development. Brings a strong backend foundation from 6 years engineering 410+ production websites for GoDaddy's international client portfolio using PHP and MySQL. IBM-certified Full Stack JavaScript Developer."
              : "WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion."}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Key Achievements
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-[#161b20] border border-[#282c30] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#78cc6d] shrink-0 mt-0.5" />
              <span><strong>428+</strong> WordPress & backend integration projects shipped.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161b20] border border-[#282c30] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#78cc6d] shrink-0 mt-0.5" />
              <span><strong>70 → 95+</strong> Google PageSpeed score improvement.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161b20] border border-[#282c30] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#78cc6d] shrink-0 mt-0.5" />
              <span><strong>8–10</strong> pixel-perfect pages shipped daily at vSplash.</span>
            </div>
            <div className="p-3 rounded-xl bg-[#161b20] border border-[#282c30] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#78cc6d] shrink-0 mt-0.5" />
              <span>Full-stack <strong>Python/FastAPI</strong> apps with Gen AI integration.</span>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="space-y-3 pt-4 border-t border-[#282c30]">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Education & Certifications
          </h4>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#161b20] border border-[#282c30]">
              <div>
                <div className="font-bold text-white">Software Development Engineering with Applied AI</div>
                <div className="text-slate-400">Masai & IIT Patna (Feb 2026 – Ongoing)</div>
              </div>
              <span className="text-[10px] font-mono text-[#78cc6d] bg-[#78cc6d]/10 px-2 py-0.5 rounded border border-[#78cc6d]/20">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#161b20] border border-[#282c30]">
              <div>
                <div className="font-bold text-white">Full Stack JavaScript Developer Certification</div>
                <div className="text-slate-400">IBM (Oct 2025 – Nov 2025)</div>
              </div>
              <span className="text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded border border-[#38bdf8]/20">Verified</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#161b20] border border-[#282c30]">
              <div>
                <div className="font-bold text-white">B.E. Electrical and Electronics Engineering</div>
                <div className="text-slate-400">PSN Institute of Technology & Science (2010 – 2014)</div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Graduated</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
