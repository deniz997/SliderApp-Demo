// jshint strict: false
const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({

    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      { pattern: './app/slider/*.spec.js' },
    ],

    webpack: webpackConfig,
    preprocessors: {
      'app/slider/*.spec.js': ['webpack', 'coverage'],
    },

    reporters: ['progress', 'coverage'],

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
    coverageReporter: {
      reporters: [{ type: 'html', subdir: 'html' }, { type: 'text-summary' }],
      dir: 'coverage/',
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-coverage',
    ],

  });
};
