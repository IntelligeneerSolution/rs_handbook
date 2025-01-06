/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgix.cosmicjs.com"], // Add your Cosmic CDN domain
  },
  env: {
    COSMIC_BUCKET_SLUG: process.env.COSMIC_BUCKET_SLUG,
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY,
  },
};

module.exports = nextConfig;
