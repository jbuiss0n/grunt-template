'use strict';

/*
 * Build
 * -----
 * Clean .build & dist folder
 * Create .build & dist & subfolders
 * 
 * #IMG
 * Copy images to .build folder
 * Minify images
 * Revision images
 * Copy output images to dist
 * 
 * #CSS
 * Compile *.less into one styles.css in .build folder
 * Concat all css files into styles.css
 * Adds vendor prefixes to styles.css
 * Replace image references with rev version into styles.css
 * Minify styles.css
 * Revision styles.css
 * Copy output styles.css to dist
 * 
 * #HTML templates
 * Copy Html views from application to .build folder
 * Replace image references with rev version
 * Remove devcode
 * Put views into angular template cache module
 * 
 * #JS
 * Copy JS dependencies from bower to .build folder
 * Copy JS application files to .build folder
 * Create an angular constant module with config properties
 * Annotate angular dependencies
 * Concat all js files into scripts.js
 * Uglify/minify scripts.js
 * Revision scripts.js
 * Copy output scripts.js to dist
 * 
 * #HTML index
 * Copy index.html file to dist folder
 * Add JS & CSS tags into index.html file
 * Remove devcode
 * 
 * Copy application misc files (robots.txt, favicon.ico, ...)
 * 
 * Output the filesize and gzip size of files
 */
module.exports = function (grunt) {
  grunt.registerTask(
    'build',
    'build application to be run in production environment',
    function () {
      grunt.task.run([
        'clean:build',
        'mkdir:build',

        'rsync:buildImg',
        'imagemin:build',
        'filerev:buildImg',
        'filerev_assets:build',
        'rsync:buildImgDist',

        'less:build',
        'concat:buildCss',
        'autoprefixer:build',
        'cssurlrev:build',
        'cssmin:build',
        'filerev:buildCss',
        'rsync:buildCssDist',

        'rsync:buildViews',
        'htmlurlrev:build',
        'devcode:buildViews',
        'html2js:build',

        'rsync:buildJsBower',
        'rsync:buildJsApp',
        'ngconstant:build',
        'ngAnnotate:build',
        'concat:buildJs',
        'uglify:build',
        'filerev:buildJs',
        'rsync:buildJsDist',

        'rsync:buildHtml',
        'fileblocks:build',
        'devcode:buildHtml',

        'rsync:buildMisc',

        'bytesize:build'
      ]);
    });
};
