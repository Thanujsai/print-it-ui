/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray:"#1a1f25",
        lightGray:"#272c35",
      },
      container: {
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }

      }
    },
  },
  plugins: [],
}

