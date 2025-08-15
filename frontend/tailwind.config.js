/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navBgC':'rgb(28, 54, 35)'
      },
      screens: {
        'sm': '640px',
        'md': '700px', // changed from 768px to 700px
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

