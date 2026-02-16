/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-dark': '#132A13',
        'eco-dark-green': '#31572C',
        'eco-medium': '#4F772D',
        'eco-light': '#90A955',
        'eco-lightest': '#ECF39E',
      }
    },
  },
  plugins: [],
}
