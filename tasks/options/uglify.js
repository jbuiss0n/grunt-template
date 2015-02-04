'use strict';

// grunt-contrib-uglify: Minify JS files
module.exports = {
  prod: {
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
