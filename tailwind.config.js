const { nextui } = require("@nextui-org/theme/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      base: ['var(--font-inter)', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      display: ["Roobert", "Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      mono: ["monospace"]
    },
    extend: {
      colors: {
        brand: {
          modrinth: "#00af5c"
        }
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
}

