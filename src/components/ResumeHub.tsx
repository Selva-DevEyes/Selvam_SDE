'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Download, CheckCircle2, Sparkles, Code2, ExternalLink } from 'lucide-react';

interface ResumeHubProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ResumeHub: React.FC<ResumeHubProps> = ({ currentRole }) => {
  const [activeResumeTab, setActiveResumeTab] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  const getResumeRoute = () => {
    return activeResumeTab === 'python-ai'
      ? '/resumes/python-developer'
      : '/resumes/wordpress-developer';
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Role <span className="text-[var(--accent-green)]">Resumes</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Targeted resume views tailored for Python Developer / Data Analyst roles or Enterprise WordPress / Full-Stack positions.
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
            Python Developer & Data Analyst
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            Python, SQL, FastAPI, Pandas, Data Analysis, Masai & IIT Patna SDE Program.
          </p>
        </button>

        <button
          onClick={() => setActiveResumeTab('wordpress-fullstack')}
          className={`p-5 rounded-2xl border text-left transition-all ${
            activeResumeTab === 'wordpress-fullstack'
              ? 'bg-[var(--accent-cyan-bg)] border-[var(--accent-cyan)] shadow-md'
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
                ? 'PYTHON DEVELOPER & DATA ANALYST | BACKEND & FULL-STACK'
                : 'WORDPRESS DEVELOPER [6 YEARS] | FULL-STACK | GEN AI'}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <span>📧 selvamsde33@gmail.com</span>
              <span>📞 +91 8248552197, +91 9489228575</span>
              <span>📍 Tirunelveli, Tamil Nadu</span>
            </div>
          </div>

          {/* Eye Catching Download Button */}
          <a
            href={getResumeRoute()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[var(--accent-green)] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>GET FULL RESUME (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Professional Summary
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-color)]">
            {activeResumeTab === 'python-ai'
              ? "Python Developer & Data Analyst with 1 year of hands-on experience in Python, SQL, FastAPI, Pandas, and data analysis through the Masai School & IIT Patna SDE program. Experienced in developing REST APIs, database-driven applications, CRUD operations, and data processing workflows using Python. Skilled in SQL, data cleaning, exploratory data analysis, data visualization, and extracting insights from structured datasets. Brings 6+ years of professional web development experience with PHP, MySQL, JavaScript, and 410+ production websites. Currently seeking opportunities as a Python Developer, Backend Developer, or Data Analyst to apply strong programming, database, and analytical skills."
              : "WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion."}
          </p>
        </div>

        {/* Key Achievements */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Key Highlights & Skills
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>1 Year</strong> hands-on experience in Python, SQL, FastAPI, Pandas & Data Analysis.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>REST APIs & Workflows</strong>: Experienced in developing CRUD operations & data workflows.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>EDA & Insights</strong>: Data cleaning, exploratory data analysis & visualization.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>6+ Years Web Foundation</strong> with 410+ production websites shipped.</span>
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
                <div className="text-[var(--text-muted)]">Masai School & IIT Patna (Feb 2026 – Ongoing)</div>
              </div>
              <span className="text-[10px] font-mono text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2 py-0.5 rounded border border-[var(--accent-green)]/20">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div>
                <div className="font-bold text-[var(--text-main)]">Full Stack JavaScript Developer Certification</div>
                <div className="text-[var(--text-muted)]">IBM (Oct 2025 – Nov 2025)</div>
              </div>
              <span className="text-[10px] font-mono text-[var(--accent-cyan)] bg-[var(--accent-cyan-bg)] px-2 py-0.5 rounded border border-[var(--accent-cyan)]/20">Verified</span>
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
