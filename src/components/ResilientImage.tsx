import React, { useState } from 'react';
import { Film } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  transparentFallback?: boolean;
}

export function ResilientImage({
  src,
  alt = '',
  className = '',
  fallbackLabel,
  transparentFallback = false,
  ...rest
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (transparentFallback) {
      return (
        <div
          aria-hidden="true"
          className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#191614]/80 via-[#111010]/70 to-[#080808]/60 border border-[#F5EBDD]/10 ${className}`}
        >
          <Film className="w-8 h-8 text-[#FF542B]/50" strokeWidth={1.5} />
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel || 'Cinema frame'}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#181513] via-[#111010] to-[#080808] text-[#F5EBDD]/60 select-none ${className}`}
      >
        <Film className="w-7 h-7 text-[#FF542B]/60" strokeWidth={1.5} />
        {(fallbackLabel || alt) && (
          <span className="text-xs uppercase tracking-widest px-4 text-center line-clamp-1">
            {fallbackLabel || alt}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
}
