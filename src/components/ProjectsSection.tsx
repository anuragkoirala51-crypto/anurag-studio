import React, { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { Play } from 'lucide-react';
import { getAsset } from '../config/assets';
import { FILM_PROJECTS, type FilmProject } from '../config/studioConfig';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ResilientImage } from './ResilientImage';

type CategoryFilter = 'All' | FilmProject['category'];

const FILTER_OPTIONS: CategoryFilter[] = [
  'All',
  'Short Film',
  'Commercial',
  'Music Video',
  'Documentary',
];

interface ProjectCardProps {
  project: FilmProject;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onOpenProject: (project: FilmProject, autoplayReel?: boolean) => void;
}

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
  onOpenProject,
}: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const rangeStart = index / Math.max(totalCards, 1);
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  const primaryAsset = getAsset(project.primaryAsset);
  const frameOne = getAsset(project.galleryAssets[0]);
  const frameTwo = getAsset(project.galleryAssets[1]);

  return (
    <div className="min-h-[85vh] sticky top-20 md:top-24 flex items-start justify-center pb-10">
      <motion.article
        style={{
          scale,
          top: `${Math.min(index * 22, 110)}px`,
          transformOrigin: 'top center',
          willChange: 'transform',
        }}
        className="relative w-full max-w-6xl rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#F5EBDD]/30 bg-[#0C0B0A] p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        {/* Top Row: Number, Film Metadata, Title, Credits, Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 sm:mb-6 md:mb-7 px-1 sm:px-2">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
            <span
              className="font-black leading-none text-[#FF542B] shrink-0 tabular-nums"
              style={{ fontSize: 'clamp(2.75rem, 7.5vw, 108px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-light uppercase tracking-widest text-[#F5EBDD]/65">
                <span className="text-[#71C7E9]">{project.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span className="tabular-nums">{project.year}</span>
                <span aria-hidden="true">&middot;</span>
                <span className="tabular-nums">{project.runtime}</span>
              </div>

              <h3
                className="text-[#F5EBDD] font-bold uppercase tracking-tight leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.3rem)' }}
              >
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F5EBDD]/60 font-light mt-1 line-clamp-1">
                Dir. {project.director} &middot; DoP {project.cinematographer}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenProject(project, true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF542B] text-[#080808] font-semibold uppercase tracking-widest whitespace-nowrap shrink-0 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm hover:brightness-110 transition-all duration-200 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Film</span>
            </button>
            <LiveProjectButton
              label="View Project"
              onClick={() => onOpenProject(project, false)}
            />
          </div>
        </div>

        {/* Short Film Synopsis */}
        <p className="px-1 sm:px-2 mb-5 text-sm sm:text-base text-[#F5EBDD]/75 font-light max-w-3xl leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Bottom Row: Preserved 40% Left Column (2 stacked) + 60% Right Poster Column */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-5 items-stretch">
          {/* Left Column (40%) */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <button
              type="button"
              data-cursor="media"
              onClick={() => onOpenProject(project, false)}
              aria-label={`Inspect ${project.title} frame 1`}
              className="group relative w-full rounded-[28px] sm:rounded-[38px] md:rounded-[44px] overflow-hidden bg-[#151311] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B]"
              style={{ height: 'clamp(120px, 14vw, 200px)' }}
            >
              <ResilientImage
                src={frameOne.src}
                alt={`${project.title} — ${frameOne.alt}`}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>

            <button
              type="button"
              data-cursor="media"
              onClick={() => onOpenProject(project, false)}
              aria-label={`Inspect ${project.title} frame 2`}
              className="group relative w-full rounded-[28px] sm:rounded-[38px] md:rounded-[44px] overflow-hidden bg-[#151311] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B]"
              style={{ height: 'clamp(150px, 19vw, 285px)' }}
            >
              <ResilientImage
                src={frameTwo.src}
                alt={`${project.title} — ${frameTwo.alt}`}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>
          </div>

          {/* Right Column (60% Movie-Poster Hero Still) */}
          <div className="md:col-span-6">
            <button
              type="button"
              data-cursor="media"
              onClick={() => onOpenProject(project, true)}
              aria-label={`Watch ${project.title}`}
              className="group relative w-full h-[250px] sm:h-[330px] md:h-full rounded-[28px] sm:rounded-[38px] md:rounded-[44px] overflow-hidden bg-[#151311] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B]"
            >
              <ResilientImage
                src={primaryAsset.src}
                alt={primaryAsset.alt}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
              {/* Video Marker */}
              <span
                data-marker="video"
                className="pointer-events-none absolute top-4 left-4 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase bg-[#FF542B] text-[#080808] shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#080808] animate-ping" />
                VIDEO {parseInt(project.number, 10) + 1} · {project.category}
              </span>
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-left">
                <div>
                  <span className="block text-[11px] uppercase tracking-[0.24em] text-[#FF542B]">
                    {project.format}
                  </span>
                  <span className="block text-base sm:text-lg font-medium uppercase tracking-wide text-[#F5EBDD] mt-0.5">
                    {project.title}
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/70 tabular-nums">
                  {primaryAsset.badge}
                </span>
              </div>
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

interface ProjectsSectionProps {
  onOpenProject: (project: FilmProject, autoplayReel?: boolean) => void;
}

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return FILM_PROJECTS;
    return FILM_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="works"
      className="relative z-10 w-full bg-[#080808] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
    >
      <FadeIn delay={0} y={40}>
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 10.5vw, 140px)' }}
          >
            Selected Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] text-[#F5EBDD]/70 font-light mt-4 max-w-2xl mx-auto">
            A collection of stories, frames and visual experiences.
          </p>
        </div>
      </FadeIn>

      {/* Interactive Category Filter Bar */}
      <div className="flex justify-center mb-14 sm:mb-20">
        <div
          role="tablist"
          aria-label="Filter film projects by category"
          className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#131210] border border-[#F5EBDD]/15"
        >
          {FILTER_OPTIONS.map((category) => {
            const active = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-[#FF542B] text-[#080808]'
                    : 'text-[#F5EBDD]/70 hover:text-[#F5EBDD]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preserved Sticky Stacking Cards Track */}
      <div ref={containerRef} className="relative w-full pb-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={filteredProjects.length}
            progress={scrollYProgress}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}
