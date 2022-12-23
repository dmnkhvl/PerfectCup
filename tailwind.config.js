/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#514e90',
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
        lgTitle: '1.75rem',
        smTitle: '1.125rem',
        h1: '1.125',
        h2: '1rem',
        h3: '0.938',
        h4: '0.813',
        base: '0.813rem'
      }
    }
  },
  plugins: []
};
