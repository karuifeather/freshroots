/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'fr-primary-green': {
          DEFAULT: '#4CAF50',
          50: '#f3faf3',
          100: '#e3f5e3',
          200: '#c8eac9',
          300: '#9dd89f',
          400: '#6bbd6e',
          500: '#4caf50',
          600: '#358438',
          700: '#2d6830',
          800: '#275429',
          900: '#224525',
          950: '#0e2510',
        },
        'fr-accent-green': {
          DEFAULT: '#8BC34A',
          50: '#f4faeb',
          100: '#e6f3d4',
          200: '#cfe9ad',
          300: '#afd97d',
          400: '#8bc34a',
          500: '#73ac36',
          600: '#588828',
          700: '#446922',
          800: '#395420',
          900: '#32481f',
          950: '#18270c',
        },
        'fr-earthy-brown': '#795548',
        'fr-sunny-yellow': '#FFC107',
        'fr-soft-grey': '#9E9E9E',
        'fr-clean-white': '#FFFFFF',
        'fr-deep-grey': '#607D8B',
        'fr-light-grey': '#F7F7F7',
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
