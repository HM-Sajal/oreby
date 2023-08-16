/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1604px',
        'product': '375px',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
      },
      minWidth: {
        '2/4': '50%',
      },
      colors: {
        'primary': '#262626',
        'secondary': '#2B2B2B',
        'bgColor': "#F5F5F3",
        'borderColor': '#2D2D2D',
        'lightBorder': '#F0F0F0',
        'lightText': '#767676',
        'hashColor':'#6D6D6D',
      },
      fontSize: {
        mainHeading: '49px',
        heading: '39px',
        heading2: '20px',
        heading1: "25px"
      },
      screens: {
        'tablet': '730px',
      },
    },
  },
  plugins: [],
}

