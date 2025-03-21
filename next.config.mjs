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
  // Add CORS headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://rajpalaceandconvention65.vercel.app',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  // Configure asset loading with correct domain
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://rajpalaceandconvention65.vercel.app' : '',
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