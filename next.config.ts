/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // needed for static hosting
  images: {
    unoptimized: true, // disable Image Optimization (needed for static hosting)
  },
  // Only use basePath/assetPrefix in production for GitHub Pages
  ...(isProd && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),
};

module.exports = nextConfig;
