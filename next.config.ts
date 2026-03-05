import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://ik.imagekit.io/*'), new URL('http://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png')], 

 
  },
}

export default nextConfig;
