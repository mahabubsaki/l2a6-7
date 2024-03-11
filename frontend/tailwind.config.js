/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-border': '#EAEAEA',
        'main': '#f14b05',
        'primary': '#B6B6B6',
        'secondary': '#383838',
        'accent': '#2B2B2B',
        'icon': '#A4A4A4',
        'dark-primary-border': '#979797',
        'dark-main': '#F0F3FF',
        'dark-primary': '#666666',
        'dark-secondary': '#40A2E3',
        'dark-accent': '#141414',
        'dark-icon': '#5c5c5c'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};