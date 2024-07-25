/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom_bg_head: {
          DEFAULT: '#111111',    // Dark shade
          hover_header: '#fff'
        },
        custom_txt_header: {
          DEFAULT: '#fff',
          houver_header: '#111'
        }
      },
    },
  },
  plugins: [],
}
