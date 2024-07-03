/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '158.160.142.238',
          port: '',
          pathname: '/backend_media/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  