'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Printer, ArrowLeft } from 'lucide-react';

export default function PythonResumePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 p-4 sm:p-8 print:p-0 font-sans flex flex-col items-center">
      {/* Top Action Bar for Screen Viewing */}
      <div className="w-full max-w-4xl flex items-center justify-between bg-slate-800 p-4 rounded-xl text-white mb-6 print:hidden shadow-lg">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-mono text-[#0f766e] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-[#0f766e] text-white font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>DOWNLOAD / SAVE AS PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Container */}
      <div className="w-full max-w-4xl bg-white p-8 sm:p-12 rounded-xl shadow-2xl print:shadow-none print:p-0 space-y-6 text-xs sm:text-sm leading-relaxed border border-slate-200">
        
        {/* Resume Header */}
        <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
          <h1 className="text-3xl font-extrabold tracking-wider text-slate-900 uppercase">SELVAM S</h1>
          <div className="text-sm font-bold text-[#0f766e] tracking-wide">
            PYTHON DEVELOPER & DATA ANALYST | BACKEND & FULL-STACK
          </div>
          <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1 pt-1 font-mono">
            <span>Email: selvamsde33@gmail.com</span>
            <span>Phone: +91 8248552197, +91 9489228575</span>
            <span>Location: Tirunelveli, Tamil Nadu, 627357</span>
          </div>
          <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1 pt-0.5 font-mono">
            <span>Portfolio: selvam-sde.onrender.com</span>
            <span>GitHub: github.com/Selva-DevEyes</span>
            <span>LinkedIn: linkedin.com/in/selvam-s-2b201b252</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-slate-700 text-justify">
            {PORTFOLIO_DATA.roles['python-ai'].summary}
          </p>
        </div>

        {/* Core Skills - Single Column */}
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            CORE SKILLS & TECHNICAL COMPETENCIES
          </h2>
          <ul className="space-y-1.5 text-slate-700 list-disc pl-5">
            <li><strong>Python & Backend:</strong> Python 3, FastAPI, Pydantic, SQLAlchemy, REST API Design, PHP</li>
            <li><strong>Data Analysis & Databases:</strong> SQL, Pandas, Data Cleaning, EDA, Data Visualization, PostgreSQL, SQLite, MySQL</li>
            <li><strong>Applied GenAI:</strong> LLM Application Dev, Prompt Engineering (Masai & IIT Patna SDE Program)</li>
            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), React, Vue.js, Bootstrap, Tailwind CSS</li>
            <li><strong>CMS & Web Platforms:</strong> WordPress (Theme Dev, WooCommerce, ACF, Elementor, Beaver Builder, Oxygen Builder)</li>
            <li><strong>Engineering Practices:</strong> Git, GitHub, CI/CD, REST API Testing, PageSpeed Optimization (70 → 95+)</li>
            <li><strong>Design & Tools:</strong> Figma, Adobe Photoshop, Canva</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>Masai School & IIT Patna SDE Program</span>
              <span className="text-xs font-mono">Feb 2026 – Ongoing</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">Python Developer & Data Analyst Trainee</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>1 year of hands-on experience in Python, SQL, FastAPI, Pandas, and data analysis through intensive capstone projects.</li>
              <li>Developing REST APIs, database-driven applications, CRUD operations, and data processing workflows using Python.</li>
              <li>Performing SQL queries, data cleaning, exploratory data analysis (EDA), and data visualization to extract insights from structured datasets.</li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>vSplash Techlab [GoDaddy Projects]</span>
              <span className="text-xs font-mono">Dec 2023 – Aug 2025</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">WordPress Integrator 2</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Engineered 410+ production-ready websites for GoDaddy's international client portfolio across US, UK, AU & CA using PHP and MySQL.</li>
              <li>Shipped 8–10 pixel-perfect pages daily using Beaver Builder and Elementor while maintaining zero-defect delivery.</li>
              <li>Boosted Google PageSpeed scores from ~70 to 95+ via server-side caching, lazy loading, and Core Web Vitals optimization.</li>
              <li>Overhauled WooCommerce checkout and dynamic ACF product layouts to maximize client revenue retention.</li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>Boostability Pvt. Ltd.</span>
              <span className="text-xs font-mono">Aug 2021 – Jul 2023</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">Front-End Developer</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Built responsive, cross-browser websites using Bootstrap and Tailwind CSS, standardizing UI patterns with Vue.js components.</li>
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-2 pt-2">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="space-y-1 text-slate-700">
            <div><strong>Software Development Engineering with Applied AI:</strong> Masai School & IIT Patna (Feb 2026 – Ongoing)</div>
            <div><strong>Full Stack JavaScript Developer Certification:</strong> IBM (Oct 2025 – Nov 2025)</div>
            <div><strong>Bachelor of Engineering (B.E.) — Electrical & Electronics Engineering:</strong> PSN Institute of Technology & Science (2010 – 2014)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
