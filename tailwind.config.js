/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Open Sans',
          'ui-sans-serif',
          'sans-serif'
        ],
      }
    },
  },
  plugins: [],
}
