/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#252422',
        'secondary': '#252422',
        'light' : '#fffcf2'
      },
      textColor: {
        'primary': '#ea9694',
        'secondary': '#fffcf2',
        'mint': '#368f8b'
      },
      fontFamily: {
        'ropa': ['Ropa Sans', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'nunito-semi': ['Nunito Sans', 'sans-serif'],
        'nunito-bold': ['Nunito Sans', 'sans-serif'],
      },
      borderColor: {
        'primary': '#fffcf2',
        'secondary': '#8D6262',
        'divider' : '#4D4545',
      },
      screens: {
        'xs': '375px',
        'xxs': '300px'
      }
    },
  },
  plugins: [],
}