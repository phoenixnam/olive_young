/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  mode: 'jit',
    purge: [
      "**/*.html"
    ],
  theme: {
  
    extend: {
      colors: {
        'primary': '#9bce26',
        'price': '#f27370',
        'footer': '#666'
      }
    
    },
    fontSize: {
      sm: '9px'
    },
    screens: {
     
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

