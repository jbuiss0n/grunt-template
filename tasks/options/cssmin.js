'use strict';

// grunt-contrib-cssmin: Minify CSS files
module.exports = {
  options: {
    root: 'app',
    noAdvanced: true
  },
  build: {
    files: {
      '.build/css/output/styles.css': '.build/css/output/styles.css'
    }
  }
};
