'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Download, CheckCircle2, Code2, ExternalLink } from 'lucide-react';

interface ResumeHubProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ResumeHub: React.FC<ResumeHubProps> = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
            Curriculum <span className="text-[var(--accent-green)]">Vitae</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Official 6+ Years WordPress Developer & Full-Stack Engineer Resume.
          </p>
        </div>

        {/* Download Button */}
        <a
          href="/resumes/wordpress-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-[var(--accent-green)] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20 shrink-0 self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>GET FULL RESUME (PDF)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Selected Resume View Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-6 shadow-2xl transition-colors duration-300">
        
        {/* Header Block */}
        <div className="border-b border-[var(--border-color)] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--text-main)]">SELVAM S</h3>
            <div className="text-xs font-mono font-bold text-[var(--accent-green)] mt-1 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[var(--accent-green)]" />
              <span>WORDPRESS DEVELOPER [6 YEARS] | FULL-STACK | GEN AI</span>
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono">
              <span>📧 selvamsde33@gmail.com</span>
              <span>📞 +91 8248552197, +91 9489228575</span>
              <span>📍 Tirunelveli, Tamil Nadu, 627357</span>
              <span>🌐 selvam-sde.onrender.com</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Professional Summary
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border-color)] text-justify">
            WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion. Known for zero-defect delivery, high client satisfaction ratings, and strong cross-team collaboration across QA and design teams to deliver scalable, conversion-focused digital experiences.
          </p>
        </div>

        {/* Core Skills */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Core Skills & Technical Competencies
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="font-bold text-[var(--text-main)]">Front-End Development:</span> HTML5, CSS3, JavaScript, jQuery, Vue.js, React, Bootstrap, Tailwind CSS
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="font-bold text-[var(--text-main)]">WordPress & CMS:</span> Theme Dev, Plugin Integration, WooCommerce, Oxygen Builder, Elementor, Beaver Builder, ACF Pro
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="font-bold text-[var(--text-main)]">Back-End & Databases:</span> Python, FastAPI, Pydantic, PHP, MySQL DB, SQLAlchemy
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="font-bold text-[var(--text-main)]">Performance & Tools:</span> PageSpeed (70 → 95+), Core Web Vitals, Cross-browser Testing, Figma to Code, Git, GitHub
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            Key Achievements
          </h4>
          <div className="grid sm:grid-cols-3 gap-3 text-xs text-[var(--text-muted)]">
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>428+</strong> WordPress, HTML & backend projects delivered for international clients.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>70 → 95+</strong> Google PageSpeed score improvement via backend optimization.</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
              <span><strong>8–10</strong> pixel-perfect pages shipped daily at vSplash over 20 months.</span>
            </div>
          </div>
        </div>

        {/* Experience & Certifications */}
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
