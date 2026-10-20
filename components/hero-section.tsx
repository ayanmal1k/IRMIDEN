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
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white selection:bg-[#36ea1f] selection:text-black">
      {/* 1. Background Art Direction (Desktop vs Mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Banner: Character on left, open smoky space on right */}
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/hero-bg.png"
            alt="$IMD Hero Background Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-left lg:object-left-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Banner: Character anchored at bottom, open mist at top & mid */}
        <div className="relative block h-full w-full md:hidden">
          <Image
            src="/hero-bg-mobile.png"
            alt="$IMD Mobile Hero Background Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>

        {/* Smooth dark vignette on mobile bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. Full-Width Layout Container (No 7xl container constraint) */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-end px-4 sm:px-8 md:pr-10 lg:pr-16 xl:pr-24 2xl:pr-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[52%] lg:w-[48%] xl:w-[45%] 2xl:w-[42%] flex flex-col items-center md:items-start text-center md:text-left pt-8 sm:pt-12 pb-[500px] xs:pb-[560px] sm:pb-[620px] md:py-12"
        >
          {/* Main Heading: IRMIDEN in LEAN font */}
          <motion.h1
            variants={itemVariants}
            className="font-lean text-6xl xs:text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-8.5xl font-black italic tracking-normal text-white uppercase leading-[0.88] drop-shadow-[0_6px_18px_rgba(0,0,0,0.95)] select-none"
          >
            IRMIDEN
          </motion.h1>

          {/* ($IMD) with brackets in PUMPKIN BRUSH font */}
          <motion.div
            variants={itemVariants}
            className="font-pumpkins-brush text-6xl xs:text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-8.5xl text-[#36ea1f] leading-[0.92] drop-shadow-[0_0_30px_rgba(54,234,31,0.55)] select-none my-0.5 sm:my-1"
          >
            ($IMD)
          </motion.div>

          {/* - the OG is back in MASTER VICTORY font inside authentic Paint Brush Banner */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="rotate-[-1.5deg] my-2 sm:my-3 cursor-default"
          >
            <BrushBanner>
              <span className="font-master-victory text-2xl xs:text-3xl sm:text-3.5xl md:text-3.5xl lg:text-4xl text-black font-normal italic tracking-normal drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                - the OG is back
              </span>
            </BrushBanner>
          </motion.div>

          {/* Description Paragraph in LEAN font with vibrant green keywords */}
          <motion.div
            variants={itemVariants}
            className="font-lean text-sm xs:text-base sm:text-lg md:text-xl text-zinc-100 font-medium leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-2 sm:mt-3 space-y-0.5 sm:space-y-1"
          >
            <p>
              Original developer of{' '}
              <strong className="text-[#36ea1f] font-bold">
                IRMIDEN ($IMD)
              </strong>
              .
            </p>
            <p>
              Legendary 2020{' '}
              <strong className="text-[#36ea1f] font-bold">TRON</strong> token is
              officially{' '}
              <strong className="text-[#36ea1f] font-bold italic">BACK</strong>
            </p>
            <p>as TRC20! Organic growth.</p>
          </motion.div>

          {/* Contract Address Pill with Animated Copy & Toast Notification */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-lg mt-4 sm:mt-5"
          >
            <CaPill />
          </motion.div>

          {/* Action Buttons in LEAN font: Buy $IMD & Join Telegram */}
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
              className="group flex-1 min-w-[150px] sm:min-w-[180px] rounded-full bg-[#36ea1f] hover:bg-[#42f52a] text-black font-lean font-black px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_0_28px_rgba(54,234,31,0.45)] hover:shadow-[0_0_40px_rgba(54,234,31,0.7)] transition-all cursor-pointer"
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
              className="group flex-1 min-w-[150px] sm:min-w-[180px] rounded-full bg-black/80 hover:bg-black/95 text-white border border-white/25 hover:border-[#36ea1f] font-lean font-black px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 text-base sm:text-lg shadow-[0_4px_24px_rgba(0,0,0,0.6)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:text-[#36ea1f]" />
              <span>Join Telegram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
