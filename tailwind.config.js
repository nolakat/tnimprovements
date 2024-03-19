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
      gradientColorStopPositions: {
        1: '1%',
        2: '2%',
        99: '99%'
      },
      maxWidth: {
        'screen-3xl': '2000px',
      },
      spacing: {
        '150': '37.5rem'
      },
      colors: {
        gold: {
          100: "#f4c263"
        },
        navy: "#1e283b",
        darkNavy: "#050e1b"
      },
      borderRadius: {
        '4xl': '35px'
      },
      spacing: {
        '1/5': '15%',
        '650': '650px',
        '1000': '1000px'
      }
    },
  },
  plugins: [],
}
