'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, Sparkles, Globe, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [filter, setFilter] = useState<'all' | 'wordpress' | 'python-ai'>('all');
  // Open live client list drawer by default for GoDaddy WordPress project
  const [expandedClientListId, setExpandedClientListId] = useState<string | null>('proj-godaddy-corporate-wordpress');

  const projects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      
      {/* Title & Role Priority Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
            Featured <span className="text-[var(--accent-green)]">Works & Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Explore 410+ enterprise WordPress client sites & full-stack web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] text-xs shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filter === 'all'
                ? 'bg-[var(--accent-green)] text-slate-950 shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            All Works
          </button>
          <button
            onClick={() => setFilter('wordpress')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filter === 'wordpress'
                ? 'bg-[var(--accent-green)] text-slate-950 shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            WordPress (410+)
          </button>
          <button
            onClick={() => setFilter('python-ai')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              filter === 'python-ai'
                ? 'bg-[var(--accent-cyan)] text-white shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Python & AI
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => {
          const isWordpress = proj.category === 'wordpress';
          const isExpanded = expandedClientListId === proj.id;

          return (
            <div
              key={proj.id}
              className={`p-6 rounded-2xl bg-[var(--bg-body)] border transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-xl ${
                isWordpress && proj.clientUrls
                  ? 'border-[var(--accent-green)]/60 bg-[var(--accent-green-bg)]/10 ring-1 ring-[var(--accent-green)]/20'
                  : 'border-[var(--border-color)] hover:border-[var(--accent-green)]/40'
              }`}
            >
              <div className="space-y-3">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      isWordpress
                        ? 'bg-[var(--accent-green-bg)] text-[var(--accent-green)] border-[var(--accent-green)]/30'
                        : 'bg-[var(--accent-cyan-bg)] text-[var(--accent-cyan)] border-[var(--accent-cyan)]/30'
                    }`}
                  >
                    {isWordpress ? 'WordPress Enterprise (410+ Sites)' : 'Python & Full-Stack'}
                  </span>

                  {proj.featured && (
                    <span className="text-[10px] font-mono text-[var(--accent-green)] flex items-center gap-1 font-bold">
                      <Sparkles className="w-3 h-3" /> FEATURED WORK
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--accent-green)] transition-colors">
                  {proj.title}
                </h3>

                {/* Metrics Highlight */}
                {proj.metrics && (
                  <div className="text-xs font-mono text-[var(--accent-green)] bg-[var(--bg-card)] p-2.5 rounded-lg border border-[var(--border-color)] font-semibold">
                    ⚡ {proj.metrics}
                  </div>
                )}

                {/* Short Description */}
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {proj.description}
                </p>

                {/* Long Detailed Description */}
                {proj.longDescription && (
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed opacity-90 border-t border-[var(--border-color)] pt-2.5">
                    {proj.longDescription}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-0.5 rounded border border-[var(--border-color)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Highlighted Live Client Websites Drawer for GoDaddy WordPress Projects */}
                {proj.clientUrls && proj.clientUrls.length > 0 && (
                  <div className="pt-2 border-t border-[var(--border-color)]">
                    <button
                      onClick={() => setExpandedClientListId(isExpanded ? null : proj.id)}
                      className="w-full flex items-center justify-between text-xs font-mono font-bold text-slate-950 bg-[var(--accent-green)] p-3 rounded-xl hover:opacity-90 transition-all shadow-md"
                    >
                      <span className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>VERIFIED LIVE CLIENT WEBSITES ({proj.clientUrls.length})</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--accent-green)]/30 space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
                        <div className="text-[10px] font-mono text-[var(--accent-green)] uppercase tracking-wider font-bold mb-2 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> 21 Live Client Sites Delivered at vSplash (GoDaddy):
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {proj.clientUrls.map((client, idx) => (
                            <a
                              key={idx}
                              href={client.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-main)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all flex items-center justify-between text-[11px] font-mono"
                            >
                              <span className="truncate">{client.name}</span>
                              <ExternalLink className="w-3 h-3 text-[var(--accent-green)] shrink-0 ml-1" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Footer Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[var(--accent-green)] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>VISIT WEBSITE</span>
                  </a>
                )}

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] font-semibold text-xs flex items-center justify-center gap-1.5 hover:border-[var(--accent-green)]/40 hover:text-[var(--accent-green)] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                    <span>SOURCE CODE</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
