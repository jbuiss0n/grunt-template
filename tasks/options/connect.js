'use strict';

// grunt-contrib-connect: Starts a local webserver
module.exports = {
  options: {
    open: false,
    port: 9001,
    hostname: '0.0.0.0'
  },
  livereload: {
    options: {
      livereload: 35730,
      base: [
        './dist'
      ]
    }
  },
  keepalive: {
    options: {
      keepalive: true,
      livereload: false,
      base: [
        './dist'
      ]
    }
  },
};
