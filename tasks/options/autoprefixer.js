'use strict';

// grunt-autoprefixer: Adds vendor prefixes to CSS files using caniuse.com database
module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  compile: {
    expand: true,
    cwd: 'dist/css',
    src: 'style.css',
    dest: 'dist/css'
  },
  build: {
    expand: true,
    cwd: '.build/css/src',
    src: 'style.css',
    dest: '.build/css/output'
  }
};
