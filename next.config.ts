import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    IFCONECTA_API_URL: process.env.IFCONECTA_API_URL,
  },
};

export default nextConfig;
