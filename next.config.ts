import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Any other configuration for Next.js goes here
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};


