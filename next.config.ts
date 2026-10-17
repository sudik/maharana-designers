import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
