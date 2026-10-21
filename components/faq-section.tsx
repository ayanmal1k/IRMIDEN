'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown,
  TrendingUp,
  ExternalLink,
  RefreshCw,
  Copy,
  Check,
  ShieldCheck,
  Coins,
  Layers,
  Flame,
} from 'lucide-react'
import { toast } from 'sonner'

const CONTRACT_ADDRESS = 'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'What is IRMIDEN ($IMD) and why is it legendary?',
    answer:
      'IRMIDEN ($IMD) first launched on August 15, 2020 as an OG TRC10 token (ID: 1003154) on the TRON network. After 6 years, the original 2020 developer has officially brought $IMD back to life as a modern TRC20 token on SunPump, driven by 100% organic community growth, no team dumps, and complete transparency.',
  },
  {
    id: 2,
    question: 'How can I buy $IMD on SunPump?',
    answer:
      'Buying $IMD is simple: connect your TRON-compatible wallet (TronLink, Bitget, or Trust Wallet) to SunPump.meme, paste the official contract address (TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ), enter the amount of TRX you wish to swap, and confirm the transaction instantly with zero slippage hassles.',
  },
  {
    id: 3,
    question: 'What are the tokenomics and total supply?',
    answer:
      'IRMIDEN ($IMD) has a fixed total supply of 1,000,000,000 (1 Billion) tokens. There are no developer reserves, no hidden presales, and no minting capability. 100% of the tokens are distributed through SunPump fair launch bonding curve mechanics until liquidity graduates to SunSwap.',
  },
  {
    id: 4,
    question: 'What is the vision and roadmap for the project?',
    answer:
      'Our priority is organic growth and community first. We are strengthening core Telegram and X raids, securing strategic partnerships across the TRON ecosystem, and preparing for centralized exchange (CEX) listings once community volume and liquidity milestones are locked.',
  },
]

interface MarketData {
  symbol: string
  name: string
  contractAddress: string
  priceInTrx: number
  priceInUsd: number
  trxPriceInUsd: number
  marketCapUsd: number
  liquidityUsd: number
  volume24Hr: number
  priceChange24Hr: number
  pumpPercentage: number
  totalSupply: number
  trxReserve: number
  tokenReserve: number
  status: string
  updatedAt: number
}

const INITIAL_DATA: MarketData = {
  symbol: 'IMD',
  name: 'IRMIDEN',
  contractAddress: CONTRACT_ADDRESS,
  priceInTrx: 0.00004292,
  priceInUsd: 0.00001418,
  trxPriceInUsd: 0.33,
  marketCapUsd: 14175.51,
  liquidityUsd: 26484.21,
  volume24Hr: 24.75,
  priceChange24Hr: 12.36,
  pumpPercentage: 4.94,
  totalSupply: 1000000000,
  trxReserve: 5089.77,
  tokenReserve: 664153522,
  status: 'BONDING CURVE',
  updatedAt: Date.now(),
}

export function FaqSection() {
  // All 4 FAQ questions are closed by default (null = none open)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [marketData, setMarketData] = useState<MarketData>(INITIAL_DATA)
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  // Fetch live market data from internal API route
  const fetchMarketData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/token-data', { cache: 'no-store' })
      const json = await res.json()
      if (json && json.data) {
        setMarketData(json.data)
      }
    } catch {
      // Use fallback gracefully
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMarketData()
    // Auto-refresh every 20 seconds
    const interval = setInterval(fetchMarketData, 20000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      toast.success('Contract Address Copied!', {
        description: CONTRACT_ADDRESS,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Failed to copy address')
    }
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  // Format currency helpers
  const formatUsd = (val: number, decimals = 4) => {
    if (!val) return '$0.00'
    if (val < 0.0001) return `$${val.toFixed(8)}`
    if (val < 1) return `$${val.toFixed(decimals)}`
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(val)
  }

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_15%,#0d310a_0%,#071a05_40%,#030a02_75%,#000000_100%)] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 selection:bg-[#75f228] selection:text-black"
    >
      {/* Background Ambient Layers matching the dark green-black aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,242,40,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,242,40,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_40%,transparent_100%)] opacity-50" />

        {/* Luminous emerald orbs */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-[#75f228]/12 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#75f228]/14 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#75f228]/18 blur-[100px] rounded-full" />
      </div>

      {/* STANDARD CONTAINER WIDTH (max-w-7xl mx-auto) */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header: Left Glowing Line + Title + Right Glowing Line */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="flex-1 max-w-[120px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]" />

          <h2 className="font-gelato font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-center select-none">
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">Frequently Asked </span>
            <span className="text-[#75f228] drop-shadow-[0_0_20px_rgba(117,242,40,0.85)]">
              Questions
            </span>
          </h2>

          <div className="flex-1 max-w-[120px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]" />
        </div>

        {/* 2-Column Grid: Left = 4 FAQ Accordions | Right = Live Market Data */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: FAQ Accordion (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.id}
                  className={`group relative rounded-[20px] sm:rounded-[24px] border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#75f228] bg-gradient-to-b from-[#0f2d0a]/90 via-[#071605]/95 to-[#020701]/95 shadow-[0_0_30px_rgba(117,242,40,0.35),inset_0_0_20px_rgba(117,242,40,0.1)]'
                      : 'border-[#75f228]/40 hover:border-[#75f228]/80 bg-gradient-to-b from-[#0a1c07]/75 via-[#050e03]/85 to-[#020501]/90 hover:shadow-[0_0_20px_rgba(117,242,40,0.18)]'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* IMD Icon on the side with glowing aura */}
                      <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 bg-gradient-to-br from-[#75f228]/30 to-[#0c2408] border border-[#75f228]/60 shadow-[0_0_14px_rgba(117,242,40,0.35)] flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
                        <Image
                          src="/icon.png"
                          alt="IMD Token Icon"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                        />
                      </div>

                      {/* Question Title in Gelato Sans Black Bold */}
                      <span
                        className={`font-gelato font-black text-sm sm:text-base md:text-[17px] leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-[#75f228]' : 'text-white group-hover:text-zinc-100'
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Expand/Collapse Chevron indicator */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#75f228] text-black border-[#75f228] shadow-[0_0_12px_#75f228] rotate-180'
                          : 'bg-white/5 text-zinc-300 border-white/10 group-hover:border-[#75f228]/60 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Smooth Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                            opacity: { duration: 0.25, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.25, ease: [0.25, 1, 0.5, 1] },
                            opacity: { duration: 0.15 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#75f228]/15 ml-14 sm:ml-16">
                          <p className="font-gelato font-normal text-xs sm:text-sm md:text-[15px] text-zinc-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Live Market Data Widget (5 Cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-[26px] border-2 border-[#75f228]/60 bg-gradient-to-b from-[#0b2408]/90 via-[#061504]/95 to-[#020701]/98 backdrop-blur-md p-6 sm:p-7 shadow-[0_0_35px_rgba(117,242,40,0.25),inset_0_0_20px_rgba(117,242,40,0.08)]">
              {/* Header with live pulse and refresh */}
              <div className="flex items-center justify-between pb-4 border-b border-[#75f228]/20">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#75f228] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#75f228]" />
                  </span>
                  <span className="font-gelato font-black text-xs sm:text-sm uppercase tracking-wider text-[#75f228]">
                    Live SunPump Feed
                  </span>
                </div>

                <button
                  type="button"
                  onClick={fetchMarketData}
                  disabled={isLoading}
                  title="Refresh live data"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#75f228] transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#75f228]' : ''}`} />
                  <span className="font-mono text-[11px]">Live</span>
                </button>
              </div>

              {/* Main Token Price Banner */}
              <div className="py-5">
                <div className="flex items-center gap-3 mb-1">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black/60 border border-[#75f228]/50 p-1 flex-shrink-0">
                    <Image src="/icon.png" alt="IMD" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-gelato font-black text-lg text-white leading-none">
                      IRMIDEN <span className="text-[#75f228]">($IMD)</span>
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">TRON • TRC20</span>
                  </div>
                </div>

                <div className="mt-3 flex items-baseline justify-between gap-2 flex-wrap">
                  <div>
                    <div className="font-gelato font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {formatUsd(marketData.priceInUsd, 8)}
                    </div>
                    <div className="font-mono text-xs text-zinc-300 mt-0.5">
                      ≈ {marketData.priceInTrx.toFixed(8)} TRX
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#75f228]/20 border border-[#75f228]/50 text-[#75f228] font-gelato font-black text-xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+{marketData.priceChange24Hr.toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {/* Bonding Curve Progress Bar */}
              <div className="p-3.5 rounded-2xl bg-black/50 border border-[#75f228]/30 mb-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-gelato font-black text-zinc-200 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#75f228]" />
                    Bonding Curve Progress
                  </span>
                  <span className="font-mono font-bold text-[#75f228]">
                    {marketData.pumpPercentage.toFixed(2)}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6ce820] to-[#75f228] shadow-[0_0_12px_#75f228] transition-all duration-700"
                    style={{ width: `${Math.min(Math.max(marketData.pumpPercentage, 3), 100)}%` }}
                  />
                </div>
                <div className="text-[10px] text-zinc-400 mt-1.5 font-mono">
                  <span>TRX Reserve: {marketData.trxReserve.toLocaleString()} TRX</span>
                </div>
              </div>

              {/* 3 Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                {/* Market Cap */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#75f228]/40 transition-colors">
                  <div className="text-[10px] sm:text-[11px] font-gelato font-bold text-zinc-400 flex items-center gap-1">
                    <Coins className="w-3 h-3 text-[#75f228] flex-shrink-0" />
                    <span className="truncate">Market Cap</span>
                  </div>
                  <div className="font-gelato font-black text-xs sm:text-sm lg:text-base text-white mt-1 truncate">
                    {formatUsd(marketData.marketCapUsd, 2)}
                  </div>
                </div>

                {/* Virtual Liquidity */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#75f228]/40 transition-colors">
                  <div className="text-[10px] sm:text-[11px] font-gelato font-bold text-zinc-400 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#75f228] flex-shrink-0" />
                    <span className="truncate">Liquidity</span>
                  </div>
                  <div className="font-gelato font-black text-xs sm:text-sm lg:text-base text-white mt-1 truncate">
                    {formatUsd(marketData.liquidityUsd, 2)}
                  </div>
                </div>

                {/* Total Supply */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 hover:border-[#75f228]/40 transition-colors">
                  <div className="text-[10px] sm:text-[11px] font-gelato font-bold text-zinc-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#75f228] flex-shrink-0" />
                    <span className="truncate">Total Supply</span>
                  </div>
                  <div className="font-gelato font-black text-xs sm:text-sm lg:text-base text-white mt-1 truncate">
                    1B $IMD
                  </div>
                </div>
              </div>

              {/* Action Buttons: Buy on SunPump & Copy CA */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://sunpump.meme/token/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-[#75f228] hover:bg-[#8bf83a] text-black font-gelato font-black px-4 py-2.5 text-center text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(117,242,40,0.5)] hover:shadow-[0_0_30px_rgba(117,242,40,0.7)] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Trade on SunPump</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white font-gelato font-bold px-4 py-2.5 text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-white/15 hover:border-[#75f228] transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#75f228]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CA</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
