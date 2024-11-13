/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                red: '#950101',
                dark: '#070707',
            },
            fontFamily: {
                sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
                serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
                cursive: '"MonteCarlo"',
            },
            backgroundImage: {
                biobg: "url('./src/assets/Biography-page-img.png')",
            },
        },
    },
    plugins: [],
};
