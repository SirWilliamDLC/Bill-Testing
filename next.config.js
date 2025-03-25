/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure image domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mit45-quiz.ryanjhunter.workers.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        pathname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Add webpack configuration to help with module resolution
  webpack: (config, { isServer }) => {
    // Add additional resolve options
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    
    return config;
  },
  // Output standalone build for better Vercel compatibility
  output: 'standalone',
}

module.exports = nextConfig 