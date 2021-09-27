const purgeEnabled = process.env.NODE_ENV === 'production'

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-grey': '#F6F4F6',
        'dc-grey': '#404040',
        'alt-grey': '#AFB1B1',
        'dark-alt-grey': '#262528',
        'light-about': '#A7C7E7',
        'dark-about': '#23395D',
        'light-hero': '#FFD1DC',
        'light-home-hover': '#FFB8C9',
        'light-default-hover': '#E6E6E6',
        'dark-hero': '#9673A6',
        'dark-home-hover': '#A283B0',
        'dark-default-hover': '#4C4A50',
        'pastel-yellow': '#FDFD96',
        'pastel-green': '#77DD77',
        'light-scrollbar-track': '#FFF',
        'dark-scrollbar-track': '#404040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
