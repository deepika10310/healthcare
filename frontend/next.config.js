// next.config.js – proxy API calls to the backend while running `next dev`
//
// This file is automatically picked up by Next.js.  The rewrite rule below
// forwards any request that starts with `/api/` to the backend running on
// `http://localhost:8080`.  Feel free to adjust the source pattern if your
// API routes are structured differently.

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("inside rewrites..");
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // proxy target
      },
    ];
  },
};

module.exports = nextConfig;