import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ContactButton({
  onClick,
  className = '',
  label = 'Start a Project',
}: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full text-[#F5EBDD] font-medium uppercase tracking-widest whitespace-nowrap shrink-0 px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#FF542B] cursor-pointer ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #16070B 4%, #A52BFF 34%, #FF542B 74%, #FF7A45 100%)',
        boxShadow:
          '0px 6px 22px rgba(255, 84, 43, 0.28), 4px 4px 14px rgba(165, 43, 255, 0.45) inset',
        outline: '2px solid #F5EBDD',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
}
