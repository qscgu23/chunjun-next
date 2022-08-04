/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    sep: "_",
    root_zh: "../docs_zh",
  },
  i18n: {
    locales: ["en-US", "zh-Hans"],
    defaultLocale: "zh-Hans",
  },
};

module.exports = nextConfig;
