const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withOffline(
  withBundleAnalyzer({
    generateInDevMode: true,
    reactStrictMode: false,
    workboxOpts: {
      maximumFileSizeToCacheInBytes: 5000000,
      swDest: process.env.NEXT_EXPORT
        ? 'service-worker.js'
        : 'static/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /.png$/,
          handler: 'CacheFirst'
        },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200
            }
          }
        }
      ]
    },
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ];
    }
  })
);
