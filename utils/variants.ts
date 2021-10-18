import { Variants } from "framer-motion"

export const EASE = [0.5, -0.05, 0.5, 0.99]

export const FADE_IN = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
}

export const FADE_UP: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
}

export const FADE_DOWN: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
}

export const STAGGER: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const ICON_FADE = (colour: string): Variants => {
  return {
    initial: {
      pathLength: 0,
      fill: `rgba(${colour}, 0)`,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      fill: `rgba(${colour}, 1)`,
      transition: {
        default: { duration: 2, ease: EASE },
        fill: { delay: 0.5, duration: 2, ease: EASE },
      },
      opacity: 1,
    },
  }
}

export const MINI_ME_VARIANT: Variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, stiffness: 75 },
  },
}

export const SLIDE_IN: Variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1, damping: 25 },
  },
}
