/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY || 'valor_predeterminado',
  
  },
}

module.exports = nextConfig
