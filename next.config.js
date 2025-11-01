// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const repo = 'mohith_web' // must exactly match your GitHub repo name

/** @type {import('next').NextConfig} */
module.exports = {
  // Export as a static site (for GitHub Pages)
  output: 'export',

  // Base path tells Next.js your site lives inside /mohith_web/
  basePath: isProd ? `/${repo}` : '',

  // Asset prefix ensures JS, CSS, and images load from the right subpath
  assetPrefix: isProd ? `/${repo}/` : '',

  // GitHub Pages cannot perform image optimization
  images: { unoptimized: true },

  // Trailing slash helps prevent 404s on subpaths like /faq or /documents
  trailingSlash: true,
}

