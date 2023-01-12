/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/components', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
'orange': "url('/src/assets/desktop/image-header.jpg')",
'graphic': "url('/src/assets/desktop/image-graphic-design.jpg')"
      },
      fontFamily: {
        fraunces: "'Fraunces',serif",
      },
    },
  },
  plugins: [],
};
