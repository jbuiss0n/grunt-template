'use strict';

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-chai',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-threshold-reporter'
    ],

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      //PhantomJS doesn't support bind before v2 & karma-phantomjs-launcher doesn't support phantomjs v2 yet
      'app/bower_components/bind-polyfill/index.js',
      //--
      '.tmp/js/config.js',
      '.tmp/js/app-templates.js',
      'app/scripts/**/*.js'
    ],
    exclude: [],

    // web server port
    port: 8080,

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,

    reporters: ['progress']
  });
};
