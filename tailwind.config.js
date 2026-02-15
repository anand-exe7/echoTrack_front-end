/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F772D",
        echoGreen: {
          darkest: "#132A13",
          dark: "#31572C",
          medium: "#4F772D",
          light: "#90A955",
          lightest: "#ECF39E",
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}