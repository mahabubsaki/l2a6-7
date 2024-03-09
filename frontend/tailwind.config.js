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
        'icon': '#A4A4A4'
      }
    },
  },
  plugins: [],
};