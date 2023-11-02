/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {             // this config allows use external links starting with m.media-amazon.com on next Images 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
