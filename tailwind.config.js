/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'upds-rojo': '#E30613',
        'upds-azul': '#0056A4',
        'upds-verde': '#00A651',
        'upds-marino': '#1A2B5C'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 180ms ease-out',
        'fade-slide-out': 'fadeSlideOut 180ms ease-out'
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeSlideOut: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-20px)' }
        }
      }
    }
  },
  plugins: []
};
