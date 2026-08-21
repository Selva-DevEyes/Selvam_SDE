'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/Icons';
import { FolderGit2, Sparkles, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'python-ai' | 'wordpress' | 'fullstack'>('all');

  const projects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Shipped Solutions & <span className="gradient-text-emerald">Code Artifacts</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Explore Python GenAI backends, high-performance WordPress client builds, WooCommerce architectures, and reactive front-ends.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            All Projects ({PORTFOLIO_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter('python-ai')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'python-ai'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            Python & Gen AI
          </button>
          <button
            onClick={() => setFilter('wordpress')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'wordpress'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            WordPress & WooCommerce
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'fullstack'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
          >
            Full-Stack Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj: Project) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl glass-card border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {proj.category === 'python-ai' ? 'Python / AI' : proj.category === 'wordpress' ? 'WordPress / CMS' : 'Full Stack'}
                  </span>
                  {proj.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Metrics Highlight */}
                {proj.metrics && (
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
                    ⚡ {proj.metrics}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                  )}

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
