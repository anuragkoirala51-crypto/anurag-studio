import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  RotateCcw,
  X,
} from 'lucide-react';
import { getAsset } from '../config/assets';
import { FILM_PROJECTS, type FilmProject } from '../config/studioConfig';
import { ContactButton } from './ContactButton';
import { ResilientImage } from './ResilientImage';
import { StudioLogo } from './StudioLogo';

interface ProjectDetailViewProps {
  project: FilmProject | null;
  autoplayReel?: boolean;
  onClose: () => void;
  onSelectProject: (project: FilmProject, autoplayReel?: boolean) => void;
  onInquire: (topic: string) => void;
}

export function ProjectDetailView({
  project,
  autoplayReel = false,
  onClose,
  onSelectProject,
  onInquire,
}: ProjectDetailViewProps) {
  const [isPlaying, setIsPlaying] = useState(autoplayReel);
  const [progress, setProgress] = useState(0);
  const [activeFrameIdx, setActiveFrameIdx] = useState(0);

  useEffect(() => {
    setIsPlaying(autoplayReel);
    setProgress(0);
    setActiveFrameIdx(0);
  }, [project, autoplayReel]);

  // Animated cinema reel preview playback + outro trigger
  useEffect(() => {
    if (!project || !isPlaying) return;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + 1.25;
      });
    }, 100);

    return () => window.clearInterval(interval);
  }, [project, isPlaying]);

  useEffect(() => {
    if (progress < 34) setActiveFrameIdx(0);
    else if (progress < 68) setActiveFrameIdx(1);
    else setActiveFrameIdx(2);
  }, [progress]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const currentIdx = project
    ? FILM_PROJECTS.findIndex((item) => item.id === project.id)
    : -1;
  const nextProject =
    currentIdx >= 0
      ? FILM_PROJECTS[(currentIdx + 1) % FILM_PROJECTS.length]
      : null;
  const prevProject =
    currentIdx >= 0
      ? FILM_PROJECTS[(currentIdx - 1 + FILM_PROJECTS.length) % FILM_PROJECTS.length]
      : null;

  const showOutro = progress >= 95;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#080808] text-[#F5EBDD] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
        >
          {/* Sticky Top Detail Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between gap-4 px-5 sm:px-8 md:px-10 py-4 bg-[#080808]/90 backdrop-blur-md border-b border-[#F5EBDD]/15">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#F5EBDD]/80 hover:text-[#FF542B] transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Works</span>
            </button>

            <StudioLogo size="sm" className="hidden sm:inline-flex" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project detail"
              className="p-2 rounded-full border border-[#F5EBDD]/25 text-[#F5EBDD]/80 hover:text-[#F5EBDD] hover:border-[#FF542B] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-10 sm:py-14">
            {/* Project Title Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm uppercase tracking-widest text-[#F5EBDD]/65 mb-2">
                  <span className="text-[#FF542B] font-medium">Film {project.number}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="text-[#71C7E9]">{project.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="tabular-nums">{project.year}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="tabular-nums">{project.runtime}</span>
                </div>

                <h1
                  id="project-detail-title"
                  className="hero-heading font-black uppercase leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
                >
                  {project.title}
                </h1>
              </div>

              <p className="text-sm uppercase tracking-widest text-[#F5EBDD]/55">
                {project.format}
              </p>
            </div>

            {/* Interactive Cinematic Video Preview Player */}
            <div className="relative w-full aspect-[16/9] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#F5EBDD]/25 bg-[#0C0B0A] mb-10">
              {/* Video Marker */}
              <span
                data-marker="video"
                className="pointer-events-none absolute top-3 left-3 z-30 px-2 py-0.5 rounded text-[11px] font-normal tracking-wide text-zinc-400 bg-black/60 backdrop-blur-sm select-none"
              >
                video {parseInt(project.number, 10) + 1}
              </span>

              {!showOutro ? (
                <motion.div
                  key={`${project.id}-${activeFrameIdx}`}
                  initial={{ opacity: 0.5, scale: 1.04 }}
                  animate={{
                    opacity: 1,
                    scale: isPlaying ? 1.1 : 1,
                  }}
                  transition={{ duration: 3.2, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <ResilientImage
                    src={
                      getAsset(
                        project.galleryAssets[activeFrameIdx] ?? project.primaryAsset,
                      ).src
                    }
                    alt={`${project.title} preview frame`}
                    className="w-full h-full object-cover block"
                  />
                </motion.div>
              ) : (
                /* ANURAG STUDIOS Cinema Outro Card */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full h-full flex flex-col items-center justify-center gap-6 bg-[#080808] p-6 text-center"
                >
                  <StudioLogo size="lg" />
                  <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#F5EBDD]/60">
                    End of Preview Reel &middot; {project.title}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setProgress(0);
                      setIsPlaying(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F5EBDD]/40 px-6 py-2.5 text-xs uppercase tracking-widest text-[#F5EBDD] hover:border-[#FF542B] hover:text-[#FF542B] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Replay Preview</span>
                  </button>
                </motion.div>
              )}

              {/* Subtle Letterbox Vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-[#080808]/35"
              />

              {/* Center Play Button Overlay when Paused */}
              {!isPlaying && !showOutro && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play film preview"
                  className="absolute inset-0 m-auto w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#FF542B] text-[#080808] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>
              )}

              {/* Bottom Player Controls */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col gap-3">
                <div
                  role="slider"
                  aria-label="Preview timeline"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  tabIndex={0}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = Math.max(
                      0,
                      Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
                    );
                    setProgress(pct);
                  }}
                  className="w-full h-1.5 rounded-full bg-[#F5EBDD]/20 cursor-pointer overflow-hidden"
                >
                  <div
                    className="h-full bg-[#FF542B] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#F5EBDD]/80">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (progress >= 95) setProgress(0);
                        setIsPlaying((p) => !p);
                      }}
                      className="inline-flex items-center gap-1.5 hover:text-[#FF542B] transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Play Reel</span>
                        </>
                      )}
                    </button>
                    <span className="text-[#F5EBDD]/40">|</span>
                    <span className="tabular-nums">
                      00:{String(Math.floor((progress / 100) * 18)).padStart(2, '0')} / 00:18
                    </span>
                  </div>

                  <span className="hidden sm:inline text-[#F5EBDD]/55">
                    Interactive Reel Preview · Replace with Vimeo / MP4 Embed
                  </span>
                </div>
              </div>
            </div>

            {/* Credits + Synopsis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#F5EBDD]/15">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <h2 className="text-xs uppercase tracking-[0.26em] text-[#FF542B] font-medium">
                  Synopsis &amp; Director&rsquo;s Note
                </h2>
                <p className="text-xl sm:text-2xl font-normal leading-relaxed text-[#F5EBDD]">
                  {project.shortDescription}
                </p>
                <p className="text-sm sm:text-base font-light leading-relaxed text-[#F5EBDD]/70">
                  {project.directorNote}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-6 rounded-[28px] border border-[#F5EBDD]/15 bg-[#0F0E0D] p-6 sm:p-8">
                <dl className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/50">
                      Director
                    </dt>
                    <dd className="text-[#F5EBDD] font-medium mt-1">
                      {project.director}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/50">
                      Cinematographer
                    </dt>
                    <dd className="text-[#F5EBDD] font-medium mt-1">
                      {project.cinematographer}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/50">
                      Editor
                    </dt>
                    <dd className="text-[#F5EBDD] font-medium mt-1">
                      {project.editor}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/50">
                      Year / Runtime
                    </dt>
                    <dd className="text-[#F5EBDD] font-medium mt-1 tabular-nums">
                      {project.year} &middot; {project.runtime}
                    </dd>
                  </div>
                </dl>

                <ContactButton
                  label="Commission Similar Film"
                  onClick={() => {
                    const title = project.title;
                    onClose();
                    onInquire(title);
                  }}
                  className="w-full"
                />
              </div>
            </div>

            {/* Film Stills Gallery */}
            <div className="py-12 border-b border-[#F5EBDD]/15">
              <h2 className="text-xs uppercase tracking-[0.26em] text-[#71C7E9] font-medium mb-6">
                Selected Production Stills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {project.galleryAssets.map((assetKey, idx) => {
                  const asset = getAsset(assetKey);
                  return (
                    <button
                      key={`${assetKey}-${idx}`}
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        setProgress(idx * 35);
                        setActiveFrameIdx(idx);
                      }}
                      className={`group relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeFrameIdx === idx && !showOutro
                          ? 'border-[#FF542B]'
                          : 'border-[#F5EBDD]/15 hover:border-[#F5EBDD]/45'
                      }`}
                    >
                      <ResilientImage
                        src={asset.src}
                        alt={asset.alt}
                        className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Previous / Next Film Switcher */}
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(prevProject, false)}
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#F5EBDD]/75 hover:text-[#FF542B] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    Prev: {prevProject.number} {prevProject.title}
                  </span>
                </button>
              )}

              {nextProject && (
                <button
                  type="button"
                  onClick={() => onSelectProject(nextProject, false)}
                  className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#F5EBDD] hover:text-[#FF542B] transition-colors cursor-pointer"
                >
                  <span>
                    Next: {nextProject.number} {nextProject.title}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
