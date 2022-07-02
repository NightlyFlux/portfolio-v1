module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {},
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#F43B86', dark: '#DC3579' },
      },
    },
    fontFamily: {
      mPlus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      DMSans: ['DM Sans', 'sans-serif'],
    },
  },
}
