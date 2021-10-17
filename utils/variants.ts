export const EASE = [0.5, -0.05, 0.5, 0.99]

export const FADE_IN = {
  initial: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: EASE },
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

export const FADE_UP = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.5, ease: EASE },
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

export const STAGGER = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
