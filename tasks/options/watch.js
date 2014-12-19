'use strict';

// Watches files for changes and runs tasks based on the changed files
module.exports = {
  options: {
    livereload: 35729
  },
  styles: {
    options: {
      livereload: false
    },
    files: [
      'app/styles/*.less'
    ],
    tasks: [
      'less:compile',
      'newer:autoprefixer:compile'
    ]
  },
  stylesSoftReload: {
    files: ['dist/css/styles.css']
  },
  views: {
    files: [
      'app/views/**/*.html'
    ],
    tasks: [
      'rsync:compileViews'
    ]
  },
  html: {
    files: [
      'app/*.html'
    ],
    tasks: [
      'rsync:compileHtml',
      'fileblocks:compile'
    ]
  },
  config: {
    files: ['config/dev.json'],
    tasks: ['ngconstant:compile']
  },
  scripts: {
    files: [
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      '!app/scripts/*_test.js',
      '!app/scripts/**/*_test.js'
    ],
    tasks: [
      'rsync:compileJsApp'
    ]
  },
  mics: {
    files: [
      'app/images/*',
      'app/*.ico',
      'app/*.txt'
    ],
    tasks: [
      'rsync:compileMisc'
    ]
  }
};
