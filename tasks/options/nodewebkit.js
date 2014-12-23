'use strict';

module.exports = {
  options: {
    platforms: ['win','osx'],
    buildDir: 'pack', // Where the build version of my node-webkit app is saved
  },
  src: ['dist/**/*'] // Your node-webkit app
};
