/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        PtSerif: ["PT Serif", " serif"],
        OpenSans: ["Open Sans", " sans-serif"],
        logo: ["Afacad", " sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#010851",
        secondary: "#9a7af1",
        third: "#707070",
        pink: "#ee9ae5",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}
