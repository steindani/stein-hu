const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/index.html'
    ],
    dark: 'media',
    theme: {
        extend: {
          fontFamily: {
            sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
          },
        },
      },
    plugins: [],
}