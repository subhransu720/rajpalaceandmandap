/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental features and webpack config
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig; 