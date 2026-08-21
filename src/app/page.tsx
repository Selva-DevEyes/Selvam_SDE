'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResumeHub } from '@/components/ResumeHub';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentRole, setCurrentRole] = useState<'python-ai' | 'wordpress-fullstack'>('python-ai');

  const handleRoleToggle = (role: 'python-ai' | 'wordpress-fullstack') => {
    setCurrentRole(role);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#080c14] relative">
      <Navbar currentRole={currentRole} onRoleToggle={handleRoleToggle} />
      
      <Hero currentRole={currentRole} onRoleToggle={handleRoleToggle} />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ExperienceSection />
      
      <ProjectsSection />
      
      <ResumeHub />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}
