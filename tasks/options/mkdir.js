'use strict';

// grunt-mkdir: Creates directory structure
module.exports = {
  compile: {
    options: {
      create: [
        'dist/css',
        'dist/js',
        'dist/js/bower',
        'dist/js/app',
        'dist/views'
      ]
    }
  },
  build: {
    options: {
      create: [
        '.build',
        '.build/images',
        '.build/images/src',
        '.build/images/output',
        '.build/css',
        '.build/css/src',
        '.build/css/output',
        '.build/js',
        '.build/js/src',
        '.build/js/output',
        '.build/views',
        'dist/'
      ]
    }
  }
};
