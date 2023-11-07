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
        'primary': '#ebd6c1',
        'secondary': '#2d4654',
      },
      textColor: {
        'primary': '#ea9694',
        'secondary': '#2d4654',
      },
      fontFamily: {
        'ropa': ['Ropa Sans', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'nunito-semi': ['Nunito Sans', 'sans-serif'],
        'nunito-bold': ['Nunito Sans', 'sans-serif'],
      },
      borderColor: {
        'primary': '#EFA3A3',
        'secondary': '#2d4654',
      },
      screens: {
        'xs': '375px',
        'xxs': '300px'
      }
    },
  },
  plugins: [],
}