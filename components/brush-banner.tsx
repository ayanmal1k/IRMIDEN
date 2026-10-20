import React from 'react'

interface BrushBannerProps {
  children?: React.ReactNode
  text?: string
  className?: string
}

export function BrushBanner({ children, text = 'THE OG IS BACK', className = '' }: BrushBannerProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 ${className}`}
    >
      {/* Authentic Paint Brush Stroke SVG Background - Sized Bigger & Meatier */}
      <svg
        viewBox="0 0 580 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_24px_rgba(117,242,40,0.55)] pointer-events-none"
      >
        <defs>
          <linearGradient id="brushParrotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#96fc37" />
            <stop offset="45%" stopColor="#75f228" />
            <stop offset="100%" stopColor="#52e013" />
          </linearGradient>
        </defs>

        {/* Main solid, thick paint stroke body */}
        <path
          d="M28 14 C12 17, 4 28, 10 40 C3 48, 8 62, 22 72 C38 80, 100 81, 200 83 C310 85, 430 84, 500 78 C530 75, 545 62, 536 48 C545 36, 530 21, 502 14 C450 7, 330 11, 205 12 C105 13, 52 12, 28 14 Z"
          fill="url(#brushParrotGradient)"
        />

        {/* Top & bottom organic bristle edges */}
        <path
          d="M48 11 C115 5, 230 7, 350 6 C430 5, 485 7, 502 11 C460 9, 370 8, 270 9 C160 10, 90 9, 48 11 Z"
          fill="url(#brushParrotGradient)"
        />
        <path
          d="M75 83 C155 87, 290 89, 400 87 C468 85, 502 81, 518 78 C480 82, 380 84, 260 83 C150 82, 95 83, 75 83 Z"
          fill="url(#brushParrotGradient)"
        />

        {/* Left jagged brush stroke tips */}
        <path d="M12 24 C-6 28, -4 38, 16 34 Z" fill="url(#brushParrotGradient)" />
        <path d="M6 40 C-10 44, -5 54, 15 50 Z" fill="url(#brushParrotGradient)" />
        <path d="M16 58 C-5 65, 2 75, 25 68 Z" fill="url(#brushParrotGradient)" />
        <path d="M22 18 C10 14, 2 20, 14 26 Z" fill="url(#brushParrotGradient)" />

        {/* Right long dynamic tapering brush streaks */}
        <path d="M495 18 C545 14, 575 20, 542 24 C520 26, 502 24, 495 18 Z" fill="url(#brushParrotGradient)" />
        <path d="M508 32 C562 30, 580 38, 538 41 C520 42, 506 38, 508 32 Z" fill="url(#brushParrotGradient)" />
        <path d="M504 50 C570 52, 582 61, 532 59 C514 58, 500 55, 504 50 Z" fill="url(#brushParrotGradient)" />
        <path d="M482 68 C535 73, 562 80, 512 75 C494 73, 485 70, 482 68 Z" fill="url(#brushParrotGradient)" />
      </svg>

      {/* Content Layer: black bold text fitting comfortably inside */}
      <div className="relative z-10 flex items-center justify-center px-1">
        {children ? (
          children
        ) : (
          <span className="font-gelato text-xl xs:text-2xl sm:text-2.5xl md:text-3xl text-black font-black uppercase tracking-wider drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
            {text}
          </span>
        )}
      </div>
    </div>
  )
}
