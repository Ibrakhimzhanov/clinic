/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#99E9A5',
        secondary: '#04062C',
        cBlack: '#23232D',
        cGray: '#CDCDCD'
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
      },
      boxShadow: {
        '3xl':
          '-5px 76px 31px rgba(191, 191, 191, 0.01), -3px 43px 26px rgba(191, 191, 191, 0.05), -1px 19px 19px rgba(191, 191, 191, 0.09), 0px 5px 10px rgba(191, 191, 191, 0.1), 0px 0px 0px rgba(191, 191, 191, 0.1)',
        OurShadow: '12.8976px 1px 30px rgba(229, 233, 246, 0.5)',
        DoctorsShadow:
          '0px 39px 16px rgba(216, 223, 233, 0.01), 0px 22px 13px rgba(216, 223, 233, 0.05), 0px 10px 10px rgba(216, 223, 233, 0.09), 0px 2px 5px rgba(216, 223, 233, 0.1), 0px 0px 0px rgba(216, 223, 233, 0.1)'
      }
    }
  },
  plugins: []
}
