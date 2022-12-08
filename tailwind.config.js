/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E97635",
      },
      backgroundColor: {
        main: "#E97635",
        gradColor: "rgb(233,118,53)",
        gradient:
          "linear-gradient(90deg, rgba(233,118,53,1) 0%, rgba(239,160,126,1) 35%)",
      },
      borderColor: "#EFA07E",
    },
  },
  plugins: [],
};
