/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#f8fafc', // slate-50
          950: '#f1f5f9',     // slate-100
          900: '#ffffff',     // pure white
          850: '#ffffff',     // pure white
          800: '#f8fafc',     // slate-50
          750: '#e2e8f0',     // slate-200
          700: '#cbd5e1',     // slate-300
          600: '#94a3b8',     // slate-400
        },
        primary: {
          DEFAULT: '#0d9488', // sleek teal-600
          50: '#f0fdfa',      // teal-50
          100: '#ccfbf1',     // teal-100
          200: '#99f6e4',     // teal-200
          300: '#5eead4',     // teal-300
          400: '#2dd4bf',     // teal-400
          500: '#14b8a6',     // teal-505
          600: '#0d9488',     // teal-600
          700: '#0f766e',     // teal-700
          800: '#115e59',     // teal-800
          900: '#134e4a',     // teal-900
          950: '#042f2e',     // teal-950
        },
        accent: {
          cyan: '#2dd4bf',    // mint/cyan-400
          emerald: '#10b981', // emerald-500
          lime: '#14b8a6',    // teal-500
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
