/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#f2d527",
        secondary: "#101b69",
      },
    },
  },
  plugins: [],
};
