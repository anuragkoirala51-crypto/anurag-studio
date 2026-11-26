import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { STUDIO_ASSETS } from '../config/assets';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { Magnet } from './Magnet';
import { ResilientImage } from './ResilientImage';
import { StudioLogo } from './StudioLogo';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenShowreel: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Team', href: '#team' },
  { label: 'Journal', href: '#journal' },
];

export function HeroSection({
  onOpenContact,
  onOpenShowreel,
}: HeroSectionProps) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 140]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.08]);

  const heroBg = STUDIO_ASSETS.IMAGE_01;
  const directorStill = STUDIO_ASSETS.IMAGE_02;

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#080808]"
      style={{ overflowX: 'clip' }}
    >
      {/* Parallax Full-Bleed Soundstage Backdrop (IMAGE 01) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: bgY, scale: bgScale, willChange: 'transform' }}
          className="w-full h-full"
        >
          <ResilientImage
            src={heroBg.src}
            alt={heroBg.alt}
            className="w-full h-full object-cover opacity-55"
          />
        </motion.div>
        {/* Measured Cinematic Scrims */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#080808]/85 via-[#080808]/45 to-[#080808]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,84,43,0.16),transparent_55%),radial-gradient(circle_at_20%_70%,rgba(113,199,233,0.10),transparent_50%)]"
        />
      </div>

      {/* Top Navigation Bar (Clean 3-Zone Contract) */}
      <FadeIn delay={0} y={-20} as="header" className="relative z-30 w-full">
        <div className="w-full flex items-center justify-between gap-8 px-6 md:px-10 pt-6 md:pt-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            aria-label="Anurag Studios Home"
            className="whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B] rounded-sm"
          >
            <StudioLogo size="md" />
          </a>

          {/* Zone 2: Single-line Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 lg:gap-10"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#F5EBDD] font-medium uppercase tracking-wider text-sm lg:text-base hover:text-[#FF542B] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#F5EBDD]/50 px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#F5EBDD] hover:border-[#FF542B] hover:bg-[#FF542B] hover:text-[#080808] transition-all duration-200 whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Center Display Lockup + Magnetic Cinema Viewfinder Frame */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-10 py-10">
        {/* Massive Brand Title */}
        <div className="w-full overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <p className="hero-heading font-black uppercase tracking-tight leading-[0.88] whitespace-nowrap w-full text-center text-[11vw] sm:text-[11.5vw] lg:text-[12.2vw] select-none">
              ANURAG STUDIOS
            </p>
          </FadeIn>
        </div>

        {/* Main Statement & Magnetic Viewfinder Reel Trigger */}
        <div className="max-w-7xl w-full mx-auto mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <FadeIn delay={0.3} y={28}>
              <h1
                className="text-[#F5EBDD] font-black uppercase tracking-tight leading-[1.02] text-balance"
                style={{ fontSize: 'clamp(1.75rem, 4.1vw, 4rem)' }}
              >
                WE DON&rsquo;T JUST MAKE FILMS.{' '}
                <span className="text-[#FF542B]">WE CREATE STORIES THAT STAY.</span>
              </h1>
            </FadeIn>
          </div>

          {/* Preserved Magnetic Interactive Element (Cinema Director Frame — IMAGE 02) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <FadeIn delay={0.45} y={30}>
              <Magnet
                padding={130}
                strength={3.5}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
              >
                <button
                  type="button"
                  onClick={onOpenShowreel}
                  data-cursor="media"
                  aria-label="Play Anurag Studios Showreel Preview"
                  className="group relative w-[240px] sm:w-[290px] aspect-[16/10] rounded-[28px] overflow-hidden border border-[#F5EBDD]/30 bg-[#0E0D0C] text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B]"
                >
                  <ResilientImage
                    src={directorStill.src}
                    alt={directorStill.alt}
                    className="w-full h-full object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-[#FF542B] text-[#080808] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#F5EBDD]">
                    <span className="font-medium">Studio Showreel</span>
                    <span className="text-[#71C7E9] font-light tabular-nums">01:45</span>
                  </div>
                </button>
              </Magnet>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Split Bar (Preserved Original Composition) */}
      <div className="relative z-20 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end px-6 md:px-10 pb-8 sm:pb-10 gap-6">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#F5EBDD]/85 font-light leading-relaxed max-w-md"
            style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.125rem)' }}
          >
            An independent creative film house transforming ideas into cinematic
            experiences through storytelling, visual direction and filmmaking.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a href="#works">
            <LiveProjectButton label="Explore Our Work" />
          </a>
          <ContactButton label="Start a Project" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
}
