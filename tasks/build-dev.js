'use strict';

/*
 * build-dev
 * -------
 * Clean .dist folder
 * Create .dist & subfolders
 * Compile *.less into one styles.css
 * Adds vendor prefixes to styles.css
 * Copy CSS dependencies from bower modules
 * Copy FONT dependencies from bower modules
 * Copy JS dependencies from bower modules
 * Copy JS application files
 * Create an angular constant module with config properties
 * Create an empty templatecache for angular (just to avoid breaking dependency)
 * Copy Html views from application
 * Copy index.html file
 * Add JS & CSS tags into index.html file
 * Copy application images files
 * Copy application misc files (images, robots.txt, favicon.ico, ...)
 */
module.exports = function (grunt) {
  grunt.registerTask(
    'build-dev',
    'build application to be run in local/dev environment',
    function () {
      grunt.task.run([
        'clean:dev',
        'mkdir:dev',
        'less:dev',
        'autoprefixer:dev',
        'copy:devCssBower',
        'copy:devFontBower',
        'copy:devJsBower',
        'copy:devJsApp',
        'ngconstant:dev',
        'html2js:dev',
        'copy:devViews',
        'copy:devHtml',
        'fileblocks:dev',
        'copy:devImages',
        'copy:devMisc'
      ]);
    });
};
