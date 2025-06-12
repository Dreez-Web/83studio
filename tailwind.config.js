/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Puedes cambiar a 'media' si prefieres
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'), // <--- Asegúrate de que esta línea esté aquí
    // Otros plugins si tienes
  ],
}