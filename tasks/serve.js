'use strict';

module.exports = function (grunt) {
  grunt.registerTask(
    'serve',
    'serve the local compile application',
    function () {
      grunt.task.run([
        'compile',
        'connect:livereload',
        'watch'
      ]);
    });
};
