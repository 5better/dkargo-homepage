/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard'],
      },
      // screens: {
      //   mobile: '375px',
      //   pc: '1280px',
      // }, //추후 디자인에 따라 수정
    },
  },
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
