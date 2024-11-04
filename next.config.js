const path = require("path");

module.exports = {
  swcMinify: true, // Enables Next.js's faster, smaller minification
  output: "export", // Ensures static export to "out" folder

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.cache = {
        type: "filesystem",
        cacheDirectory: path.resolve(".next/cache"),
        compression: "gzip",
        maxMemoryGenerations: 1,
      };
    }

    config.optimization.splitChunks = {
      chunks: "all",
    };

    return config;
  },
};
