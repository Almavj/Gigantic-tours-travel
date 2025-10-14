/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image configurations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      // Add your custom image domains if needed
      {
        protocol: 'https',
        hostname: 'your-image-cdn.com',
      },
    ],
    // For local development with your images
    domains: ['localhost'],
    // Enable unoptimized if you're having issues with local images
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Fix the cross-origin warning you're seeing
  allowedDevOrigins: ['192.168.8.64', 'localhost', '127.0.0.1'],

  // Environment variables (optional)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers for security (optional but recommended)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },

  // Redirects (optional - for your travel site)
  async redirects() {
    return [
      {
        source: '/old-tours',
        destination: '/tours',
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },

  // Experimental features
  experimental: {
    // Enable if you're using the App Router (/app directory)
    // appDir: true,
    
    // Enable if you need server actions
    // serverActions: true,
    
    // Optimizations
    optimizeCss: true,
    
    // For better performance
    scrollRestoration: true,
  },

  // Compiler options for better performance
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
    
    // Enable styled-components if you're using them
    // styledComponents: true,
    
    // Enable React Refresh
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },


  // Performance optimizations
  poweredByHeader: false, // Hides '▲ Next.js' from frontend
  compress: true,

  // For static export if needed
  // trailingSlash: true,
  // output: 'export', // Uncomment for static site generation
};

// Bundle analyzer configuration (optional)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);