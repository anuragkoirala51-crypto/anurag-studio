import React, { useEffect, useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

export function Magnet({
  children,
  padding = 150,
  disabled = false,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const node = magnetRef.current;
      if (!node) return;

      const { left, top, width, height } = node.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, disabled, strength]);

  return (
    <div ref={magnetRef} className={`relative inline-block ${wrapperClassName}`}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
