/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily:{
      'display': ['Oswald'],
      'body': ['Source Sans Pro']
    },
    extend: {
      maxWidth: {
        'screen-3xl': '2000px',
      },
      spacing: {
        '150': '37.5rem'
      }
    },
  },
  plugins: [],
}
