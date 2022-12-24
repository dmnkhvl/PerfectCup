/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1D6E',
        black: '#1F1F1F',
        lightGray: '#F0F4FA',
        gray: '#B6C4DB',
        blue: '#3B61B0',
        blueAlt: '#39466D',
        almoustBlack: '#292a35'
      },
      fontFamily: {
        sans: ['SF Pro Display', 'sans-serif']
      },
      fontSize: {
        lgTitle: '2rem',
        mdTitle: '1.75rem',
        smTitle: '1.125rem',
        big: '1.25rem',
        base: '0.813rem',
        small: '0.75rem',
        xsmall: '0.625rem'
      }
    }
  },
  plugins: []
};
