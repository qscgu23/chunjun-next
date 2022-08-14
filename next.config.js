/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    sep: '@',
    root_zh: '/docs_zh',
    sql: '/chunjun-examples/sql',
    json: '/chunjun-examples/json'
  },
  i18n: {
    locales: ['en-US', 'zh-Hans'],
    defaultLocale: 'zh-Hans'
  },
  images: {
    domains: ['github.com']
  }
}

module.exports = nextConfig
