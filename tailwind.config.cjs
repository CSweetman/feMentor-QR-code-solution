/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        subtitle: 'hsl(var(--color-subtitle) / <alpha-value>)',
        title: 'hsl(var(--color-title) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
    screens: {
      'xsm': '375px',
      '2xl': '1440px'
    }
  },
  plugins: [],
}
