import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' // PPR
  }
};

export default nextConfig;
