'use strict';

// grunt-contrib-imagemin: Minify images (jpg, gif, png, svg)
module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: '.build/images',
      src: '*.{png,jpg,jpeg,gif,svg}',
      dest: '.build/images'
    }]
  }
};
