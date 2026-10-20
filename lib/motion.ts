import type { Transition, Variants } from 'framer-motion'

/**
 * Standard physics-based spring configurations
 * Derived from modern Awwwards/Fluid interaction guidelines
 */
export const springs = {
  // Snappy / Bouncy (Buttons, badges, quick micro-interactions)
  snappy: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  } as const,

  // Fluid / Smooth (Hover states, cursors, sheet disclosures)
  fluid: {
    type: 'spring',
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  } as const,

  // Heavy / Dramatic (Hero reveals, full-page transitions)
  dramatic: {
    type: 'spring',
    stiffness: 100,
    damping: 30,
  } as const,
}

/**
 * Common Framer Motion variants with accessible offsets & staggers
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.08,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.fluid,
  },
}
