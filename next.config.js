const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { withSentryConfig } = require('@sentry/nextjs');

const config = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL_API||""}/sitemap/:path*`,
      },
      {
        source: '/auth/apple/redirect',
        destination: '/signin',
      },
    ];
  },
};

module.exports = withSentryConfig(
  withPWA({
    ...config,
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  }),
  {
    silent: true,
    configFile: './sentry.client.config.js',
  }
);
