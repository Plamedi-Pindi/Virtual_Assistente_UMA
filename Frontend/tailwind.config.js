/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'w-6', 'w-7', 'w-8', 'w-10', // todas as possíveis variações usadas dinamicamente
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#14113E',
        "secundary": "#D72229",
        "third": "#E8E7E7"
      },
      screens:{
        'lay_520': '32.5rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

