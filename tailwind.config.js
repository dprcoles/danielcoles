const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dc-grey': '#404040',
        'pastel-yellow': '#FDFD96',
        'pastel-blue': '#A7C7E7',
        'pastel-pink': '#FFD1DC',
        'pastel-green': '#77DD77',
        'dark-pastel-blue': '#23395D',
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
