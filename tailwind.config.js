/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#E8EEF2',
        card: '#C7D3DD',
        primaryAccent: '#77B6EA',
        secondaryAccent: '#D6C9C9',
      },
      boxShadow: {
        glow: '0 0 10px #77B6EA',
      },
    },
  },
  plugins: [],
};