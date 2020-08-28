// jshint strict: false
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');

exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '../e2e-tests/*.js',
  ],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--no-sandbox',
        '--remote-debugging-port=9223',
        '--disable-gpu',
        '--disable-translate',
        '--disable-extensions',
      ],
    },
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },

  beforeLaunch: () => {
    const compiler = webpack(webpackConfig);
    const server = new WebpackDevServer(compiler, {
      contentBase: path.resolve(__dirname, './'),
      publicPath: '',
      compress: true,
      watchContentBase: true,
      watchOptions: {
        poll: true,
      },
    });
    server.listen(8000, () => {});
  },

};
