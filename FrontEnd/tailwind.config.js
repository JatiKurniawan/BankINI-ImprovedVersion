/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner' : ['url(assets/dark-25.png), url(assets/home-banner.jpg)'],
      },
      fontFamily: {
        jof: ['Josefin Sans', 'sans-serif'],
        bub: ['Bubbleboddy Neue Trial', 'sans-serif'],
        itr: ['Inter', 'sans-serif'],
      },
      colors: {
        'gold': '#DAA520',
        'white':'#FBFBFB',
        'black':'#141310',
        'gray':'#DFE0DF',
      },
      borderRadius: {
        'large' : '56px'
      }
    },
  },
  plugins: [],
}

