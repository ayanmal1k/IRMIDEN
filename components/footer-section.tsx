'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_35%,#092607_0%,#051504_45%,#020802_75%,#000000_100%)] pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-10 sm:pb-14 md:pb-16 border-t border-[#75f228]/25 selection:bg-[#75f228] selection:text-black">
      {/* Background Ambient Lighting & Mountain Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,242,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,242,40,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

        {/* Emerald Backlight Behind Center Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] bg-[#75f228]/18 blur-[120px] rounded-full" />

        {/* Backlights behind Left and Right Mountains */}
        <div className="absolute bottom-0 left-0 w-[350px] sm:w-[450px] md:w-[600px] h-[350px] bg-[#75f228]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[450px] md:w-[600px] h-[350px] bg-[#75f228]/20 blur-[120px] rounded-full" />
      </div>

      {/* LEFT MOUNTAIN: mountain-1.png (Big Mountains in Left Corner) */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-10 w-[240px] sm:w-[360px] md:w-[460px] lg:w-[560px] xl:w-[660px] 2xl:w-[760px] max-w-[46vw]">
        <Image
          src="/mountain-1.png"
          alt="IRMIDEN Left Mountain"
          width={760}
          height={400}
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_0_35px_rgba(117,242,40,0.35)] select-none"
          priority
        />
      </div>

      {/* RIGHT MOUNTAIN: mountain-2.png (Big Mountains in Right Corner) */}
      <div className="absolute right-0 bottom-0 pointer-events-none z-10 w-[240px] sm:w-[360px] md:w-[460px] lg:w-[560px] xl:w-[660px] 2xl:w-[760px] max-w-[46vw]">
        <Image
          src="/mountain-2.png"
          alt="IRMIDEN Right Mountain"
          width={760}
          height={400}
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_0_35px_rgba(117,242,40,0.35)] select-none"
          priority
        />
      </div>

      {/* CENTER BRANDING & STRONGER TOGETHER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        {/* Title row with Crown Icon + IRMIDEN ($IMD) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 flex-wrap sm:flex-nowrap"
        >
          {/* Green Crown Icon from public/crown icon.png tilted with neon glow */}
          <div className="relative w-9 h-9 sm:w-13 sm:h-13 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 flex-shrink-0 -rotate-12 drop-shadow-[0_0_24px_rgba(117,242,40,0.85)]">
            <Image
              src="/crown icon.png"
              alt="IRMIDEN Green Crown"
              width={120}
              height={120}
              className="w-full h-full object-contain select-none"
              priority
            />
          </div>

          {/* Big Text in Gelato Sans Black Bold */}
          <h2 className="font-gelato font-black tracking-tight leading-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl select-none">
            <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              IRMIDEN{' '}
            </span>
            <span className="text-[#75f228] drop-shadow-[0_0_28px_rgba(117,242,40,0.95)]">
              ($IMD)
            </span>
          </h2>
        </motion.div>

        {/* Subtitle row: glowing line + STRONGER TOGETHER + glowing line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-3 sm:mt-4 md:mt-5 lg:mt-7 flex items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-md sm:max-w-lg md:max-w-xl"
        >
          {/* Left glowing gradient line */}
          <div className="flex-1 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]" />

          {/* Simple Gelato Sans for STRONGER TOGETHER */}
          <span className="font-gelato font-normal text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.45em] text-white/95 uppercase whitespace-nowrap drop-shadow-[0_0_12px_rgba(117,242,40,0.6)]">
            STRONGER TOGETHER
          </span>

          {/* Right glowing gradient line */}
          <div className="flex-1 h-[2px] rounded-full bg-gradient-to-l from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]" />
        </motion.div>
      </div>
    </footer>
  )
}
