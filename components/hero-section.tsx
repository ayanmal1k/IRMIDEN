'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Send } from 'lucide-react'
import { BrushBanner } from '@/components/brush-banner'
import { CaPill } from '@/components/ca-pill'
import { BetterRocketIcon } from '@/components/icons/rocket-icon'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white selection:bg-[#75f228] selection:text-black">
      {/* 1. Background Art Direction (Desktop vs Mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Desktop Banner: Character on left, open smoky space on right */}
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/hero-bg.png"
            alt="$IMD Hero Background Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-left lg:object-left-center select-none"
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
            className="object-cover object-center select-none"
          />
        </div>

        {/* Smooth dark vignette on mobile bottom */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Full-Width Layout Section (No container width constraint) */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-end px-4 sm:px-8 md:pr-10 lg:pr-16 xl:pr-20 2xl:pr-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[60%] lg:w-[56%] xl:w-[52%] 2xl:w-[48%] flex flex-col items-center md:items-start text-center md:text-left pt-6 sm:pt-10 pb-[500px] xs:pb-[560px] sm:pb-[620px] md:py-12"
        >
          {/* Main Hero Heading: IRMIDEN in Gelato Sans Black & Bold - Much Bigger */}
          <motion.h1
            variants={itemVariants}
            className="font-gelato text-7xl xs:text-8xl sm:text-9xl md:text-[5.5rem] lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11.2rem] font-black italic tracking-tight text-white uppercase leading-[0.82] drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)] select-none"
          >
            IRMIDEN
          </motion.h1>

          {/* ($IMD) in Gelato Sans Black with Vivid Parrot Green Gradient as attached */}
          <motion.div
            variants={itemVariants}
            className="font-gelato text-6xl xs:text-7xl sm:text-8xl md:text-[5rem] lg:text-[7rem] xl:text-[8.5rem] 2xl:text-[10rem] font-black italic tracking-tight leading-[0.85] select-none my-1 sm:my-2"
          >
            <span className="bg-gradient-to-b from-[#a0fd3b] via-[#75f228] to-[#4ee113] bg-clip-text text-transparent drop-shadow-[0_0_36px_rgba(117,242,40,0.65)] filter">
              ($IMD)
            </span>
          </motion.div>

          {/* THE OG IS BACK in Capital Black Bold Gelato Sans inside Bigger Authentic Paint Brush Stroke */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.025, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="rotate-[-1.5deg] my-2.5 sm:my-3.5 cursor-default w-full flex justify-center md:justify-start"
          >
            <BrushBanner>
              <span className="font-gelato text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl text-black font-black uppercase tracking-wider drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]">
                THE OG IS BACK
              </span>
            </BrushBanner>
          </motion.div>

          {/* Description Text in Simple Gelato Sans */}
          <motion.div
            variants={itemVariants}
            className="font-gelato font-normal text-base xs:text-lg sm:text-xl md:text-2xl text-zinc-200 leading-relaxed w-full max-w-xl sm:max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-2 sm:mt-3 space-y-1"
          >
            <p>
              Original developer of{' '}
              <strong className="text-[#75f228] font-black">
                IRMIDEN ($IMD)
              </strong>
              .
            </p>
            <p>
              Legendary 2020{' '}
              <strong className="text-[#75f228] font-black">TRON</strong> token is
              officially{' '}
              <strong className="text-[#75f228] font-black italic">BACK</strong>
            </p>
            <p>as TRC20! Organic growth.</p>
          </motion.div>

          {/* Contract Address Pill with Animated Copy & Toast Notification */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-xl sm:max-w-2xl mt-4 sm:mt-5"
          >
            <CaPill />
          </motion.div>

          {/* Action Buttons in Gelato Sans Black Bold: Buy $IMD & Join Telegram */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-5 sm:mt-6 w-full max-w-xl sm:max-w-2xl"
          >
            {/* Buy $IMD Pill Button with Better Rocket Icon */}
            <motion.a
              href="https://sunpump.meme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex-1 min-w-[170px] sm:min-w-[210px] rounded-full bg-[#75f228] hover:bg-[#8bf83a] text-black font-gelato font-black px-7 sm:px-9 py-3.5 sm:py-4 flex items-center justify-center gap-2.5 text-base sm:text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(117,242,40,0.55)] hover:shadow-[0_0_46px_rgba(117,242,40,0.8)] transition-all cursor-pointer"
            >
              <BetterRocketIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 duration-200" />
              <span>Buy $IMD</span>
            </motion.a>

            {/* Join Telegram Pill Button in Gelato Sans Black Bold */}
            <motion.a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex-1 min-w-[170px] sm:min-w-[210px] rounded-full bg-black/85 hover:bg-black text-white border-2 border-white/30 hover:border-[#75f228] font-gelato font-black px-7 sm:px-9 py-3.5 sm:py-4 flex items-center justify-center gap-2.5 text-base sm:text-xl uppercase tracking-wider shadow-[0_4px_24px_rgba(0,0,0,0.7)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-1 group-hover:text-[#75f228] duration-200" />
              <span>Join Telegram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
