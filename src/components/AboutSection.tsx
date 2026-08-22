'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Terminal, Cpu, Layout, Code2, ShieldCheck, Zap, Award, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentRole }) => {
  const activeRoleData = PORTFOLIO_DATA.roles[currentRole];

  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-[#78cc6d]" />,
      title: "Python & FastAPI Backend",
      desc: "Architecting high-performance asynchronous REST APIs with Pydantic schema validation, SQLAlchemy ORM, and database optimization (PostgreSQL/SQLite)."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#38bdf8]" />,
      title: "Gen AI & Applied LLMs",
      desc: "Building LLM-integrated microservices, prompt engineering pipelines, and smart automation tools co-developed through Masai & IIT Patna."
    },
    {
      icon: <Layout className="w-6 h-6 text-[#78cc6d]" />,
      title: "WordPress & WooCommerce",
      desc: "6+ years engineering 410+ production websites for GoDaddy international client portfolio. Rebuilding checkout workflows, ACF dynamic templates, and custom theme logic."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#38bdf8]" />,
      title: "PageSpeed & Core Web Vitals",
      desc: "Optimizing server-side caching, lazy loading, image compression, and CDN setup to boost Google PageSpeed scores from ~70 to 95+."
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight title-line">
          About <span className="text-[#78cc6d]">Me</span>
        </h2>
        
        {/* Active Role Tagline */}
        <div className="p-4 rounded-2xl bg-[#12171b] border border-[#282c30] flex items-center gap-3 text-xs sm:text-sm font-mono text-[#78cc6d] mb-6">
          <Terminal className="w-5 h-5 shrink-0" />
          <span>{activeRoleData.tagline}</span>
        </div>

        {/* Narrative Paragraph */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            I'm <strong className="text-white">SELVAM S</strong>, a software and web engineer with <strong className="text-[#78cc6d]">6+ years of experience</strong> delivering production-ready applications. Formerly a lead WordPress Integrator at <strong className="text-white">vSplash Techlab</strong> (GoDaddy projects), I engineered over <strong className="text-[#78cc6d]">410+ production websites</strong> for international accounts across US, UK, AU, and CA.
          </p>
          <p>
            Currently, I am expanding into backend AI systems through an intensive <strong className="text-[#38bdf8]">Software Development Engineering with Applied AI</strong> program with <strong className="text-white">Masai & IIT Patna</strong>, specializing in Python 3, FastAPI, Pydantic, SQLAlchemy, and GenAI LLM integrations.
          </p>
        </div>
      </div>

      {/* Services Section ("What I Do") */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6 title-line">
          My <span className="text-[#78cc6d]">Services</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl ryancv-box space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#12171b] border border-[#282c30] flex items-center justify-center">
                {service.icon}
              </div>
              <h4 className="text-base font-bold text-white">
                {service.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts / Counter Metrics Ticker */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6 title-line">
          Engineering <span className="text-[#78cc6d]">Milestones</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#12171b] border border-[#282c30] text-center space-y-1 hover:border-[#78cc6d]/40 transition-colors"
            >
              <div className="text-3xl font-extrabold font-mono text-[#78cc6d]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials Quick Banner */}
      <div className="p-5 rounded-2xl bg-[#12171b] border border-[#282c30] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-[#78cc6d] shrink-0" />
          <div>
            <div className="text-xs font-mono text-slate-400">QUALIFICATION</div>
            <div className="text-sm font-bold text-white">B.E. Electrical & Electronics — PSN Institute</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1.5 rounded-xl border border-[#38bdf8]/20">
          <Award className="w-4 h-4" />
          <span>IBM Certified Full-Stack JS</span>
        </div>
      </div>

    </div>
  );
};
