const path = require("path");

module.exports = {
  swcMinify: true, // Enables Next.js's faster, smaller minification

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.cache = {
        type: "filesystem",
        cacheDirectory: path.resolve(".next/cache"),
        compression: "gzip",
        maxMemoryGenerations: 1,
      };
    }

    // Enable splitChunks to reduce bundle sizes
    config.optimization.splitChunks = {
      chunks: "all",
    };

    return config;
  },
};
