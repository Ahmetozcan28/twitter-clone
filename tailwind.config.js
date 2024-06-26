/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'more-shadow': 'rgba(255,255,255, 0.2) 0px 0px 15px, rgba(255,255,255, 0.15) 0px 0px 3px 1px',
      },
    },
  },
  plugins: [],
}