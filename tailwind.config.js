/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['kanit','san'],
        'heebo': ['Heebo','sans-serif'],
        'dancingscript': ['Dancing Script', 'cursive;'],
      },
    },
  },
  plugins: [],
}