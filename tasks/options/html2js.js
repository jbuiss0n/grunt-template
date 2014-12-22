﻿'use strict';

// grunt-html2js: Puts HTML templates into Angular $templateCache
module.exports = {
  options: {
    base: 'app',
    module: 'grunt-template-app.templates',
    singleModule: true,
    useStrict: true,
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  },
  compile: {
    src: [],
    dest: 'dist/js/app-templates.js'
  },
  build: {
    options: {
      base: '.build'
    },
    src: '.build/views/**/*.html',
    dest: '.build/js/src/app-templates.js'
  }
};
