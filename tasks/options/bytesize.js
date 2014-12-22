'use strict';

// grunt-bytesize: output the filesize and gzip size of files
module.exports = {
  build: {
    src: [
      'dist/index.html',
      'dist/styles.*.css',
      'dist/scripts.*.js'
    ]
  }
};
