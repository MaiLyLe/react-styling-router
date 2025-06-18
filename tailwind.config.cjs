/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '645px',
        md: '773px',
        lg: '1029px',
    },
  },
},
  plugins: [],
} 