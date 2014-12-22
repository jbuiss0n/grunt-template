'use strict';

var grunt = require('grunt');

// grunt-ng-constant: Generates an Angular `constant` service with the content of a JSON file
module.exports = {
  options: {
    name: 'app.config',
    dest: 'dist/js/src/config.js',
    constants: {
      config: grunt.file.readJSON('app/config/default.json')
    }
  },
  compile: {
    options: {
      dest: 'dist/js/config.js',
      /* If specific dev config (DO NOT merge with default)
      constants: {
        config: grunt.file.readJSON('app/config/dev.json')
      }*/
    }
  },
  build: {
    options: {
      dest: '.build/js/src/config.js',
      /* If specific prod config (DO NOT merge with default)
      constants: {
        config: grunt.file.readJSON('app/config/prod.json')
      }*/
    }
  }
};
