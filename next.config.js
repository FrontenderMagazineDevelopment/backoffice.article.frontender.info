const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    return config
  }
});