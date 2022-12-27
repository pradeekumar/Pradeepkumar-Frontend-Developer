/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:  {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#000',
      'secondary': '#7e5bef',
    },
    extend: {
      colors: {
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
        black:colors.black,
        white:colors.white
      }
    },
    fontFamily: {
      'body': [
        'Open Sans',
        'sans-serif'
      ],
      'sans': [
        'Open Sans',
        'sans-serif',
      ]
    }
  }
  ,
  plugins: [],
}
