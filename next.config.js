const path = require("path");

module.exports = {
  swcMinify: true, 
  output: "export",
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
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
