import { Variants } from "framer-motion"

export const EASE = [0.5, -0.05, 0.5, 0.99]

export const FADE_IN: Variants = {
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

export const CURRENTLY_PLAYING_VARIANT: Variants = {
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
      delay: 2,
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
      staggerChildren: 0.4,
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
    x: 0,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 3, stiffness: 50 },
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
