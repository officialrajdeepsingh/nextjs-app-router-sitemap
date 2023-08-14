/** @type {import('next').NextConfig} */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
const nextConfig = {
  output:  process.env.NODE_ENV !== "production" ? undefined: "export",
  basePath: '/deploy-nextjs-app-router-github-pages',
  images: {
    unoptimized: envImageUnoptimize,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
