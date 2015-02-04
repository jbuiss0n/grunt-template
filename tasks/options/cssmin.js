'use strict';

// grunt-contrib-cssmin: Minify CSS files
module.exports = {
  prod: {
    root: 'dist',
    noAdvanced: true,
    files: {
      'dist/styles.css': '.build/css/output/styles.css'
    }
  }
};
