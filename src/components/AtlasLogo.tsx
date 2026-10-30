import React from 'react';
import { logoImage } from '../data/mockContent';

interface AtlasLogoProps {
  variant?: 'full' | 'wordmark' | 'icon' | 'emblem' | 'masthead';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const AtlasLogo: React.FC<AtlasLogoProps> = ({
  variant = 'wordmark',
  size = 'md',
  className = '',
  showSubtitle = false,
}) => {
  // Grand Masthead variant for the first page
  if (variant === 'masthead') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative group">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-sm overflow-hidden shadow-md border border-[#3B241C]/20 bg-[#F5E9DE] transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src={logoImage}
              alt="THE ATLAS Official Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle vintage stamp corner marker */}
          
        </div>

        <div className="mt-4 space-y-1">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-xs font-sans font-semibold tracking-[0.3em] text-[#7A3E2D] uppercase">
              THE
            </span>
            <span className="font-editorial text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.12em] text-[#3B241C] leading-none">
              ATLAS
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#7A3E2D] font-serif italic tracking-wide">
            International student-led publication
          </p>
        </div>
      </div>
    );
  }

  // Large Emblem variant
  if (variant === 'emblem') {
    return (
      <div className={`relative rounded-sm overflow-hidden shadow-md border border-[#3B241C]/20 bg-[#F5E9DE] ${className}`}>
        <img
          src={logoImage}
          alt="THE ATLAS Publication Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-sm overflow-hidden shrink-0 shadow-xs border border-[#3B241C]/20 bg-[#F5E9DE]">
          <img
            src={logoImage}
            alt="ATLAS Publication Insignia"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#7A3E2D] uppercase">
              THE
            </span>
            <span className="font-editorial text-2xl font-semibold tracking-wide text-[#3B241C] leading-none">
              ATLAS
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#7A3E2D] mt-0.5">
              International Publication
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`relative rounded-sm overflow-hidden shadow-xs border border-[#3B241C]/20 bg-[#F5E9DE] ${className}`}>
        <img
          src={logoImage}
          alt="The Atlas logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Wordmark variant with subtle mini emblem for instant recognition
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xs overflow-hidden border border-[#3B241C]/20 bg-[#F5E9DE] shadow-2xs shrink-0">
        <img
          src={logoImage}
          alt="ATLAS Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#7A3E2D] uppercase">
          THE
        </span>
        <span className="font-editorial text-2xl md:text-3xl font-medium tracking-[0.08em] text-[#3B241C] leading-none">
          ATLAS
        </span>
      </div>
    </div>
  );
};

