// https://stefcoetzee.com/2021/07/28/jekyll-tailwind-starter-repo

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './**/*.html',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          100: '#DEE3E8',
          200: '#C9D8E8',
          300: '#5F9BDA',
          400: '#2E7FD3',
          500: '#E66425',
          600: '#004A91',
          700: '#002C56',
          800: '#11273B',
          900: '#121920',
        }
      }      
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}