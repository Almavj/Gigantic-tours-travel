/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
    // Correct Turbopack configuration
  
      turbopack: {
        // Add any specific turbopack rules here
        resolveAlias: {
          // Example alias if needed
          'components': './components'
        }
      }
    }
  
  
  module.exports = nextConfig