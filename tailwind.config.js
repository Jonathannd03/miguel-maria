/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};