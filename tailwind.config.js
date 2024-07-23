/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: {
          DEFAULT: '#111111',    // Dark shade
        },
      },
    },
  },
  plugins: [],
}
