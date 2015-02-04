'use strict';

module.exports = {
  devJsBower: {
    expand: true,
    flatten: true,
    src: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
    ],
    dest: 'dist/js/bower/'
  },
  devCssBower: {
    expand: true,
    flatten: true,
    src: [
      'app/bower_components/bootstrap/dist/css/bootstrap.css',
      'app/bower_components/bootstrap/dist/css/bootstrap-theme.css'
    ],
    dest: 'dist/css/'
  },
  devFontBower: {
    expand: true,
    flatten: true,
    src: [
      'app/bower_components/bootstrap/fonts/*'
    ],
    dest: 'dist/fonts/'
  },
  devJsApp: {
    expand: true,
    cwd: 'app/scripts/',
    src: [
      '**/*.js',
      '!**/*.test.js'
    ],
    dest: 'dist/js/app/',
  },
  devViews: {
    expand: true,
    cwd: 'app/views/',
    src: '**/*',
    dest: 'dist/views/'
  },
  devHtml: {
    expand: true,
    flatten: true,
    src: 'app/index.html',
    dest: 'dist/'
  },
  devImages: {
    expand: true,
    cwd: 'app/images',
    src: '**/*',
    dest: 'dist/images'
  },
  devMisc: {
    expand: true,
    cwd: 'app',
    src: [
      '*.ico',
      '*.txt'
    ],
    dest: 'dist/'
  },
  
  prodImg: {
    expand: true,
    cwd: 'app/images/',
    src: '**/*',
    dest: 'dist/images/'
  },
  prodViews: {
    expand: true,
    cwd: 'app/views/',
    src: '**/*',
    dest: '.build/views/'
  },
  prodCssDist: {
    flatten: true,
    expand: true,
    src: '.build/css/output/*',
    dest: 'dist/'
  },
  prodJsBower: {
    flatten: true,
    expand: true,
    src: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
    ],
    dest: '.build/js/src/bower/'
  },
  prodCssBower: {
    expand: true,
    flatten: true,
    src: [
      'app/bower_components/bootstrap/dist/css/bootstrap.css',
      'app/bower_components/bootstrap/dist/css/bootstrap-theme.css'
    ],
    dest: '.build/css/src/'
  },
  prodFontBower: {
    expand: true,
    flatten: true,
    src: [
      'app/bower_components/bootstrap/fonts/*'
    ],
    dest: 'dist/fonts/'
  },
  prodJsApp: {
    expand: true,
    cwd: 'app/scripts/',
    src: [
      '**/*.js',
      '!**/*.test.js'
    ],
    dest: '.build/js/src/app',
  },
  prodJsDist: {
    expand: true,
    flatten: true,
    src: '.build/js/output/*',
    dest: 'dist/'
  },
  prodHtml: {
    expand: true,
    flatten: true,
    src: 'app/index.html',
    dest: 'dist/'
  },
  prodMisc: {
    expand: true,
    cwd: 'app',
    src: ['*.ico', '*.txt'],
    dest: 'dist/'
  },
};
