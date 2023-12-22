/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'fr-primary-green': '#4CAF50',
        'fr-accent-green': '#8BC34A',
        'fr-earthy-brown': '#795548',
        'fr-sunny-yellow': '#FFC107',
        'fr-soft-grey': '#9E9E9E',
        'fr-clean-white': '#FFFFFF',
        'fr-deep-grey': '#607D8B',
      },
    },
    fontFamily: {
      Lato: ['Lato, sans-serif'],
      Raleway: ['Raleway, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
};
