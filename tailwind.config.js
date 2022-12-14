// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      primary: {
        100: "#f2e8db",
        200: "#e5d1b7",
        300: "#d7bb94",
        400: "#caa470",
        500: "#bd8d4c",
        600: "#97713d",
        700: "#71552e",
        800: "#4c381e",
        900: "#261c0f",
      },
      cream: {
        light: "#f1dfc7",
        DEFAULT: "#e7d3b5",
        dark: "#bc8c51",
      },
      green: colors.green,
      //CUSTOM COLORS
      //https://www.tailwindshades.com/
      //or crtl g + ctrl k on hexa value (#007ce6)

      dark: {
        100: "#d1d2d4",
        200: "#a4a5a9",
        300: "#76777f",
        400: "#494a54",
        500: "#1b1d29",
        600: "#161721",
        700: "#101119",
        800: "#0b0c10",
        900: "#050608",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
