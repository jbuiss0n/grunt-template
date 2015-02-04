'use strict';

// grunt-contrib-less: Compiles Less to CSS and generates necessary files if requested
module.exports = {
  options: {
    paths: ['app/styles', 'app/bower_components'],
  },
  dev: {
    files: {
      'dist/css/styles.css': 'app/styles/**/*.less'
    },
    options: {
      debugInfo: true,
      strictImports: true
    }
  },
  prod: {
    files: {
      '.build/css/src/styles.css': 'app/styles/**/*.less'
    },
    options: {
      strictImports: true,
    }
  }
};