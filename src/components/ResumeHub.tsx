'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { FileText, Download, Printer, CheckCircle2, Sparkles, Code2, Award } from 'lucide-react';

export const ResumeHub: React.FC = () => {
  const [activeResumeTab, setActiveResumeTab] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  return (
    <section id="resumes" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>05. DUAL-ROLE RESUME HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Role-Tailored <span className="gradient-text-emerald">Resumes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Switch between targeted resumes depending on your team's engineering focus.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setActiveResumeTab('python-ai')}
            className={`flex-1 p-5 rounded-2xl border text-left transition-all duration-300 ${
              activeResumeTab === 'python-ai'
                ? 'bg-emerald-950/20 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                : 'glass-card border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Focus Role 1
              </span>
              {activeResumeTab === 'python-ai' && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-white">
              Python Developer | Backend & Gen AI
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              FastAPI, Pydantic, SQLAlchemy, PostgreSQL, SQLite, Masai & IIT Patna SDE Program.
            </p>
          </button>

          <button
            onClick={() => setActiveResumeTab('wordpress-fullstack')}
            className={`flex-1 p-5 rounded-2xl border text-left transition-all duration-300 ${
              activeResumeTab === 'wordpress-fullstack'
                ? 'bg-cyan-950/20 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                : 'glass-card border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Focus Role 2
              </span>
              {activeResumeTab === 'wordpress-fullstack' && (
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              )}
            </div>
            <h3 className="text-lg font-bold text-white">
              WordPress Developer [6 Years] | Full-Stack
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              410+ GoDaddy Sites, PageSpeed 70→95+, WooCommerce, ACF, Custom Themes, Vue/React.
            </p>
          </button>
        </div>

        {/* Selected Resume Document View */}
        <div className="p-6 sm:p-10 rounded-3xl glass-card border border-slate-800 space-y-8 max-w-4xl mx-auto shadow-2xl">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white">SELVAM S</h3>
              <div className="text-sm font-semibold text-emerald-400 font-mono mt-0.5">
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

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#050811] p-4 rounded-xl border border-slate-800/80">
              {activeResumeTab === 'python-ai'
                ? "Backend-focused developer with 6+ years of software and web engineering experience, now specializing in Python, FastAPI, Pydantic, and SQLAlchemy for REST API and database-driven application development. Currently completing an intensive Software Development Engineering with Applied AI program (Masai & IIT Patna), building full-stack Python projects covering REST API design, database architecture, and LLM-based application development. Brings a strong backend foundation from 6 years engineering 410+ production websites for GoDaddy's international client portfolio, using PHP, MySQL, and custom API integrations. IBM-certified Full Stack JavaScript Developer."
                : "WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion."}
            </p>
          </div>

          {/* Key Achievements Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Key Achievements
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  <strong>428+</strong> WordPress, HTML & backend integration projects delivered for international clients.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  <strong>70 → 95+</strong> Google PageSpeed score improvement via server-side caching & Core Web Vitals optimization.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  <strong>8–10</strong> pixel-perfect backend integrated pages shipped daily at vSplash over 20 months.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  Currently building full-stack <strong>Python/FastAPI</strong> apps with database architecture & Gen AI integration (2026).
                </span>
              </div>
            </div>
          </div>

          {/* Education & Certifications Summary */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Education & Credentials
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div>
                  <div className="font-bold text-white">Software Development Engineering with Applied AI</div>
                  <div className="text-slate-400">Masai & IIT Patna (Feb 2026 – Ongoing)</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div>
                  <div className="font-bold text-white">Full Stack JavaScript Developer Certification</div>
                  <div className="text-slate-400">IBM (Oct 2025 – Nov 2025)</div>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Verified</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div>
                  <div className="font-bold text-white">Bachelor of Engineering — Electrical and Electronics</div>
                  <div className="text-slate-400">PSN Institute of Technology & Science (2010 – 2014)</div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Graduated</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
