'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface PhaseData {
  number: number
  titlePrefix: string
  titleHighlight: string
  items: string[]
}

const PHASES: PhaseData[] = [
  {
    number: 1,
    titlePrefix: 'Phase 1: Foundation ',
    titleHighlight: '(Now)',
    items: [
      'Strengthen core community on Telegram & X',
      'Consistent content + targeted raids',
      'Launch clean landing page with clear CA & buy links',
      'Build trust through transparency',
    ],
  },
  {
    number: 2,
    titlePrefix: 'Phase 2: ',
    titleHighlight: 'Growth',
    items: [
      'Increase real holders and trading volume on SunPump',
      'Community-driven contests & engagement campaigns',
      'Expand social reach and partnerships within TRON ecosystem',
    ],
  },
  {
    number: 3,
    titlePrefix: 'Phase 3: ',
    titleHighlight: 'Expansion',
    items: [
      'Strategic collaborations',
      'Explore additional utility for long-term holders',
      'Evaluate CEX opportunities once community and volume are solid',
    ],
  },
]

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const leftLineRef = useRef<HTMLDivElement>(null)
  const rightLineRef = useRef<HTMLDivElement>(null)
  const titleTextRef = useRef<HTMLHeadingElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([])
  const pillRef = useRef<HTMLDivElement>(null)
  const pillIconRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Main ScrollTrigger timeline that plays and reverses smoothly on scroll down and up
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // 1. Header Lines & Title Animation
      tl.fromTo(
        leftLineRef.current,
        { scaleX: 0, opacity: 0, transformOrigin: 'right center' },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: 'power3.out' },
        0
      )
        .fromTo(
          rightLineRef.current,
          { scaleX: 0, opacity: 0, transformOrigin: 'left center' },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: 'power3.out' },
          0
        )
        .fromTo(
          titleTextRef.current,
          { opacity: 0, y: -24, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'back.out(1.7)' },
          0.1
        )

      // 2. Cards Entrance
      const validCards = cardRefs.current.filter(Boolean)
      tl.fromTo(
        validCards,
        {
          opacity: 0,
          y: 70,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
        },
        0.25
      )

      // 3. Number Badges Pop In
      const validBadges = badgeRefs.current.filter(Boolean)
      tl.fromTo(
        validBadges,
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.14,
          ease: 'back.out(2.2)',
        },
        0.45
      )

      // 4. Checklist Items Stagger Inside Cards
      const allListItems = sectionRef.current?.querySelectorAll('.roadmap-item')
      if (allListItems && allListItems.length > 0) {
        tl.fromTo(
          allListItems,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: 'power2.out',
          },
          0.55
        )
      }

      // 5. Bottom Focus Banner
      if (pillRef.current) {
        tl.fromTo(
          pillRef.current,
          {
            opacity: 0,
            y: 35,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'back.out(1.6)',
          },
          0.65
        )
      }

      // Continuous subtle ambient breathing effect on ambient neon glows
      const glowingElements = sectionRef.current?.querySelectorAll('.ambient-neon-glow')
      if (glowingElements && glowingElements.length > 0) {
        gsap.to(glowingElements, {
          opacity: 0.85,
          scale: 1.08,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.3,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Card Hover Handlers using GSAP
  const handleCardMouseEnter = (index: number) => {
    const card = cardRefs.current[index]
    const badge = badgeRefs.current[index]
    if (!card) return

    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
      boxShadow: '0 0 45px rgba(117, 242, 40, 0.45), inset 0 0 25px rgba(117, 242, 40, 0.15)',
      borderColor: 'rgba(117, 242, 40, 0.95)',
    })

    if (badge) {
      gsap.to(badge, {
        scale: 1.15,
        boxShadow: '0 0 32px rgba(117, 242, 40, 0.95)',
        duration: 0.3,
        ease: 'back.out(2)',
      })
    }

    const items = card.querySelectorAll('.roadmap-icon')
    if (items.length > 0) {
      gsap.to(items, {
        scale: 1.12,
        duration: 0.25,
        stagger: 0.04,
        ease: 'power2.out',
      })
    }
  }

  const handleCardMouseLeave = (index: number) => {
    const card = cardRefs.current[index]
    const badge = badgeRefs.current[index]
    if (!card) return

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: 'power2.out',
      boxShadow: '0 0 24px rgba(117, 242, 40, 0.18), inset 0 0 15px rgba(117, 242, 40, 0.06)',
      borderColor: 'rgba(117, 242, 40, 0.6)',
    })

    if (badge) {
      gsap.to(badge, {
        scale: 1,
        boxShadow: '0 0 20px rgba(117, 242, 40, 0.65)',
        duration: 0.35,
        ease: 'power2.out',
      })
    }

    const items = card.querySelectorAll('.roadmap-icon')
    if (items.length > 0) {
      gsap.to(items, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  // Bottom Pill Hover Handlers
  const handlePillMouseEnter = () => {
    if (!pillRef.current) return
    gsap.to(pillRef.current, {
      scale: 1.035,
      y: -3,
      boxShadow: '0 0 55px rgba(117, 242, 40, 0.8), 0 0 90px rgba(117, 242, 40, 0.35)',
      duration: 0.3,
      ease: 'power2.out',
    })
    if (pillIconRef.current) {
      gsap.to(pillIconRef.current, {
        y: -3,
        scale: 1.15,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      })
    }
  }

  const handlePillMouseLeave = () => {
    if (!pillRef.current) return
    gsap.to(pillRef.current, {
      scale: 1,
      y: 0,
      boxShadow: '0 0 35px rgba(117, 242, 40, 0.55), 0 0 70px rgba(117, 242, 40, 0.25)',
      duration: 0.4,
      ease: 'power2.out',
    })
    if (pillIconRef.current) {
      gsap.to(pillIconRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_120%_80%_at_50%_15%,#0d310a_0%,#071a05_40%,#030a02_75%,#000000_100%)] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 selection:bg-[#75f228] selection:text-black"
    >
      {/* Dynamic Ambient Background: Dark Green & Black Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle high-tech crypto grid pattern with emerald tint */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(117,242,40,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(117,242,40,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_40%,transparent_100%)] opacity-60" />

        {/* Upper horizontal emerald aurora wash */}
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#13420d]/50 via-[#0a2608]/30 to-transparent blur-3xl" />

        {/* Top Header Central Glow */}
        <div className="ambient-neon-glow absolute top-4 left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-[#75f228]/20 blur-[100px] rounded-full" />

        {/* Ambient Glow behind Cards */}
        <div className="ambient-neon-glow absolute top-1/2 left-1/4 -translate-y-1/2 w-[520px] h-[380px] bg-[#75f228]/14 blur-[120px] rounded-full" />
        <div className="ambient-neon-glow absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[380px] bg-[#75f228]/14 blur-[120px] rounded-full" />

        {/* Center Emerald Ambient Light Core */}
        <div className="ambient-neon-glow absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#0f3d0a]/60 blur-[130px] rounded-full" />

        {/* Bottom Pill Intense Ambient Aura */}
        <div className="ambient-neon-glow absolute bottom-8 left-1/2 -translate-x-1/2 w-[700px] h-[180px] bg-[#75f228]/30 blur-[85px] rounded-full" />

        {/* Deep edge vignette to focus attention */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_50%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header: Left Glowing Line + Title + Right Glowing Line */}
        <div
          ref={headerRef}
          className="w-full flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {/* Left glowing accent line */}
          <div
            ref={leftLineRef}
            className="flex-1 max-w-[120px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]"
          />

          {/* Heading in Gelato Sans Black Bold */}
          <h2
            ref={titleTextRef}
            className="font-gelato font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] tracking-tight leading-tight text-center select-none"
          >
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">IRMIDEN </span>
            <span className="text-[#75f228] drop-shadow-[0_0_20px_rgba(117,242,40,0.85)]">
              ($IMD)
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"> — </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Project Roadmap
            </span>
          </h2>

          {/* Right glowing accent line */}
          <div
            ref={rightLineRef}
            className="flex-1 max-w-[120px] sm:max-w-[200px] md:max-w-[260px] lg:max-w-[320px] h-[3px] rounded-full bg-gradient-to-l from-transparent via-[#75f228] to-[#75f228] shadow-[0_0_12px_#75f228]"
          />
        </div>

        {/* 3 Phases Grid */}
        <div
          ref={cardsContainerRef}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-6 lg:gap-8 xl:gap-9 mb-12 sm:mb-16 md:mb-20 items-stretch"
        >
          {PHASES.map((phase, idx) => (
            <div
              key={phase.number}
              ref={(el) => {
                cardRefs.current[idx] = el
              }}
              onMouseEnter={() => handleCardMouseEnter(idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
              className="group relative flex flex-col rounded-[26px] sm:rounded-[30px] border-2 border-[#75f228]/60 bg-gradient-to-b from-[#0a1807]/90 via-[#050c03]/95 to-[#020501]/95 backdrop-blur-md pt-10 sm:pt-12 pb-7 sm:pb-9 px-6 sm:px-7 lg:px-8 shadow-[0_0_24px_rgba(117,242,40,0.18),inset_0_0_15px_rgba(117,242,40,0.06)] transition-colors duration-300 cursor-default"
            >
              {/* Radial spotlight behind badge */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-36 bg-[#75f228]/25 blur-2xl rounded-full pointer-events-none" />

              {/* Number Badge at Top Center */}
              <div
                ref={(el) => {
                  badgeRefs.current[idx] = el
                }}
                className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#75f228] border-2 border-[#8dfa44] shadow-[0_0_20px_rgba(117,242,40,0.65)] flex items-center justify-center select-none z-20"
              >
                <span className="font-gelato font-black text-2xl sm:text-3xl text-black leading-none">
                  {phase.number}
                </span>
              </div>

              {/* Card Title: Gelato Sans Black Bold */}
              <h3 className="font-gelato font-black text-lg sm:text-xl lg:text-[22px] text-center mb-6 sm:mb-7 tracking-tight leading-snug select-none">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {phase.titlePrefix}
                </span>
                <span className="text-[#75f228] drop-shadow-[0_0_16px_rgba(117,242,40,0.7)]">
                  {phase.titleHighlight}
                </span>
              </h3>

              {/* Checkpoints list */}
              <ul className="flex-1 flex flex-col space-y-3.5 sm:space-y-4">
                {phase.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="roadmap-item flex items-start gap-3 sm:gap-3.5 group/item"
                  >
                    {/* Checkmark icon in solid neon green circle with black check */}
                    <div className="roadmap-icon flex-shrink-0 w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#75f228] shadow-[0_0_10px_rgba(117,242,40,0.55)] flex items-center justify-center mt-0.5 transition-transform duration-200">
                      <Check className="w-3.5 h-3.5 text-black stroke-[3.5]" />
                    </div>

                    {/* Small text in Gelato Sans */}
                    <span className="font-gelato font-normal text-xs sm:text-sm lg:text-[14.5px] text-zinc-100/95 leading-relaxed tracking-normal select-none">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Focus Banner: Pill shape in Gelato Sans with neon green background and glow */}
        <div
          ref={pillRef}
          onMouseEnter={handlePillMouseEnter}
          onMouseLeave={handlePillMouseLeave}
          className="relative group rounded-full bg-gradient-to-r from-[#6de822] via-[#75f228] to-[#5ee016] text-black px-6 sm:px-10 md:px-14 py-3 sm:py-3.5 shadow-[0_0_35px_rgba(117,242,40,0.55),0_0_70px_rgba(117,242,40,0.25)] flex items-center justify-center gap-3.5 sm:gap-5 max-w-3xl cursor-default select-none transition-all duration-300"
        >
          {/* Trend Chart Icon exactly matching the image */}
          <svg
            ref={pillIconRef}
            className="w-7 h-7 sm:w-9 sm:h-9 text-black flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Step chart bars */}
            <rect x="3.5" y="13.5" width="3" height="7.5" rx="0.75" />
            <rect x="8.5" y="9.5" width="3" height="11.5" rx="0.75" />
            <rect x="13.5" y="5.5" width="3" height="15.5" rx="0.75" />
            {/* Trending upward arrow */}
            <path
              d="M4 11.5L9.5 6L13.5 10L20.5 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 3H20.5V7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text lines */}
          <div className="flex flex-col items-start justify-center leading-tight">
            <span className="font-gelato font-black text-xs sm:text-sm md:text-base lg:text-[17px] text-black tracking-tight">
              Current focus: Organic growth and community first.
            </span>
            <span className="font-gelato font-bold text-[11px] sm:text-xs md:text-sm lg:text-[14px] text-black/90 tracking-normal mt-0.5">
              Early stage — building step by step.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
