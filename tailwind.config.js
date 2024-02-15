/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':["Inter", "sans-serif"],
        'inter-thin':["Inter-Thin", "sans-serif"],
        'inter-extrabold': ["Inter-ExtraBold", "sans-serif"]
      },
      colors: {
        'bcit-blue': '#043C6C',
        'background': '#f6f7f8',
        'ui-background': '#ffffff',
        'font-color': '343330',
        'accent-color': '#0DF5E3'
      }
    },
  },
  plugins: [],
}
