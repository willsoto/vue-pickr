const merge = require('webpack-merge');
const vueCLIWebpackConfig = require('@vue/cli-service/webpack.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  return merge.strategy({
    entry: 'replace',
    resolve: 'replace',
    module: 'replace'
  })(vueCLIWebpackConfig, defaultConfig);
};
