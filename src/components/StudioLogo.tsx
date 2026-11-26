import React from 'react';

interface StudioLogoProps {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'ivory' | 'dark';
  className?: string;
}

export function StudioLogo({
  size = 'md',
  tone = 'ivory',
  className = '',
}: StudioLogoProps) {
  const textColor = tone === 'ivory' ? 'text-[#F5EBDD]' : 'text-[#080808]';

  const sizeMap = {
    sm: {
      top: 'text-sm sm:text-base tracking-[0.22em]',
      bottom: 'text-[9px] sm:text-[10px] tracking-[0.42em]',
    },
    md: {
      top: 'text-base sm:text-lg tracking-[0.24em]',
      bottom: 'text-[10px] sm:text-[11px] tracking-[0.46em]',
    },
    lg: {
      top: 'text-3xl sm:text-5xl tracking-[0.26em]',
      bottom: 'text-xs sm:text-sm tracking-[0.52em]',
    },
  }[size];

  return (
    <span
      className={`inline-flex flex-col leading-none select-none ${textColor} ${className}`}
    >
      <span className={`font-black uppercase ${sizeMap.top}`}>ANURAG</span>
      <span className="flex items-center gap-2 mt-1">
        <span className="h-[2px] w-4 bg-[#FF542B] shrink-0" aria-hidden="true" />
        <span className={`font-light uppercase opacity-80 ${sizeMap.bottom}`}>
          STUDIOS
        </span>
      </span>
    </span>
  );
}
