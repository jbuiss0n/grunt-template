'use strict';

// Watches files for changes and runs tasks based on the changed files
module.exports = {
  options: {
    livereload: 35730
  },
  styles: {
    options: {
      livereload: false
    },
    files: [
      'app/styles/**/*.less'
    ],
    tasks: [
      'less:dev',
      'autoprefixer:dev'
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
      'copy:devViews'
    ]
  },
  html: {
    files: [
      'app/**/*.html'
    ],
    tasks: [
      'copy:devHtml',
      'fileblocks:dev'
    ]
  },
  config: {
    files: ['config/dev.json'],
    tasks: ['ngconstant:compile']
  },
  scripts: {
    files: [
      'app/scripts/**/*.js',
      '!app/scripts/**/*.test.js'
    ],
    tasks: [
      'copy:devJsApp'
    ]
  },
  mics: {
    files: [
      'app/images/**/*',
      'app/*.ico',
      'app/*.txt'
    ],
    tasks: [
      'copy:devMisc',
      'copy:devImages'
    ]
  }
};
