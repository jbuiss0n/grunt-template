'use strict';

// grunt-mkdir: Creates directory structure
module.exports = {
  dev: {
    options: {
      create: [
        'dist/css',
        'dist/js',
        'dist/js/bower',
        'dist/js/app',
        'dist/views',
        'dist/images'
      ]
    }
  },
  prod: {
    options: {
      create: [
        '.build',
        '.build/css',
        '.build/css/src',
        '.build/css/output',
        '.build/js',
        '.build/js/src',
        '.build/js/output',
        '.build/views',
        'dist/',
        'dist/images',
        'dist/fonts'
      ]
    }
  }
};
