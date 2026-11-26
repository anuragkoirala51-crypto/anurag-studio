import React, { useState } from 'react';
import { Film } from 'lucide-react';
import { getAssetBadgeBySrc } from '../config/assets';

export interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  transparentFallback?: boolean;
  badge?: string;
  hideBadge?: boolean;
}

export function ResilientImage({
  src,
  alt = '',
  className = '',
  fallbackLabel,
  transparentFallback = false,
  badge,
  hideBadge = false,
  ...rest
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  const displayBadge =
    !hideBadge && (badge || (typeof src === 'string' ? getAssetBadgeBySrc(src) : undefined));

  if (hasError || !src) {
    if (transparentFallback) {
      return (
        <div
          aria-hidden="true"
          className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#191614]/80 via-[#111010]/70 to-[#080808]/60 border border-[#F5EBDD]/10 ${className}`}
        >
          {displayBadge && (
            <span
              data-marker="photo"
              className="pointer-events-none absolute top-2 left-2 z-20 px-2 py-0.5 rounded text-[11px] font-normal tracking-wide text-zinc-400 bg-black/60 backdrop-blur-sm select-none"
            >
              {displayBadge}
            </span>
          )}
          <Film className="w-8 h-8 text-[#FF542B]/50" strokeWidth={1.5} />
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel || 'Cinema frame'}
        className={`relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#181513] via-[#111010] to-[#080808] text-[#F5EBDD]/60 select-none ${className}`}
      >
        {displayBadge && (
          <span
            data-marker="photo"
            className="pointer-events-none absolute top-2 left-2 z-20 px-2 py-0.5 rounded text-[11px] font-normal tracking-wide text-zinc-400 bg-black/60 backdrop-blur-sm select-none"
          >
            {displayBadge}
          </span>
        )}
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
    <>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
        {...rest}
      />
      {displayBadge && (
        <span
          data-marker="photo"
          className="pointer-events-none absolute top-2 left-2 z-20 px-2 py-0.5 rounded text-[11px] font-normal tracking-wide text-zinc-400 bg-black/60 backdrop-blur-sm select-none"
        >
          {displayBadge}
        </span>
      )}
    </>
  );
}
