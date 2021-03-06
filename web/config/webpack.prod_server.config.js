const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const commonConfig = require('./webpack.common.config.js')(true);
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');

const {
  BugsnagBuildReporterPlugin,
  BugsnagSourceMapUploaderPlugin
} = require('webpack-bugsnag-plugins');
const pkg = require('../../package.json');

module.exports = env => {
  return webpackMerge(commonConfig, {
    mode: 'production',
    entry: {
      bundle: [path.join(__dirname, '../../index.web.js')],
      widget: [path.join(__dirname, '../widgets/basic/widget.js')],
      treecounterwidget: [
        path.join(__dirname, '../widgets/Treecounter/widget.js')
      ],
      donatetreewidget: [
        path.join(__dirname, '../widgets/DonateTrees/widget.js')
      ],
      progressbarwidget: [
        path.join(__dirname, '../widgets/progressbar/widget.js')
      ]
      // ndviwidget: [ path.join(__dirname, '../widgets/NDVI/widget.js') ]
    },
    output: {
      path: path.join(__dirname, '../server'),
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: false,
          sourceMap: true, // Must be set to true if using source-maps in production
          terserOptions: {
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            keep_fnames: true
          }
        })
      ]
    },
    plugins: [
      new BugsnagBuildReporterPlugin({
        apiKey: env.bugsnagApiKey,
        appVersion: pkg.version
      }),
      new BugsnagSourceMapUploaderPlugin({
        apiKey: env.bugsnagApiKey,
        appVersion: pkg.version,
        overwrite: true,
        publicPath: '*'
      }),
      new WebpackCleanupPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          htmlLoader: {
            minimize: false
          }
        }
      }),
//      new ESLintPlugin()
    ]
  });
};
