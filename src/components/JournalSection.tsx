import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { getAsset } from '../config/assets';
import { JOURNAL_ENTRIES, type JournalEntry } from '../config/studioConfig';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

export function JournalSection() {
  const [activeEntry, setActiveEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    if (!activeEntry) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveEntry(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeEntry]);

  return (
    <section
      id="journal"
      className="relative z-10 w-full bg-[#080808] text-[#F5EBDD] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#71C7E9] mb-3">
                Journal &amp; Production Diaries
              </p>
              <h2
                className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 7.5vw, 6.5rem)' }}
              >
                Behind The Frame
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F5EBDD]/65 font-light max-w-md leading-relaxed">
              Filmmaking insights, camera tests, lighting breakdowns, creative experiments,
              and updates from inside Anurag Studios.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNAL_ENTRIES.map((entry, idx) => {
            const asset = getAsset(entry.asset);

            return (
              <FadeIn key={entry.id} delay={idx * 0.1} y={30}>
                <button
                  type="button"
                  data-cursor="media"
                  onClick={() => setActiveEntry(entry)}
                  className="group w-full h-full text-left flex flex-col rounded-[32px] border border-[#F5EBDD]/15 bg-[#0E0D0C] overflow-hidden hover:border-[#FF542B]/60 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#151311]">
                    <ResilientImage
                      src={asset.src}
                      alt={asset.alt}
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-4 text-[11px] uppercase tracking-widest text-[#F5EBDD]/80 bg-[#080808]/65 px-2.5 py-0.5 rounded-md tabular-nums">
                      IMG {asset.slot}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5EBDD]/60 mb-3">
                        <span className="text-[#FF542B] font-medium">{entry.category}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{entry.datePlaceholder}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight leading-snug text-[#F5EBDD] group-hover:text-[#FF542B] transition-colors duration-200">
                        {entry.title}
                      </h3>

                      <p className="text-sm text-[#F5EBDD]/65 font-light leading-relaxed mt-3">
                        {entry.excerpt}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#F5EBDD] font-medium pt-3 border-t border-[#F5EBDD]/10">
                      <span>Read Entry</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FF542B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Journal Reader Modal */}
      <AnimatePresence>
        {activeEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEntry(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-modal-title"
          >
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-[#F5EBDD]/25 bg-[#0C0B0A] text-[#F5EBDD]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <ResilientImage
                  src={getAsset(activeEntry.asset).src}
                  alt={getAsset(activeEntry.asset).alt}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-transparent to-black/30" />
                <button
                  type="button"
                  onClick={() => setActiveEntry(null)}
                  aria-label="Close journal entry"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-[#080808]/80 border border-[#F5EBDD]/25 text-[#F5EBDD] hover:border-[#FF542B] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 -mt-10 relative">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5EBDD]/65 mb-3">
                  <span className="text-[#FF542B] font-medium">{activeEntry.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{activeEntry.datePlaceholder}</span>
                </div>

                <h3
                  id="journal-modal-title"
                  className="text-2xl sm:text-4xl font-bold uppercase tracking-tight leading-tight text-[#F5EBDD]"
                >
                  {activeEntry.title}
                </h3>

                <div className="mt-6 flex flex-col gap-4 text-base text-[#F5EBDD]/80 font-light leading-relaxed">
                  {activeEntry.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
