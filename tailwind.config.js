const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dc-grey': '#404040',
        'alt-grey': '#AFB1B1',
        'dark-alt-grey': '#262528',
        'light-aboutme': '#A7C7E7',
        'dark-aboutme': '#23395D',
        'light-hero': '#FFD1DC',
        'dark-hero': '#9673a6',
        'pastel-yellow': '#FDFD96',
        'pastel-green': '#77DD77',
      },
      fontFamily: {
        roboto: ['robotomedium'],
        sans: ['robotomedium', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
