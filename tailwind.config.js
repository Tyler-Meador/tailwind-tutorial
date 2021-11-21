module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#0fa9e6"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
