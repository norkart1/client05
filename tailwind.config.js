/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#074208',
        secondery: '#074208',
      },
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 75%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}