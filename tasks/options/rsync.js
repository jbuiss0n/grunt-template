'use strict';

// grunt-rsync: Intelligently sync (copy) files, with a diff algorithm
// As rsync is not available by deault on windows (it's a unix bin)
// We must use : cwRSync
// Or we can use grunt-contrib-copy which is less powerfull
module.exports = {
  options: {
    recursive: true,
    args: [
      '--archive',
      '--prune-empty-dirs'
    ]
  },
  compileJsBower: {
    options: {
      src: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      ],
      dest: 'dist/js/bower'
    }
  },
  compileJsApp: {
    options: {
      src: 'app/scripts/',
      dest: 'dist/js/app',
      args: [
        '--archive',
        '--delete',
        '--prune-empty-dirs',
        '--exclude=*.test.js',
        '--include=*/',
        '--include=*.js',
        '--exclude=*'
      ]
    }
  },
  compileViews: {
    options: {
      src: 'app/views/',
      dest: 'dist/views'
    }
  },
  compileHtml: {
    options: {
      src: 'app/index.html',
      dest: 'dist'
    }
  },
  compileMisc: {
    options: {
      src: 'app/',
      dest: 'dist/',
      args: [
        '--archive',
        '--prune-empty-dirs',
        '--include=*/',
        '--include=images',
        '--include=images/*',
        '--include=/*.ico',
        '--include=/*.txt',
        '--exclude=*'
      ]
    }
  },

  buildImg: {
    options: {
      src: 'app/images/',
      dest: '.build/images/'
    }
  },
  buildImgDist: {
    options: {
      src: '.build/images/',
      dest: 'dist/images/'
    }
  },
  buildViews: {
    options: {
      src: 'app/views/',
      dest: '.build/views'
    }
  },
  buildCssDist: {
    options: {
      src: '.build/css/output/',
      dest: 'dist/'
    }
  },
  buildJsBower: {
    options: {
      src: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      ],
      dest: '.build/js/src/bower'
    }
  },
  buildJsApp: {
    options: {
      src: 'app/scripts/',
      dest: '.build/js/src/app',
      args: [
        '--archive',
        '--delete',
        '--prune-empty-dirs',
        '--exclude=*.test.js',
        '--include=*/',
        '--include=*.js',
        '--exclude=*'
      ]
    }
  },
  buildJsDist: {
    options: {
      src: '.build/js/output/*.js',
      dest: 'dist/'
    }
  },
  buildHtml: {
    options: {
      src: 'app/index.html',
      dest: 'dist'
    }
  },
  buildMisc: {
    options: {
      src: 'app/',
      dest: 'dist',
      args: [
        '--archive',
        '--prune-empty-dirs',
        '--include=/favicon.ico',
        '--include=/robots.txt',
        '--include=/humans.txt',
        '--include=/version.json',
        '--include=/package.json',
        '--exclude=*'
      ]
    }
  }
};
