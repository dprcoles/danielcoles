const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
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
        javascript: {
          from: "#F1E05A",
          to: "#CFC04C",
        },
        go: {
          from: "#00A3CC",
          to: "#00CCFF",
        },
        rust: {
          from: "#DEA584",
          to: "#A87D63",
        },
        typescript: {
          from: "#2B7489",
          to: "#3693AD",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
