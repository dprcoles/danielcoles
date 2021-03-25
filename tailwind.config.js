const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dc-grey': '#404040',
        'pastel-yellow': '#FDFD96',
        'pastel-blue': '#A7C7E7',
        'pastel-pink': '#FFD1DC',
        'pastel-green': '#77DD77',
      },
      fontFamily: {
        roboto: ['Roboto'],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
