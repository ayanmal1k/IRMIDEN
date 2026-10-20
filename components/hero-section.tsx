'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Send } from 'lucide-react'
import { IoRocketSharp } from 'react-icons/io5'
import { CaPill } from '@/components/ca-pill'

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
        {/* Desktop Banner: Character on left, open smoky space on right - Anchored to top-left so crown/shield never crop */}
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/hero-bg.png"
            alt="$IMD Hero Background Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover select-none"
            style={{ objectPosition: 'left top' }}
          />
        </div>

        {/* Mobile Banner: Anchored to top so mist & upper background never crop */}
        <div className="relative block h-full w-full md:hidden">
          <Image
            src="/hero-bg-mobile.png"
            alt="$IMD Mobile Hero Background Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover select-none"
            style={{ objectPosition: 'center top' }}
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
          {/* Hero Transparent Text Image (IRMIDEN, ($IMD), - the OG is back) */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center md:justify-start mb-2 sm:mb-3"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[500px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[660px]">
              <Image
                src="/hero tetx.png"
                alt="IRMIDEN ($IMD) - the OG is back"
                width={681}
                height={367}
                priority
                quality={100}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
              />
            </div>
          </motion.div>

          {/* Description Text in Simple Gelato Sans */}
          <motion.div
            variants={itemVariants}
            className="font-gelato font-normal text-base xs:text-lg sm:text-xl md:text-2xl text-zinc-200 leading-relaxed w-full max-w-xl sm:max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mt-1 sm:mt-2 space-y-1"
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
            {/* Buy $IMD Pill Button with Rocket Icon from react-icons */}
            <motion.a
              href="https://sunpump.meme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group flex-1 min-w-[170px] sm:min-w-[210px] rounded-full bg-[#75f228] hover:bg-[#8bf83a] text-black font-gelato font-black px-7 sm:px-9 py-3.5 sm:py-4 flex items-center justify-center gap-2.5 text-base sm:text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(117,242,40,0.55)] hover:shadow-[0_0_46px_rgba(117,242,40,0.8)] transition-all cursor-pointer"
            >
              <IoRocketSharp className="w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-200" />
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
