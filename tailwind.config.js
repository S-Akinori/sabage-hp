module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /flex/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /justify-(start|center|end|between|around)/,
    },
    {
      pattern: /items-(start|center|end|between|around)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'base': '#080D1B',
        'base-color': '#080D1B',
        'base-transparent': '#080D1BD9',
        'base-text': '#FCFCFC',
        'base-cont': '#FCFCFC',
        'main': '#F73117',
      },
    },
  },
  plugins: [],
}
