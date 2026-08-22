'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Printer, CheckCircle2, Sparkles, Code2 } from 'lucide-react';

interface ResumeHubProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ResumeHub: React.FC<ResumeHubProps> = ({ currentRole }) => {
  const [activeResumeTab, setActiveResumeTab] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Role <span className="text-[var(--accent-green)]">Resumes</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Targeted resume views tailored for Python Backend / AI roles or Enterprise WordPress / Full-Stack positions.
        </p>
      </div>

      {/* Role Selection Tabs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <button
          onClick={() => setActiveResumeTab('python-ai')}
          className={`p-5 rounded-2xl border text-left transition-all ${
            activeResumeTab === 'python-ai'
              ? 'bg-[var(--accent-green-bg)] border-[var(--accent-green)] shadow-md'
              : 'bg-[var(--bg-body)] border-[var(--border-color)] hover:border-slate-400'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[var(--accent-green)] uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Target Role 1
            </span>
            {activeResumeTab === 'python-ai' && (
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)]" />
            )}
          </div>
          <h3 className="text-base font-bold text-[var(--text-main)]">
            Python Developer | Backend & Gen AI
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            FastAPI, Pydantic, SQLAlchemy, PostgreSQL, SQLite, Masai & IIT Patna SDE Program.
          </p>
        </button>

        <button
          onClick={() => setActiveResumeTab('wordpress-fullstack')}
          className={`p-5 rounded-2xl border text-left transition-all ${
            activeResumeTab === 'wordpress-fullstack'
              ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)] shadow-md'
              : 'bg-[var(--bg-body)] border-[var(--border-color)] hover:border-slate-400'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-widest flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" /> Target Role 2
            </span>
            {activeResumeTab === 'wordpress-fullstack' && (
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
            )}
          </div>
          <h3 className="text-base font-bold text-[var(--text-main)]">
            WordPress Developer [6 Years] | Full-Stack
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            410+ GoDaddy Sites, PageSpeed 70→95+, WooCommerce, ACF, Custom Themes.
          </p>
        </button>
      </div>

      {/* Selected Resume View Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-6 shadow-2xl transition-colors duration-300">
        
        {/* Header Block */}
        <div className="border-b border-[var(--border-color)] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--text-main)]">SELVAM S</h3>
            <div className="text-xs font-mono font-bold text-[var(--accent-green)] mt-1">
              {activeResumeTab === 'python-ai'
                ? 'PYTHON DEVELOPER | BACKEND & FULL-STACK | GEN AI'
                : 'WORDPRESS DEVELOPER [6 YEARS] | FULL-STACK | GEN AI'}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <span>📧 selvamsde33@gmail.com</span>
              <span>📞 +91 8248552197, +91 9489228575</span>
              <span>📍 Tirunelveli, Tamil Nadu</span>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-main)] hover:border-[var(--accent-green)]/40 transition-all flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-[var(--accent-green)]" />
            <span>PRINT / SAVE PDF</span>
          </button>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Professional Summary
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-color)]">
            {activeResumeTab === 'python-ai'
              ? "Backend-focused developer with 6+ years of software and web engineering experience, now specializing in Python, FastAPI, Pydantic, and SQLAlchemy for REST API and database-driven application development. Currently completing an intensive Software Development Engineering with Applied AI program (Masai & IIT Patna), building full-stack Python projects covering REST API design, database architecture, and LLM-based application development. Brings a strong backend foundation from 6 years engineering 410+ production websites for GoDaddy's international client portfolio using PHP and MySQL. IBM-certified Full Stack JavaScript Developer."
              : "WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion."}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Key Achievements
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>428+</strong> WordPress & backend integration projects shipped.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>70 → 95+</strong> Google PageSpeed score improvement.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>8–10</strong> pixel-perfect pages shipped daily at vSplash.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span>Full-stack <strong>Python/FastAPI</strong> apps with Gen AI integration.</span>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Education & Certifications
          </h4>
          <div className="space-y-2 text-xs text-[var(--text-muted)]">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div>
                <div className="font-bold text-[var(--text-main)]">Software Development Engineering with Applied AI</div>
                <div className="text-[var(--text-muted)]">Masai & IIT Patna (Feb 2026 – Ongoing)</div>
              </div>
              <span className="text-[10px] font-mono text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2 py-0.5 rounded border border-[var(--accent-green)]/20">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div>
                <div className="font-bold text-[var(--text-main)]">Full Stack JavaScript Developer Certification</div>
                <div className="text-[var(--text-muted)]">IBM (Oct 2025 – Nov 2025)</div>
              </div>
              <span className="text-[10px] font-mono text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-2 py-0.5 rounded border border-[var(--accent-cyan)]/20">Verified</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div>
                <div className="font-bold text-[var(--text-main)]">B.E. Electrical and Electronics Engineering</div>
                <div className="text-[var(--text-muted)]">PSN Institute of Technology & Science (2010 – 2014)</div>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">Graduated</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
