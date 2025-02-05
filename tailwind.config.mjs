/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FA7436',
          black: '#222222',
        },
        secondary: {
          blue: '#4086F4',
          yellow: '#FFB60A',
        },
        text: {
          primary: '#222222',
          secondary: '#444444',
          gray: '#666666',
        },
        icon: {
          gray: '#999999',
          lightGray: '#E5E5E5',
          orange: '#FA7436',
        },
        button: '#FA7436',
        background: {
          orange: '#FA7436',
          light: '#FEFCFB',
          blueLight: '#F7F8FC',
        },
      },
    },
  },
  plugins: [],
};
