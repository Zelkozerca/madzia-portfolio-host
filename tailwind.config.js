module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    colors: {
      gray: '#232323',
      yellow: '#FCB242',
      bgYellow: 'rgba(252, 178, 66, 0.85)',
      white: '#FFFFFF',
      black: '#000000',
    },
    screens: {
      'xs': '640px',
      'sm': '800px',
      'md': '960px',
      'lg': '1200px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'DejaVu Sans', 'Verdana', 'sans‑serif'],
      },
      width: {
        half: '50%',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      height: {
        full: '100%',
        viewport: '100vh',
        screen: 'calc(var(--vh) * 100)',
      },
      minHeight: {
        full: '100%',
        viewport: '100vh',
        screen: 'calc(var(--vh) * 100)',
      },
    },
  },

  variants: {
    overflow: ['responsive', 'first'],
    extend: {
      textColor: ['selection'],
      backgroundColor: ['selection'],
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-selection-variant'),
    // eslint-disable-next-line global-require
    require('tailwindcss-filters'),
  ],
};
