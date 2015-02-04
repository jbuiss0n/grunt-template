'use strict';

/*
 * build-prod
 * -----
 * Clean .build & .dist folder
 * Create .build & .dist & subfolders
 * 
 * #IMG
 * Minify images into dist
 * Revision images
 * 
 * #CSS
 * Compile *.less into one styles.css in .build folder
 * Copy CSS dependencies from bower modules
 * Concat all css files into styles.css
 * Adds vendor prefixes to styles.css
 * Replace image references with rev version into styles.css
 * Copy output styles.css to dist
 * Minify styles.css
 * Revision styles.css
 * 
 * #HTML templates
 * Copy Html views from application to .build folder
 * Replace image references with rev version
 * Remove devcode
 * Put views into angular template cache module
 * 
 * #JS
 * Copy JS dependencies from bower modules
 * Copy JS application files to .build folder
 * Create an angular constant module with config properties
 * Annotate angular dependencies
 * Concat all js files into scripts.js
 * Uglify/minify scripts.js
 * Copy output scripts.js to dist
 * Revision scripts.js
 * 
 * #HTML index
 * Copy index.html file to dist folder
 * Add JS & CSS tags into index.html file
 * Remove devcode
 * 
 * Copy application misc files (robots.txt, favicon.ico, ...)
 * Copy FONT dependencies from bower modules
 * 
 * Output the filesize and gzip size of files
 */
module.exports = function (grunt) {
  grunt.registerTask(
    'build-prod',
    'build application to be run in production environment',
    function () {
      grunt.task.run([
        'clean:prod',
        'mkdir:prod',

        'imagemin:prod',
        'filerev:prodImg',
        'filerev_assets:prod',

        'less:prod',
        'copy:prodCssBower',
        'concat:prodCss',
        'autoprefixer:prod',
        'cssurlrev:prod',
        'copy:prodCssDist',
        'cssmin:prod',
        'filerev:prodCss',

        'copy:prodViews',
        'htmlurlrev:prod',
        'devcode:prodViews',
        'html2js:prod',

        'copy:prodJsBower',
        'copy:prodJsApp',
        'ngconstant:prod',
        'ngAnnotate:prod',
        'concat:prodJs',
        'uglify:prod',
        'copy:prodJsDist',
        'filerev:prodJs',

        'copy:prodHtml',
        'fileblocks:prod',
        'devcode:prodHtml',

        'copy:prodMisc',
        'copy:prodFontBower',

        'bytesize:prod'
      ]);
    });
};
