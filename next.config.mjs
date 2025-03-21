/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental features and webpack config
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove experimental features that might cause issues
  experimental: {
    // Disable optimizeCss as it's causing issues
    optimizeCss: false,
  },
  // Add proper error handling for 500 page
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
};

export default nextConfig; 