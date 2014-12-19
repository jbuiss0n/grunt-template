'use strict';

// grunt-file-blocks: Insert CSS and JS tags into HTML files
module.exports = {
  options: {
    prefix: '/'
  },
  compile: {
    src: 'dist/index.html',
    blocks: {
      styles: {
        prefix: '/css',
        cwd: 'dist/css',
        src: '*.css'
      },
      scripts: {
        prefix: '/js',
        cwd: 'dist/js',
        src: [
          'bower/angular.js',
          'bower/*.js',
          'app/*.js',
          '*.js'
        ]
      }
    }
  }
};
