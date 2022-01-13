module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headlines: "#393939",
        subtitles: "#425466",
        white: "#ffffff",
        purple: "#635cff",
        grey: "#f6f9fc",
        blue: "#01d4ff",
        "dark-blue": "#092540",
        "primary-buttons": "#11253e",
        "secondary-buttons": "#0a2540",
      },
    },
  },
  variants: {},
  plugins: [],
};
