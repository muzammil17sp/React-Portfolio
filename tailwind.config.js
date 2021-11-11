module.exports = {
  // These paths are just examples, customize them to match your project structure
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bigher: ["Fruktur", "cursive"],
        lower: ["Lato", "sans-serif"],
      },
      maxWidth: {
        90: "80%",
      },
      colors: {
        header: "#282828",
        dark: "#1d1d1d",
        background: "#444444",
        "textColor": "#7A7A7A",
        detailBg: "#2B2B2B",
        underline: "#23d997",
        'green-rgba': 'rgba(35, 217, 151,0.1)'
      },
      padding: {
        underline : "2px" 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
