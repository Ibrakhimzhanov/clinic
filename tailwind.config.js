/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#99E9A5',
        secondary: '#04062C'
      },
      fontFamily: {
        sfRegular: ['sf-regular', 'sans-serif'],
        sfMedium: ['sf-medium', 'sans-serif'],
        sfBold: ['sf-bold', 'sans-serif']
      },
      container: {
        screens: {
          xl: '1440px'
        }
      }
    }
  },
  plugins: []
}
