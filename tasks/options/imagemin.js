'use strict';

// grunt-contrib-imagemin: Minify images (jpg, gif, png, svg)
module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: 'app/images',
      src: '**/*.{png,jpg,jpeg,gif,svg}',
      dest: 'dist/images'
    }]
  }
};
