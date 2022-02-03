/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const webpack = require('gatsby');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
        process: 'process/browser',
      },
      fallback: {
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
      },
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   Buffer: ['buffer', 'Buffer'],
      // }),
      // new webpack.ProvidePlugin({
      //   process: 'process/browser',
      // }),
    ],
  });
};
