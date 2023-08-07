/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navigation: "#62B6B7",
        hoveron: "#2F8F9D",
      },
    },
    fontFamily: {
      signature: ["Oleo Script"],
    },
  },
  plugins: [],
};
