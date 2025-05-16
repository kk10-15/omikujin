const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaiseiDecol: ['"Kaisei Decol"', 'serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        spinDrop: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(360deg) scale(1.1)' },
          '100%': { transform: 'rotate(720deg) scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideFadeIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.7s ease-in-out infinite',
        spinDrop: 'spinDrop 3s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
        slideFadeIn: 'slideFadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
