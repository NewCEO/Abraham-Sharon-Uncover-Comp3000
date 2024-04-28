const { Config } = require('tailwindcss');

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
  content: ["./index.html", "./src/**/*.tsx", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#104b53",
        secondary: "#FAD9B",
      },
      fontFamily: {
        corsicaBold: ['CorsicaRamblerLX-Bold', "sans-serif"],
        corsicaBook: ['CorsicaRamblerLX-Book',"sans-serif"],
        corsicaSemiBold: ['CorsicaRamblerLX-Semibold',"sans-serif"],
        corsica: ['CorsicaRamblerLX',"sans-serif"],
      },
    },
  },
  '@tailwind base': {}, // Move this line outside the theme object
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
};
