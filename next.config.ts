import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" && process.env.OUTPUT_MODE === "export" ? "next-contentstack" : undefined;

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.OUTPUT_MODE as any,
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  basePath
};

export default nextConfig;
