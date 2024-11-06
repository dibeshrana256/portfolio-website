// next.config.js

// next.config.js

const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  compress: true,
  productionBrowserSourceMaps: false, // Disables source maps in production
  httpAgentOptions: {
    keepAlive: true,
  },
  compress: true, // Enables gzip compression
  productionBrowserSourceMaps: false, // Disable source maps in production

  webpack: (config, { isServer }) => {
    // Client-side specific configuration
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.default = false;
    }

    // Server-side specific configuration
    if (isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      };
    }

    // Set a 25MB limit for assets
    config.performance = {
      maxAssetSize: 25000000,
    };

    return config;
  },
};

module.exports = nextConfig;

// // next.config.js

// const nextConfig = {
//   output: 'standalone',
//   reactStrictMode: false,
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: process.env.API_URL,
//   //     },
//   //   ],
//   // },
//   httpAgentOptions: {
//     keepAlive: true,
//   },
// };

// module.exports = nextConfig;
