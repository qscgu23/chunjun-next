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
  images: {
    loader: 'imgix',
    domains: ['github.com'],
    basePath: '/chunjun',
    path: 'https://dtstack.github.io/chunjun'
  },
  basePath: '/chunjun',
  distDir: 'build'
}

module.exports = nextConfig
