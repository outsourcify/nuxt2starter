// https://www.tailwindtoolbox.com/guides/adding-fonts-to-tailwind-css
const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    // },
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // => 'font-sans' class
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xs: ['0.625rem', { lineHeight: '1' }], // 10px
      sm: ['0.75rem', { lineHeight: '1rem' }], // 12px
      base: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
      lg: ['1rem', { lineHeight: '1.5rem' }], // 16px
    },
  },
  important: true,
}
