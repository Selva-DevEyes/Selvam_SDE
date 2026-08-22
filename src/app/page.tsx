'use client';

import React, { useState } from 'react';
import { ProfileSidebar } from '@/components/ProfileSidebar';
import { HeaderNav } from '@/components/HeaderNav';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResumeHub } from '@/components/ResumeHub';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [currentRole, setCurrentRole] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection currentRole={currentRole} />;
      case 'resume':
        return <ExperienceSection currentRole={currentRole} />;
      case 'skills':
        return <SkillsSection currentRole={currentRole} />;
      case 'projects':
        return <ProjectsSection currentRole={currentRole} />;
      case 'resumes':
        return <ResumeHub currentRole={currentRole} />;
      case 'contact':
        return <ContactSection currentRole={currentRole} />;
      default:
        return <AboutSection currentRole={currentRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#12171b] text-slate-100 flex items-center justify-center p-3 sm:p-6 lg:p-10">
      
      {/* RyanCV DataOps Main Container */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Sticky Profile Sidebar */}
        <ProfileSidebar
          currentRole={currentRole}
          onRoleToggle={setCurrentRole}
          onNavigate={setActiveTab}
        />

        {/* Right Main Content Card Window */}
        <div className="flex-1 w-full min-w-0 flex flex-col">
          
          {/* Floating Header Tab Navigation */}
          <HeaderNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            currentRole={currentRole}
            onRoleToggle={setCurrentRole}
          />

          {/* Main Card Section Box */}
          <main className="flex-1 bg-[#161b20] border border-[#262b30] rounded-3xl p-6 sm:p-10 shadow-2xl min-h-[600px] relative overflow-hidden">
            {renderTabContent()}
          </main>

        </div>

      </div>

    </div>
  );
}
