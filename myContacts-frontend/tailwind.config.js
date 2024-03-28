/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NswFoundation: ["Edu NSW ACT Foundation", "cursive"],
        PlayFair: ["Playfair Display", "serif"],
        Philosopher: ["Philosopher", "sans-serif"]
      }
    },
  },
  plugins: [],
}

