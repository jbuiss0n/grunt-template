'use strict';

// grunt-filerev: Renames files for browser caching purposes
module.exports = {
  options: {
    algorithm: 'md5',
    length: 8
  },
  prodImg: {
    src: 'dist/images/**/*'
  },
  prodCss: {
    src: 'dist/styles.css'
  },
  prodJs: {
    src: 'dist/scripts.js'
  }
};
