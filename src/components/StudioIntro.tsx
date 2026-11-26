import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { StudioLogo } from './StudioLogo';

export function StudioIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShow(false);
      return;
    }

    const timer = window.setTimeout(() => setShow(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setShow(false)}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#080808] cursor-pointer"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <StudioLogo size="lg" />
            <div className="w-40 h-[2px] bg-[#F5EBDD]/15 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-[#FF542B]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
