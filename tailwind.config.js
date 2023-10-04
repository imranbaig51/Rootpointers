/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      colors: {
        "primary": "#000",
        "secondary": "#272D35"
      },
      fontSize: {
        sm: ['14px'],
        md: ['16px'],
        lg: ['18px'],
        xl: ['20px'],
        xxl: ['24px'],
        header: ['36px'],
      },
      // position:{
      //   "none": "unset"
      // },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

