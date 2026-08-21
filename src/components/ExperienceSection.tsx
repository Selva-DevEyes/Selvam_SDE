'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Experience } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'python-ai' | 'wordpress' | 'fullstack'>('all');

  const experiences = filter === 'all'
    ? PORTFOLIO_DATA.experiences
    : PORTFOLIO_DATA.experiences.filter(exp => exp.category === filter || exp.category === 'general');

  return (
    <section id="experience" className="py-24 bg-[#060911] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Career Timeline & <span className="gradient-text-emerald">Track Record</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            From engineering 410+ production websites for GoDaddy's international client accounts to building Python AI REST microservices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            All Experiences ({PORTFOLIO_DATA.experiences.length})
          </button>
          <button
            onClick={() => setFilter('python-ai')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'python-ai'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            Python & AI Focus
          </button>
          <button
            onClick={() => setFilter('wordpress')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'wordpress'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            WordPress Focus
          </button>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp: Experience, idx: number) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#080c14] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-[#080c14]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      {exp.company}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="hidden sm:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
