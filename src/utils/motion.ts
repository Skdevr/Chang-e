import type { Variants, Transition } from 'framer-motion'

export const easeOutQuint: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutQuint } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOutQuint } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOutQuint } },
}

export const stagger = (delay = 0.08, initial = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: initial } },
})

export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px' } as const
