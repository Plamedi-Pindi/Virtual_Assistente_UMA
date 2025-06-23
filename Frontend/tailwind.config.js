/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#14113E',
        "secundary": "#D72229",
        "third": "#E8E7E7"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

