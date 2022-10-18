/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: 'Roboto, sans-serif',
    },
    extend: {
      backgroundImage: {
        'blur': "url('/blur-background.png')",
        'blur-ev': "url('evento.png')",
      },
    },

  colors: {
      green: {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },
      blue: {
        500: '#81D8F7',
      },
      orange: {
        500: '#f29400',
        700: '#cf940b',
      },
      red: {
        500: '#F75A68',
      },
      purple: {
        500: '#5964f0',
        700: '#954fa6',
      },
      gray: {
        100: '#FFF',
        200: '#E5E7Eb',
        300: '#C4C4CC',
        400: '#8D8D99',
        500: '#323238',
        600: '#29292E',
        700: '#121214',
        900: '#09090A'
      },
      gray2: {
        500: '#323238',
      }
    },
  },
  plugins: [],
}