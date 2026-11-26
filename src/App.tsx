import React, { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { JournalSection } from './components/JournalSection';
import { MarqueeSection } from './components/MarqueeSection';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { StudioCursor } from './components/StudioCursor';
import { StudioIntro } from './components/StudioIntro';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FILM_PROJECTS, type FilmProject } from './config/studioConfig';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('');
  const [activeProject, setActiveProject] = useState<{
    project: FilmProject;
    autoplay: boolean;
  } | null>(null);

  const handleOpenContact = (topic = '') => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  const handleOpenProject = (project: FilmProject, autoplay = false) => {
    setActiveProject({ project, autoplay });
  };

  const handleOpenShowreel = () => {
    if (FILM_PROJECTS.length > 0) {
      setActiveProject({ project: FILM_PROJECTS[0], autoplay: true });
    }
  };

  return (
    <>
      <StudioIntro />
      <StudioCursor />
      <div className="film-grain-overlay" aria-hidden="true" />

      <main
        className="min-h-screen w-full bg-[#080808] text-[#F5EBDD]"
        style={{ overflowX: 'clip' }}
      >
        <HeroSection
          onOpenContact={() => handleOpenContact()}
          onOpenShowreel={handleOpenShowreel}
        />
        <MarqueeSection />
        <AboutSection onOpenContact={() => handleOpenContact()} />
        <ServicesSection />
        <ProjectsSection onOpenProject={handleOpenProject} />
        <TeamSection />
        <TestimonialsSection />
        <JournalSection />
        <ContactSection onOpenContact={() => handleOpenContact()} />
      </main>

      <ProjectDetailView
        project={activeProject?.project ?? null}
        autoplayReel={activeProject?.autoplay ?? false}
        onClose={() => setActiveProject(null)}
        onSelectProject={handleOpenProject}
        onInquire={(topic) => handleOpenContact(topic)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultTopic={contactTopic}
      />
    </>
  );
}
