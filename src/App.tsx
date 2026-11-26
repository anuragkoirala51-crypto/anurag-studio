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
  const [showMarkers, setShowMarkers] = useState(true);
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
    <div className={showMarkers ? '' : 'hide-markers'}>
      <StudioIntro />
      <StudioCursor />
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Floating Asset Marker Toggle Pill */}
      <aside
        aria-label="Asset Markers Toolbar"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
      >
        <button
          type="button"
          onClick={() => setShowMarkers((prev) => !prev)}
          aria-label={showMarkers ? 'Hide asset numbers' : 'Show asset numbers'}
          className={`group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-medium shadow-2xl backdrop-blur-xl border transition-all cursor-pointer select-none ${
            showMarkers
              ? 'bg-[#0E0D0C]/90 text-[#FF542B] border-[#FF542B]/50 hover:bg-[#FF542B] hover:text-[#080808]'
              : 'bg-[#0E0D0C]/80 text-[#F5EBDD]/60 border-[#F5EBDD]/20 hover:text-[#F5EBDD] hover:border-[#F5EBDD]/40'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              showMarkers ? 'bg-[#FF542B] group-hover:bg-[#080808] animate-pulse' : 'bg-[#F5EBDD]/40'
            }`}
          />
          <span>{showMarkers ? 'Markers: ON (1-25)' : 'Markers: OFF'}</span>
        </button>
      </aside>

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
    </div>
  );
}
