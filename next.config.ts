import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    nodeMiddleware: true
  },
   images: {
    remotePatterns: [
      new URL('https://avatar.iran.liara.run/public/**'),
      new URL('https://sundayapp.com/**'),
      new URL('https://res.cloudinary.com/**'),

    ],
  },
  async redirects() {
    return [
      {
        source: '/menu-digital',
        destination: '/produits/menu-digital',
        permanent: true,
      },
      {
        source: '/order-pay',
        destination: '/produits/order-pay',
        permanent: true,
      },
      {
        source: '/analytics',
        destination: '/produits/analytics',
        permanent: true,
      },
      {
        source: '/integrations',
        destination: '/produits/integrations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
