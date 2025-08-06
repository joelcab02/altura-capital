export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36adf6',
          500: '#0c91e6',
          600: '#0072c4',
          700: '#005a9e',
          800: '#004a83',
          900: '#00386d',
          950: '#002060',
        },
        secondary: {
          50: '#edfcf5',
          100: '#d3f8e5',
          200: '#aaf0d0',
          300: '#74e3b5',
          400: '#3ed095',
          500: '#1ec98b',
          600: '#0d9e6a',
          700: '#0c7d55',
          800: '#0e6345',
          900: '#0c513a',
          950: '#042e21',
        },
        gray: {
          50: '#f5f7fa',
          100: '#eaedf2',
          200: '#dae0e9',
          300: '#c2cad8',
          400: '#a4afc1',
          500: '#8c96ac',
          600: '#717b94',
          700: '#5d6578',
          800: '#4d5464',
          900: '#434857',
          950: '#25292f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(135deg, #0046FF 0%, #002060 100%)',
        'green-gradient': 'linear-gradient(135deg, #1EC98B 0%, #0d9e6a 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}