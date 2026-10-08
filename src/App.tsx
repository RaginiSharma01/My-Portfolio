/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Toast, ToastMessage } from './components/Toast';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2, 6);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] flex flex-col font-sans selection:bg-blue-600/30 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Layout */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={scrollToContact}
          onShowToast={showToast}
        />

        {/* Biography & Timeline Section */}
        <Biography />

        {/* Projects Showcase & Case Studies */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Craftsmanship & Skills Matrix */}
        <SkillsSection />

        {/* Professional Connections & Contact */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Formatted Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Interactive Notification Toaster */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
