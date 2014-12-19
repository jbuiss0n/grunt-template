'use strict';

// grunt-contrib-clean : Clean folders to start fresh
module.exports = {
  compile: {
    src: [
      'dist/*'
    ]
  },
  build: {
    src: [
      '.build/*',
      'dist/*'
    ]
  },
};
