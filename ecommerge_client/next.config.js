  /** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/order/:path*',
        destination: '/customer/:path*',
      },
      {
        source: '/customer/:path*',
        destination: '/customer/:path*',
      }
    ]
  },
}

module.exports = nextConfig
