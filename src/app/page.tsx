'use client';

import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from '@/components/ProfileSidebar';
import { HeaderNav } from '@/components/HeaderNav';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import { User, Briefcase, Cpu, FolderGit2, Mail, Menu, X, Sparkles, Code2, Sun, Moon } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [currentRole, setCurrentRole] = useState<'python-ai' | 'wordpress-fullstack'>('wordpress-fullstack');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('ryancv_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('ryancv_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleRoleToggle = (role: 'python-ai' | 'wordpress-fullstack') => {
    setCurrentRole(role);
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId === 'resumes' ? 'resume' : tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { id: 'resume', label: 'RESUME & CV', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: 'SKILLS', icon: <Cpu className="w-4 h-4" /> },
    { id: 'projects', label: 'WORKS', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-body)] text-[var(--text-main)] relative overflow-hidden transition-colors duration-300">
      
      {/* RyanCV Animated Particles & Constellation Background */}
      <BackgroundAnimation />

      {/* Main App Container */}
      <div className="ryancv-wrapper relative z-10">
        
        {/* Mobile Top Header Bar with Profile Name & Hamburger Icon */}
        <div className="lg:hidden mb-4 p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-between shadow-xl sticky top-3 z-50 transition-colors duration-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] animate-ping" />
            <div>
              <span className="text-sm font-mono font-extrabold text-[var(--text-main)] block">
                SELVAM S.
              </span>
              <span className="text-[10px] font-mono text-[var(--accent-green)]">
                WordPress Specialist [6+ Yrs]
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Theme Toggle Icon on Top Bar */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[var(--accent-green)] text-slate-950 font-bold shadow-md hover:opacity-90 transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Over Dropdown Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mb-6 p-5 rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--accent-green)]/60 shadow-2xl space-y-5 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="text-xs font-mono text-[var(--accent-green)] font-bold uppercase tracking-wider border-b border-[var(--border-color)] pb-2 flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="text-[10px] text-[var(--text-muted)]">Select Section</span>
            </div>

            {/* Mobile Nav Links List */}
            <div className="grid grid-cols-1 gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id || (activeTab === 'resumes' && tab.id === 'resume');
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleNavigate(tab.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                      isActive
                        ? 'bg-[var(--accent-green)] text-slate-950 shadow-md'
                        : 'bg-[var(--bg-body)] text-[var(--text-muted)] border border-[var(--border-color)] hover:text-[var(--text-main)]'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Role Switcher in Mobile Drawer */}
            <div className="p-3 rounded-2xl bg-[var(--bg-body)] border border-[var(--border-color)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--text-muted)] text-center uppercase tracking-widest font-bold">
                Active Perspective
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <button
                  onClick={() => handleRoleToggle('wordpress-fullstack')}
                  className={`py-2 px-2 rounded-xl font-bold flex items-center justify-center gap-1 transition-all ${
                    currentRole === 'wordpress-fullstack'
                      ? 'bg-[var(--accent-green)] text-slate-950 shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>WordPress</span>
                </button>
                <button
                  onClick={() => handleRoleToggle('python-ai')}
                  className={`py-2 px-2 rounded-xl font-bold flex items-center justify-center gap-1 transition-all ${
                    currentRole === 'python-ai'
                      ? 'bg-[var(--accent-cyan)] text-white shadow-md'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Python AI</span>
                </button>
              </div>
            </div>

            {/* Theme Toggle inside Mobile Drawer */}
            <button
              onClick={handleThemeToggle}
              className="w-full py-3 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-main)] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:border-[var(--accent-green)] transition-all"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Switch to Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-500" />
                  <span>Switch to Dark Theme</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Desktop Split vCard Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sticky Profile Card */}
          <ProfileSidebar
            currentRole={currentRole}
            onRoleToggle={handleRoleToggle}
            onNavigate={handleNavigate}
            theme={theme}
            onThemeToggle={handleThemeToggle}
          />

          {/* Right Main Content Window */}
          <div className="flex-1 w-full min-w-0">
            
            {/* Desktop Top Floating Header Navigation */}
            <HeaderNav
              activeTab={activeTab}
              onTabChange={setActiveTab}
              currentRole={currentRole}
              onRoleToggle={handleRoleToggle}
              theme={theme}
              onThemeToggle={handleThemeToggle}
            />

            {/* Dynamic Content Window Card */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-5 sm:p-10 shadow-2xl transition-colors duration-300 min-h-[620px]">
              {activeTab === 'about' && (
                <AboutSection currentRole={currentRole} />
              )}
              {(activeTab === 'resume' || activeTab === 'resumes') && (
                <ExperienceSection currentRole={currentRole} />
              )}
              {activeTab === 'skills' && (
                <SkillsSection currentRole={currentRole} />
              )}
              {activeTab === 'projects' && (
                <ProjectsSection currentRole={currentRole} />
              )}
              {activeTab === 'contact' && (
                <ContactSection currentRole={currentRole} />
              )}
            </div>

            {/* RyanCV Sleek Footer Bar */}
            <footer className="mt-6 py-4 px-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-2 shadow-lg font-mono">
              <div>
                © {new Date().getFullYear()} <span className="text-[var(--accent-green)] font-bold">SELVAM S.</span> All rights reserved.
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Selva-DevEyes/Selvam_SDE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-green)] transition-colors"
                >
                  GitHub Repository
                </a>
                <span>•</span>
                <a
                  href="https://selvam-sde.onrender.com/"
                  className="hover:text-[var(--accent-green)] transition-colors"
                >
                  Live Deployment
                </a>
              </div>
            </footer>

          </div>

        </div>

      </div>

    </main>
  );
}
