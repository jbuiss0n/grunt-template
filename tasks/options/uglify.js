'use strict';

// grunt-contrib-uglify: Minify JS files
module.exports = {
  build: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true,
      sourceMapIn: '.build/js/output/scripts.js.map'
    },
    files: {
      '.build/js/output/scripts.js': '.build/js/output/scripts.js'
    }
  }
};
