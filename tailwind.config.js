/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a2be2',
        secondary: '#9370db',
        accent: '#e6e6fa',
        'light-purple': '#d8bfd8',
        'dark-purple': '#4b0082',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
} 