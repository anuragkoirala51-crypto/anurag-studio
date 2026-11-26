import React from 'react';
import { STUDIO_ASSETS } from '../config/assets';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  onOpenContact: () => void;
}

const ABOUT_COPY =
  'Anurag Studios is a creative film production house dedicated to creating visually compelling and emotionally engaging stories. From the first idea to the final frame, we bring creative visions to life through cinematic storytelling, thoughtful direction and powerful visuals.';

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#080808] px-5 sm:px-8 md:px-10 py-28 sm:py-36"
      style={{ overflowX: 'clip' }}
    >
      {/* Top-Left Floating Cinema Frame — IMAGE 03 (Behind-the-scenes) */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none select-none hidden sm:block absolute top-[6%] left-[2%] md:left-[4%] w-[150px] md:w-[220px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#F5EBDD]/15 opacity-70 z-0"
      >
        <ResilientImage
          src={STUDIO_ASSETS.IMAGE_03.src}
          alt={STUDIO_ASSETS.IMAGE_03.alt}
          className="w-full h-full object-cover block"
        />
      </FadeIn>

      {/* Bottom-Left Floating Cinema Frame — IMAGE 08 (Camera setup) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none select-none hidden sm:block absolute bottom-[8%] left-[4%] md:left-[8%] w-[140px] md:w-[200px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#FF542B]/25 opacity-75 z-0"
      >
        <ResilientImage
          src={STUDIO_ASSETS.IMAGE_08.src}
          alt={STUDIO_ASSETS.IMAGE_08.alt}
          className="w-full h-full object-cover block"
        />
      </FadeIn>

      {/* Top-Right Floating Cinema Frame — IMAGE 09 (Film crew) */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none select-none hidden sm:block absolute top-[7%] right-[2%] md:right-[4%] w-[160px] md:w-[230px] aspect-[16/10] rounded-2xl overflow-hidden border border-[#71C7E9]/25 opacity-70 z-0"
      >
        <ResilientImage
          src={STUDIO_ASSETS.IMAGE_09.src}
          alt={STUDIO_ASSETS.IMAGE_09.alt}
          className="w-full h-full object-cover block"
        />
      </FadeIn>

      {/* Bottom-Right Floating Cinema Frame — IMAGE 10 (Creative direction) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none select-none hidden sm:block absolute bottom-[8%] right-[4%] md:right-[8%] w-[165px] md:w-[235px] aspect-[16/10] rounded-2xl overflow-hidden border border-[#F5EBDD]/15 opacity-75 z-0"
      >
        <ResilientImage
          src={STUDIO_ASSETS.IMAGE_10.src}
          alt={STUDIO_ASSETS.IMAGE_10.alt}
          className="w-full h-full object-cover block"
        />
      </FadeIn>

      {/* Center Editorial Content */}
      <div className="relative z-10 flex flex-col items-center gap-14 sm:gap-16 md:gap-20 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-[0.95] tracking-tight text-center text-balance"
              style={{ fontSize: 'clamp(2.25rem, 6.2vw, 6.25rem)' }}
            >
              EVERY FRAME HAS A STORY.{' '}
              <span className="hero-heading-accent">
                EVERY STORY DESERVES TO BE TOLD.
              </span>
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_COPY}
            className="text-[#F5EBDD] font-medium text-center leading-relaxed max-w-[640px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
          />
        </div>

        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Start a Project" onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
}
