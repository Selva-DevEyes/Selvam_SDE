'use client';

import React from 'react';
import { User, Briefcase, Cpu, FolderGit2, FileText, Mail, Sparkles, Code2 } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  currentRole: 'python-ai' | 'wordpress-fullstack';
  onRoleToggle: (role: 'python-ai' | 'wordpress-fullstack') => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  onTabChange,
  currentRole,
  onRoleToggle,
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
    <header className="bg-[#161b20] border border-[#262b30] rounded-2xl p-2 mb-6 flex flex-wrap items-center justify-between gap-2 shadow-xl sticky top-4 z-40">
      
      {/* Navigation Tabs */}
      <nav className="flex items-center gap-1 overflow-x-auto py-1 px-1 scrollbar-none w-full sm:w-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-[#78cc6d]/15 text-[#78cc6d] border border-[#78cc6d]/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-[#1f252b]'
              }`}
            >
              <span className={isActive ? 'text-[#78cc6d]' : 'text-slate-400'}>
                {tab.icon}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Role Toggle Switcher in Header */}
      <div className="hidden md:flex items-center p-1 bg-[#12171b] rounded-xl border border-[#282c30] text-xs">
        <button
          onClick={() => onRoleToggle('python-ai')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
            currentRole === 'python-ai'
              ? 'bg-[#78cc6d] text-slate-950 shadow-md shadow-[#78cc6d]/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Python AI</span>
        </button>
        <button
          onClick={() => onRoleToggle('wordpress-fullstack')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${
            currentRole === 'wordpress-fullstack'
              ? 'bg-[#38bdf8] text-slate-950 shadow-md shadow-[#38bdf8]/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>WordPress</span>
        </button>
      </div>

    </header>
  );
};
