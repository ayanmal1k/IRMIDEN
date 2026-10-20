'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Rocket, Send } from 'lucide-react'
import { BrushBanner } from '@/components/brush-banner'
import { CaPill } from '@/components/ca-pill'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
}


export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white selection:bg-[#3de722] selection:text-black">
      {/* 1. Responsive Background Banners */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Banner: Character on left, open mist on right */}
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/hero-bg.png"
            alt="$IMD Character Desktop Banner"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-left lg:object-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Banner: Empty space at top & mid, Character at bottom */}
        <div className="relative block h-full w-full md:hidden">
          <Image
            src="/hero-bg-mobile.png"
            alt="$IMD Character Mobile Banner"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>

        {/* Ambient depth gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 pointer-events-none hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[54%] lg:w-[50%] xl:w-[48%] flex flex-col items-center md:items-start text-center md:text-left pt-10 sm:pt-14 pb-[450px] xs:pb-[500px] sm:pb-[560px] md:py-16"
        >
          {/* Main Title: IRMIDEN */}
          <motion.h1
            variants={itemVariants}
            className="font-lean text-6xl xs:text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black italic tracking-tight text-white uppercase leading-[0.88] drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)] select-none"
          >
            IRMIDEN
          </motion.h1>

          {/* Main Title ($IMD) in the 3rd font */}
          <motion.div
            variants={itemVariants}
            className="font-master-victory text-6xl xs:text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-black italic tracking-tight text-[#3de722] leading-[0.92] drop-shadow-[0_0_35px_rgba(61,231,34,0.5)] select-none mt-1 sm:mt-2"
          >
            ($IMD)
          </motion.div>

          {/* Ribbon / Brush Banner: - the OG is back */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="rotate-[-2deg] my-2 sm:my-3 cursor-default"
          >
            <BrushBanner>
              <span className="font-pumpkins-brush text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-black font-black italic tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
                - the OG is back
              </span>
            </BrushBanner>
          </motion.div>

          {/* Description Paragraph with highlighted keywords */}
          <motion.div
            variants={itemVariants}
            className="font-lean text-sm xs:text-base sm:text-lg md:text-xl text-zinc-100 font-medium leading-relaxed max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mt-2 sm:mt-3 space-y-0.5 sm:space-y-1"
          >
            <p>
              Original developer of{' '}
              <span className="text-[#3de722] font-bold">IRMIDEN ($IMD)</span>.
            </p>
            <p>
              Legendary 2020{' '}
              <span className="text-[#3de722] font-bold">TRON</span> token is
              officially{' '}
              <span className="text-[#3de722] font-bold italic">BACK</span>
            </p>
            <p>as TRC20! Organic growth.</p>
          </motion.div>

          {/* Contract Address Pill with Animated Copy */}
          <motion.div variants={itemVariants} className="w-full max-w-lg mt-4 sm:mt-5">
            <CaPill />
          </motion.div>

          {/* Action Buttons: Buy $IMD & Join Telegram */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-4 sm:mt-5 w-full max-w-lg"
          >
            {/* Buy $IMD Pill Button */}
            <motion.a
              href="https://sunpump.meme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex-1 min-w-[150px] sm:min-w-[180px] rounded-full bg-[#3de722] hover:bg-[#48ff2c] text-black font-lean font-black px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_0_28px_rgba(61,231,34,0.45)] hover:shadow-[0_0_40px_rgba(61,231,34,0.7)] transition-all cursor-pointer"
            >
              <Rocket className="w-5 h-5 fill-black stroke-black -rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Buy $IMD</span>
            </motion.a>

            {/* Join Telegram Pill Button */}
            <motion.a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex-1 min-w-[150px] sm:min-w-[180px] rounded-full bg-black/80 hover:bg-black/95 text-white border border-white/25 hover:border-[#3de722] font-lean font-black px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:text-[#3de722]" />
              <span>Join Telegram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
