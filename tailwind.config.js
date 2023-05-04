/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "gray": {
          "50": "#faf9fc",
          "100": "#f1f1f7",
          "200": "#e8e6f1",
          "300": "#d4d2e6",
          "400": "#ada8cf",
          "500": "#7f78b4",
          "600": "#52499a",
          "700": "#312687",
          "800": "#100374",
          "900": "#0b0064"
        },
        "purple": {
          "50": "#f5f7ff",
          "100": "#d8dfff",
          "200": "#b6c3ff",
          "300": "#8ca0ff",
          "400": "#738cff",
          "500": "#5170fd",
          "600": "#455fd6",
          "700": "#374cac",
          "800": "#2f4091",
          "900": "#222e69"
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
