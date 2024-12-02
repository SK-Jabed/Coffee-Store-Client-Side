/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"], // Example for Google Font
        rancho: ["Rancho", "cursive"], // Example for Google Font
      },
      backgroundImage: {
        "navbar-bg": "url('/src/assets/more/15.jpg')",
        "banner-bg": "url('/src/assets/more/3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};