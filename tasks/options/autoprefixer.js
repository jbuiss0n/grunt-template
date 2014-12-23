'use strict';

// Adds vendor prefixes to CSS files using caniuse.com database
module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  compile: {
    expand: true,
    cwd: 'dist/css',
    src: 'styles.css',
    dest: 'dist/css'
  },
  build: {
    expand: true,
    cwd: '.build/css/src',
    src: 'styles.css',
    dest: '.build/css/output'
  }
};
