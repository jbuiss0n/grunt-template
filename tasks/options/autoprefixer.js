'use strict';

// Adds vendor prefixes to CSS files using caniuse.com database
module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  compile: {
    expand: true,
    cwd: '.compile/css',
    src: 'style.css',
    dest: 'dist/css'
  },
  build: {
    expand: true,
    cwd: '.build/css/src',
    src: 'style.css',
    dest: 'dist/css/output'
  }
};
