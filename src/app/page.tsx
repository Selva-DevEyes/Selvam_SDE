'use client';

import React, { useState, useEffect } from 'react';
import { ProfileSidebar } from '@/components/ProfileSidebar';
import { HeaderNav } from '@/components/HeaderNav';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResumeHub } from '@/components/ResumeHub';
import { ContactSection } from '@/components/ContactSection';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');
  // Default prioritized role set to 'wordpress-fullstack' as requested
  const [currentRole, setCurrentRole] = useState<'python-ai' | 'wordpress-fullstack'>('wordpress-fullstack');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[var(--bg-body)] text-[var(--text-main)] relative overflow-hidden transition-colors duration-300">
      
      {/* RyanCV Animated Particles & Constellation Background */}
      <BackgroundAnimation />

      {/* Main App Container */}
      <div className="ryancv-wrapper relative z-10">
        
        {/* Mobile Header / Quick Switcher */}
        <div className="lg:hidden mb-4 p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] animate-ping" />
            <span className="text-xs font-mono font-bold text-[var(--text-main)]">
              SELVAM S.
            </span>
          </div>
          <span className="text-[10px] font-mono text-[var(--accent-green)] bg-[var(--accent-green-bg)] px-2 py-0.5 rounded border border-[var(--accent-green)]/20">
            Available for Hire
          </span>
        </div>

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
            
            {/* Top Floating Navigation Header in Single Row */}
            <HeaderNav
              activeTab={activeTab}
              onTabChange={setActiveTab}
              currentRole={currentRole}
              onRoleToggle={handleRoleToggle}
              theme={theme}
              onThemeToggle={handleThemeToggle}
            />

            {/* Dynamic Content Window Card */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-2xl transition-colors duration-300 min-h-[620px]">
              {activeTab === 'about' && (
                <AboutSection currentRole={currentRole} />
              )}
              {activeTab === 'resume' && (
                <ExperienceSection currentRole={currentRole} />
              )}
              {activeTab === 'skills' && (
                <SkillsSection currentRole={currentRole} />
              )}
              {activeTab === 'projects' && (
                <ProjectsSection currentRole={currentRole} />
              )}
              {activeTab === 'resumes' && (
                <ResumeHub currentRole={currentRole} />
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
