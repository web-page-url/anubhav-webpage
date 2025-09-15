/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // For static export if needed
  },
  // Enable static optimization
  output: 'standalone',
}

module.exports = nextConfig
