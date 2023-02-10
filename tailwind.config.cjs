/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      softBlue: "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      blueMain: "hsl(217, 54%, 11%)",
      blueCard: "hsl(216, 50%, 16%)",
      blueLine: "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontSize:  {
      sm: "11px",
      md: "14px",
      lg: "18px"
    },
    extend: {},
  },
  plugins: [],
}