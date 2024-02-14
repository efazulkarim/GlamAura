/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  // images: {
  //   loader: 'akamai',
  //   path: process.env.NEXT_PUBLIC_URL,
  // },  
}

module.exports = nextConfig

