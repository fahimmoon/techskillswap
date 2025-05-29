/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': {
          950: '#0D0D0D',
          900: '#1A1A1A',
          800: '#262626',
        },
        'tech-red': {
          500: '#FF3C38',
        },
        'tech-gray': {
          100: '#E5E5E5',
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'red': '0 4px 14px 0 rgba(255, 60, 56, 0.2)',
        'glow': '0 0 20px rgba(255, 60, 56, 0.15)',
        'glow-hover': '0 0 25px rgba(255, 60, 56, 0.25)',
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-grid': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
      backgroundSize: {
        'tech-grid': '24px 24px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        }
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
