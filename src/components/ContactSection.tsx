import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { STUDIO_ASSETS } from '../config/assets';
import { STUDIO_CONTACT } from '../config/studioConfig';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ResilientImage } from './ResilientImage';
import { StudioLogo } from './StudioLogo';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export function ContactSection({ onOpenContact }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONTACT.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ctaBg = STUDIO_ASSETS.IMAGE_25;

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080808] text-[#F5EBDD] overflow-hidden border-t border-[#F5EBDD]/10"
    >
      {/* Final Cinematic CTA Background — IMAGE 25 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ResilientImage
          src={ctaBg.src}
          alt={ctaBg.alt}
          loading="lazy"
          className="w-full h-full object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/65 to-[#080808]"
        />
      </div>

      {/* Main Contact CTA Block */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pt-28 sm:pt-36 pb-20">
        <FadeIn delay={0} y={40} className="text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#FF542B] mb-4">
            Start a Conversation
          </p>
          <h2
            className="hero-heading font-black uppercase leading-[0.94] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.4rem, 7.2vw, 6.4rem)' }}
          >
            HAVE A STORY TO TELL?{' '}
            <span className="hero-heading-accent">LET&rsquo;S MAKE IT CINEMATIC.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F5EBDD]/80 font-light max-w-2xl mx-auto mt-6 leading-relaxed">
            Have an idea, a project or a vision worth bringing to life? Let&rsquo;s create
            something unforgettable.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ContactButton label="Start a Project" onClick={onOpenContact} />
            <LiveProjectButton label="Contact The Studio" onClick={onOpenContact} />
          </div>
        </FadeIn>

        {/* Editable Studio Contact Details Grid */}
        <FadeIn delay={0.15} y={30}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#F5EBDD]/15 pt-10">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FF542B]">
                <Mail className="w-3.5 h-3.5" />
                <span>Studio Email</span>
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 text-left text-base sm:text-lg font-medium text-[#F5EBDD] hover:text-[#FF542B] transition-colors cursor-pointer"
              >
                <span>{STUDIO_CONTACT.email}</span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#71C7E9]" />
                ) : (
                  <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                )}
              </button>
              <span className="text-xs text-[#F5EBDD]/45">
                {copiedEmail ? 'Copied to clipboard' : 'Editable in studioConfig.ts'}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#71C7E9]">
                <Phone className="w-3.5 h-3.5" />
                <span>Production Desk</span>
              </span>
              <span className="text-base sm:text-lg font-medium text-[#F5EBDD] tabular-nums">
                {STUDIO_CONTACT.phone}
              </span>
              <span className="text-xs text-[#F5EBDD]/45">
                Direct Bookings &amp; Commercial Inquiries
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A52BFF]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </span>
              <span className="text-base sm:text-lg font-medium text-[#F5EBDD]">
                {STUDIO_CONTACT.location}
              </span>
              <span className="text-xs text-[#F5EBDD]/45">
                On-Location &amp; Soundstage Worldwide
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Studio Closing Sequence & Footer */}
        <footer className="mt-16 pt-8 border-t border-[#F5EBDD]/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <StudioLogo size="sm" />
            <span className="text-xs uppercase tracking-widest text-[#F5EBDD]/50">
              &copy; {new Date().getFullYear()} Anurag Studios
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {STUDIO_CONTACT.socials.map((social) => (
              <button
                key={social.label}
                type="button"
                onClick={onOpenContact}
                title={`Editable link placeholder: ${social.handle}`}
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#F5EBDD]/65 hover:text-[#FF542B] transition-colors cursor-pointer"
              >
                <span>{social.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#F5EBDD] hover:text-[#FF542B] transition-colors cursor-pointer pl-2 border-l border-[#F5EBDD]/15"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
