/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#002836',
        'background': '#01313F',
        'note': '#038D57'
      }
    },
  },
  plugins: [],
}