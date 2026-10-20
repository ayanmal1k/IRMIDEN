'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Eye, X, ShieldCheck } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  return (
    <section className="relative w-full overflow-hidden bg-black text-white selection:bg-[#75f228] selection:text-black aspect-[940/1369] md:aspect-[2171/724]">
      {/* 1. Background Art Direction (100% full width and height with zero cropping) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Desktop Banner: 2171x724 (Aspect ratio 3:1) - Fully visible full width */}
        <div className="relative hidden h-full w-full md:block">
          <Image
            src="/about-bg.webp"
            alt="About IRMIDEN Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover select-none"
            style={{ objectPosition: 'center' }}
          />
        </div>

        {/* Mobile Banner: 940x1369 - Fully visible full width with open top */}
        <div className="relative block h-full w-full md:hidden">
          <Image
            src="/about-bg-mbl.webp"
            alt="About IRMIDEN Mobile Banner"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover select-none"
            style={{ objectPosition: 'center top' }}
          />
        </div>
      </div>

      {/* 2. Responsive Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start md:justify-center items-center md:items-start px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 pt-7 xs:pt-9 sm:pt-12 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-full max-w-[340px] xs:max-w-[400px] sm:max-w-md md:max-w-none md:w-[48%] lg:w-[44%] xl:w-[40%] flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Section Heading: Gelato Sans Black Bold */}
          <motion.h2
            variants={itemVariants}
            className="font-gelato text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-tight leading-[1.08] select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            <span className="text-white">About </span>
            <span className="text-[#75f228] drop-shadow-[0_0_24px_rgba(117,242,40,0.6)]">
              IRMIDEN
            </span>
          </motion.h2>

          {/* Description Text: Gelato Sans Normal with Vibrant Highlights */}
          <motion.p
            variants={itemVariants}
            className="font-gelato font-normal text-xs xs:text-sm sm:text-base md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-zinc-100/95 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mt-2 sm:mt-3 md:mt-2 lg:mt-3 xl:mt-4"
          >
            IRMIDEN <strong className="text-[#75f228] font-bold">($IMD) is back!</strong> The legendary 2020 TRON token, now stronger than ever. Backed by a passionate community and a clear vision for <strong className="text-[#75f228] font-bold">organic growth.</strong>
          </motion.p>

          {/* View Proof Button in Gelato Sans Black Bold */}
          <motion.div
            variants={itemVariants}
            className="mt-3 xs:mt-4 sm:mt-5 md:mt-3 lg:mt-4 xl:mt-5 w-full flex justify-center md:justify-start"
          >
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#75f228] hover:bg-[#8bf83a] text-black font-gelato font-black px-5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 md:px-5 md:py-2 lg:px-6 lg:py-2.5 xl:px-7 xl:py-3 text-xs xs:text-sm sm:text-base md:text-xs lg:text-sm xl:text-base uppercase tracking-wider shadow-[0_0_22px_rgba(117,242,40,0.45)] hover:shadow-[0_0_36px_rgba(117,242,40,0.75)] transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5] transition-transform group-hover:scale-110" />
              <span>View Proof</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Smooth Responsive Proof Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="relative z-10 w-full max-w-sm sm:max-w-md max-h-[90vh] flex flex-col rounded-3xl border border-[#75f228]/40 bg-zinc-950/95 shadow-[0_0_50px_rgba(117,242,40,0.3)] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="2020 TRON Token Proof"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#75f228]" />
                  <span className="font-gelato font-black text-sm sm:text-base text-white uppercase tracking-wider">
                    2020 TRON Token Proof
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75f228]"
                  aria-label="Close proof modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable Proof Image */}
              <div className="relative flex-1 overflow-y-auto p-4 sm:p-5 flex items-center justify-center bg-black/70">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <Image
                    src="/proof.jpeg"
                    alt="Tronscan Proof Record showing IRMIDEN Token ID 1003154 issued in 2020"
                    width={576}
                    height={1280}
                    priority
                    quality={95}
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-white/10 bg-black/50 flex items-center justify-between gap-3">
                <span className="font-gelato text-xs text-zinc-400">
                  TronScan Record: 2020-08-15
                </span>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="font-gelato font-bold text-xs sm:text-sm text-black bg-[#75f228] hover:bg-[#8bf83a] px-4 py-1.5 rounded-full uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
