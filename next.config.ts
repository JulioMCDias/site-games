import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/site-games',
  assetPrefix: '/site-games/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
