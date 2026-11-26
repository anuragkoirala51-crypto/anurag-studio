import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getAsset } from '../config/assets';
import { MARQUEE_REEL_ROW_1, MARQUEE_REEL_ROW_2 } from '../config/studioConfig';
import { ResilientImage } from './ResilientImage';

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const row1 = useMemo(
    () => [...MARQUEE_REEL_ROW_1, ...MARQUEE_REEL_ROW_1, ...MARQUEE_REEL_ROW_1],
    [],
  );

  const row2 = useMemo(
    () => [...MARQUEE_REEL_ROW_2, ...MARQUEE_REEL_ROW_2, ...MARQUEE_REEL_ROW_2],
    [],
  );

  useEffect(() => {
    let rafId = 0;

    const updateOffset = () => {
      rafId = 0;
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateOffset);
      }
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Anurag Studios cinematic frame reel"
      className="w-full bg-[#080808] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="w-full overflow-hidden flex justify-center">
          <div
            className="flex flex-nowrap gap-3"
            style={{
              transform: `translateX(${offset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row1.map((item, idx) => {
              const asset = getAsset(item.asset);
              return (
                <figure
                  key={`reel-r1-${idx}`}
                  className="group relative w-[320px] sm:w-[420px] h-[210px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141210] border border-[#F5EBDD]/10"
                >
                  <ResilientImage
                    src={asset.src}
                    alt={asset.alt}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent px-4 py-3 flex items-center justify-between text-xs uppercase tracking-widest text-[#F5EBDD] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>{item.caption}</span>
                    <span className="text-[#FF542B] tabular-nums">
                      IMG {asset.slot}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="w-full overflow-hidden flex justify-center">
          <div
            className="flex flex-nowrap gap-3"
            style={{
              transform: `translateX(${-(offset - 200)}px)`,
              willChange: 'transform',
            }}
          >
            {row2.map((item, idx) => {
              const asset = getAsset(item.asset);
              return (
                <figure
                  key={`reel-r2-${idx}`}
                  className="group relative w-[320px] sm:w-[420px] h-[210px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141210] border border-[#F5EBDD]/10"
                >
                  <ResilientImage
                    src={asset.src}
                    alt={asset.alt}
                    loading="lazy"
                    className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent px-4 py-3 flex items-center justify-between text-xs uppercase tracking-widest text-[#F5EBDD] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>{item.caption}</span>
                    <span className="text-[#71C7E9] tabular-nums">
                      IMG {asset.slot}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
