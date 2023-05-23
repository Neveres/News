/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/business',
        destination: '/',
      },
      {
        source: '/science',
        destination: '/',
      },
      {
        source: '/technology',
        destination: '/',
      },
    ]
  },
}
