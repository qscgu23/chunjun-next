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
}

module.exports = nextConfig
