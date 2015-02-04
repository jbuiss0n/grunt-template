'use strict';

// Adds vendor prefixes to CSS files using caniuse.com database
module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  dev: {
    expand: true,
    cwd: 'dist/css',
    src: 'styles.css',
    dest: 'dist/css'
  },
  prod: {
    expand: true,
    cwd: '.build/css/output',
    src: 'styles.css',
    dest: '.build/css/output'
  }
};
