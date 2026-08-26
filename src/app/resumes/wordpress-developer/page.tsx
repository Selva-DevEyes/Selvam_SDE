'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Printer, ArrowLeft } from 'lucide-react';

export default function WordPressResumePage() {
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
            WORDPRESS DEVELOPER [6 YEARS] | FULL-STACK | GEN AI
          </div>
          <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1 pt-1 font-mono">
            <span>Email: selvamsde33@gmail.com</span>
            <span>Phone: +91 8248552197, +91 9489228575</span>
            <span>Location: Tirunelveli, Tamil Nadu, 627357</span>
          </div>
          <div className="text-xs text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1 pt-0.5 font-mono">
            <span>Portfolio: selva-deveyes.github.io/codeBySelvam</span>
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
            {PORTFOLIO_DATA.roles['wordpress-fullstack'].summary}
          </p>
        </div>

        {/* Core Skills */}
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            CORE SKILLS & TECHNICAL COMPETENCIES
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700 list-disc pl-5">
            <li><strong>WordPress & CMS:</strong> Theme Customization & Dev, WooCommerce, ACF Pro, Oxygen Builder, Elementor, Beaver Builder</li>
            <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6+), jQuery, Vue.js, React, Bootstrap, Tailwind CSS</li>
            <li><strong>Back-End:</strong> PHP, MySQL DB, Python, FastAPI, Pydantic, SQLAlchemy</li>
            <li><strong>Performance Optimization:</strong> PageSpeed (70 → 95+), Core Web Vitals, Cross-browser Testing, Caching</li>
            <li><strong>Design & Tools:</strong> Figma to Browser 1:1, Adobe Photoshop, Canva, Git, GitHub, CI/CD</li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>vSplash Techlab [GoDaddy Projects]</span>
              <span className="text-xs font-mono">Dec 2023 – Aug 2025</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">WordPress Integrator 2</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Engineered 410+ production-ready WordPress sites for GoDaddy's US, UK, AU & CA client portfolio maintaining zero-defect delivery.</li>
              <li>Shipped 8–10 pixel-perfect pages daily using Beaver Builder and Elementor over a 20-month engagement without quality regression.</li>
              <li>Boosted Google PageSpeed scores from ~70 to 95+ across client sites by implementing server-side caching, lazy loading, and CDN setup.</li>
              <li>Architected custom WordPress themes and ACF-powered dynamic templates with 1:1 Figma-to-browser accuracy.</li>
              <li>Overhauled WooCommerce product, cart, and checkout flows with conversion-focused UX improvements.</li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>Boostability Pvt. Ltd.</span>
              <span className="text-xs font-mono">Aug 2021 – Jul 2023</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">Front-End Developer</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Built fully responsive, cross-browser HTML websites using Bootstrap and Tailwind CSS.</li>
              <li>Engineered interactive Vue.js components and customized WordPress theme functions using PHP and MySQL.</li>
            </ul>
          </div>

          <div className="space-y-1 pt-2">
            <div className="flex justify-between items-baseline font-bold text-slate-900">
              <span>Digital SEO</span>
              <span className="text-xs font-mono">Jun 2020 – Jul 2021</span>
            </div>
            <div className="italic text-slate-700 text-xs font-semibold">Web Designer</div>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Designed and launched client WordPress websites end-to-end using Oxygen Builder.</li>
              <li>Optimized websites for Core Web Vitals, mobile responsiveness, and on-page SEO.</li>
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
            <div><strong>Bachelor of Engineering (B.E.) — Electrical & Electronics:</strong> PSN Institute of Technology & Science (2010 – 2014)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
