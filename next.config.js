/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['amplifynext5817ad19a6054f3481ad74db6c00998f71351-staging.s3.ap-south-1.amazonaws.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
