// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        riseUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        swipeLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        swipeRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        riseUpSlow: 'riseUp 1s ease-out',
        swipeLeft: 'swipeLeft 0.5s ease-out',
        swipeRight: 'swipeRight 0.5s ease-out',
      },
      fontFamily: {
        'sf-pro': [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          '"Helvetica Neue"', 
          'Arial', 
          'sans-serif'
        ],
      },
      transform: {
        '3d': 'preserv-3d'
      },
      rotate: {
        'x-180': 'rotateX(180deg)'
      }
    },
  },
  plugins: [],
}