import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  variant?: 'ivory' | 'orange';
}

export function LiveProjectButton({
  onClick,
  className = '',
  label = 'View Project',
  variant = 'ivory',
}: LiveProjectButtonProps) {
  const styles =
    variant === 'orange'
      ? 'border-[#FF542B] text-[#F5EBDD] bg-[#FF542B]/15 hover:bg-[#FF542B] hover:text-[#080808]'
      : 'border-[#F5EBDD]/70 text-[#F5EBDD] hover:border-[#FF542B] hover:bg-[#FF542B]/10';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 font-medium uppercase tracking-widest whitespace-nowrap shrink-0 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF542B] cursor-pointer ${styles} ${className}`}
    >
      {label}
    </button>
  );
}
