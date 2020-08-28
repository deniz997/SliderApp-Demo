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

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-webpack',
    ],

  });
};
