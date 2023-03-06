/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        btnStn: "#7e89de",
        mainTxt1: "#98a5d6",
        mainTxt2: "#717bc6",
        btnBorder: "#1e2738",
        bgBox: "#2b3850",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },

      backgroundImage: {
        banner: "url('../assets/principal.png')",
        bannerMobile: "url('../assets/principal-mobile.png')",
      },
      backgroundColor: {
        stn: "#1e2738",
      },
      boxShadow: {
        customBS: "0px_0px_300px_-77px_rgba(255,255,255,1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
