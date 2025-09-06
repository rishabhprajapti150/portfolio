/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // replaces old `next export`
  images: {
    unoptimized: true, // disable Image Optimization (needed for static hosting)
  },
  basePath: "/portfolio", // 👈 add this since your repo is rishabhprajapti150.github.io/portfolio
  assetPrefix: "/portfolio/",
};

module.exports = nextConfig;
