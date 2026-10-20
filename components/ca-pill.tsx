'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { toast } from 'sonner'


const CONTRACT_ADDRESS = 'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ'

interface CaPillProps {
  className?: string
}

export function CaPill({ className = '' }: CaPillProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      toast.success('Contract Address Copied!', {
        description: CONTRACT_ADDRESS,
        duration: 3000,
      })
      setTimeout(() => setCopied(false), 2200)
    } catch {
      toast.error('Failed to copy to clipboard')
    }
  }

  return (
    <div
      onClick={handleCopy}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCopy()
        }
      }}
      aria-label={`Copy Contract Address: ${CONTRACT_ADDRESS}`}
      className={`group relative flex items-center justify-between gap-2 sm:gap-3 rounded-full border border-[#75f228]/50 bg-black/85 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(117,242,40,0.22)] hover:border-[#75f228] hover:shadow-[0_0_30px_rgba(117,242,40,0.4)] transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Left: TRON logo & Contract Address text */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
        <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-200">
          <Image
            src="/tron-trx-icon.webp"
            alt="TRON"
            width={24}
            height={24}
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
        </div>

        <span className="font-gelato font-black text-xs sm:text-sm text-zinc-300 tracking-wider flex-shrink-0">
          CA:
        </span>
        <span className="font-mono text-xs sm:text-sm text-white tracking-wide truncate select-all">
          <span className="hidden sm:inline">{CONTRACT_ADDRESS}</span>
          <span className="inline sm:hidden">{`${CONTRACT_ADDRESS.slice(0, 8)}...${CONTRACT_ADDRESS.slice(-8)}`}</span>
        </span>
      </div>

      {/* Right: Animated Copy Button */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.08 }}
        onClick={(e) => {
          e.stopPropagation()
          handleCopy()
        }}
        aria-label="Copy to clipboard"
        className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-[#75f228] text-zinc-300 hover:text-black transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75f228]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#75f228] group-hover:text-black font-bold stroke-[3]" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
