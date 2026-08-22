'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Cpu, Terminal, Code2, Database, Layout, Wrench } from 'lucide-react';

interface SkillsSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentRole }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'ai' | 'cms' | 'frontend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'backend', name: 'Python & Backend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'ai', name: 'Gen AI & LLM Apps', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'cms', name: 'WordPress & CMS', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'frontend', name: 'Front-End (React/Vue)', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'database', name: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'tools', name: 'DevOps & Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const skillGroups = [
    { title: 'Python & Backend Systems', id: 'backend', skills: PORTFOLIO_DATA.skills.backend },
    { title: 'Gen AI & Applied LLM Apps', id: 'ai', skills: PORTFOLIO_DATA.skills.ai },
    { title: 'CMS & WordPress Ecosystem', id: 'cms', skills: PORTFOLIO_DATA.skills.cms },
    { title: 'Front-End Frameworks', id: 'frontend', skills: PORTFOLIO_DATA.skills.frontend },
    { title: 'Databases & Query Optimization', id: 'database', skills: PORTFOLIO_DATA.skills.database },
    { title: 'Tools, DevOps & Core Web Vitals', id: 'tools', skills: PORTFOLIO_DATA.skills.tools },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          Skill <span className="text-[var(--accent-green)]">Proficiency</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          Technical competencies spanning backend API engineering, GenAI pipelines, WordPress ecosystem, and modern front-end web tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-[var(--accent-green)] text-slate-950 font-bold shadow-md'
                : 'bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--accent-green)]/30'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Progress Bars Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            className="p-6 rounded-2xl ryancv-box space-y-4"
          >
            <h3 className="text-sm font-mono font-bold text-[var(--accent-green)] uppercase tracking-wider pb-2 border-b border-[var(--border-color)] flex items-center justify-between">
              <span>{group.title}</span>
              <span className="text-[10px] text-[var(--text-muted)]">{group.skills.length} Items</span>
            </h3>

            <div className="space-y-3.5">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[var(--text-main)]">{skill.name}</span>
                    <span className="font-mono text-[11px] text-[var(--accent-green)] font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* RyanCV Progress Bar */}
                  <div className="w-full h-2 bg-[var(--bg-body)] rounded-full overflow-hidden border border-[var(--border-color)]">
                    <div
                      className="h-full progress-bar-fill rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
