'use strict';

/*
 * Compile
 * -------
 * Clean dist
 * Create dist & subfolders
 * Compile *.less into one styles.css
 * Adds vendor prefixes to styles.css
 * Copy JS dependencies from bower
 * Copy JS application files
 * Create an angular constant module with config properties
 * Create an empty templatecache for angular (just to avoid breaking dependency)
 * Copy Html views from application
 * Copy index.html file
 * Add JS & CSS tags into index.html file
 * Copy application misc files (images, robots.txt, favicon.ico, ...)
 */
module.exports = function (grunt) {
  grunt.registerTask(
    'compile',
    'compile application to be run in local environment',
    function () {
      grunt.task.run([
        'clean:compile',
        'mkdir:compile',
        'less:compile',
        'autoprefixer:compile',
        'rsync:compileJsBower',
        'rsync:compileJsApp',
        'ngconstant:compile',
        'html2js:compile',
        'rsync:compileViews',
        'rsync:compileHtml',
        'fileblocks:compile',
        'rsync:compileMisc'
      ]);
    });
};
