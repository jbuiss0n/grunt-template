'use strict';

// grunt-contrib-clean : Clean folders to start fresh
module.exports = {
  dev: {
    src: [
      'dist/*'
    ]
  },
  prod: {
    src: [
      '.build/*',
      'dist/*'
    ]
  },
};
