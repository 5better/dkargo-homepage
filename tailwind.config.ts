/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  // screens: {
  //   mobile: '375px',
  //   tablet: '720px',
  //   laptop: '1280px',
  //   desktop: '1440px',
  // }, //추후 디자인에 따라 수정
  plugins: [],
};
