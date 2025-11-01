// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const repo = 'mohith_web' // <-- your repo name exactly

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // builds to /out (static)
  basePath: isProd ? `/${repo}` : '', 
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },    // disables Next image optimizer
  trailingSlash: true,              // safer for static hosting
}

module.exports = nextConfig
