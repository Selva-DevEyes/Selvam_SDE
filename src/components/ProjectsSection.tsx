'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/Icons';
import { FolderGit2, Sparkles, ArrowUpRight, ExternalLink, Code2, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentRole }) => {
  const [filter, setFilter] = useState<'all' | 'python-ai' | 'wordpress' | 'fullstack'>('all');

  const projects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight title-line">
          Featured <span className="text-[#78cc6d]">Works</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Portfolio of Python GenAI microservices, 410+ GoDaddy client WordPress websites, and WooCommerce custom engineering.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
            filter === 'all'
              ? 'bg-[#78cc6d] text-slate-950 font-bold shadow-md shadow-[#78cc6d]/20'
              : 'bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-white'
          }`}
        >
          All Works ({PORTFOLIO_DATA.projects.length})
        </button>
        <button
          onClick={() => setFilter('python-ai')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
            filter === 'python-ai'
              ? 'bg-[#78cc6d] text-slate-950 font-bold shadow-md shadow-[#78cc6d]/20'
              : 'bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-white'
          }`}
        >
          Python & Gen AI
        </button>
        <button
          onClick={() => setFilter('wordpress')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
            filter === 'wordpress'
              ? 'bg-[#78cc6d] text-slate-950 font-bold shadow-md shadow-[#78cc6d]/20'
              : 'bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-white'
          }`}
        >
          WordPress & WooCommerce
        </button>
        <button
          onClick={() => setFilter('fullstack')}
          className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
            filter === 'fullstack'
              ? 'bg-[#78cc6d] text-slate-950 font-bold shadow-md shadow-[#78cc6d]/20'
              : 'bg-[#12171b] border border-[#282c30] text-slate-400 hover:text-white'
          }`}
        >
          Full Stack
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj: Project) => (
          <div
            key={proj.id}
            className="p-6 rounded-2xl ryancv-box flex flex-col justify-between group space-y-4"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-[#78cc6d] uppercase tracking-widest bg-[#78cc6d]/10 px-2.5 py-0.5 rounded border border-[#78cc6d]/20">
                  {proj.category === 'python-ai' ? 'Python / AI' : proj.category === 'wordpress' ? 'WordPress / CMS' : 'Full Stack'}
                </span>
                {proj.featured && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#78cc6d] transition-colors mb-2">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {proj.description}
              </p>

              {/* Metrics Badge */}
              {proj.metrics && (
                <div className="p-2.5 rounded-xl bg-[#12171b] border border-[#282c30] text-xs font-mono text-[#38bdf8] mb-3">
                  ⚡ {proj.metrics}
                </div>
              )}
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-slate-400 bg-[#12171b] px-2 py-0.5 rounded border border-[#282c30]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-3 border-t border-[#282c30]">
                {proj.githubUrl ? (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-[#78cc6d] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>CODE</span>
                  </a>
                ) : <span />}

                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-[#78cc6d] hover:underline"
                  >
                    <span>DEMO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
