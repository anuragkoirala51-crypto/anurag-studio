import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Send, X } from 'lucide-react';
import { STUDIO_CONTACT, STUDIO_SERVICES } from '../config/studioConfig';
import { StudioLogo } from './StudioLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultTopic = '',
}: ContactModalProps) {
  const [selectedService, setSelectedService] = useState<string>('Film Production');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultTopic) {
      setMessage(
        `Hello Anurag Studios, I would like to discuss a new film production inspired by "${defaultTopic}".`,
      );
    }
  }, [defaultTopic]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-[32px] border border-[#F5EBDD]/25 bg-[#0A0908] p-6 sm:p-8 text-[#F5EBDD] max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <StudioLogo size="sm" className="mb-3" />
                <h2
                  id="contact-modal-title"
                  className="hero-heading font-black uppercase tracking-tight leading-none text-3xl sm:text-4xl"
                >
                  Start A Project
                </h2>
                <p className="text-sm text-[#F5EBDD]/65 font-light mt-2">
                  Share your script, commercial brief, or creative concept with our production team.
                </p>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                aria-label="Close studio inquiry form"
                className="p-2 rounded-full border border-[#F5EBDD]/20 text-[#F5EBDD]/70 hover:text-[#F5EBDD] hover:border-[#FF542B] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[#FF542B]/50 flex items-center justify-center bg-[#FF542B]/15">
                  <Check className="w-7 h-7 text-[#FF542B]" />
                </div>
                <h3 className="text-2xl font-semibold uppercase tracking-wide text-[#F5EBDD]">
                  Production Brief Received
                </h3>
                <p className="text-sm text-[#F5EBDD]/70 max-w-sm font-light leading-relaxed">
                  Thank you, {name}. Your {selectedService.toLowerCase()} inquiry has been logged
                  for {email}. Connect your preferred form endpoint or CRM inside ContactModal.tsx.
                </p>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="mt-4 rounded-full border-2 border-[#F5EBDD] px-8 py-2.5 text-xs uppercase tracking-widest font-medium hover:border-[#FF542B] hover:text-[#FF542B] transition-colors cursor-pointer"
                >
                  Return to Studio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#F5EBDD]/60 mb-2.5">
                    Production Discipline
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {STUDIO_SERVICES.map((service) => {
                      const active = selectedService === service.name;
                      return (
                        <button
                          key={service.number}
                          type="button"
                          onClick={() => setSelectedService(service.name)}
                          className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer whitespace-nowrap ${
                            active
                              ? 'bg-[#FF542B] text-[#080808]'
                              : 'bg-[#151311] text-[#F5EBDD]/75 hover:text-[#F5EBDD] border border-[#F5EBDD]/15'
                          }`}
                        >
                          {service.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-widest text-[#F5EBDD]/60">
                      Your Name
                    </span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name or agency"
                      className="w-full rounded-xl bg-[#141210] border border-[#F5EBDD]/20 px-4 py-3 text-sm text-[#F5EBDD] placeholder:text-[#F5EBDD]/30 focus:outline-none focus:border-[#FF542B]"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-widest text-[#F5EBDD]/60">
                      Email Address
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@production.com"
                      className="w-full rounded-xl bg-[#141210] border border-[#F5EBDD]/20 px-4 py-3 text-sm text-[#F5EBDD] placeholder:text-[#F5EBDD]/30 focus:outline-none focus:border-[#FF542B]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-widest text-[#F5EBDD]/60">
                    Story &amp; Project Brief
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your concept, shoot dates, deliverables, and visual references..."
                    className="w-full rounded-xl bg-[#141210] border border-[#F5EBDD]/20 px-4 py-3 text-sm text-[#F5EBDD] placeholder:text-[#F5EBDD]/30 focus:outline-none focus:border-[#FF542B] resize-none"
                  />
                </label>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5EBDD]/65 hover:text-[#FF542B] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#71C7E9]" />
                        <span>Copied {STUDIO_CONTACT.email}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{STUDIO_CONTACT.email}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full text-[#F5EBDD] font-medium uppercase tracking-widest px-8 py-3 text-xs sm:text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer"
                    style={{
                      background:
                        'linear-gradient(123deg, #16070B 4%, #A52BFF 34%, #FF542B 74%, #FF7A45 100%)',
                      boxShadow:
                        '0px 6px 22px rgba(255, 84, 43, 0.28), 4px 4px 14px rgba(165, 43, 255, 0.45) inset',
                      outline: '2px solid #F5EBDD',
                      outlineOffset: '-3px',
                    }}
                  >
                    <span>Send Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
