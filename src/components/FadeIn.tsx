import React from 'react';
import { motion } from 'motion/react';

type SupportedTag = 'div' | 'section' | 'header' | 'footer' | 'article' | 'span' | 'p' | 'h1' | 'h2' | 'h3';

const motionTagCache = new Map<SupportedTag, ReturnType<typeof motion.create>>();

function getMotionComponent(tag: SupportedTag) {
  let cached = motionTagCache.get(tag);
  if (!cached) {
    cached = motion.create(tag);
    motionTagCache.set(tag, cached);
  }
  return cached;
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: SupportedTag;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style,
}: FadeInProps) {
  const MotionComponent = getMotionComponent(as) as React.ComponentType<Record<string, unknown>>;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
