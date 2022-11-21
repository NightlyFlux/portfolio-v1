/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      mPlus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      sourceSans: ['Source Sans Pro', 'sans-serif'],
    },
  },
  plugins: [],
}
