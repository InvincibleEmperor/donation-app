/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        akcPrimary: '#4db748', // Your primary color
      },
      keyframes: {
        heartbeatPulsing: {
          
          '0%': {
            transform: 'scale(0.8)', // Default size
            boxShadow: '0 0 0 0 rgba(77, 183, 72, 0.7)', // No shadow at the start
          },
          
          '50%': {
            transform: 'scale(1)', // Full size, heartbeat effect
            boxShadow: '0 0 0 10px rgba(77, 183, 72, 0)', // Thick border effect without spread
          },
          '100%': {
            transform: 'scale(0.8)', // Back to default size
            boxShadow: '0 0 0 0 rgba(77, 183, 72, 0)', // No shadow again at the end
          },
        },
      },
      animation: {
        heartbeatPulsing: 'heartbeatPulsing 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

