export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          '400': '#FF9966',
          '500': '#FF6B35',
          '600': '#FF5722',
        },
        'red': {
          '500': '#DC2F02',
          '600': '#C41E1E',
        },
        'gold': '#FFB703',
        'dark': '#0f0f0f',
        'darker': '#1a0f0a',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}