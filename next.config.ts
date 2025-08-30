import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    clientSegmentCache: true,
    nodeMiddleware: true
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
