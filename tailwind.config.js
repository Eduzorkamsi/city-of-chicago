// tailwind.config.js
// in this file we can add the customized colors tailwind provides.

const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: { tableLayout: ["hover", "focus"] },
  },
  plugins: [],
};
