module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#BABABA',
          900: '#171717',
        },
        blue: {
          300: '#22DCF5',
          400: '#3A9BD5',
        },
      },
      width: {
        60: '60px',
        74: '74px',
        374: '374px',
      },
      height: {
        30: '30px',
        37: '37px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active', 'hover'],
    },
  },
  plugins: [],
};
