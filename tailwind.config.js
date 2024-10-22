/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Fmaily
      fontFamily: {
        'pop': ['Poppins',],
        'pod': ['Podkova',],
        'Frank': ['Frank Ruhl Libre',],  
    },
    // Font Family
    // Container
    maxWidth: {
      'menuContainer': '1320px',
    },
    // Container
    // Color
    colors: {
      'headerBg': '#FAE3B6',
      'btnHover': '#FDBB57',
      'btnBdr': '#FFD687',
      'bestBg': '#CFA485',
      'iconsColor': '#FFAF37',
      'dColor': '#C4C4C4',
      
    },
    // Color

  },
},
  plugins: [],
  }

