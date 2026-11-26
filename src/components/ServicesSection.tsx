import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { getAsset } from '../config/assets';
import { STUDIO_SERVICES } from '../config/studioConfig';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#F5EBDD] text-[#080808] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-28 sm:pb-36 md:pb-44"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#080808] font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            Services
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.26em] text-[#080808]/60 mt-4">
            End-to-End Film Production &amp; Visual Craft
          </p>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {STUDIO_SERVICES.map((service, i) => {
          const preview = getAsset(service.previewAsset);
          const isHovered = hoveredIndex === i;

          return (
            <FadeIn
              key={service.number}
              delay={i * 0.08}
              y={30}
              className="group py-8 sm:py-10 md:py-12 transition-colors duration-200"
              style={{
                borderTop: '1px solid rgba(8, 8, 8, 0.16)',
                borderBottom:
                  i === STUDIO_SERVICES.length - 1
                    ? '1px solid rgba(8, 8, 8, 0.16)'
                    : undefined,
              }}
            >
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 md:gap-14 flex-1">
                  <span
                    className={`font-black leading-none shrink-0 tabular-nums sm:min-w-[8rem] md:min-w-[10.5rem] transition-colors duration-200 ${
                      isHovered ? 'text-[#FF542B]' : 'text-[#080808]'
                    }`}
                    style={{ fontSize: 'clamp(3rem, 9vw, 130px)' }}
                  >
                    {service.number}
                  </span>

                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    <h3
                      className="font-semibold uppercase text-[#080808] tracking-tight leading-tight"
                      style={{ fontSize: 'clamp(1.15rem, 2.3vw, 2.2rem)' }}
                    >
                      {service.name}
                    </h3>

                    {/* Clean unboxed capabilities separated by typographic middot */}
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#FF542B]">
                      {service.capabilities.join(' · ')}
                    </p>

                    <p
                      className="font-light leading-relaxed max-w-2xl text-[#080808]/70"
                      style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.15rem)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Cinematic Frame Reveal on Hover / Mobile Subtle Thumbnail */}
                <div className="w-full sm:w-[240px] lg:w-[260px] shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0.78,
                        scale: isHovered ? 1.03 : 1,
                      }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#080808] border border-[#080808]/15"
                    >
                      <ResilientImage
                        src={preview.src}
                        alt={preview.alt}
                        loading="lazy"
                        className="w-full h-full object-cover block"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
