/** @type {import('next').NextConfig} */

let assetPrefix = process.env.PortfolioEnv === "production" ? "https://sirsaleh.github.io/Portfolio/" : "";

const nextConfig = {
    output:'export',
    assetPrefix: assetPrefix,
  };
  /* module.exports = nextConfig*/
  export default nextConfig;