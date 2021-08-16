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
      keyframes:{
        "sun-in-out": {
          "0%":{
            transform: "scale(2))",
            opacity: "1"
          },
          "100%":{
            transform: "scale(0.7)",
            opacity: ".7"
          }
        }
      },
      animation:{
        "sun-in-out": "sun-in-out 1.2s infinite alternate ease-in-out"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
