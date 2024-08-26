/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/*.tsx", "./sections/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#ffbcd9",
        secondary: "#101b69",
        tertiary: "#fafafa",
      },
      backgroundImage: {
        pattern: "url('/background-pattern.svg')",
      },
    },
  },
  plugins: [],
};
