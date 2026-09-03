'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code2, Globe, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface AboutSectionProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentRole }) => {
  const roleData = PORTFOLIO_DATA.roles[currentRole];
  const isWordpress = currentRole === 'wordpress-fullstack';

  const services = isWordpress
    ? [
        {
          title: "Enterprise WordPress Theme & Plugin Dev",
          desc: "Architecting custom PHP themes, ACF dynamic templates, and bespoke plugin integrations for international client brands.",
          icon: <Globe className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "WooCommerce Store Overhauls",
          desc: "Rebuilding product, cart, checkout flows, payment gateways, and custom AJAX filters to maximize conversion rates.",
          icon: <Code2 className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "Google PageSpeed & Core Web Vitals (70→95+)",
          desc: "Server-side caching, image lazy loading, script deferral, CDN tuning, and zero-defect performance optimization.",
          icon: <Zap className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "Figma to WordPress 1:1 Pixel-Perfect Code",
          desc: "Converting Figma/Adobe designs into responsive, pixel-perfect Beaver Builder, Elementor & Oxygen templates.",
          icon: <Sparkles className="w-5 h-5 text-[var(--accent-green)]" />
        }
      ]
    : [
        {
          title: "FastAPI & Python REST API Engineering",
          desc: "Building high-throughput, async microservices with Pydantic schemas, JWT auth, and rate-limited API endpoints.",
          icon: <Zap className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "SQL & Data Processing Workflows",
          desc: "Writing complex analytical SQL queries, data cleaning pipelines with Pandas, and schema migrations with SQLAlchemy.",
          icon: <Code2 className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "Exploratory Data Analysis (EDA) & Insights",
          desc: "Cleaning raw datasets, detecting patterns, and building data visualizations for structured business intelligence.",
          icon: <Sparkles className="w-5 h-5 text-[var(--accent-green)]" />
        },
        {
          title: "Gen AI & LLM Application Integration",
          desc: "Developing prompt-driven feature workflows, RAG integrations, and LLM-powered backend automation.",
          icon: <Globe className="w-5 h-5 text-[var(--accent-green)]" />
        }
      ];

  return (
    <div className="space-y-10 sm:space-y-12 animate-in fade-in duration-300">
      
      {/* Bio Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-green-bg)] text-[var(--accent-green)] text-xs font-mono font-semibold border border-[var(--accent-green)]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{roleData.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight title-line">
          About <span className="text-[var(--accent-green)]">Me</span>
        </h2>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed text-justify bg-[var(--bg-body)] p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] shadow-inner">
          {roleData.summary}
        </p>
      </div>

      {/* Key Highlights / Hero Points */}
      <div className="grid sm:grid-cols-2 gap-3.5">
        {roleData.heroPoints.map((point, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] flex items-start gap-2.5 hover:border-[var(--accent-green)]/40 transition-colors shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
            <span className="text-xs text-[var(--text-main)] font-medium leading-normal">{point}</span>
          </div>
        ))}
      </div>

      {/* Services / What I Do Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
            What <span className="text-[var(--accent-green)]">I Do</span>
          </h3>
          <span className="text-xs font-mono text-[var(--text-muted)]">Core Expertise</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] hover:border-[var(--accent-green)]/40 transition-all space-y-2 group shadow-lg"
            >
              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] w-fit border border-[var(--border-color)] group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h4 className="text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--accent-green)] transition-colors">
                {srv.title}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Counter Ticker (2 columns per row, 2 rows total = 2x2 grid) */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-color)]">
        {PORTFOLIO_DATA.stats.map((st, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] text-center space-y-1 hover:border-[var(--accent-green)]/40 transition-colors shadow-md"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent-green)] font-mono">
              {st.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[var(--text-main)]">
              {st.label}
            </div>
            <div className="text-[10px] sm:text-xs text-[var(--text-muted)] font-mono">
              {st.description}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
