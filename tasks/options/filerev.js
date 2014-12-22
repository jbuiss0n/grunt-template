'use strict';

// grunt-filerev: Renames files for browser caching purposes
module.exports = {
  options: {
    algorithm: 'md5',
    length: 8
  },
  buildImg: {
    src: '.build/images/*'
  },
  buildCss: {
    src: '.build/css/output/styles.css'
  },
  buildJs: {
    src: '.build/js/output/scripts.js'
  }
};
