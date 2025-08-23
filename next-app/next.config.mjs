/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'optimistic-fun-0c31f51ed2.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
