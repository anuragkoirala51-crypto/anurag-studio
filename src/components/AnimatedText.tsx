import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = useMemo(() => {
    const rawWords = text.split(' ');
    const totalChars = text.length;
    let cursor = 0;

    return rawWords.map((word, wordIdx) => {
      const chars = word.split('').map((char) => {
        const start = cursor / totalChars;
        const end = (cursor + 1) / totalChars;
        cursor += 1;
        return { char, range: [start, end] as [number, number] };
      });
      // Advance cursor for trailing space
      if (wordIdx < rawWords.length - 1) {
        cursor += 1;
      }
      return { word, chars };
    });
  }, [text]);

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((item, wordIdx) => (
        <React.Fragment key={`${item.word}-${wordIdx}`}>
          <span className="inline-block whitespace-nowrap">
            {item.chars.map((c, charIdx) => (
              <AnimatedChar
                key={`${wordIdx}-${charIdx}`}
                char={c.char}
                progress={scrollYProgress}
                range={c.range}
              />
            ))}
          </span>
          {wordIdx < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </p>
  );
}
