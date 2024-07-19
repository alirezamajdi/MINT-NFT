/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ti: "500px",
      },
      colors: {
        primary: "#080c15",
        gray: "#131a27",
      },
    },
  },
  plugins: [],
};
