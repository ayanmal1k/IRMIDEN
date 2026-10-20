import React from 'react'

interface RocketIconProps {
  className?: string
  size?: number
}

export function BetterRocketIcon({ className = 'w-5 h-5', size = 20 }: RocketIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rocket Main Capsule Body */}
      <path
        d="M14.5 3C11.5 3.5 6.5 7.5 5 12.5C4.2 15.2 4.6 17 5 18C6 18.4 7.8 18.8 10.5 18C15.5 16.5 19.5 11.5 20 8.5C20.5 5.5 17.5 2.5 14.5 3Z"
        fill="currentColor"
      />
      {/* Cockpit Window */}
      <circle cx="14" cy="9" r="2.2" fill="#000000" />
      {/* Left Fin */}
      <path
        d="M4.5 13.5L2 15.5L3.5 19L7 17.5"
        fill="currentColor"
      />
      {/* Right Fin */}
      <path
        d="M13.5 4.5L15.5 2L19 3.5L17.5 7"
        fill="currentColor"
      />
      {/* Bottom Center Thruster Fin / Base */}
      <path
        d="M7 16L4 20L8 17"
        fill="currentColor"
      />
      {/* Dynamic Blast Flame */}
      <path
        d="M5.5 18.5C4 20 2 22 2 22C2 22 4 20 5.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 20.5L1 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
