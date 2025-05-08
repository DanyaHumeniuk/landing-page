/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0 #dc2626)' },
          '50%': { filter: 'drop-shadow(0 0 15px #dc2626)' },
        },
        shine: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '-100%' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
}

