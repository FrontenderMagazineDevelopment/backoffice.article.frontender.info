const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000,
    };
    return config
  }
});