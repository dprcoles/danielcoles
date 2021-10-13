const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts}",
    "safelist.txt",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: colors.orange,
        rose: colors.rose,
        violet: colors.violet,
        javascript: {
          bg: "#F1E05A",
          ring: "#CFC04C",
        },
        go: {
          bg: "#00A3CC",
          ring: "#00CCFF",
        },
        rust: {
          bg: "#DEA584",
          ring: "#A87D63",
        },
        typescript: {
          bg: "#2B7489",
          ring: "#1A4754",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
