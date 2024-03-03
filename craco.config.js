const path = require('path');


module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@sass': path.resolve(__dirname, './src/core/sass'),
    }
  }
};