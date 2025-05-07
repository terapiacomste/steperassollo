/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f6f5',
          100: '#e1e7e5',
          200: '#c3cfcb',
          300: '#a4b8b1',
          400: '#8ea8a0',
          500: '#84a59d', // cor principal
          600: '#6f8f89',
          700: '#5c7772',
          800: '#4a5f5c',
          900: '#3a4b49',
        },
        secondary: {
          50: '#f5f8f7',
          100: '#dfeeee',
          200: '#bfdedc',
          300: '#9ecdc9',
          400: '#80bdb7',
          500: '#70b1ac',
          600: '#5e9894',
          700: '#4e7e7b',
          800: '#3f6664',
          900: '#324f4e',
        },
        neutral: {
          50: '#f9faf9',
          100: '#f0f1f1',
          200: '#dcdedd',
          300: '#c5c7c6',
          400: '#a9acaa',
          500: '#8d8f8d',
          600: '#707271',
          700: '#575957',
          800: '#3d3f3e',
          900: '#2d2f2e',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}