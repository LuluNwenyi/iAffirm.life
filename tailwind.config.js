module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["ClashDisplay", "sans-serif"],
        sans: ["Libre Franklin", "sans-serif"]
      },
      colors:{
        "page-dark" : "#706E6E",
        "page-blue" : "#4C53FA",
        "page-black": "#181818",
        "page-grey": "#F6F6F6"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
