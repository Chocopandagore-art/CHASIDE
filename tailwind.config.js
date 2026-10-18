/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'upds-rojo': '#E30613',
        'upds-azul': '#0056A4',
        'upds-verde': '#00A651',
        'upds-marino': '#1A2B5C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        entrarDerecha: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        entrarIzquierda: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'entrar-derecha': 'entrarDerecha 180ms ease-out',
        'entrar-izquierda': 'entrarIzquierda 180ms ease-out',
      },
    },
  },
  plugins: [],
};
