import React from 'react';
import { getAsset } from '../config/assets';
import { TEAM_MEMBERS } from '../config/studioConfig';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full bg-[#080808] text-[#F5EBDD] px-5 sm:px-8 md:px-10 py-24 sm:py-32 border-t border-[#F5EBDD]/10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FF542B] mb-3">
                Creative Team
              </p>
              <h2
                className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: 'clamp(2.4rem, 7vw, 6.2rem)' }}
              >
                The Minds Behind The Frame
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F5EBDD]/65 font-light max-w-md leading-relaxed">
              Directors, cinematographers, editors, and producers united by a single obsession:
              honest imagery and unforgettable storytelling.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const asset = getAsset(member.asset);

            return (
              <FadeIn key={member.id} delay={index * 0.1} y={32}>
                <article className="group flex flex-col">
                  <div className="relative aspect-[3/4] w-full rounded-[28px] overflow-hidden bg-[#141210] border border-[#F5EBDD]/15 mb-5">
                    <ResilientImage
                      src={asset.src}
                      alt={asset.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
                    <span className="absolute bottom-3.5 right-4 text-[11px] uppercase tracking-widest text-[#F5EBDD]/65 tabular-nums">
                      IMG {asset.slot}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#FF542B] font-medium">
                    {member.role}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#F5EBDD] mt-1">
                    {member.namePlaceholder}
                  </h3>
                  <p className="text-sm text-[#F5EBDD]/60 font-light mt-1.5 leading-relaxed">
                    {member.focus}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
