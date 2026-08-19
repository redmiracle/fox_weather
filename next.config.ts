import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
/* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.citypng.com',
          pathname: '/**',
        },
      ],
    },

};

export default withSerwist(nextConfig);
