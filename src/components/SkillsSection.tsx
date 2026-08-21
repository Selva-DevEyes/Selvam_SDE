'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Terminal, Database, Cpu, Layout, Code2, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'ai' | 'cms' | 'frontend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Terminal className="w-4 h-4" /> },
    { id: 'backend', name: 'Python & Backend', icon: <Code2 className="w-4 h-4" /> },
    { id: 'ai', name: 'Gen AI & Applied AI', icon: <Cpu className="w-4 h-4" /> },
    { id: 'cms', name: 'WordPress & CMS', icon: <Layout className="w-4 h-4" /> },
    { id: 'frontend', name: 'Front-End (React/Vue)', icon: <Layout className="w-4 h-4" /> },
    { id: 'database', name: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', name: 'DevOps & Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillGroups = [
    { title: 'Python & Backend', id: 'backend', color: 'emerald', skills: PORTFOLIO_DATA.skills.backend },
    { title: 'Gen AI & Applied AI', id: 'ai', color: 'cyan', skills: PORTFOLIO_DATA.skills.ai },
    { title: 'CMS & WordPress Ecosystem', id: 'cms', color: 'purple', skills: PORTFOLIO_DATA.skills.cms },
    { title: 'Front-End Frameworks', id: 'frontend', color: 'blue', skills: PORTFOLIO_DATA.skills.frontend },
    { title: 'Databases & Query Tuning', id: 'database', color: 'amber', skills: PORTFOLIO_DATA.skills.database },
    { title: 'Engineering Tools & Optimization', id: 'tools', color: 'teal', skills: PORTFOLIO_DATA.skills.tools },
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. SKILLS & TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Core Competencies & <span className="gradient-text-emerald">Toolbelt</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            A comprehensive matrix of backend systems, GenAI frameworks, CMS platforms, and modern front-end technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {group.skills.length} Techs
                  </span>
                </h3>

                <div className="space-y-4">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {skill.tag}
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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
