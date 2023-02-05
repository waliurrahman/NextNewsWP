const { PrismaClient } = require('@prisma/client')
const prismaClient = new PrismaClient()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
  // env: {
  //   PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
  //   PRISMA_SECRET: process.env.PRISMA_SECRET,
  //   PRISMA_CLIENT: prismaClient,
  // },
}

module.exports = nextConfig
