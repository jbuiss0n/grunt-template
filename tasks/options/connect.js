'use strict';

// grunt-contrib-connect: Starts a local webserver
module.exports = {
  options: {
    open: false,
    port: 9000,
    livereload:false,
    hostname: '0.0.0.0'
  },
  livereload: {
    options: {
      livereload: true,
      base: [
        './dist'
      ]
    }
  }
};
