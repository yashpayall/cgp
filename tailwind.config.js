const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: [
          "bebas-neus-cyrillic",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        "tomorrow-neue": [
          "Tomorrow",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        "Montserrat-neus": [
          "Montserrat",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
