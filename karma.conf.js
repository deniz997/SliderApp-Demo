// jshint strict: false
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({

    basePath: './',
    exclude: [
      '/app/**/*.',
    ],

    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      { pattern: './app/**/*.spec.js' },
    ],

    webpack: webpackConfig,
    preprocessors: {
      'app/slider/*.spec.js': ['webpack'],
    },
    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome, ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          '--remote-debugging-port=9223',
          '--no-sandbox',
        ],
      },
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
    ],

  });
};
