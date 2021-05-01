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
        'dc-grey': '#404040',
        'alt-grey': '#AFB1B1',
        'dark-alt-grey': '#262528',
        'light-about': '#A7C7E7',
        'dark-about': '#23395D',
        'light-hero': '#FFD1DC',
        'dark-hero': '#9673a6',
        'pastel-yellow': '#FDFD96',
        'pastel-green': '#77DD77',
      },
      fontFamily: {
        roboto: ['robotomedium'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
