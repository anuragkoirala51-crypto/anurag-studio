import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function StudioCursor() {
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'interactive' | 'media'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 420, damping: 32, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 32, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('[data-cursor="media"]')) {
        setHoverState('media');
      } else if (target.closest('a, button, input, textarea, [role="button"]')) {
        setHoverState('interactive');
      } else {
        setHoverState('default');
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  const ringSize = hoverState === 'media' ? 68 : hoverState === 'interactive' ? 46 : 30;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          borderColor:
            hoverState === 'media'
              ? 'rgba(255, 84, 43, 0.9)'
              : hoverState === 'interactive'
                ? 'rgba(245, 235, 221, 0.85)'
                : 'rgba(245, 235, 221, 0.35)',
          backgroundColor:
            hoverState === 'media' ? 'rgba(255, 84, 43, 0.14)' : 'rgba(255, 84, 43, 0)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="fixed top-0 left-0 rounded-full border flex items-center justify-center"
      >
        {hoverState === 'media' && (
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#F5EBDD]">
            View
          </span>
        )}
      </motion.div>

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FF542B]"
      />
    </div>
  );
}
