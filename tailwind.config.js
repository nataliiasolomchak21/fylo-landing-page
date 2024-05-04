/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryIntroEmail: "hsl(217, 28%, 15%)",
        secondaryMainBg: "hsl(218, 28%, 13%)",
        footerBg: "hsl(218, 28%, 13%)",
        testimonialsBg: "hsl(219, 30%, 18%)",
        callToActionCyan: "hsl(176, 68%, 64%)",
        callToActionBlue: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        fontWeight400: "400",
        fontWeight700: "700",
      },
      fontSize: {
        body: "14px",
      }
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
};

