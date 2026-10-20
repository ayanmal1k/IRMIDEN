import React from 'react'

interface BrushBannerProps {
  children: React.ReactNode
  className?: string
}

export function BrushBanner({ children, className = '' }: BrushBannerProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center px-6 sm:px-10 py-1.5 sm:py-2 select-none ${className}`}
    >
      {/* Authentic Paint Brush Stroke SVG Background */}
      <svg
        viewBox="0 0 520 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-[#3de722] drop-shadow-[0_4px_16px_rgba(61,231,34,0.35)] pointer-events-none"
      >
        {/* Main brush body with organic ragged contours */}
        <path
          d="M38 16 C22 18, 4 28, 10 38 C2 44, 5 56, 18 64 C28 70, 75 69, 160 71 C260 73, 380 72, 465 67 C488 65, 508 55, 502 44 C510 34, 498 22, 472 16 C425 10, 310 13, 195 14 C100 15, 55 14, 38 16 Z"
          fill="currentColor"
        />
        {/* Top/bottom edge dry bristle splatters */}
        <path
          d="M60 14 C110 9, 210 10, 320 8 C390 7, 440 10, 455 14 C420 12, 340 11, 250 12 C150 13, 90 12, 60 14 Z"
          fill="currentColor"
        />
        <path
          d="M80 71 C150 74, 270 76, 370 74 C430 73, 460 70, 475 68 C440 71, 350 73, 240 72 C140 71, 95 72, 80 71 Z"
          fill="currentColor"
        />
        {/* Left jagged brush stroke tips */}
        <path d="M12 28 C-6 32, -4 40, 16 36 Z" fill="currentColor" />
        <path d="M8 42 C-10 46, -6 54, 14 50 Z" fill="currentColor" />
        <path d="M18 58 C-2 64, 4 72, 26 66 Z" fill="currentColor" />
        <path d="M28 20 C6 22, 10 28, 32 24 Z" fill="currentColor" />
        {/* Right jagged brush stroke tips */}
        <path d="M470 18 C502 14, 514 24, 482 26 Z" fill="currentColor" />
        <path d="M480 32 C516 30, 524 40, 490 42 Z" fill="currentColor" />
        <path d="M475 48 C512 52, 518 60, 486 56 Z" fill="currentColor" />
        <path d="M455 64 C485 68, 500 74, 470 70 Z" fill="currentColor" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
