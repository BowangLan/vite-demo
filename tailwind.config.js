module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      animation: {
        'aw': 'aw linear 1.5s 2 paused forwards'
      },
      keyframes: {
        'aw': {
          '0%': { width: '0' },
          '100%': { width: '36rem' },
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
