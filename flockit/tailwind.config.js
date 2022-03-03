const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.scss',
      './src/**/*.css'
    ]
  },
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        primary: 'var(--color-primary)',
        darkBlue: 'var(--color-dark-blue)',
        lightCyan: 'var(--color-light-cyan)',
        newCyan: '#94f5ff',
        cyan: colors.cyan,
        sky: colors.sky,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
