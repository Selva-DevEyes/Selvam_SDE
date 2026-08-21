'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, MapPin, Award, Terminal, Cpu, Zap, Code, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      title: "Education",
      detail: "B.E. Electrical & Electronics Engineering — PSN Institute (2010 – 2014)"
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Applied AI & GenAI",
      detail: "Masai & IIT Patna SDE Program (FastAPI, SQLAlchemy, LLM Apps)"
    },
    {
      icon: <Award className="w-5 h-5 text-amber-400" />,
      title: "Full Stack JS Certification",
      detail: "IBM Certified Full Stack JavaScript Developer (2025)"
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      title: "Location",
      detail: "Tirunelveli, Tamil Nadu, 627357, India (Open to Remote / Global)"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Precision. <span className="gradient-text-emerald">High Throughput.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            A background in Electrical Engineering combined with 6+ years of production web delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p className="text-lg text-slate-200">
              I'm <strong className="text-emerald-400">Selvam S</strong>, a backend-focused developer and full-stack engineer based in Tirunelveli, Tamil Nadu. Over the past <strong className="text-white">6+ years</strong>, I have specialized in shipping production-ready web applications, custom themes, and REST API services for international client portfolios.
            </p>

            <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 bg-emerald-950/10 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Enterprise Proven Track Record at GoDaddy (vSplash)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                During my 20-month engagement as WordPress Integrator 2 at vSplash Techlab, I engineered over <strong className="text-white">410+ production websites</strong> for GoDaddy's international client accounts across the US, UK, Australia, and Canada. Sustaining 8–10 pixel-perfect pages daily while improving average Google PageSpeed scores from ~70 to 95+.
              </p>
            </div>

            <p>
              Currently, I am expanding my backend capabilities through an intensive <strong className="text-cyan-400">Software Development Engineering with Applied AI</strong> program co-offered by <strong className="text-white">Masai & IIT Patna</strong>. My technical focus centres on building scalable REST microservices using <strong className="text-emerald-400">Python, FastAPI, Pydantic, and SQLAlchemy</strong> paired with relational database architectures (PostgreSQL & SQLite) and generative AI model integrations.
            </p>

            <p>
              My engineering background gives me a systems-first mindset — whether writing custom PHP hooks, building FastAPI REST endpoints, or optimizing SQL queries, I build systems that are fast, maintainable, and defect-free.
            </p>
          </div>

          {/* Highlights Sidebar Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl glass-card glass-card-hover border border-slate-800 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Metrics Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 text-center">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Current Learning Stack
              </div>
              <div className="text-sm font-bold text-white mt-1">
                Python 3 • FastAPI • Pydantic • SQLAlchemy • PostgreSQL • LLM Apps
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
