/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      colors: {
        "primary": "#000",
      },
      fontSize: {
        sm: ['14px'],
        md: ['16px'],
        lg: ['18px'],
        xl: ['20px'],
        xxl: ['24px'],
        header: ['36px'],
      },
    },
    // container: {
    //   sm: ['540px'],
    //   md: ['700px'],
    //   lg: ['900px'],
    //   xl: ['1140px'],
    // },
    screens: {
      'sm': '576px',
      // => @media (min-width: 5765px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  plugins: [],
}

