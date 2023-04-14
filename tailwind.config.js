const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        // sans: ["var(--font-poppins)"],
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-dark": "#5F2EEA",
        "primary-extra-dark": "#2A00A2",
        "g-dark": "#4E4B66",
        "primary-light": "#BCA4FF",
        "primary-extra-light": "#E4DAFF",
        "grey-light": "#D9DBE9",
        "grey-dark": "#6E7191",
      },
      letterSpacing: {
        wider: "[0.75px]",
        widest: "[1px]",
      },
    },
  },
  plugins: [],
};
