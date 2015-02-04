'use strict';

// Usage : grunt test           // Default tests
//         grunt test:watch     // Livereload tests (no coverage)
//         grunt test:reports   // XML reports

/*
 * test
 * -------
 * Build for dev environment
 * Put views into angular template cache module (so we do not have to manually trigger requests resolving)
 * Run tests
 */
module.exports = function (grunt) {
  grunt.registerTask('test', 'Run tests', function () {
    var type = (this.args[0] || 'dev');

    grunt.task.run([
      'html2js:test',
      'ngconstant:test',
      'karma:' + type
    ]);
  });
};
