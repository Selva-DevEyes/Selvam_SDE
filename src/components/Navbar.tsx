'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Menu, X, FileText, Code2, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRole, onRoleToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resumes', href: '#resumes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {PORTFOLIO_DATA.personal.handle}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                Selvam S · Dev
              </span>
            </div>
          </a>

          {/* Role Toggle Switcher in Navbar */}
          <div className="hidden lg:flex items-center p-1 bg-slate-900/90 rounded-full border border-slate-800 text-xs">
            <button
              onClick={() => onRoleToggle('python-ai')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                currentRole === 'python-ai'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Python & AI</span>
            </button>
            <button
              onClick={() => onRoleToggle('wordpress-fullstack')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                currentRole === 'wordpress-fullstack'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>WordPress & Full-Stack</span>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="#resumes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
          {/* Mobile Role Switcher */}
          <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => {
                onRoleToggle('python-ai');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                currentRole === 'python-ai'
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400'
              }`}
            >
              Python & AI Focus
            </button>
            <button
              onClick={() => {
                onRoleToggle('wordpress-fullstack');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                currentRole === 'wordpress-fullstack'
                  ? 'bg-cyan-500 text-white'
                  : 'text-slate-400'
              }`}
            >
              WordPress Focus
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-emerald-400 py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#resumes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resumes</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
