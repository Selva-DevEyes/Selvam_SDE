'use client';

import React from 'react';
import { User, Briefcase, Cpu, FolderGit2, FileText, Mail, Sparkles, Code2, Sun, Moon } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  onTabChange,
  currentRole,
  onRoleToggle,
  theme,
  onThemeToggle,
}) => {
  const tabs = [
    { id: 'about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { id: 'resume', label: 'RESUME', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: 'SKILLS', icon: <Cpu className="w-4 h-4" /> },
    { id: 'projects', label: 'WORKS', icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'resumes', label: 'CV HUB', icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-2 mb-6 flex flex-wrap items-center justify-between gap-2 shadow-xl sticky top-4 z-40 transition-colors duration-300">
      
      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1 overflow-x-auto py-1 px-1 scrollbar-none w-full sm:w-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-[var(--accent-green-bg)] text-[var(--accent-green)] border border-[var(--accent-green)]/40 shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-slate-800/20'
              }`}
            >
              <span className={isActive ? 'text-[var(--accent-green)]' : 'text-[var(--text-muted)]'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Role Switcher & Theme Toggle */}
      <div className="flex items-center gap-2">
        
        {/* Role Switcher Pill */}
        <div className="hidden md:flex items-center p-1 bg-[var(--bg-body)] rounded-xl border border-[var(--border-color)] text-xs">
          <button
            onClick={() => onRoleToggle('python-ai')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
              currentRole === 'python-ai'
                ? 'bg-[var(--accent-green)] text-slate-950 shadow-md'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Python AI</span>
          </button>
          <button
            onClick={() => onRoleToggle('wordpress-fullstack')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
              currentRole === 'wordpress-fullstack'
                ? 'bg-[var(--accent-cyan)] text-white shadow-md'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>WordPress</span>
          </button>
        </div>

        {/* Dark / Light Mode Toggle Button */}
        <button
          onClick={onThemeToggle}
          className="p-2.5 rounded-xl bg-[var(--bg-body)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)]/40 transition-all flex items-center justify-center"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Dark/Light Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-500" />
          )}
        </button>

      </div>

    </header>
  );
};
