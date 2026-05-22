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
          DEFAULT: '#3b82f6', // pastel blue-500
          50: '#eff6ff',      // blue-50
          100: '#dbeafe',     // blue-100
          200: '#bfdbfe',     // blue-200
          300: '#93c5fd',     // blue-300
          400: '#60a5fa',     // blue-400
          500: '#3b82f6',     // blue-505
          600: '#2563eb',     // blue-600
          700: '#1d4ed8',     // blue-700
          800: '#1e40af',     // blue-800
          900: '#1e3a8a',     // blue-900
          950: '#172554',     // blue-950
        },
        accent: {
          cyan: '#38bdf8',    // sky-400
          emerald: '#3b82f6', // blue-500
          lime: '#6366f1',    // indigo-500
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
