'use strict';

// grunt-devcode: Remove devcode from production builds
module.exports = {
  options: {
    clean: true,
    css: false,
    html: true,
    js: false,
    block: {
      open: 'devcode',
      close: 'endcode'
    }
  },
  buildViews: {
    options: {
      source: '.build/views',
      dest: '.build/views',
      env: 'production'
    }
  },
  buildHtml: {
    options: {
      source: 'dist',
      dest: 'dist',
      env: 'production'
    }
  }
};
