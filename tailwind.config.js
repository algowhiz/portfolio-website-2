// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Adjust this to match your project structure
  theme: {
    extend: {
      keyframes: {
        oval: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(100px, 50px)' },
          '50%': { transform: 'translate(200px, 0)' },
          '75%': { transform: 'translate(100px, -50px)' },
        },
      },
      animation: {
        oval: 'oval 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
