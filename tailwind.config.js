/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  mode: 'jit',
    purge: [
      "**/*.html"
    ],
  theme: {
  
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'primary': '#9bce26',
        'price': '#f27370',
        'footer': '#666',
        'coffee-200': '#C89F94',
        'coffee-400': '#A25F4B'
      }
    
    },
    fontSize: {
      sm: '9px',
      h1: '36px'
    },
    keyframes: {
      fadeIn: {from: {opacity: 0}, to: {opacity: 1}}
    },
    animation: {
      fadeIn :'fadeIn .5s ease-in-out'
    },
    margin: {
      'xs': '-16px',
    },
    screens: {
      'xxs': '70px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

