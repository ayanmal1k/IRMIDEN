import React from 'react'

interface BrushBannerProps {
  children: React.ReactNode
  className?: string
}

export function BrushBanner({ children, className = '' }: BrushBannerProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-start pl-4 sm:pl-6 pr-10 sm:pr-14 py-1.5 sm:py-2 select-none ${className}`}
    >
      {/* Authentic Paint Brush Stroke SVG Background */}
      <svg
        viewBox="0 0 540 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full text-[#36ea1f] drop-shadow-[0_4px_16px_rgba(54,234,31,0.35)] pointer-events-none"
      >
        {/* Main solid brush body */}
        <path
          d="M32 16 C18 19, 8 28, 14 38 C6 44, 10 56, 22 64 C35 70, 90 69, 180 71 C280 73, 390 72, 455 67 C482 65, 498 55, 492 44 C500 34, 488 22, 465 16 C415 10, 305 13, 190 14 C95 15, 50 14, 32 16 Z"
          fill="currentColor"
        />
        {/* Top/bottom edge dry bristle textures */}
        <path
          d="M50 13 C105 8, 205 9, 315 8 C385 7, 435 9, 450 13 C415 11, 335 10, 245 11 C145 12, 85 11, 50 13 Z"
          fill="currentColor"
        />
        <path
          d="M75 72 C145 75, 265 77, 365 75 C425 74, 455 71, 470 69 C435 72, 345 74, 235 73 C135 72, 90 73, 75 72 Z"
          fill="currentColor"
        />
        {/* Left jagged brush stroke tips */}
        <path d="M14 26 C-4 30, -2 38, 18 34 Z" fill="currentColor" />
        <path d="M8 40 C-8 44, -4 52, 16 48 Z" fill="currentColor" />
        <path d="M18 56 C-2 62, 4 70, 26 64 Z" fill="currentColor" />
        {/* Right long tapering brush streaks (matching target image) */}
        <path d="M460 18 C505 14, 532 20, 502 24 C482 26, 465 24, 460 18 Z" fill="currentColor" />
        <path d="M472 30 C522 28, 538 36, 498 38 C482 39, 470 36, 472 30 Z" fill="currentColor" />
        <path d="M468 46 C528 48, 540 56, 495 54 C478 53, 465 50, 468 46 Z" fill="currentColor" />
        <path d="M448 62 C495 66, 520 72, 475 68 C458 66, 450 64, 448 62 Z" fill="currentColor" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-start">
        {children}
      </div>
    </div>
  )
}
