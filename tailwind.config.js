/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"], // Example for Google Font
        rancho: ["Rancho", "cursive"], // Example for Google Font
      },
    },
  },
  plugins: [require("daisyui")],
};