'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa6'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'FAQ', href: '#faq' },
]

const TELEGRAM_URL = 'https://t.me/+W1i-pq2b7fE1NTVk'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler for anchor links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#030c03]/95 backdrop-blur-xl border-b border-[#75f228]/30 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(117,242,40,0.12)]'
          : 'bg-[#020702]/90 backdrop-blur-md border-b border-[#75f228]/20 shadow-[0_4px_20px_rgba(0,0,0,0.7)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand: Icon + Name */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 drop-shadow-[0_0_12px_rgba(117,242,40,0.6)] group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/icon.png"
              alt="IRMIDEN Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex items-baseline gap-1.5 font-gelato font-black tracking-tight text-xl sm:text-2xl">
            <span className="text-white group-hover:text-zinc-100 transition-colors">
              IRMIDEN
            </span>
            <span className="text-[#75f228] drop-shadow-[0_0_14px_rgba(117,242,40,0.7)]">
              ($IMD)
            </span>
          </div>
        </Link>

        {/* Desktop 4 Navlinks */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="font-gelato font-bold text-sm lg:text-base text-zinc-300 hover:text-[#75f228] transition-colors duration-200 tracking-wide relative group cursor-pointer"
            >
              <span>{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#75f228] shadow-[0_0_8px_#75f228] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action: Telegram Button */}
        <div className="hidden md:flex items-center">
          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full font-gelato font-black text-xs sm:text-sm uppercase tracking-wider text-black bg-[#75f228] hover:bg-[#8aff3d] shadow-[0_0_20px_rgba(117,242,40,0.45)] hover:shadow-[0_0_30px_rgba(117,242,40,0.75)] transition-all duration-200 cursor-pointer"
          >
            <FaTelegram className="w-4 h-4 text-black" />
            <span>Join Telegram</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-[#75f228]/40 bg-black/60 text-[#75f228] hover:text-white hover:border-[#75f228] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#75f228]" />
            ) : (
              <Menu className="w-6 h-6 text-[#75f228]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-gradient-to-b from-[#041203] to-[#010601] border-b border-[#75f228]/30 px-5 pt-3 pb-6 shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col space-y-3.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-gelato font-bold text-base text-zinc-200 hover:text-[#75f228] py-2 border-b border-white/5 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-gelato font-black text-sm uppercase tracking-wider text-black bg-[#75f228] hover:bg-[#8aff3d] shadow-[0_0_20px_rgba(117,242,40,0.5)] transition-all cursor-pointer"
                >
                  <FaTelegram className="w-4 h-4 text-black" />
                  <span>Join Telegram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
