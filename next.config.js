/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
