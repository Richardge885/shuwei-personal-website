/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      serif: ['"EB Garamond"'],
      sans: ['Roboto'],
      cursive: ['MonteCarlo'],
    },
    colors: {
      lightred: '#FF0000',
      red: '#950101',
      darkerred: '#3d0000',
      black: '#080808',
      white: '#ffffff',
    },
    // screens: {
    //   phone: '320px',
    //   pad: '640px',
    //   computer: '1024px',
    // },
  },
  plugins: [],
};
