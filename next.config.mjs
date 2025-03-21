/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental features and webpack config
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove experimental features to ensure stability
  experimental: {
    optimizeCss: false,
  },
  // Add production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Add proper error handling for 500 page
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
  // Suppress the punycode deprecation warning
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
};

export default nextConfig; 