import React from 'react';
import { getAsset } from '../config/assets';
import { TESTIMONIALS } from '../config/studioConfig';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#F5EBDD] text-[#080808] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-24">
            <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FF542B] font-medium mb-3">
              Collaborations
            </p>
            <h2
              className="text-[#080808] font-black uppercase leading-[0.95] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 6.5vw, 5.5rem)' }}
            >
              Trusted By Creators. Built On Stories.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {TESTIMONIALS.map((item, idx) => {
            const portrait = getAsset(item.asset);

            return (
              <FadeIn key={item.id} delay={idx * 0.12} y={30}>
                <blockquote className="h-full flex flex-col justify-between p-7 sm:p-10 rounded-[32px] border border-[#080808]/15 bg-[#EFE3D2]/60">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#FF542B] font-medium mb-5">
                      {item.projectType}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#080808]">
                      {item.quotePlaceholder}
                    </p>
                  </div>

                  <footer className="mt-8 pt-6 border-t border-[#080808]/15 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#080808] shrink-0 border border-[#080808]/20">
                      <ResilientImage
                        src={portrait.src}
                        alt={portrait.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-top block"
                      />
                    </div>
                    <div className="min-w-0">
                      <cite className="not-italic block text-base font-semibold uppercase tracking-wide text-[#080808]">
                        {item.authorPlaceholder}
                      </cite>
                      <span className="block text-xs sm:text-sm text-[#080808]/65 font-light">
                        {item.roleCompanyPlaceholder} &middot; IMG {portrait.slot}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
