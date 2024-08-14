/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '147.45.175.103',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
