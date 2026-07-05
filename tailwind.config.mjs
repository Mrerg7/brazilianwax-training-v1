/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F0F7F4',
          100: '#D9EDE4',
          200: '#B3DBC9',
          300: '#7FC4A8',
          400: '#4FA882',
          500: '#2D8B66',
          600: '#237052',
          700: '#1D5A43',
          800: '#184838',
          900: '#143B2F',
        },
        accent: {
          400: '#D98D5C',
          500: '#B85C38',
          600: '#A04E30',
        },
      },
    },
  },
  plugins: [],
};
