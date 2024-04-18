const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts}",
    "safelist.txt",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-base)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-family-heading)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-family-mono)", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        "pulse-slow": "pulse 10s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
      addVariant("group-hocus", [":merge(.group):hover &", ":merge(.group):focus &"])
      addVariant("peer-hocus", [":merge(.peer):hover ~ &", ":merge(.peer):focus ~ &"])
    }),
  ],
}
