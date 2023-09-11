/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  //   i18n: {
  //     locales: ['en-US', 'en', 'ko'],
  //     defaultLocale: 'ko',
  //   localeDetection: true, //browser header를 체크해서 사용자가 사용중인 언어를 감지
  //   },
};

module.ßexports = nextConfig;
