import type { NextConfig } from "next";

/**
 * GitHub Pages static-export config.
 * This site deploys to https://raushankumar1503.github.io/portfolio/,
 * so the production base path is "/portfolio". basePath is set here
 * directly (rather than relying on CI injection) so that generated
 * asset URLs reliably resolve to /portfolio/... Images are unoptimized
 * because static export has no image optimization endpoint.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
