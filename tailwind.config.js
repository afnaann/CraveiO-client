/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        special: ['Special Elite', 'cursive'], 
      },
      colors: {
        orange: {
          500: "#f97316", // Customize the orange color
        },
      }
    },
  },
  plugins: [],
}

