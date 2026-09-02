'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Award, Download, ExternalLink, CheckCircle2, Code2 } from 'lucide-react';

interface ExperienceSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const experiences = PORTFOLIO_DATA.experiences;

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
            Resume & <span className="text-[var(--accent-green)]">Curriculum Vitae</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Professional work history, 410+ client deployments, education, and official PDF resume.
          </p>
        </div>

        {/* Get Full CV PDF Button */}
        <a
          href="/resumes/wordpress-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-[var(--accent-green)] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-green)]/20 shrink-0 self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>GET FULL CV (PDF)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Official Summary Callout Box */}
      <div className="p-6 rounded-3xl bg-[var(--bg-body)] border border-[var(--accent-green)]/40 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[var(--accent-green)]" />
          <h3 className="text-base font-bold text-[var(--text-main)]">
            WordPress Developer [6 Years] | Full-Stack & Gen AI Specialist
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed text-justify">
          WordPress Developer and Full Stack specialist with 6+ years of experience engineering 410 high-performance websites for international clients across the US, UK, Australia, and Canada. Former WordPress Integrator at vSplash Techlab (GoDaddy), consistently shipping 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0" />
            <span><strong>428+</strong> Total Shipped Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0" />
            <span><strong>70 → 95+</strong> PageSpeed Improvement</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0" />
            <span><strong>8–10 Pages</strong> Daily Throughput</span>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-base font-bold text-[var(--text-main)]">
          <Briefcase className="w-5 h-5 text-[var(--accent-green)]" />
          <h3>Professional Experience Timeline</h3>
        </div>

        <div className="relative border-l-2 border-[var(--border-color)] ml-3 pl-6 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-green)] group-hover:bg-[var(--accent-green)] transition-colors shadow-md" />

              <div className="p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] hover:border-[var(--accent-green)]/40 transition-all space-y-3 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent-green)] transition-colors">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-semibold text-[var(--accent-green)]">
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-color)] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {exp.location && (
                  <div className="text-[11px] text-[var(--text-muted)] font-mono">
                    📍 {exp.location}
                  </div>
                )}

                <ul className="space-y-1.5 text-xs text-[var(--text-muted)] list-disc pl-4">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Grid */}
      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-color)]">
        
        {/* Education */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-[var(--text-main)]">
            <GraduationCap className="w-5 h-5 text-[var(--accent-green)]" />
            <h3>Education</h3>
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-1 text-xs">
                <div className="font-bold text-[var(--text-main)]">{edu.degree}</div>
                <div className="text-[var(--text-muted)]">{edu.institution}</div>
                <div className="text-[10px] font-mono text-[var(--accent-green)]">{edu.period} • {edu.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-[var(--text-main)]">
            <Award className="w-5 h-5 text-[var(--accent-green)]" />
            <h3>Certifications</h3>
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-1 text-xs">
                <div className="font-bold text-[var(--text-main)]">{cert.title}</div>
                <div className="text-[var(--text-muted)]">{cert.issuer} ({cert.period})</div>
                <div className="text-[10px] font-mono text-[var(--accent-green)]">{cert.skills}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
