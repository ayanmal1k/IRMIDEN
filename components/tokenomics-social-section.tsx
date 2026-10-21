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
      icon: <FaTelegram className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />,
      href: 'https://t.me/+W1i-pq2b7fE1NTVk',
    },
    {
      name: 'X (Twitter)',
      icon: <FaXTwitter className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />,
      href: 'https://x.com/Irmiden_TRON',
    },
    {
      name: 'TRON',
      icon: (
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200"
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
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_15%,#0d310a_0%,#071a05_40%,#030a02_75%,#000000_100%)] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 selection:bg-[#75f228] selection:text-black"
    >
      {/* Background Ambient Glows & Grid matching IRMIDEN Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,242,40,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,242,40,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_40%,transparent_100%)] opacity-50" />

        {/* Ambient emerald lights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-[#75f228]/12 blur-[110px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-[#75f228]/12 blur-[110px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Parallel 2-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* CARD 1: TOKENOMICS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[26px] sm:rounded-[32px] border-2 border-[#75f228]/60 hover:border-[#75f228] bg-gradient-to-b from-[#0a2007]/90 via-[#051103]/95 to-[#020501]/95 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-[0_0_30px_rgba(117,242,40,0.18),inset_0_0_20px_rgba(117,242,40,0.06)] hover:shadow-[0_0_45px_rgba(117,242,40,0.35)] transition-all duration-300"
          >
            {/* Ambient Radial Spotlight behind Coin */}
            <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 w-44 h-44 bg-[#75f228]/25 blur-3xl rounded-full pointer-events-none" />

            {/* Left: Coin Image with Hover Float & Energy Glow */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex-shrink-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full drop-shadow-[0_0_24px_rgba(117,242,40,0.65)]"
              >
                <Image
                  src="/coin.png"
                  alt="IRMIDEN $IMD Gold Coin"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </div>

            {/* Right: Tokenomics Details */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left min-w-0">
              <h3 className="font-gelato font-black text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight mb-4 sm:mb-5 leading-tight select-none">
                Tokenomics
              </h3>

              <div className="space-y-3 sm:space-y-3.5">
                {/* Total Supply */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                  <span className="font-gelato font-medium text-xs sm:text-sm text-zinc-300">
                    Total Supply:
                  </span>
                  <span className="font-gelato font-black text-sm sm:text-base text-[#75f228] drop-shadow-[0_0_12px_rgba(117,242,40,0.7)]">
                    1,000,000,000
                  </span>
                </div>

                {/* Network */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
                  <span className="font-gelato font-medium text-xs sm:text-sm text-zinc-300">
                    Network:
                  </span>
                  <span className="font-gelato font-black text-sm sm:text-base text-[#75f228] drop-shadow-[0_0_12px_rgba(117,242,40,0.7)]">
                    TRON (TRC20)
                  </span>
                </div>

                {/* Contract Address with interactive copy */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pt-1 border-t border-white/10">
                  <span className="font-gelato font-medium text-xs sm:text-sm text-zinc-300">
                    Contract Address:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    title="Click to copy full contract address"
                    className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#75f228] hover:text-[#9eff54] font-bold transition-colors cursor-pointer group/btn"
                  >
                    <span>{`${CONTRACT_ADDRESS.slice(0, 8)}...${CONTRACT_ADDRESS.slice(-6)}`}</span>
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-[#75f228]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-[#75f228] transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: JOIN OUR COMMUNITY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-[26px] sm:rounded-[32px] border-2 border-[#75f228]/60 hover:border-[#75f228] bg-gradient-to-b from-[#0a2007]/90 via-[#051103]/95 to-[#020501]/95 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-6 shadow-[0_0_30px_rgba(117,242,40,0.18),inset_0_0_20px_rgba(117,242,40,0.06)] hover:shadow-[0_0_45px_rgba(117,242,40,0.35)] transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Spotlight behind Character */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#75f228]/25 blur-3xl rounded-full pointer-events-none" />

            {/* Left: Text & Social Buttons */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left z-10 min-w-0">
              <h3 className="font-gelato font-black text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-tight select-none">
                Join Our Community
              </h3>
              <p className="font-gelato font-normal text-xs sm:text-sm md:text-base text-zinc-300 mt-1 mb-5 sm:mb-6">
                Be part of the IRMIDEN family!
              </p>

              {/* 4 Social Circular Buttons matching image */}
              <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-3.5">
                {socialLinks.map((s, idx) => (
                  <motion.a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    aria-label={s.name}
                    className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#75f228]/60 hover:border-[#75f228] bg-black/70 hover:bg-[#75f228] flex items-center justify-center shadow-[0_0_15px_rgba(117,242,40,0.25)] hover:shadow-[0_0_25px_rgba(117,242,40,0.7)] transition-all duration-200 cursor-pointer"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Thumbs-Up Character Image */}
            <div className="relative w-40 sm:w-48 md:w-52 h-44 sm:h-52 md:h-56 flex-shrink-0 flex items-end justify-center z-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
              >
                <Image
                  src="/thumbs-up.png"
                  alt="IRMIDEN Thumbs Up Character"
                  width={260}
                  height={260}
                  className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
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
