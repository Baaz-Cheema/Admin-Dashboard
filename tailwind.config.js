/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
      'xs': { 'max': '450px' }
    },

    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto':['Roboto', 'sans-serif']
      },
      backgroundColor: {
        'zinc-750': '#303036',
      },
    }

  },
  plugins: [],
}

