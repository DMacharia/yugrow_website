import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export (replaces `next export`)
  output: "export",

  // Disable Next.js Image Optimization for static builds
  images: {
    unoptimized: true,
  },

  // (Optional) Enable trailing slashes if you want clean URLs like /about/
  trailingSlash: true,

  // (Optional) Add basePath if deploying under a subdirectory, e.g. GitHub Pages
  // basePath: "/yugrow-website",

  // Disable ESLint errors during build (allows build to complete with warnings)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during build (allows build to complete with type errors)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
