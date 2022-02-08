module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#89BD9E',
        'secondary': '#DB4C40',
        'tertiary': '#F0C987',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'black-ops': ['Black Ops One', 'cursive'],
      },
      boxShadow: {
        'about': '5px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
