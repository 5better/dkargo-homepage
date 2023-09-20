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
    // screens: {  //TODO: 기획, 디자인에 따라 변경
    //   mobile: { min: '390px', max: '819px' },
    //   tablet: { min: '820px', max: '1023px' },
    //   laptop: { min: '1024px', max: '1279px' },
    //   desktop: { min: '1280px' },
    // },
  },
  plugins: [],
};
