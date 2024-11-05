// next.config.js

const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  compress: true, // Enables gzip compression
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.default = false;
    }
    config.performance = {
      maxAssetSize: 25000000, // Set a 25MB limit for assets
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
