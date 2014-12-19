'use strict';

module.exports = function (grunt) {
  grunt.registerTask(
    'compile',
    'compile application to be run in local environment',
    function () {
      grunt.task.run([
        'clean:compile',
        'mkdir:compile',
        'less:compile',
        'newer:autoprefixer:compile',
        'rsync:compileJsBower',
        'rsync:compileJsApp',
        'ngconstant:compile',
        'rsync:compileViews',
        'rsync:compileHtml',
        'fileblocks:compile',
        'rsync:compileMisc'
      ]);
    });
};
