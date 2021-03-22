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
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
