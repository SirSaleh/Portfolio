/** @type {import('next').NextConfig} */

let assetPrefix = process.env.AssetPrefix ? process.env.AssetPrefix : "";

const nextConfig = {
    reactStrictMode: false,
    output:'export',
    assetPrefix: assetPrefix,
  };
  /* module.exports = nextConfig*/
  export default nextConfig;