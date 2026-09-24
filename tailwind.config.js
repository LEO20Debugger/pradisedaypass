/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#137fec',
        'luxury-gold': '#d4af37',
        'background-light': '#fcfbf9',
        'background-dark': '#101922',
        'luxury-sand': '#e8e6e1',
        coral: {
          50: '#fef7f4',
          100: '#fdeee8',
          200: '#fad9c7',
          300: '#f6bfa0',
          400: '#f19b72',
          500: '#ec7c4b',
          600: '#dd5f2e',
          700: '#b84a24',
          800: '#933e23',
          900: '#773520',
        },
        'coral-accent': '#ff7f7f',
        'coral-soft': '#ffb3b3',
        'coral-light': '#ffe6e6',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.3s ease-out both',
        'scale-in': 'scale-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slow-zoom 2.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-thin': {
          /* Firefox */
          'scrollbar-width': 'thin',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            width: '6px',
          }
        },
        '.scrollbar-thumb-gray-300': {
          '&::-webkit-scrollbar-thumb': {
            'background-color': '#d1d5db',
            'border-radius': '3px',
          }
        },
        '.scrollbar-track-gray-100': {
          '&::-webkit-scrollbar-track': {
            'background-color': '#f3f4f6',
          }
        },
        '.scrollbar-thumb-gray-600': {
          '&::-webkit-scrollbar-thumb': {
            'background-color': '#4b5563',
            'border-radius': '3px',
          }
        },
        '.scrollbar-track-gray-800': {
          '&::-webkit-scrollbar-track': {
            'background-color': '#1f2937',
          }
        }
      })
    }
  ],
}