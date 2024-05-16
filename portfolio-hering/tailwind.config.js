/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#12130F',
        'text-primary': '#E4DFDA',
        'accent-primary': '#F6690C'
      },
      fontFamily: {
        "rekron": ["rekron", "sans-serif"],
        "outfit": ["outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

