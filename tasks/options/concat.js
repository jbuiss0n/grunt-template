'use strict';

// grunt-contrib-concat: Concatenate JS and CSS files together
module.exports = {
  buildCss: {
    src: '.build/css/src/*.css',
    dest: '.build/css/output/styles.css'
  },
  buildJs: {
    options: {
      sourceMap: true
    },
    src: [
      '.build/js/src/bower/angular.js',
      '.build/js/src/bower/*.js',
      '.build/js/src/app/*.js',
      '.build/js/src/*.js'
    ],
    dest: '.build/js/output/scripts.js'
  }
};
