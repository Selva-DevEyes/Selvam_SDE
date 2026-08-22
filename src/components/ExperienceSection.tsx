'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

interface ExperienceSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentRole }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Resume & <span className="text-[var(--accent-green)]">History</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Career progression across enterprise WordPress engineering, full-stack development, and Python AI backend systems.
        </p>
      </div>

      {/* Two Column Layout (Experience vs Education) */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Column: Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-color)]">
            <Briefcase className="w-5 h-5 text-[var(--accent-green)]" />
            <h3 className="text-lg font-bold text-[var(--text-main)] uppercase tracking-wider">
              Experience
            </h3>
          </div>

          <div className="space-y-6 relative border-l border-[var(--border-color)] pl-6 ml-3">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="relative space-y-2 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-green)] shadow-sm group-hover:scale-125 transition-transform" />

                {/* Date Badge */}
                <span className="inline-block text-[11px] font-mono font-bold text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2.5 py-1 rounded-md border border-[var(--accent-green)]/20">
                  {exp.period}
                </span>

                {/* Role & Company */}
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent-green)] transition-colors">
                    {exp.role}
                  </h4>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-[var(--text-muted)]">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--accent-green)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-color)]">
            <GraduationCap className="w-5 h-5 text-[var(--accent-cyan)]" />
            <h3 className="text-lg font-bold text-[var(--text-main)] uppercase tracking-wider">
              Education & Certifications
            </h3>
          </div>

          <div className="space-y-6 relative border-l border-[var(--border-color)] pl-6 ml-3">
            
            {/* Masai & IIT Patna */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-cyan)] shadow-sm group-hover:scale-125 transition-transform" />
              <span className="inline-block text-[11px] font-mono font-bold text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-2.5 py-1 rounded-md border border-[var(--accent-cyan)]/20">
                Feb 2026 – Ongoing
              </span>
              <div>
                <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors">
                  Software Development Engineering with Applied AI
                </h4>
                <div className="text-xs font-mono text-[var(--text-muted)]">
                  Masai & IIT Patna Co-Program
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Intensive hands-on curriculum covering Python 3, FastAPI, Pydantic schema design, SQLAlchemy ORM, relational database architectures, and GenAI model integration.
              </p>
            </div>

            {/* IBM Certification */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-cyan)] shadow-sm group-hover:scale-125 transition-transform" />
              <span className="inline-block text-[11px] font-mono font-bold text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-2.5 py-1 rounded-md border border-[var(--accent-cyan)]/20">
                Oct 2025 – Nov 2025
              </span>
              <div>
                <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)] transition-colors">
                  Full Stack JavaScript Developer Certification
                </h4>
                <div className="text-xs font-mono text-[var(--text-muted)]">
                  IBM Official Credential
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Verified full-stack expertise spanning React, JavaScript (ES6+), Node.js, Web APIs, and asynchronous programming principles.
              </p>
            </div>

            {/* Degree */}
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative space-y-2 group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-green)] shadow-sm group-hover:scale-125 transition-transform" />
                <span className="inline-block text-[11px] font-mono font-bold text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2.5 py-1 rounded-md border border-[var(--accent-green)]/20">
                  {edu.period}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-[var(--accent-green)] transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {edu.institution} • {edu.location}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
};
