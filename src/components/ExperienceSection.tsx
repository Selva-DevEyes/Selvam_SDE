'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface ExperienceSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ currentRole }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight title-line">
          Resume & <span className="text-[#78cc6d]">History</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Career progression across enterprise WordPress engineering, full-stack development, and Python AI backend systems.
        </p>
      </div>

      {/* Two Column Layout (Experience vs Education) */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Column: Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-[#282c30]">
            <Briefcase className="w-5 h-5 text-[#78cc6d]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Experience
            </h3>
          </div>

          <div className="space-y-6 relative border-l border-[#282c30] pl-6 ml-3">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="relative space-y-2 group">
                
                {/* Green Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#78cc6d] shadow-sm shadow-[#78cc6d]/50 group-hover:scale-125 transition-transform" />

                {/* Date Badge */}
                <span className="inline-block text-[11px] font-mono font-bold text-[#78cc6d] bg-[#78cc6d]/10 px-2.5 py-1 rounded-md border border-[#78cc6d]/20">
                  {exp.period}
                </span>

                {/* Role & Company */}
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#78cc6d] transition-colors">
                    {exp.role}
                  </h4>
                  <div className="text-xs font-mono text-slate-400">
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-[#78cc6d] shrink-0 mt-0.5" />
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
          <div className="flex items-center gap-2 pb-2 border-b border-[#282c30]">
            <GraduationCap className="w-5 h-5 text-[#38bdf8]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Education & Certifications
            </h3>
          </div>

          <div className="space-y-6 relative border-l border-[#282c30] pl-6 ml-3">
            
            {/* Masai & IIT Patna */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#38bdf8] shadow-sm shadow-[#38bdf8]/50 group-hover:scale-125 transition-transform" />
              <span className="inline-block text-[11px] font-mono font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-md border border-[#38bdf8]/20">
                Feb 2026 – Ongoing
              </span>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                  Software Development Engineering with Applied AI
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  Masai & IIT Patna Co-Program
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Intensive hands-on curriculum covering Python 3, FastAPI, Pydantic schema design, SQLAlchemy ORM, relational database architectures, and GenAI model integration.
              </p>
            </div>

            {/* IBM Certification */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#38bdf8] shadow-sm shadow-[#38bdf8]/50 group-hover:scale-125 transition-transform" />
              <span className="inline-block text-[11px] font-mono font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-md border border-[#38bdf8]/20">
                Oct 2025 – Nov 2025
              </span>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                  Full Stack JavaScript Developer Certification
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  IBM Official Credential
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Verified full-stack expertise spanning React, JavaScript (ES6+), Node.js, Web APIs, and asynchronous programming principles.
              </p>
            </div>

            {/* Degree */}
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="relative space-y-2 group">
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#78cc6d] shadow-sm shadow-[#78cc6d]/50 group-hover:scale-125 transition-transform" />
                <span className="inline-block text-[11px] font-mono font-bold text-[#78cc6d] bg-[#78cc6d]/10 px-2.5 py-1 rounded-md border border-[#78cc6d]/20">
                  {edu.period}
                </span>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#78cc6d] transition-colors">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-slate-400">
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
