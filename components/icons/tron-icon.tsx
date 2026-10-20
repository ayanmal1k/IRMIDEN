import React from 'react'

export function TronIcon({ className = 'w-5 h-5 flex-shrink-0' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Faceted 3D TRON Diamond Logo */}
      <path d="M12 2L2.5 8.5L12 22L21.5 8.5L12 2Z" fill="#B7141A" />
      <path d="M12 2L21.5 8.5L12 22V2Z" fill="#E51B24" />
      <path d="M12 5.5L5.8 10L12 18.5L18.2 10L12 5.5Z" fill="#FF3B42" opacity="0.9" />
      <path d="M12 5.5L18.2 10L12 18.5V5.5Z" fill="#FF6B70" />
    </svg>
  )
}
