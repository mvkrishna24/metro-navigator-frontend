/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020b18",
          900: "#040f1f",
          800: "#071428",
          700: "#0a1a35",
        },
        metro: {
          blue: "#0ea5e9",
          yellow: "#fbbf24",
          red: "#ef4444",
          green: "#22c55e",
          violet: "#a855f7",
          orange: "#f97316",
        }
      },
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      }
    }
  },
  plugins: [],
}