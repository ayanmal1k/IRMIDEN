'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { FaXTwitter, FaTelegram } from 'react-icons/fa6'
import { toast } from 'sonner'

const CONTRACT_ADDRESS = 'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ'

export function TokenomicsSocialSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      toast.success('Contract Address Copied!', {
        description: CONTRACT_ADDRESS,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy contract address')
    }
  }

  const socialLinks = [
    {
      name: 'Telegram',
      icon: (
        <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white group-hover:text-black transition-colors duration-200" />
      ),
      href: 'https://t.me/+W1i-pq2b7fE1NTVk',
    },
    {
      name: 'X (Twitter)',
      icon: (
        <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white group-hover:text-black transition-colors duration-200" />
      ),
      href: 'https://x.com/Irmiden_TRON',
    },
    {
      name: 'TRON',
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white group-hover:text-black transition-colors duration-200"
          fill="currentColor"
        >
          <path d="M2.5 3.8L29.5 2.5L18.2 29.5L2.5 3.8ZM7.2 6.8L17.5 24.8L25.8 5.8L7.2 6.8ZM19 8.2L13.8 19L20 17.2L19 8.2Z" />
        </svg>
      ),
      href: 'https://sunpump.meme/token/TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ',
    },
  ]

  return (
    <section
      id="tokenomics"
      className="relative w-full overflow-visible bg-[radial-gradient(ellipse_140%_90%_at_50%_15%,#0d310a_0%,#071a05_40%,#030a02_75%,#000000_100%)] pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-14 px-3 sm:px-6 md:px-8 xl:px-12 selection:bg-[#75f228] selection:text-black"
    >
      {/* Background Ambient Glows & Subtle Grid matching IRMIDEN Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,242,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,242,40,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_35%,#000_40%,transparent_100%)] opacity-40" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[260px] bg-[#75f228]/12 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[260px] bg-[#75f228]/12 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Parallel 2-Column Panoramic Cards Grid - Sleek Low-Height & Wide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8 items-stretch">
          {/* CARD 1: TOKENOMICS - Sleek Horizontal Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className="group relative rounded-[22px] sm:rounded-[28px] md:rounded-[34px] border-2 border-[#75f228]/55 hover:border-[#75f228] bg-gradient-to-r from-[#031502]/95 via-[#062005]/92 to-[#020e02]/95 backdrop-blur-xl p-4 sm:p-5 md:p-6 lg:p-7 flex flex-row items-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 shadow-[0_0_30px_rgba(117,242,40,0.16),inset_0_0_20px_rgba(117,242,40,0.06)] hover:shadow-[0_0_45px_rgba(117,242,40,0.32)] transition-all duration-300 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] overflow-hidden"
          >
            {/* Ambient Spotlight behind Coin */}
            <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 bg-[#75f228]/25 blur-3xl rounded-full pointer-events-none" />

            {/* Left: Coin Image with Hover Float & Energy Glow - BIGGER BUT WITHIN CARD */}
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-60 xl:h-60 flex-shrink-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full drop-shadow-[0_0_30px_rgba(117,242,40,0.75)]"
              >
                <Image
                  src="/coin.png"
                  alt="IRMIDEN $IMD Gold Coin"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </div>

            {/* Right: Tokenomics Details - Sleek Compact Rows */}
            <div className="flex-1 flex flex-col justify-center min-w-0 pr-1">
              <h3 className="font-gelato font-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2 sm:mb-3.5 select-none">
                Tokenomics
              </h3>

              <div className="space-y-1.5 sm:space-y-2.5">
                {/* Total Supply */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-gelato font-medium text-xs sm:text-sm md:text-base text-zinc-300 whitespace-nowrap">
                    Total Supply:
                  </span>
                  <span className="font-gelato font-black text-xs sm:text-base md:text-lg lg:text-xl text-[#75f228] drop-shadow-[0_0_12px_rgba(117,242,40,0.7)]">
                    1,000,000,000
                  </span>
                </div>

                {/* Network */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-gelato font-medium text-xs sm:text-sm md:text-base text-zinc-300 whitespace-nowrap">
                    Network:
                  </span>
                  <span className="font-gelato font-black text-xs sm:text-base md:text-lg lg:text-xl text-[#75f228] drop-shadow-[0_0_12px_rgba(117,242,40,0.7)]">
                    TRON (TRC20)
                  </span>
                </div>

                {/* Contract Address */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/10">
                  <span className="font-gelato font-medium text-xs sm:text-sm md:text-base text-zinc-300 whitespace-nowrap">
                    Contract Address:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    title="Click to copy full contract address"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs md:text-sm text-[#75f228] hover:text-[#9eff54] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/40 border border-[#75f228]/30 hover:border-[#75f228] transition-colors cursor-pointer group/btn"
                  >
                    <span>{`${CONTRACT_ADDRESS.slice(0, 8)}...${CONTRACT_ADDRESS.slice(-6)}`}</span>
                    {copied ? (
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#75f228]" />
                    ) : (
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400 group-hover/btn:text-[#75f228] transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: JOIN OUR COMMUNITY - Sleek Horizontal Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
            whileHover={{ y: -3 }}
            className="group relative rounded-[22px] sm:rounded-[28px] md:rounded-[34px] border-2 border-[#75f228]/55 hover:border-[#75f228] bg-gradient-to-r from-[#031502]/95 via-[#062005]/92 to-[#020e02]/95 backdrop-blur-xl p-4 sm:p-6 md:p-7 lg:p-8 flex flex-row items-center justify-between shadow-[0_0_30px_rgba(117,242,40,0.16),inset_0_0_20px_rgba(117,242,40,0.06)] hover:shadow-[0_0_45px_rgba(117,242,40,0.32)] transition-all duration-300 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] overflow-visible"
          >
            {/* Ambient Spotlight behind Character */}
            <div className="absolute right-4 sm:right-10 bottom-0 w-44 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 bg-[#75f228]/25 blur-3xl rounded-full pointer-events-none" />

            {/* Left: Text & Social Buttons */}
            <div className="flex-1 flex flex-col justify-center z-10 min-w-0 pl-1 pr-24 sm:pr-36 md:pr-44 lg:pr-52 xl:pr-60">
              <h3 className="font-gelato font-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight select-none">
                Join Our Community
              </h3>
              <p className="font-gelato font-normal text-xs sm:text-sm md:text-base text-zinc-300 mt-1 mb-3.5 sm:mb-4.5">
                Be part of the IRMIDEN family!
              </p>

              {/* 3 Circular Social Buttons */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4">
                {socialLinks.map((s, idx) => (
                  <motion.a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label={s.name}
                    className="group/btn relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-[#75f228]/60 hover:border-[#75f228] bg-black/75 hover:bg-[#75f228] flex items-center justify-center shadow-[0_0_15px_rgba(117,242,40,0.2)] hover:shadow-[0_0_25px_rgba(117,242,40,0.8)] transition-all duration-200 cursor-pointer"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Thumbs-Up Character Image - attached to bottom, peaking out at top */}
            <div className="absolute right-0 sm:right-2 md:right-3 lg:right-4 bottom-0 w-32 sm:w-44 md:w-52 lg:w-60 xl:w-68 h-[115%] sm:h-[120%] md:h-[125%] flex items-end justify-center z-20 pointer-events-none">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full flex items-end justify-center drop-shadow-[0_12px_25px_rgba(0,0,0,0.95)]"
              >
                <Image
                  src="/thumbs-up.png"
                  alt="IRMIDEN Thumbs Up Character"
                  width={340}
                  height={340}
                  className="w-full h-full object-contain object-bottom select-none"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

