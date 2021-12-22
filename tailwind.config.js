const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/index.html'
    ],
    dark: 'media',
    theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    plugins: [],
}