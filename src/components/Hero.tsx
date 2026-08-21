'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { Sparkles, ArrowRight, Mail, CheckCircle2, Code2 } from 'lucide-react';

interface HeroProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
}

export const Hero: React.FC<HeroProps> = ({ currentRole, onRoleToggle }) => {
  const activeRoleData = PORTFOLIO_DATA.roles[currentRole];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PORTFOLIO_DATA.personal.availability}</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                SELVAM <span className="gradient-text-emerald">S.</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                  {activeRoleData.title}
                </span>
              </div>
            </div>

            {/* Interactive Role Selector */}
            <div className="w-full p-2 rounded-2xl glass-card border border-slate-800 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onRoleToggle('python-ai')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  currentRole === 'python-ai'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/30 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Python & AI Engineer Focus</span>
              </button>

              <button
                onClick={() => onRoleToggle('wordpress-fullstack')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  currentRole === 'wordpress-fullstack'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>WordPress Specialist Focus</span>
              </button>
            </div>

            {/* Role Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {activeRoleData.summary}
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-3 w-full">
              {activeRoleData.heroPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-all duration-300 shadow-lg shadow-emerald-500/25 group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#resumes"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:border-emerald-500/40 hover:bg-slate-800/70 transition-all duration-300"
              >
                <span>View Both Resumes</span>
              </a>
            </div>

            {/* Social Icons Quick Row */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column - Interactive Card Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header Code Tab */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    selvam_profile.py
                  </span>
                </div>

                {/* Code Terminal Output */}
                <div className="font-mono text-xs text-slate-300 space-y-3 bg-[#050811] p-4 rounded-xl border border-slate-800/80 mb-6">
                  <div className="text-slate-400"># Engineering Metrics Snapshot</div>
                  <div>
                    <span className="text-purple-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">"name"</span>: <span className="text-amber-300">"{PORTFOLIO_DATA.personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">"experience_years"</span>: <span className="text-cyan-400">6</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">"wp_sites_shipped"</span>: <span className="text-cyan-400">410</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">"current_focus"</span>: <span className="text-amber-300">"FastAPI & GenAI"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-400">"pagespeed_boost"</span>: <span className="text-amber-300">"70 -&gt; 95+"</span>
                  </div>
                  <div>&#125;</div>
                </div>

                {/* Stats Grid inside card */}
                <div className="grid grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono gradient-text-emerald">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-200 mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
